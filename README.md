# webpack-open-browser-plugin

[webpack-dev-server](https://github.com/webpack/webpack-dev-server) have open browser ability, but the experience is poor, webpack not finish compile, browser already opened, we will see a blank loading page at long time.

This plugin resolve the problem: when webpack after compile, browser will open, you can see the webpage, not a blank page!

## how to use
```console
npm install webpack-open-browser-plugin --save-dev
```
```javascript
// webpack plugins config
new WebpackOpenBrowserPlugin({
  url: 'http://localhost:8080'
})
```
