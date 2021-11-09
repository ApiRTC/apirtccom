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

Install Anglar command line interface:

`(sudo) npm install -g @angular/cli`

Install the project dependencies:

`npm install`

Then Run the development server and add your contributions !

## Good Practices and rules

Links:

    - Use hyphens, but don’t use underscores (Google doesn’t recognise them!)

Images:

    - Optimise images filenames for SEO: Use keyword descriptive language, Don’t use stop words (such as a, in, the), Use hyphens, but don’t use underscores (Google doesn’t recognise them!)

    - Use alt="alt tag" for img

    - reduce file size

    - more https://www.natalleblas.com/optimise-images-for-seo/

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build and Deploy to 'docs' (for github pages deployment)

ng build --configuration production --output-path docs --base-href /apirtccom/

cp docs/index.html docs/404.html

git add docs/*

git status

git commit -a -m "deploy"

git push origin main

## Build with SSR Server-Side-Rendering

Build

`npm run build:ssr`

Serve locally

`npm run serve:ssr`