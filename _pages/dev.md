---
title: "开发人员工具"
excerpt: "开发人员工具"
layout: single
permalink: /dev/
---

<p class="notice--danger">
    警告：您清楚您在做什么吗？请在完全理解本页面内容的情况下操作。
</p>
<p class="notice--info">
    使用开发人员工具需要启动JavaScript和localStorage支持。
</p>

------

当前提交：{{ site.github.build_revision }}

（若`commit hash`不存在，则非GitHub Pages构建，此时utterances不可用）

当前构建随机码（仅在此处展示）：{% include random %}

构建状态：![pages-build-deployment](https://github.com/lwd-temp/lwd-temp.github.io-jekyll/actions/workflows/pages/pages-build-deployment/badge.svg)

------

[Jekyll主题参考文档](https://mmistakes.github.io/minimal-mistakes/docs/quick-start-guide/)

------

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

<!--

```html
<script data-cfasync="false">
;(function () {
    var src = '//unpkg.com/eruda@latest/eruda.js';
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

-->

## Umami

<div class="umami-btns">

    <a class="btn btn--info" onclick="localStorage.setItem('umami.disabled','true');location.reload();">添加禁用Umami标记</a>

    <a class="btn btn--info" onclick="localStorage.removeItem('umami.disabled');location.reload();">删除禁用Umami标记</a>

</div>

## 其他网站统计
使用[uBlock Origin](https://ublockorigin.com/)以禁用。

## 获取Monika
~~Just Monika.~~ [monika.chr](/assets/media/ddlc_characters/monika.chr)
