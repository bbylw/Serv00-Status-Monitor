const CONFIG = {
  title: 's00mon - Serv00 Status Monitor',
  proxyUrls: {
    ip: 'https://ss.fkj.pp.ua/',
    status: 'https://ssss.nyc.mn/'
  }
};

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const url = new URL(request.url);
  
  // 如果是根路径，返回主页
  if (url.pathname === '/') {
    return getIndexPage();
  }
  
  // 处理代理请求
  if (url.pathname.startsWith('/proxy/')) {
    const target = url.pathname.replace('/proxy/', '');
    const proxyUrl = CONFIG.proxyUrls[target];
    
    if (proxyUrl) {
      return fetch(proxyUrl, {
        headers: {
          'User-Agent': request.headers.get('User-Agent'),
          'Referer': proxyUrl,
        },
      });
    }
  }
  
  return new Response('404 Not Found', { status: 404 });
}

function getIndexPage() {
  return new Response(INDEX_HTML, {
    headers: {
      'content-type': 'text/html;charset=UTF-8',
    },
  });
}

const INDEX_HTML = `<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>s00mon - Serv00 Status Monitor</title>
    <style>
      :root {
        --ph-orange: #ff9000;
        --ph-black: #000000;
        --ph-dark: #1b1b1b;
        --ph-gray: #202020;
        --ph-light: #2e2e2e;
      }
      
      body {
        margin: 0;
        padding: 0;
        background: var(--ph-black);
        color: #fff;
        font-family: Arial, sans-serif;
      }
      
      .header {
        background: var(--ph-dark);
        padding: 1.5rem;
        text-align: center;
        border-bottom: 3px solid var(--ph-orange);
        box-shadow: 0 2px 10px rgba(255, 144, 0, 0.1);
      }
      
      .logo {
        color: var(--ph-orange);
        font-size: 2rem;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 1px;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
      }
      
      .logo span {
        background: var(--ph-orange);
        color: var(--ph-black);
        padding: 0.2rem 0.5rem;
        border-radius: 4px;
      }
      
      .monitors-container {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding: 2rem;
        max-width: 1200px;
        margin: 0 auto;
      }
      
      .monitor-section {
        background: var(--ph-dark);
        border-radius: 8px;
        overflow: hidden;
        border: 1px solid var(--ph-light);
        transition: transform 0.3s ease;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
      }
      
      .monitor-section:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 16px rgba(255, 144, 0, 0.15);
      }
      
      .section-header {
        background: var(--ph-orange);
        color: var(--ph-black);
        padding: 1rem 1.5rem;
        font-weight: bold;
        font-size: 1.2rem;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      
      .section-header::after {
        content: "▼";
        font-size: 0.8rem;
        opacity: 0.8;
      }
      
      .iframe-container {
        width: 100%;
        height: 600px;
        border: none;
        background: var(--ph-gray);
        padding: 1rem;
        box-sizing: border-box;
      }
      
      iframe {
        width: 100%;
        height: 100%;
        border: none;
        filter: brightness(1.2) contrast(1.1);
      }
      
      /* 针对 IP 检测页面的特殊优化 */
      .ip-monitor iframe {
        background-color: #1f1f1f;
        filter: brightness(1.2);
      }
      
      /* 添加额外的样式来优化表格显示 */
      .ip-monitor {
        background: #242424;
      }
      
      .ip-monitor .iframe-container {
        background: #242424;
        padding: 10px;
      }
      
      /* 确保 iframe 内容完全可见 */
      .ip-monitor iframe {
        background: #242424;
        box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
      }
      
      /* 添加数据源链接样式 */
      .data-sources {
        padding: 1rem 2rem;
        text-align: center;
        background: var(--ph-dark);
        margin-bottom: 2rem;
        border-bottom: 1px solid var(--ph-light);
      }
      
      .data-sources-title {
        color: var(--ph-orange);
        font-size: 1.2rem;
        margin-bottom: 1rem;
        font-weight: bold;
      }
      
      .source-links {
        display: flex;
        gap: 1rem;
        justify-content: center;
        flex-wrap: wrap;
      }
      
      .source-link {
        display: inline-block;
        padding: 0.8rem 1.5rem;
        background: var(--ph-black);
        color: #fff;
        text-decoration: none;
        border-radius: 4px;
        transition: all 0.3s ease;
        border: 1px solid var(--ph-light);
      }
      
      .source-link:hover {
        background: var(--ph-orange);
        color: var(--ph-black);
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(255, 144, 0, 0.2);
      }
      
      .source-link i {
        margin-right: 0.5rem;
        color: var(--ph-orange);
      }
      
      .source-link:hover i {
        color: var(--ph-black);
      }
      
      @media (min-width: 768px) {
        .monitors-container {
          flex-direction: row;
        }
        
        .monitor-section {
          flex: 1;
        }
      }
    </style>
  </head>
  <body>
    <div class="header">
      <div class="logo">s00<span>mon</span></div>
      <div>Serv00 Status Monitor</div>
    </div>
    
    <div class="data-sources">
      <div class="data-sources-title">🔗 数据来源</div>
      <div class="source-links">
        <a href="https://ss.fkj.pp.ua/" target="_blank" class="source-link">
          <i>🔍</i>IP 可用性检测源
        </a>
        <a href="https://ssss.nyc.mn/" target="_blank" class="source-link">
          <i>📊</i>性能监控数据源
        </a>
      </div>
    </div>
    
    <div class="monitors-container">
      <div class="monitor-section ip-monitor">
        <div class="section-header">IP 可用性检测</div>
        <div class="iframe-container">
          <iframe src="https://ss.fkj.pp.ua/" frameborder="0"></iframe>
        </div>
      </div>
      
      <div class="monitor-section">
        <div class="section-header">服务器性能监控</div>
        <div class="iframe-container">
          <iframe src="https://ssss.nyc.mn/" frameborder="0"></iframe>
        </div>
      </div>
    </div>
  </body>
</html>`; 
