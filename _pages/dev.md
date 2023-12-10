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

---

{% if site.github.build_revision %}
当前提交：{{ site.github.build_revision }}
{% else %}
当前提交：未知（非 GitHub Pages 构建环境）
{% endif %}

当前构建随机码（仅在此页展示）：{% include random %}

（同构建页面的 footer 为另一组唯一随机码）

{% if jekyll.environment == "production" %}
当前环境：生产环境
{% else %}
当前环境：非生产环境（{{ jekyll.environment }}）
{% endif %}

构建状态：![pages-build-deployment](https://github.com/lwd-temp/lwd-temp.github.io-jekyll/actions/workflows/pages/pages-build-deployment/badge.svg)

---

[Jekyll 主题参考文档](https://mmistakes.github.io/minimal-mistakes/docs/quick-start-guide/)

---

## Eruda

URL 参数`eruda=true`

<div class="eruda-btns">

    <a class="btn btn--info" onclick="localStorage.setItem('active-eruda','true');location.reload();">启动Eruda</a>

    <a class="btn btn--info" onclick="localStorage.removeItem('active-eruda');location.reload();">关闭Eruda</a>

</div>

## vConsole

URL 参数`vconsole=true`

<div class="vconsole-btns">

    <a class="btn btn--info" onclick="localStorage.setItem('active-vconsole','true');location.reload();">启动vConsole</a>

    <a class="btn btn--info" onclick="localStorage.removeItem('active-vconsole');location.reload();">关闭vConsole</a>

</div>

## 遥测

> 默认关闭，不要使用，除非被开发者/网站管理人员建议。不一定可以正常运行。
>
> 理论上会执行单独上报设备信息的操作。

<p class="notice--danger">
    不要点击此链接，除非被开发者/网站管理人员建议。
</p>

<div>
  <p id="telemetry-trigger" style="display: none">
    <a href="/?telemetry=triggeredByDevPageWithDNSIPLeak"
      >遥测（点击一次，等待页面完整加载即可）</a
    >
  </p>
  <p id="show-telemetry-trigger">
    点击此文本 ${showTelemetryTriggerCount} 次以显示遥测链接
  </p>
  <script>
    const showTelemetryTrigger = document.getElementById(
      "show-telemetry-trigger"
    );
    const telemetryTrigger = document.getElementById("telemetry-trigger");
    var showTelemetryTriggerCount = 5;

    showTelemetryTrigger.innerHTML = `点击此文本 ${showTelemetryTriggerCount} 次以显示遥测链接`;

    showTelemetryTrigger.addEventListener("click", () => {
      showTelemetryTriggerCount--;
      showTelemetryTrigger.innerHTML = `点击此文本 ${showTelemetryTriggerCount} 次以显示遥测链接`;
      if (showTelemetryTriggerCount <= 0) {
        telemetryTrigger.style.display = "block";
        showTelemetryTrigger.style.display = "none";
      }
    });

  </script>
</div>

## Umami

<div class="umami-btns">

    <a class="btn btn--info" onclick="localStorage.setItem('umami.disabled','true');location.reload();">添加禁用Umami标记</a>

    <a class="btn btn--info" onclick="localStorage.removeItem('umami.disabled');location.reload();">删除禁用Umami标记</a>

</div>

## 其他网站统计

使用[uBlock Origin](https://ublockorigin.com/)以禁用。

## 获取 Monika

~~Just Monika.~~ [monika.chr](/assets/media/ddlc_characters/monika.chr)

## 将字体设置为 LXGW WenKai Screen （霞鹜文楷屏幕阅读版）

关于 [lxgw-wenkai-webfont](https://github.com/chawyehsu/lxgw-wenkai-webfont)

这是一个实验性选项，应用字体的方式不标准，可能会造成页面功能问题。

<div class="LxgwWenKaiScreen-btns">

    <a class="btn btn--info" onclick="localStorage.setItem('active-LxgwWenKaiScreen','true');location.reload();">启动</a>

    <a class="btn btn--info" onclick="localStorage.removeItem('active-LxgwWenKaiScreen');location.reload();">关闭</a>

</div>
