# React clock
Vintage digital clock.

## Screenshots

### Clock
<img src="https://github.com/fortymorgan/reactClock/blob/master/screenshots/Clock.png" alt="Clock" title="Clock" />

## How to develop
To run the app locally first you need to create `bundle.js` with:
```
npm run build
```
Then open `index.html`.

## How to deploy
First you need to install [Surge](http://surge.sh)
```
npm install -g surge
```
Change domain prefix for `deploy-surge` script in `package.json`, then run:
```
npm run deploy
```
If it your first run, Surge will ask you for email and password and create an account for you.  
Then the project will be deployed for domain, which you used in `package.json` `deploy-surge` script.  
(If domain is already used, Surge will tell about that).
