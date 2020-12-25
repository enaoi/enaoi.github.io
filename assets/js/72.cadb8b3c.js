(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{430:function(t,e,a){"use strict";a.r(e);var s=a(25),v=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vue-js-基础"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-js-基础"}},[t._v("#")]),t._v(" Vue.js 基础")]),t._v(" "),a("blockquote",[a("p",[t._v("什么是Vue.js?\n构建用户界面的渐进式框架\n官方文档资料👇")])]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue2 官方教程"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://cn.vuejs.org/v2/api/",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue2 全部API"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"vue-实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-实例"}},[t._v("#")]),t._v(" Vue 实例")]),t._v(" "),a("h3",{attrs:{id:"实例-property"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实例-property"}},[t._v("#")]),t._v(" 实例 property")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("vm.$data")]),t._v(":实例观察的数据对象")]),t._v(" "),a("li",[a("code",[t._v("vm.$props")]),t._v(":当前组件接收到的 props 对象")]),t._v(" "),a("li",[a("code",[t._v("vm.$el")]),t._v(":实例使用的根 DOM 元素")]),t._v(" "),a("li",[a("code",[t._v("vm.$options")]),t._v(":当前实例的初始化选项,对于获取自定义property很有用处")]),t._v(" "),a("li",[a("code",[t._v("vm.$parent")]),t._v(":父实例，如果当前实例有的话")]),t._v(" "),a("li",[a("code",[t._v("vm.$root")]),t._v(":当前组件树的根 Vue 实例,如果当前实例没有父实例，此实例将会是其自己。")]),t._v(" "),a("li",[a("code",[t._v("vm.$children")]),t._v(":当前实例的直接子组件。返回数组结构。 "),a("strong",[t._v("$children 并不保证顺序，也不是响应式的。")])]),t._v(" "),a("li",[a("code",[t._v("vm.$slots")]),t._v(":用来访问被插槽分发的内容。每个具名插槽有其相应的 "),a("code",[t._v("property")]),t._v(" (例如："),a("code",[t._v("v-slot:foo")]),t._v(" 中的内容将会在 "),a("code",[t._v("vm.$slots.foo")]),t._v(" 中被找到)。"),a("code",[t._v("default property")]),t._v(" 包括了所有没有被包含在具名插槽中的节点，或 "),a("code",[t._v("v-slot:default")]),t._v(" 的内容。")]),t._v(" "),a("li",[a("code",[t._v("vm.$scopedSlots")]),t._v(":用来访问作用域插槽。对于包括默认 "),a("code",[t._v("slot")]),t._v(" 在内的每一个插槽，该对象都包含一个返回相应 "),a("code",[t._v("VNode")]),t._v(" 的函数。"),a("strong",[t._v("所有的 $slots 现在都会作为函数暴露在 $scopedSlots 中。如果你在使用渲染函数，不论当前插槽是否带有作用域，我们都推荐始终通过 $scopedSlots 访问它们。这不仅仅使得在未来添加作用域变得简单，也可以让你最终轻松迁移到所有插槽都是函数的 Vue 3。")])]),t._v(" "),a("li",[a("code",[t._v("vm.$refs")]),t._v(":一个对象，持有注册过 ref attribute 的所有 DOM 元素和组件实例。")]),t._v(" "),a("li",[a("code",[t._v("vm.$isServer")]),t._v(":实例是否运行于服务器。")]),t._v(" "),a("li",[a("code",[t._v("vm.$attrs")]),t._v(":包含了父作用域中不作为"),a("code",[t._v("prop")]),t._v(" 被识别 (且获取) 的 "),a("code",[t._v("attribute")]),t._v(" 绑定 (class 和 style 除外)。当一个组件没有声明任何 prop 时，这里会包含所有父作用域的绑定 (class 和 style 除外)，并且可以通过 "),a("code",[t._v('v-bind="$attrs"')]),t._v(" 传入内部组件——在创建高级别的组件时非常有用。")]),t._v(" "),a("li",[a("code",[t._v("vm.$listeners")]),t._v(":包含了父作用域中的 (不含 "),a("code",[t._v(".native")]),t._v(" 修饰器的) "),a("code",[t._v("v-on")]),t._v(" 事件监听器。它可以通过 "),a("code",[t._v('v-on="$listeners"')]),t._v(" 传入内部组件——在创建更高层次的组件时非常有用。")])]),t._v(" "),a("h3",{attrs:{id:"实例数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实例数据"}},[t._v("#")]),t._v(" 实例数据")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("vm.$watch( expOrFn, callback, [options] )")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("options")]),t._v(":\n"),a("ul",[a("li",[a("code",[t._v("{boolean} deep")]),t._v(":发现对象内部值的变化")]),t._v(" "),a("li",[a("code",[t._v("{boolean} immediate")]),t._v(":立即以表达式的当前值触发回调")])])]),t._v(" "),a("li",[t._v("返回值："),a("code",[t._v("{Function} unwatch")])])])]),t._v(" "),a("li",[a("code",[t._v("vm.$set( target, propertyName/index, value )")])]),t._v(" "),a("li",[a("code",[t._v("vm.$delete( target, propertyName/index )")])])]),t._v(" "),a("h3",{attrs:{id:"实例事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实例事件"}},[t._v("#")]),t._v(" 实例事件")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("vm.$on( event, callback )")])]),t._v(" "),a("li",[a("code",[t._v("vm.$once( event, callback )")]),t._v(":监听一个自定义事件，但是只触发一次。一旦触发之后，监听器就会被移除。")]),t._v(" "),a("li",[a("code",[t._v("vm.$off( [event, callback] )")]),t._v(":移除自定义事件监听器。\n"),a("ol",[a("li",[t._v("如果没有提供参数，则移除所有的事件监听器；")]),t._v(" "),a("li",[t._v("如果只提供了事件，则移除该事件所有的监听器；")]),t._v(" "),a("li",[t._v("如果同时提供了事件与回调，则只移除这个回调的监听器。")])])]),t._v(" "),a("li",[a("code",[t._v("vm.$emit( eventName, […args] )")])])]),t._v(" "),a("h3",{attrs:{id:"生命钩子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生命钩子"}},[t._v("#")]),t._v(" 生命钩子")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("vm.$mount( [elementOrSelector] )")]),t._v(":如果 Vue 实例在实例化时没有收到 el 选项，则它处于“未挂载”状态，没有关联的 DOM 元素。可以使用 "),a("code",[t._v("vm.$mount()")]),t._v(" 手动地挂载一个未挂载的实例。")]),t._v(" "),a("li",[a("code",[t._v("vm.$forceUpdate()")]),t._v(":迫使 Vue 实例重新渲染。"),a("strong",[t._v("注意它仅仅影响实例本身和插入插槽内容的子组件，而不是所有子组件。")])]),t._v(" "),a("li",[a("code",[t._v("vm.$nextTick( [callback] )")]),t._v(":将回调延迟到下次 DOM 更新循环之后执行。在修改数据之后立即使用它，然后等待 DOM 更新。它跟全局方法 "),a("code",[t._v("Vue.nextTick")]),t._v(" 一样，不同的是回调的 this 自动绑定到调用它的实例上。")]),t._v(" "),a("li",[a("code",[t._v("vm.$destroy()")]),t._v(":完全销毁一个实例。清理它与其它实例的连接，解绑它的全部指令及事件监听器。触发 "),a("code",[t._v("beforeDestroy")]),t._v(" 和 "),a("code",[t._v("destroyed")]),t._v(" 的钩子。")])]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("不要在选项 property 或回调上使用箭头函数，比如 "),a("code",[t._v("created: () => console.log(this.a)")]),t._v(" 或 "),a("code",[t._v("vm.$watch('a', newValue => this.myMethod())")]),t._v("。因为箭头函数并没有 this，this 会作为变量一直向上级词法作用域查找，直至找到为止")])]),t._v(" "),a("h3",{attrs:{id:"生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生命周期"}},[t._v("#")]),t._v(" 生命周期")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cn.vuejs.org/images/lifecycle.png",alt:"lifecycle"}})]),t._v(" "),a("h4",{attrs:{id:"监听子组件的hooks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#监听子组件的hooks"}},[t._v("#")]),t._v(" 监听子组件的hooks")]),t._v(" "),a("p",[t._v("这些生命周期的 hooks 可以 emit 它们自己的自定义事件。前缀是 "),a("code",[t._v("hook:")])]),t._v(" "),a("p",[t._v("监听子组件的hooks,这个方法对于第三方的插件非常实用～～")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Child")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("@hook:")]),t._v("mounted")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("childMounted"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Child")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("h4",{attrs:{id:"异步注册hook"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#异步注册hook"}},[t._v("#")]),t._v(" 异步注册hook")]),t._v(" "),a("p",[t._v("异步注册hook:通过配合程序化的事件侦听器，"),a("code",[t._v("$on")]),t._v("、"),a("code",[t._v("$once")]),t._v("、"),a("code",[t._v("$off")]),t._v(" 来实现。")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$once")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hook:beforeDestory'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    func"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("destory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"模版语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模版语法"}},[t._v("#")]),t._v(" 模版语法")]),t._v(" "),a("p",[t._v("Vue 将模板编译成虚拟 DOM 渲染函数。结合响应系统，Vue 能够智能地计算出最少需要重新渲染多少组件，并把 DOM 操作次数减到最少。")]),t._v(" "),a("h3",{attrs:{id:"插值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插值"}},[t._v("#")]),t._v(" 插值")]),t._v(" "),a("ol",[a("li",[t._v("文本：双花括号")]),t._v(" "),a("li",[t._v("原始 HTML： "),a("code",[t._v("v-html")]),t._v("，但十分危险，容易引起XSS攻击。")]),t._v(" "),a("li",[t._v("Attribute："),a("code",[t._v('v-bind:id="dynamicId"')])])]),t._v(" "),a("h3",{attrs:{id:"指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#指令"}},[t._v("#")]),t._v(" 指令")]),t._v(" "),a("p",[t._v("指令包含参数、动态参数、和修饰符。")]),t._v(" "),a("h4",{attrs:{id:"动态参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态参数"}},[t._v("#")]),t._v(" 动态参数")]),t._v(" "),a("p",[t._v("可以用方括号括起来的 JavaScript 表达式作为一个指令的参数。")]),t._v(" "),a("ol",[a("li",[a("strong",[t._v("对动态参数的值的约束：除了字符串和null以外的值都会抛错。null也用于显式的移除绑定")])]),t._v(" "),a("li",[a("strong",[t._v("避免使用大写字符来命名键名，因为浏览器会将 attribute 名全部强制转为小写")])])]),t._v(" "),a("h4",{attrs:{id:"修饰符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修饰符"}},[t._v("#")]),t._v(" 修饰符")]),t._v(" "),a("ul",[a("li",[t._v("事件修饰符")]),t._v(" "),a("li",[t._v("按键修饰符")]),t._v(" "),a("li",[t._v("系统修饰符")]),t._v(" "),a("li",[a("code",[t._v("v-bind")]),t._v("修饰符\n"),a("ul",[a("li",[a("code",[t._v(".prop")]),t._v(": 作为一个 DOM property 绑定而不是作为 attribute 绑定。")]),t._v(" "),a("li",[a("code",[t._v(".camel")]),t._v(":将 kebab-case attribute 名转换为 camelCase")]),t._v(" "),a("li",[a("code",[t._v(".sync")]),t._v(":语法糖，会扩展成一个更新父组件绑定值的 "),a("code",[t._v("v-on")]),t._v(" 侦听器")])])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v(".prop 修饰符的作用")]),t._v(" "),a("p",[t._v("What is the difference between properties and attributes in HTML?")])])])}),[],!1,null,null,null);e.default=v.exports}}]);