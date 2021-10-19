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

Install the project dependencies:

`npm install`

Then Run the development server and add your contributions !

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