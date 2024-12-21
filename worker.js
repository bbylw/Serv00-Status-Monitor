const CONFIG = {
  title: 's00mon - Serv00 Status Monitor',
  proxyUrls: {
    ip: 'https://ss.botai.us.kg/',
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
        padding: 1rem;
        text-align: center;
      }
      
      .logo {
        color: var(--ph-orange);
        font-size: 2rem;
        font-weight: bold;
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
      }
      
      .section-header {
        background: var(--ph-orange);
        color: var(--ph-black);
        padding: 1rem;
        font-weight: bold;
      }
      
      .iframe-container {
        width: 100%;
        height: 600px;
        border: none;
        background: var(--ph-dark);
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
        filter: brightness(1.6) contrast(1.3) saturate(1.1);
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
      <div class="logo">s00mon</div>
      <div>Serv00 Status Monitor</div>
    </div>
    
    <div class="monitors-container">
      <div class="monitor-section ip-monitor">
        <div class="section-header">IP 可用性检测</div>
        <div class="iframe-container">
          <iframe src="https://ss.botai.us.kg/" frameborder="0"></iframe>
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