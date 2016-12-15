
# 构建环境安装

- [安装NODE](#安装NODE)
- [安装fis3](#安装fis3)
- [安装fis-parser-node-sass](#安装fis-parser-node-sass)
- [安装其它插件](#安装其它插件)
- [试跑demo](#试跑demo)
- [常见问题](#常见问题)
- [插件列表](Plugins.md)

## 安装NODE

官网下载node版本6.x即可

```
node --version
# v6.9.2
```

### 科普知识

- `.npmrc`文件位置:
    - Windows `C:\Users\用户名\.npmrc`
    - Mac/Linux `用户根目录/.npmrc`
- npm全局安装的node_modules目录在: 
    - Windows `C:\Users\用户名\AppData\Roaming\npm\node_modules`
    - Mac/Linux `/usr/local/lib/node_modules`

### npm代理设置

`.npmrc`文件中加入

```sh
proxy=http://dev-proxy.oa.com:8080/
```

### 设置NODE_PATH

- Windows 
<br>`我的电脑右击 -> 属性 -> 高级系统设置 -> 环境变量 -> 系统变量一栏点新建`
<br>变量名: `NODE_PATH`
<br>变量值: `C:\Users\用户名\AppData\Roaming\npm\node_modules`
- Mac/Linux
<br>在`.profile`文件导入
```sh
export NODE_PATH='/usr/local/lib/node_modules'
```

## 安装fis3

```sh
npm install -g fis3
```

## 安装fis-parser-node-sass

`fis-parser-node-sass`依赖`node-sass`, `node-sass`的编译在windows上很麻烦

### 编译准备

- 安装python 2.X, *注意安装3.X无效, gyp不支持*
    - 安装之后需检查环境变量path是否有类似`C:\Python27;C:\Python27\Scripts;`的值, 没有自己添加
- 安装`.NET Framework SDK`
    - 下载地址https://www.microsoft.com/en-hk/download/details.aspx?id=19988
    - 安装之后将VCBuild.exe所在目录`C:\Program Files (x86)\Microsoft Visual Studio 8\VC\vcpackages`加入环境变量path

### 无法编译迂回

安装最新版的`node-sass`, 一般情况下是不需要编译的，可以直接下载到已编译好了的.node文件

`fis-parser-node-sass`不是很靠谱，里面的node-sass版本写死了, 安装依赖node-sass时一般容易编译失败

我的做法是:
- 全局安装node-sass
- 全局安装fis-parser-node-sass
- 将node-sass拷贝至fis-parser-node-sass/node_modules目录下

*Mac/Linux同理*

## 安装其它插件

### 基础插件

```sh
npm install -g fis3-hook-commonjs fis3-postpackager-loader fis3-deploy-replace \
    fis3-deploy-skip-packed fis3-hook-node_modules
```

### react相关

```sh
npm install -g babel-cli babel-preset-es2015 babel-preset-es2015-loose \
    babel-preset-react babel-preset-stage-0 fis-parser-babel-6.x
```

### 其它

```sh
npm install -g fis3-deploy-html-inline-merge fis3-deploy-pack fis3-hook-annotation \
    fis3-hook-lego fis3-postpackager-inline fis3-postpackager-loader-common \
    fis3-postprocessor-autoprefixer fis3-preprocessor-js-require-css \
    fis3-preprocessor-js-require-file fis-optimizer-htmlmin fis-optimizer-png-compressor \
    fis-parser-imweb-tpl
```

## 试跑demo

clone项目进入demo目录

```sh
npm start
```

## 常见问题

- 运行fis3命令: `[ERROR] parser.babel-6.x: Couldn't find preset "react" relative to directory`
<br>全局安装的react preset不生效
<br>这是没有设置环境变量NODE_PATH所致, 请参考前文设置NODE_PATH
- 编译node-sass报错: `MSBUILD : error MSB3428: 未能加载 Visual C++ 组件“VCBuild.exe”。`
<br>未安装VCBuild或者未设置VCBuild环境变量所致
- 运行fis3命令: `[WARNI] csssprites does not support your node` [fis某版本bug](https://github.com/fex-team/fis-spriter-csssprites/issues/27#issuecomment-204300858)
