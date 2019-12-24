---
title: yarn vs npm
date: 2019-12-05 14:17:26
categories:
- tool
tags:
- tool
---

:clap: yarn 和 npm 的对照表，个人觉得 yarn 比较好用啦

## npm、yarn常用命令对照表

| npm                       | yarn              | 说明 |
| ------------------------- | ----------------- | ---- |
| npm install               | yarn              |      |
| npm install ** --save     | yarn add **       |      |
| npm uninstall  ** --save  | yarn remove **    |      |
| nom install ** --save-dev | yarn add ** --dev |      |
| npm init                  | yarn init         |      |
| npm link                  | yarn link         |      |
| npm outdated              | yarn outdated     |      |
| npm publish               | yarn publish      |      |
| npm run                   | yarn run          |      |
| npm cache clean           | yarn cache clean  |      |
| npm login                 | yarn login        |      |

## yarn

| yarn                              | 说明                  |
| --------------------------------- | --------------------- |
| yarn licenses ls                  | 查看依赖的licenses    |
| yarn licenses generate-disclaimer | 自动生成你的 licenses |
| yarn why **                       | 哪些安装包依赖了**包  |

## npm

```shell
// 查看全局安装包
npm ls -g --depth=1

// 查看需要更新的全局安装包
npm outdated -g --depth=0

// 更新全部全局安装包
npm update -g
```

npm 可能有多个源，可以使用 nrm 切换和查看

```shell
// 安装nrm
npm install -g nrm

// 查看当前所有源以及正在使用的源
nrm ls

// 切换到指定源,npm 发包的时候一定要注意指定npm
nrm use npm
```

### 手写一个npm包

首先新建一个文件夹。目录机构如下：

```javascript
package
   |
   +--bin
   |
   +--package.json
```

`package.json`文件中指定bin路径:

```javascript
{
  "name": "",
  "version": "",
  "description": "",
  "bin": {
    "enaoi_test": "bin/index.js"
  },
  // ...
}
```

新建文件 `bin/index.js`

```javascript
#!/usr/bin/env node

// 可以自动的解析命令和参数，用于处理用户输入的命令
const program = require('commander');

// vue-manage-cli --version => ‘1.0.0’
program.version(`vue-manage-cli ${require('../package').version}`)
    .usage('<command> [options]')


program.command('init <name>')
    .action((name) => {
        require('../lib/create')(name)
    });


program.parse(process.argv)

```

如上是[vue-manage-cli]("https://www.npmjs.com/package/vue-manage-cli")包的部分脚本，是自定义vue脚手架的一个包。常用的一些包插件有如下，大量参考vue-cli的源码部分。

- chalk
- commander
- download-git-repo
- handlebars
- inquirer
- log-symbols
- ora
- shelljs

### 发布npm包

1. 首先登陆 `npm login`
2. 本地调试: 在当前包下 `npm link`
3. 发布：`npm publish`，注意包名不能重复。
4. 升级： package.json 的 version 一定要修改。执行 `npm publish`。
5. 删除本地调试： `npm rm -g <package name>`

**常见错误：**

1. 409 confilct： 源错误，一定要切换到npm源。

### 删除已发布的包

执行命令：`npm unpublish <package-name> --force`
