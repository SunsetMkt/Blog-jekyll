---
title: "开发人员工具"
layout: single
permalink: /dev/
---

<p class="notice--danger">
    警告：您清楚您在做什么吗？请在完全理解本页面内容的情况下操作。
</p>
<p class="notice--info">
    使用开发人员工具需要JavaScript、Cookies和localStorage支持。
</p>

---

{% if site.data['hash'] %}
当前提交：{{ site.data['hash'] }}
{% else %}
当前提交：未知（检查 jekyll-git-hash）
{% endif %}

<!--
当前构建随机码（仅在此页展示）：{% include random %}

（同构建页面的 footer 为另一组唯一随机码）
-->

{% if jekyll.environment == "production" %}
构建环境：生产环境
{% else %}
构建环境：非生产环境（{{ jekyll.environment }}）
{% endif %}

---

[Jekyll 主题参考文档](https://mmistakes.github.io/minimal-mistakes/docs/quick-start-guide/)

---

## 调试功能

### 清空 localStorage

<div>

    <a class="btn btn--info" onclick="localStorage.clear();location.reload();">清空localStorage</a>

</div>

### 快速重置

[Reset](/reset/)

### Eruda

URL 参数`eruda=true`

<div class="eruda-btns">

    <a class="btn btn--info" onclick="localStorage.setItem('active-eruda','true');location.reload();">启动Eruda</a>

    <a class="btn btn--info" onclick="localStorage.removeItem('active-eruda');location.reload();">关闭Eruda</a>

</div>

### vConsole

URL 参数`vconsole=true`

<div class="vconsole-btns">

    <a class="btn btn--info" onclick="localStorage.setItem('active-vconsole','true');location.reload();">启动vConsole</a>

    <a class="btn btn--info" onclick="localStorage.removeItem('active-vconsole');location.reload();">关闭vConsole</a>

</div>

## 统计和遥测

### 遥测（非常规）

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

### Cloudflare Zaraz 管理的网站统计

<div class="zaraz-btns">

    <script>
      function setCookie(cname, cvalue, exdays, domain) {
        var d = new Date();
        d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
        var expires = "expires=" + d.toUTCString();
        var cookieString = cname + "=" + cvalue + ";" + expires + ";path=/";
        if (domain) {
          cookieString += ";domain=" + domain;
        }
        document.cookie = cookieString;
      }

      function getMainHost() {
        // https://developer.aliyun.com/article/195912
        let key = `mh_${Math.random()}`;
        let keyR = new RegExp(`(^|;)\\s*${key}=12345`);
        let expiredTime = new Date(0);
        let domain = document.domain;
        let domainList = domain.split(".");

        let urlItems = [];
        // 主域名一定会有两部分组成
        urlItems.unshift(domainList.pop());
        // 慢慢从后往前测试
        while (domainList.length) {
          urlItems.unshift(domainList.pop());
          let mainHost = urlItems.join(".");
          let cookie = `${key}=${12345};domain=.${mainHost}`;

          document.cookie = cookie;

          //如果cookie存在，则说明域名合法
          if (keyR.test(document.cookie)) {
            document.cookie = `${cookie};expires=${expiredTime}`;
            return mainHost;
          }
        }
      }

      function DisableAnalytics() {
        setCookie("DisableAnalytics", "true", 400, "." + getMainHost());
      }

      function RmDisableAnalytics() {
        setCookie("DisableAnalytics", "true", 0, "." + getMainHost());
      }
    </script>

    <a class="btn btn--info" onclick="DisableAnalytics();location.reload();">添加禁用标记</a>

    <a class="btn btn--info" onclick="RmDisableAnalytics();location.reload();">删除禁用标记</a>

</div>

### 其他网站统计

使用[uBlock Origin](https://ublockorigin.com/)以禁用。

## 字体

### 将字体设置为 LXGW WenKai Screen （霞鹜文楷屏幕阅读版）

关于 [lxgw-wenkai-webfont](https://github.com/chawyehsu/lxgw-wenkai-webfont)

这是一个实验性选项，应用字体的方式不标准，可能会造成页面功能问题。

<div class="LxgwWenKaiScreen-btns">

    <a class="btn btn--info" onclick="localStorage.setItem('active-LxgwWenKaiScreen','true');location.reload();">启动</a>

    <a class="btn btn--info" onclick="localStorage.removeItem('active-LxgwWenKaiScreen');location.reload();">关闭</a>

</div>

### 将字体设置为 Genshin Impact 的主要字体

关于 [此字体](https://genshin-impact.fandom.com/wiki/Typeface)

这是一个实验性选项，应用字体的方式不标准，可能会造成页面功能问题。

<div class="HK4ECNFont-btns">

    <a class="btn btn--info" onclick="localStorage.setItem('active-HK4ECNFont','true');location.reload();">启动</a>

    <a class="btn btn--info" onclick="localStorage.removeItem('active-HK4ECNFont');location.reload();">关闭</a>

</div>

### 将字体设置为 LXGW WenKai（霞鹜文楷）

关于 [lxgw-wenkai-webfont](https://github.com/chawyehsu/lxgw-wenkai-webfont)

这是一个实验性选项，应用字体的方式不标准，可能会造成页面功能问题。

<div class="LxgwWenKai-btns">

    <a class="btn btn--info" onclick="localStorage.setItem('active-LxgwWenKai','true');location.reload();">启动</a>

    <a class="btn btn--info" onclick="localStorage.removeItem('active-LxgwWenKai');location.reload();">关闭</a>

</div>

## Just Monika.

### 获取 Monika

[monika.chr](/assets/media/ddlc_characters/monika.chr)

_这里提供了来自[Doki Doki Literature Club!](https://ddlc.moe/)的资源。_
