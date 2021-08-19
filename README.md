# webpack-open-browser-plugin

[webpack-dev-server](https://github.com/webpack/webpack-dev-server) have open browser ability, but the experience is poor, webpack not finish compile, browser already opened, we will see a blank loading page at long time.

webpack devServer 开发服务器自带了打开浏览器的功能，但是体验很差，在webpack还没编译完成，浏览器已经打开了，显示一个空白的加载页面，要等很久，而且我们在看编译的log输出的时候被打断了，显示的却是一个加载页面，体验非常糟糕。

This plugin resolve the problem: when webpack after compile, browser will open, you can see the webpage, not a blank page!

这个插件会解决这个问题，体验更好！插件会在webpack编译完成，才打开浏览器，因为编译完成了，你能直接看到网页内容，而不是空白的加载页面。

## How to use
```console
npm install webpack-open-browser-plugin --save-dev
```
```javascript
// webpack plugins config
const WebpackOpenBrowserPlugin = require('webpack-open-browser-plugin');

new WebpackOpenBrowserPlugin({
  url: 'http://localhost:8080'
})
```
![npm](https://img.shields.io/npm/v/webpack-open-browser-plugin)
[![downloads](https://img.shields.io/npm/dm/webpack-open-browser-plugin.svg?style=flat-square)](https://www.npmtrends.com/webpack-open-browser-plugin)
[![MIT License](https://img.shields.io/npm/l/webpack-open-browser-plugin.svg?style=flat-square)](https://github.com/fisker/webpack-open-browser-plugin/blob/master/license)

本插件结合了webpack的编译hook钩子实现的。

打开浏览器的功能兼容 Windows 和 Mac。

(https://www.npmjs.com/package/webpack-open-browser-plugin)[https://www.npmjs.com/package/webpack-open-browser-plugin]
