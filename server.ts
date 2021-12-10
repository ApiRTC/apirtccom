import 'zone.js/dist/zone-node';

import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import { join } from 'path';

import { AppServerModule } from './src/main.server';
import { APP_BASE_HREF } from '@angular/common';
import { existsSync, readFileSync } from 'fs';

import * as spdy from 'spdy';

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  //const server = express.default();
  const distFolder = join(process.cwd(), 'dist/apirtccom/browser');
  const indexHtml = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';

  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
  server.engine('html', ngExpressEngine({
    bootstrap: AppServerModule,
  }));

  server.set('view engine', 'html');
  server.set('views', distFolder);

  // Redirect internal routes
  server.get('/api/quick_start', (req, res) => {
    res.redirect('/getting-started', 301);
  });
  server.get('/tutorials', (req, res) => {
    res.redirect('/examples', 301);
  });

  // Redirect old references
  server.get('/api/reference', (req, res) => {
    res.redirect('https://apirtc.github.io/references/apirtc-js', 301);
  });
  server.get('/reference/**', (req, res) => {
    res.redirect('https://apirtc.github.io/references/apirtc-js', 301);
  });
  server.get('/api/CHANGELOG', (req, res) => {
    res.redirect('https://github.com/ApiRTC/references/blob/master/apirtc-js/CHANGELOG.md', 301);
  });

  server.get('/api/reference_apiRTC_Android-SDK', (req, res) => {
    res.redirect('https://apirtc.github.io/references/apirtc-android-sdk', 301);
  });
  server.get('/apiRTC_Android-SDK/**', (req, res) => {
    res.redirect('https://apirtc.github.io/references/apirtc-android-sdk', 301);
  });

  server.get('/api/reference_apiRTC_iOS-SDK', (req, res) => {
    res.redirect('https://apirtc.github.io/references/apirtc-ios-sdk', 301);
  });
  server.get('/apiRTC_iOS-SDK/**', (req, res) => {
    res.redirect('https://apirtc.github.io/references/apirtc-ios-sdk', 301);
  });

  // Serve static files from /browser
  server.get('*.*', express.static(distFolder, {
    maxAge: '1y'
  }));

  // All regular routes use the Universal engine
  server.get('*', (req: any, res: any) => {
    res.render(indexHtml, { req, providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }] });
  });
  server.get('**/*', (req: any, res: any) => {
    res.render(indexHtml, { req, providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }] });
  });

  return server;
}

function run(): void {
  //process.env['PORT'] ||
  const port = 80;
  const port_https = 443;

  // Start up the Node server
  //const server = app();
  // server.listen(port, () => {
  //   console.log(`Node Express server listening on http://localhost:${port}`);
  // });

  // For test purpose ? try plain:true
  spdy.createServer(
    {
      spdy: {
        plain: true
      }
    },
    app()
  ).listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });

  // Make server using h2 (http2, http/2) https protocol
  spdy.createServer(
    {
      key: readFileSync("./cert/selfsigned.key"),
      cert: readFileSync("./cert/selfsigned.crt"),
      spdy: {
        // setting plain to true disables https, but it does not seem to be h2 then : curl says http/1.1
        plain: false
      }
    },
    app()
  ).listen(port_https, () => {
    console.log(`Node Express server listening on https://localhost:${port_https}`);
  });
}

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = mainModule && mainModule.filename || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}

export * from './src/main.server';
