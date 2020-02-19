(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{375:function(t,e,v){"use strict";v.r(e);var _=v(5),r=Object(_.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"重绘和回流"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#重绘和回流"}},[t._v("#")]),t._v(" 重绘和回流")]),t._v(" "),v("p",[t._v("面试中经常被问到什么是回流和重绘，所以在这里做一个总结。")]),t._v(" "),v("h3",{attrs:{id:"什么是重绘（repaints）"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#什么是重绘（repaints）"}},[t._v("#")]),t._v(" 什么是重绘（repaints）")]),t._v(" "),v("p",[t._v("当一个元素的外观的可见性 visibility 发生改变的时候，重绘(repaint)也随之发生，但是不影响布局。")]),t._v(" "),v("p",[t._v("会触发重绘的属性包括：outline, visibility, color, background color, translate 等。")]),t._v(" "),v("h3",{attrs:{id:"什么是回流（reflow）"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#什么是回流（reflow）"}},[t._v("#")]),t._v(" 什么是回流（reflow）")]),t._v(" "),v("p",[t._v("元素的规模尺寸，布局，隐藏等改变从而影响到页面布局的变化时就会触发回流。一个元素的回流会导致其所有子元素以及 DOM 中紧随其后的祖先元素的随后的回流。")]),t._v(" "),v("p",[v("strong",[t._v("注意：回流必将引起重绘，而重绘不一定会引起回流。")])]),t._v(" "),v("h3",{attrs:{id:"导致回流的原因"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#导致回流的原因"}},[t._v("#")]),t._v(" 导致回流的原因")]),t._v(" "),v("ul",[v("li",[t._v("页面首次渲染")]),t._v(" "),v("li",[t._v("调整窗口大小")]),t._v(" "),v("li",[t._v("改变字体")]),t._v(" "),v("li",[t._v("增加或者移除样式表")]),t._v(" "),v("li",[t._v("内容变化，比如用户在 input 框中输入文字")]),t._v(" "),v("li",[t._v("激活 CSS 伪类，比如 :hover (IE 中为兄弟结点伪类的激活)")]),t._v(" "),v("li",[t._v("操作 class 属性")]),t._v(" "),v("li",[t._v("脚本操作 DOM")]),t._v(" "),v("li",[t._v("计算 offsetWidth 和 offsetHeight 属性")]),t._v(" "),v("li",[t._v("设置 style 属性的值")])]),t._v(" "),v("p",[t._v("因为现代浏览器为了减少重绘回流对性能的影响，所以做了一些优化操作，会把引起回流、重绘的操作放入到一个队列中，等队列中的操作到了一定的数量或者到了一定的时间间隔，浏览器就会 flush 队列，进行一个批处理。这样就会让多次的回流、重绘变成一次回流重绘。")]),t._v(" "),v("p",[t._v("但是当 JS 获取以下 style 信息时，浏览器会立即 flush 队列，触发回流：")]),t._v(" "),v("ul",[v("li",[t._v("clientWidth、clientHeight、clientTop、clientLeft")]),t._v(" "),v("li",[t._v("offsetWidth、offsetHeight、offsetTop、offsetLeft")]),t._v(" "),v("li",[t._v("scrollWidth、scrollHeight、scrollTop、scrollLeft")]),t._v(" "),v("li",[t._v("width、height")]),t._v(" "),v("li",[t._v("getComputedStyle()")]),t._v(" "),v("li",[t._v("getBoundingClientRect()")])]),t._v(" "),v("h3",{attrs:{id:"如何避免回流"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#如何避免回流"}},[t._v("#")]),t._v(" 如何避免回流")]),t._v(" "),v("p",[t._v("如何避免回流的产生可以从 CSS 和 JS 两个方面进行优化")]),t._v(" "),v("h4",{attrs:{id:"css-优化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#css-优化"}},[t._v("#")]),t._v(" CSS 优化")]),t._v(" "),v("ul",[v("li",[t._v("如果想设定元素的样式，通过改变元素的 class 名 (尽可能在 DOM 树的最末端)")]),t._v(" "),v("li",[t._v("避免设置多项内联样式")]),t._v(" "),v("li",[t._v("应用元素的动画，使用 position 属性的 fixed 值或 absolute 值")]),t._v(" "),v("li",[t._v("权衡平滑和速度")]),t._v(" "),v("li",[t._v("避免使用 table 布局")]),t._v(" "),v("li",[t._v("避免使用 CSS 的 JavaScript 表达式 (仅 IE 浏览器)")])]),t._v(" "),v("h4",{attrs:{id:"js-优化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#js-优化"}},[t._v("#")]),t._v(" JS 优化")]),t._v(" "),v("ul",[v("li",[t._v("避免频繁操作样式")]),t._v(" "),v("li",[t._v("避免频繁操作 DOM")]),t._v(" "),v("li",[t._v("避免频繁读取会引发回流/重绘的属性")])]),t._v(" "),v("blockquote",[v("p",[t._v("参考链接：")])]),t._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"http://www.stubbornella.org/content/2009/03/27/reflows-repaints-css-performance-making-your-javascript-slow/",target:"_blank",rel:"noopener noreferrer"}},[t._v("REFLOWS & REPAINTS: CSS PERFORMANCE MAKING YOUR JAVASCRIPT SLOW?"),v("OutboundLink")],1)]),t._v(" "),v("li",[v("a",{attrs:{href:"https://www.zhoulujun.cn/html/webfront/browser/webkit/2016_0506_7820.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("chrome 对页面重绘和回流以及优化进行优化"),v("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=r.exports}}]);