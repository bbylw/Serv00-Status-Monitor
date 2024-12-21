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
... // 这里是上面的 index.html 内容
</html>`; 