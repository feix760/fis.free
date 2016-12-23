
# 构建环境安装

- [安装NODE](#安装NODE)
- [安装fis3](#安装fis3)
- [安装fis-parser-node-sass](#安装fis-parser-node-sass)
- [安装其它插件](#安装其它插件)
- [试跑demo](#试跑demo)
- [常见问题](#常见问题)
- [插件列表](Plugins.md)

*注意：为了安装的顺利进行，保险的方式是先卸载原来node, 删除C:\Users\用户名\AppData\Roaming下的npm, npm-cache目录*

## 安装NODE

官网下载安装node版本6.x即可

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

*建议：不需要使用tnpm, 配置好npm的代理即可*

### 设置NODE_PATH

- Windows 
<br>`我的电脑右击 -> 属性 -> 高级系统设置 -> 环境变量 -> 系统变量一栏点新建`
<br>变量名: `NODE_PATH`
<br>变量值: `C:\Users\用户名\AppData\Roaming\npm\node_modules`
<br>*注意：tnpm全局安装会安装至nodejs安装目录下，例如C:\Program Files\nodejs\node_modules, 使用tnpm时需要将此目录也加入NODE_PATH(用;分割多个路径)*
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

`fis-parser-node-sass`依赖`node-sass`, 如果需要编译`node-sass`容易失败

*注意：不可安装fis3-parser-node-sass, 此组件已停止维护*

### 安装

```sh
npm install -g fis-parser-node-sass
```

一般情况下可以直接下载到*.node文件顺利安装，如果安装因编译失败请转至下一步

### 编译准备

- 安装python 2.X, *注意：安装3.X无效, gyp不支持*
    - 安装之后需检查环境变量path是否有类似`C:\Python27;C:\Python27\Scripts;`的值, 没有自己添加
- 安装`.NET Framework SDK`
    - 下载地址https://www.microsoft.com/en-hk/download/details.aspx?id=19988
    - 安装之后将VCBuild.exe所在目录`C:\Program Files (x86)\Microsoft Visual Studio 8\VC\vcpackages`加入环境变量path

### 无法编译迂回

安装最新版的`node-sass`, 一般情况下是不需要编译的，可以直接下载到已编译好了的.node文件

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

*注意: Windows CMD不支持\续行，请将\去除并合并成一行再粘贴至CMD运行*

### react相关

```sh
npm install -g babel-cli babel-preset-es2015 babel-preset-es2015-loose \
    babel-preset-react babel-preset-stage-0 fis-parser-babel-6.x fis3-parser-babel
```

### 其它

```sh
npm install -g fis3-deploy-html-inline-merge fis3-deploy-pack fis3-hook-annotation \
    fis3-hook-lego fis3-postpackager-inline fis3-postpackager-loader-common \
    fis3-postprocessor-autoprefixer fis3-preprocessor-js-require-css \
    fis3-preprocessor-js-require-file fis-optimizer-htmlmin fis-optimizer-png-compressor \
    fis-parser-imweb-tpl fis-spriter-csssprites-group 
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
