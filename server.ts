import 'zone.js/dist/zone-node';

import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import { join } from 'path';

import { AppServerModule } from './src/main.server';
import { APP_BASE_HREF } from '@angular/common';
import { existsSync, readFileSync } from 'fs';

// Commented out because spdy seemed to be the source of issues when getting some
// large css or js files : they were not fully transferred to the client. Thus
// website was not working properly
// import * as spdy from 'spdy';

import { createServer } from 'https'

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
  server.get('/api/quick_start_iOS', (req, res) => {
    res.redirect('/getting-started', 301);
  });
  server.get('/api/quick_start_android', (req, res) => {
    res.redirect('/getting-started', 301);
  });

  server.get('/tutorials', (req, res) => {
    res.redirect('/examples', 301);
  });
  server.get('/tutorials/**', (req, res) => {
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

  server.get('/api/reference_apiRTC_REST', (req, res) => {
    res.redirect('https://cloud.apirtc.com/sdk/api/', 301);
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
  const port = 8080;
  const port_https = 8443;

  // For automated certificate generation
  const acmeFolder = join(process.cwd(), 'dist/apirtccom/.well-known/acme-challenge');

  // Set up plain http server
  const httpServer = express();

  // For certificate generation with certbot (sudo certbot certonly --manual) DEPRECATED
  // httpServer.get('/.well-known/acme-challenge/*', function (req, res) {
  //   res.send("wcMfSgyWgDzZXeGm7wpoKwg9zgTn_KV4ZCieot07VSM.bTNYdNXFsAOigdbs1rZgTypq8oYpHKKtqYlbf39cy8I");
  // })

  // For automated certificate generation with below script :
  // sudo certbot certonly -d dev2.apirtc.com \
  // --webroot-path /home/kevinm/apirtccom/dist/apirtccom --webroot \
  // --post-hook "cp /etc/letsencrypt/live/dev2.apirtc.com/fullchain.pem /etc/letsencrypt/live/dev2.apirtc.com/privkey.pem /home/kevinm/apirtccom/cert/ && su kevinm -c \"pm2 restart 0\""
  httpServer.use('/.well-known/acme-challenge', express.static(acmeFolder));

  // set up a route to redirect http to https
  httpServer.get('*', function (req, res) {
    res.redirect('https://' + req.headers.host + req.url);
  })
  httpServer.listen(port);

  // HTTPS server
  createServer(
    {
      key: readFileSync("./cert/privkey.pem"),
      cert: readFileSync("./cert/fullchain.pem"),
    },
    app())
    .listen(port_https, () => {
      console.log(`Node Express server listening on https://0.0.0.0:${port_https}`);
    });

  // Make server use h2 (http2, http/2) https protocol
  // Commented out because spdy seemed to be the source of issues when getting some
  // large css or js files : they were not fully transferred to the client. Thus
  // website was not working properly
  // spdy.createServer(
  //   {
  //     key: readFileSync("./cert/privkey.pem"),
  //     cert: readFileSync("./cert/fullchain.pem"),
  //     spdy: {
  //       // setting plain to true disables https, but it does not seem to be h2 then : curl says http/1.1
  //       plain: false
  //     }
  //   },
  //   app()
  // ).listen(port_https, () => {
  //   console.log(`Node Express server listening on https://0.0.0.0:${port_https}`);
  // });
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

