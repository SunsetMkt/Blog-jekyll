---
title: "开发人员选项"
excerpt: "开发人员选项"
layout: single
permalink: /dev.html
---

<p class="notice--danger">
    警告：您清楚您在干什么吗？请在完全理解本页面内容的情况下操作。
</p>
<p class="notice--info">
    使用开发人员选项需要启动JavaScript和Local Storage支持。
</p>

------

[Jekyll主题参考文档](https://mmistakes.github.io/minimal-mistakes/docs/quick-start-guide/)

------

# 开发人员选项

## Eruda

URL参数`eruda=true`

<div class="eruda-btns">

    <a class="btn btn--info" onclick="localStorage.setItem('active-eruda','true');location.reload();">启动Eruda</a>

    <a class="btn btn--info" onclick="localStorage.removeItem('active-eruda');location.reload();">关闭Eruda</a>

</div>

## vConsole

URL参数`vconsole=true`

<div class="vconsole-btns">

    <a class="btn btn--info" onclick="localStorage.setItem('active-vconsole','true');location.reload();">启动vConsole</a>

    <a class="btn btn--info" onclick="localStorage.removeItem('active-vconsole');location.reload();">关闭vConsole</a>

</div>

```html
<script data-cfasync="false">
;(function () {
    var src = '//cdn.jsdelivr.net/npm/eruda';
    if (!/eruda=true/.test(window.location) && localStorage.getItem('active-eruda') != 'true') return;
    document.write('<scr' + 'ipt src="' + src + '"></scr' + 'ipt>');
    document.write('<scr' + 'ipt>eruda.init();</scr' + 'ipt>');
})();
;(function () {
    var src = '//unpkg.com/vconsole@latest/dist/vconsole.min.js';
    if (!/vconsole=true/.test(window.location) && localStorage.getItem('active-vconsole') != 'true') return;
    document.write('<scr' + 'ipt src="' + src + '"></scr' + 'ipt>');
    document.write('<scr' + 'ipt>var vConsole = new window.VConsole();</scr' + 'ipt>');
})();
</script>
```
