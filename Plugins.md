
# Plugins

- [fis-parser-imweb-tpl](#fis-parser-imweb-tpl)
- [fis-postprocessor-autoprefixer](#fis-postprocessor-autoprefixer)
- [fis3-deploy-local-deliver ](#fis3-deploy-local-deliver )
- [fis3-deploy-pack](#fis3-deploy-pack)
- [fis3-deploy-skip-packed](#fis3-deploy-skip-packed)
- [fis3-hook-annotation ](#fis3-hook-annotation )
- [fis3-hook-commonjs](#fis3-hook-commonjs)
- [fis3-hook-lego](#fis3-hook-lego)
- [fis3-parser-babel](#fis3-parser-babel)
- [fis3-parser-node-sass ](#fis3-parser-node-sass )
- [fis3-postpackager-inline](#fis3-postpackager-inline)
- [fis3-postpackager-loader](#fis3-postpackager-loader)
- [fis3-prepackager-imweb-ques ](#fis3-prepackager-imweb-ques )
- [fis3-prepackager-ques](#fis3-prepackager-ques)

## fis-parser-imweb-tpl

将tpl转化成js文件require使用

```html
<!-- @file hi.tpl -->
<h1>Hi. <%= name %></h1>
```

```js
var tpl = require('hi.tpl');
console.log(tpl({name: 'fis.free'}));
```

## fis-postprocessor-autoprefixer

对css做自动添加-webikit-等前缀处理

## fis3-deploy-local-deliver 

写入dev/dist目录文件

## fis3-deploy-pack

生成离线包zip文件

## fis3-deploy-skip-packed

被sprite的png文件等不被发布至dist

## [fis3-hook-annotation](https://github.com/imweb/fis3-hook-annotation)

使用注解修改文件的fis属性 

```js
/**
 * @noWrap
 * @noOptimizer
 */ 
// 文件将不会使用define包裹
// 文件将不会被min压缩
```

```html
<!DOCTYPE html>
<!-- @setProterty pack false -->
<html>
<!-- 此文件不会被打进离线包 -->
</html>
```

## fis3-hook-commonjs


## fis3-hook-lego

Lego组件插件组件

```js
var util = require('util');  // 将能直接require到lego_modules/util下的组件
```

```html
<html>
    <script src="jquery"></script>
</html>
```

## fis3-parser-babel

es6 babel parse

## fis3-parser-node-sass 

sass parse

## fis3-postpackager-inline

将小的资源文件自动inline至html

*css: <20kb; js: <10kb;(gzip前)*

## fis3-postpackager-loader

- 分析html入口main.js的所有依赖
- dist时将所有文件打包成一个文件

## fis3-prepackager-ques

Ques模块化插件

```html
<html>
    <head></head>
    <body>
        <index-header></index-header>
        <index-footer></index-footer>
    </body>
</html>
```

## fis3-prepackager-imweb-ques 

不推荐使用，将被fis3-prepackager-ques代替

