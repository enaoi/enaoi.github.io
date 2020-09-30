(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{421:function(s,t,a){"use strict";a.r(t);var e=a(25),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"git"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git"}},[s._v("#")]),s._v(" Git")]),s._v(" "),a("p",[s._v("git命令查询👉"),a("a",{attrs:{href:"https://git-scm.com/book/en/v2",target:"_blank",rel:"noopener noreferrer"}},[s._v("git book"),a("OutboundLink")],1),s._v(",觉得你会了可以回答"),a("a",{attrs:{href:"https://juejin.im/post/5dba2249f265da4cef190484?utm_source=gold_browser_extension",target:"_blank",rel:"noopener noreferrer"}},[s._v("git 题集"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[s._v("#")]),s._v(" 常用命令")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("查看分支"),a("code",[s._v("git branch")]),s._v(" "),a("code",[s._v("-a")]),s._v(": 全部分支\n"),a("code",[s._v("-r")]),s._v(": 远程分支")])]),s._v(" "),a("li",[a("p",[s._v("拉取远端分支到本地"),a("code",[s._v("git fetch origin <远程分支名x>:<本地分支名x>")])])]),s._v(" "),a("li",[a("p",[s._v("切换分支: "),a("code",[s._v("git checkout <name>")])])]),s._v(" "),a("li",[a("p",[s._v("创建分支并切换至新分支"),a("code",[s._v("git checkout -b <name>")])])]),s._v(" "),a("li",[a("p",[s._v("查看文件状态："),a("code",[s._v("git status")])])]),s._v(" "),a("li",[a("p",[s._v("add 所有修改 "),a("code",[s._v("git add .")])])]),s._v(" "),a("li",[a("p",[s._v("提交本地分支 "),a("code",[s._v("git push")])])]),s._v(" "),a("li",[a("p",[s._v("合并某分支到当前分支"),a("code",[s._v("git merge <name>")])])]),s._v(" "),a("li",[a("p",[s._v("删除分支 "),a("code",[s._v("git branch -d <name>")])])]),s._v(" "),a("li",[a("p",[s._v("丢弃工作区修改"),a("code",[s._v("git checkout -- <file>")])])]),s._v(" "),a("li",[a("p",[s._v("撤销add，返回工作区"),a("code",[s._v("git reset HEAD <file>")])])]),s._v(" "),a("li",[a("p",[s._v("提交 "),a("code",[s._v('git commit -m "message"')])])]),s._v(" "),a("li",[a("p",[s._v("查看提交记录日志 "),a("code",[s._v("git log --pretty=online")])])]),s._v(" "),a("li",[a("p",[s._v("打标签："),a("code",[s._v("git tag <tag> <headID>")])])]),s._v(" "),a("li",[a("p",[s._v("查看某次提交的详细内容 "),a("code",[s._v("git show <headID>")])])]),s._v(" "),a("li",[a("p",[s._v("撤销commit\ngit 中"),a("code",[s._v("HEAD")]),s._v("表示当前版本，上一个版本就是 "),a("code",[s._v("HEAD^")]),s._v("。前100个版本就是"),a("code",[s._v("HEAD~100")]),s._v(" "),a("code",[s._v("git rest --hard HEAD^")])])]),s._v(" "),a("li",[a("p",[s._v("首次提交")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" origin https://github.com/xx\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push -u origin master\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("删除远程origin\n···shell\ngit remote rm origin\n···")])]),s._v(" "),a("li",[a("p",[s._v("系统配置")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --system -l\n// 删除全局密码\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --system --unset credential.helper\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("全局配置\n可以使用"),a("code",[s._v("git config --global <attrname> <value>")]),s._v("来设置")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("// 查看全局\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global --list\n// 删除全局\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global --unset attrname\n\n// 设置用户名\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global user.name  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'yourname'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("项目配置")]),s._v(" "),a("p",[s._v("文件地址"),a("code",[s._v(".git/config")]),s._v("，都可以使用"),a("code",[s._v("git config <attrname> <value>")]),s._v("来设置")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("core"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    repositoryformatversion "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n    filemode "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n    bare "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n    logallrefupdates "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n    ignorecase "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n    precomposeunicode "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("remote "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"origin"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    url "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" git@github.com:michaelliao/learngit.git\n    fetch "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" +refs/heads/*:refs/remotes/origin/*\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("branch "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"master"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    remote "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" origin\n    merge "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" refs/heads/master\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("alias"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    co "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" checkout\n    ci "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" commit\n    br "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" branch\n    st "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" status\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" enaoi\n    email "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" charlotte.xuuuu@gmail.com\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br")])])])]),s._v(" "),a("h2",{attrs:{id:"高级用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#高级用法"}},[s._v("#")]),s._v(" 高级用法")]),s._v(" "),a("ol",[a("li",[a("code",[s._v("git rebase")]),s._v(" 变基\n在 Git 中整合来自不同分支的修改主要有两种方法："),a("code",[s._v("merge")]),s._v(" 以及 "),a("code",[s._v("rebase")]),s._v("。")])])])}),[],!1,null,null,null);t.default=n.exports}}]);