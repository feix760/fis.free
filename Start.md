
# Start

- [阅读项目的READMD.md](#阅读项目的readmdmd)
- [fis安装](#fis安装)
- [组件化](#组件化)
- [模块化](#模块化)
- [MVVM](#MVVM)

## 阅读项目的READMD.md

请结合项目的READMD.md参考此文档

## fis安装

### 安装fis3

```sh
npm install -g fis3
```

### 安装fis插件

*建议所有插件都使用全局-g安装*

```sh
npm install -g fis-parser-imweb-tpl fis-postprocessor-autoprefixer fis3-deploy-local-deliver 
    fis3-deploy-pack fis3-deploy-skip-packed fis3-hook-annotation 
    fis3-hook-commonjs fis3-hook-lego fis3-parser-babel fis3-parser-node-sass 
    fis3-postpackager-inline fis3-postpackager-loader fis3-prepackager-imweb-ques 
    fis3-prepackager-ques
```

各个插件的功能参考[Plugins](Plugins.md)

### 运行开发dev

```sh
fis3 release dev -w -c
```

*PS: -w, watch; -c, 清理一次缓存*

之后将生成dev目录, 使用`Fiddler`将线上url资源替换至此目录，具体规则请参考项目的READMD.md

### 运行发布dist

```sh
fis3 release dist
```

### 新项目脚手架

## 组件化

项目使用[Lego](Lego.md)进行公用组件的管理安装

## 模块化

项目使用[Ques](Ques.md)进行页面的模块化开发

## MVVM

项目使用[Qjs](Qjs.md)实现MVVM

## 常见问题

- `node-sass` 安装失败
- `[WARNI] csssprites does not support your node` [fis某版本bug](https://github.com/fex-team/fis-spriter-csssprites/issues/27#issuecomment-204300858)

