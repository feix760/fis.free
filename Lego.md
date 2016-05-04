
# Lego

- [官网](#官网)
- [安装组件](#安装组件)
- [package.json](#package.json)
- [发布组件](#发布组件)
- [常见问题](#常见问题)

## [官网](http://lego.imweb.io)

## 安装组件

*组件需要安装至src目录下，因此需在src下运行安装命令*

```sh
lego install util
```

安装特定版本

```sh
lego install util@0.0.1
```

## package.json

*package.json同样需要在src目录下(与npm package.json分离)*

```javascript
{
    "lego": {
        "dependencies": {
            "util": "^0.0.1",
            "jquery": "^1.0.1"
        }
    }
}
```

组件的版本遵守npm版本规则

之后运行lego install将安装所有组件

```sh
lego install
```

## 发布组件

```sh
lego publish util
```

如果没有此组件的发布权限，从[lego.imweb.io](http://lego.imweb.io)上获得联系组件发布者添加权限即可

## 常见问题

- 公司网络无法使用lego命令

