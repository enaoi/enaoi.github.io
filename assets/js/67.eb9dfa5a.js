(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{425:function(t,e,a){"use strict";a.r(e);var s=a(25),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"git"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git"}},[t._v("#")]),t._v(" Git")]),t._v(" "),a("p",[t._v("git命令查询👉"),a("a",{attrs:{href:"https://git-scm.com/book/en/v2",target:"_blank",rel:"noopener noreferrer"}},[t._v("git book"),a("OutboundLink")],1),t._v(",觉得你会了可以回答"),a("a",{attrs:{href:"https://juejin.im/post/5dba2249f265da4cef190484?utm_source=gold_browser_extension",target:"_blank",rel:"noopener noreferrer"}},[t._v("git 题集"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[t._v("#")]),t._v(" 常用命令")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("查看分支"),a("code",[t._v("git branch")]),t._v(" "),a("code",[t._v("-a")]),t._v(": 全部分支\n"),a("code",[t._v("-r")]),t._v(": 远程分支")])]),t._v(" "),a("li",[a("p",[t._v("拉取远端分支到本地"),a("code",[t._v("git fetch origin <远程分支名x>:<本地分支名x>")])])]),t._v(" "),a("li",[a("p",[t._v("切换分支: "),a("code",[t._v("git checkout <name>")])])]),t._v(" "),a("li",[a("p",[t._v("创建分支并切换至新分支"),a("code",[t._v("git checkout -b <name>")])])]),t._v(" "),a("li",[a("p",[t._v("查看文件状态："),a("code",[t._v("git status")])])]),t._v(" "),a("li",[a("p",[t._v("add 所有修改 "),a("code",[t._v("git add .")])])]),t._v(" "),a("li",[a("p",[t._v("提交本地分支 "),a("code",[t._v("git push")])])]),t._v(" "),a("li",[a("p",[t._v("合并某分支到当前分支"),a("code",[t._v("git merge <name>")])])]),t._v(" "),a("li",[a("p",[t._v("删除分支 "),a("code",[t._v("git branch -d <name>")])])]),t._v(" "),a("li",[a("p",[t._v("丢弃工作区修改"),a("code",[t._v("git checkout -- <file>")])])]),t._v(" "),a("li",[a("p",[t._v("撤销add，返回工作区"),a("code",[t._v("git reset HEAD <file>")])])]),t._v(" "),a("li",[a("p",[t._v("提交 "),a("code",[t._v('git commit -m "message"')])])]),t._v(" "),a("li",[a("p",[t._v("查看提交记录日志 "),a("code",[t._v("git log --pretty=online")])])]),t._v(" "),a("li",[a("p",[t._v("打标签："),a("code",[t._v("git tag <tag> <headID>")])])]),t._v(" "),a("li",[a("p",[t._v("查看某次提交的详细内容 "),a("code",[t._v("git show <headID>")])])]),t._v(" "),a("li",[a("p",[t._v("撤销commit\ngit 中"),a("code",[t._v("HEAD")]),t._v("表示当前版本，上一个版本就是 "),a("code",[t._v("HEAD^")]),t._v("。前100个版本就是"),a("code",[t._v("HEAD~100")]),t._v(" "),a("code",[t._v("git rest --hard HEAD^")])])]),t._v(" "),a("li",[a("p",[t._v("首次提交")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" origin https://github.com/xx\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push -u origin master\n")])])]),a("p",[t._v("删除远程origin\n···shell\ngit remote rm origin\n···")])]),t._v(" "),a("li",[a("p",[t._v("系统配置")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --system -l\n// 删除全局密码\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --system --unset credential.helper\n")])])])]),t._v(" "),a("li",[a("p",[t._v("全局配置\n可以使用"),a("code",[t._v("git config --global <attrname> <value>")]),t._v("来设置")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("// 查看全局\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global --list\n// 删除全局\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global --unset attrname\n\n// 设置用户名\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.name  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'enaoi'")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("项目配置")]),t._v(" "),a("p",[t._v("文件地址"),a("code",[t._v(".git/config")]),t._v("，都可以使用"),a("code",[t._v("git config <attrname> <value>")]),t._v("来设置")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("core"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    repositoryformatversion "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n    filemode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    bare "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n    logallrefupdates "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    ignorecase "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    precomposeunicode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("remote "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"origin"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    url "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" git@github.com:michaelliao/learngit.git\n    fetch "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" +refs/heads/*:refs/remotes/origin/*\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("branch "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"master"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    remote "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" origin\n    merge "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" refs/heads/master\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("alias"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    co "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" checkout\n    ci "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" commit\n    br "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" branch\n    st "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" status\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" enaoi\n    email "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" charlotte.xuuuu@gmail.com\n")])])])])]),t._v(" "),a("h2",{attrs:{id:"高级用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#高级用法"}},[t._v("#")]),t._v(" 高级用法")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("git rebase")]),t._v(" 变基\n在 Git 中整合来自不同分支的修改主要有两种方法："),a("code",[t._v("merge")]),t._v(" 以及 "),a("code",[t._v("rebase")]),t._v("。")])])])}),[],!1,null,null,null);e.default=n.exports}}]);