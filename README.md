# Apirtccom

## How to contribute

Requirements:

    - git installed on your computer,

    - github account with access right to this repository, and likely your public ssh key exchanged with github,

    - a code editor like Visual Studio Code.

Clone this repository:

`git clone git@github.com:ApiRTC/apirtccom.git`

go inside the project:

`cd apirtccom`

Install Angular command line interface:

`(sudo) npm install -g @angular/cli`

Install the project dependencies:

`npm install`

Then Run the development server and add your contributions !

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Search indexer

Run `python3 search_indexer.py > src/assets/search-data.json` to update the json index file from `<a class="anchor" keywords=""></a>` elements.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Good Practices and rules

Wording

    - All **ApiRTC** wording shall be bold, for example **local stream** (use <strong>local stream</strong>)

    - **ApiRTC** shall always be spelled **ApiRTC** (use <strong>local stream</strong>)

Links:

    - Use hyphens, but don’t use underscores (Google doesn’t recognise them!)

Images:

    - Optimise images filenames for SEO: Use keyword descriptive language, Don’t use stop words (such as a, in, the), Use hyphens, but don’t use underscores (Google doesn’t recognise them!)

    - Use alt="alt tag" for img

    - reduce file size

    - more https://www.natalleblas.com/optimise-images-for-seo/

## SSR (Server-Side-Rendering)

Because an angular application is not SEO friendly, it is important to publish it with SSR in order to get a public website that google can crawl.

Serve locally

`npm run dev:ssr`

Build

`npm run build:ssr`

Serve locally

`npm run serve:ssr`

## Build and Deploy to 'docs' (for github pages deployment) - DO NOT USE FOR PRODUCTION

```
python3 search_indexer.py > src/assets/search-data.json
ng build --configuration production --output-path docs --base-href /apirtccom/
cp docs/index.html docs/404.html
git add docs/*
git status
git commit -a -m "deploy"
git push origin main
```

## Build and Deploy with SSR - USE THIS FOR PRODUCTION

Strategy

A frontend apache server configured with SSL and will proxies requests to the node/express server actually serving the website.

pm2 is installed on the server and manages the website node/express server.

Commands To build

```
git clone https://github.com/ApiRTC/apirtccom.git
cd apirtccom/
npm install
npm run build:ssr
```

Commands to start

```
sudo npm install pm2 -g
pm2 start /home/kevinm/apirtccom/dist/apirtccom/server/main.js --name apirtccom
pm2 stop apirtccom
pm2 restart apirtccom
```

Note : certificates can be configured to another path in server.ts

(Note2 : sudo is required for pm2 when trying to directly bind 80/443 ports)

Commands for port forwarding

```
sudo iptables -L -t nat
sudo iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 8080
sudo iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 443 -j REDIRECT --to-port 8443
```


## Certificates generation

At initial generation, use `sudo certbot certonly --manual`:

    - Provide the domain

    - When it asks for http://<domain>/.well-known/acme-challenge, uncomment httpServer.get('/.well-known/acme-challenge/*', function (req, res) { ...
in server.ts and change the response to what certbot provides as the content of file

    - run `ng run apirtccom:server` and `pm2 restart apirtccom`

    - then continue with certbot.

    - copy `sudo cp /etc/letsencrypt/live/dev2.apirtc.com/fullchain.pem apirtccom/cert/` and `sudo cp /etc/letsencrypt/live/dev2.apirtc.com/privkey.pem apirtccom/cert/`

    - comment back httpServer.get('/.well-known/acme-challenge/*', function (req, res) { ...
in server.ts

    - run again `ng run apirtccom:server` and `pm2 restart apirtccom`

That should work !