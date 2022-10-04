import { createApp } from './app.js';
import { renderToString } from 'vue/server-renderer';
import * as Http from 'http';
import * as Path from 'path';

const server = Http.createServer()
  .on('request', async (req, res) => {
    let html = '';
    const app = createApp();
    try {
      html = await renderToString(app);
      if (!html) {
        throw 'Failed SSR';
      }
    } catch (e) {
      html = 'Error';
      console.error('Failed SSR', e);
    }
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width,initial-scale=1.0">
        <link rel="stylesheet" href="css/index.css">
        <title>Vue App</title>
        <script type="importmap">
          {
            "imports": {
              "vue": "https://unpkg.com/vue@3/dist/vue.esm-browser.js"
            }
          }
        </script>
        <script type="module" src="/client.js"></script>
      </head>
      <body>
        
        <noscript>
          <strong>We're sorry but Vue App doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
        </noscript>
        <div id="app">${html}</div>
      </body>
    </html>
    `);
  })
  .listen(3000, null, () => {
    console.log(`Server running on ${JSON.stringify(server.address())}`);
  });
