import { loadPyodide } from 'pyodide';

// 全局Pyodide实例
let pyodide: any = null;

// 初始化Pyodide，预装所需库
export async function initPyodide() {
  if (pyodide) return pyodide;
  pyodide = await loadPyodide({
    indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.26.2/full/'
  });
  // 预装核心库
  await pyodide.loadPackage([
    'pandas', 'numpy', 'matplotlib', 'seaborn', 'scikit-learn', 'mlxtend'
  ]);
  // 配置matplotlib，使其在前端渲染
  pyodide.runPython(`
    import matplotlib.pyplot as plt
    plt.rcParams['font.sans-serif'] = ['WenQuanYi Zen Hei']
    plt.ioff()
  `);
  return pyodide;
}

// 运行Python代码
export async function runPythonCode(code: string) {
  const py = await initPyodide();
  try {
    const result = await py.runPythonAsync(code);
    // 检查是否有matplotlib图表
    const hasPlots = py.runPython('len(plt.get_fignums()) > 0');
    let plotData = null;
    if (hasPlots) {
      // 将图表转换为Base64
      plotData = py.runPython(`
        import base64
        from io import BytesIO
        buffer = BytesIO()
        plt.savefig(buffer, format='png')
        buffer.seek(0)
        base64.b64encode(buffer.read()).decode('utf-8')
      `);
      // 清除图表
      py.runPython('plt.close(all)');
    }
    return { success: true, result, plotData };
  } catch (error) {
    return { success: false, error: (error as Error).message };
  }
}
