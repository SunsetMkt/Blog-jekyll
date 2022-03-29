---
title: "关于状态页"
date: 2021-12-07
tags: 站务
categories: notice
---
[状态页](https://status.lwd-temp.top/)是用于显示本站站点群状态的站点。您正在阅读的是一份说明，这里提供了理解状态页提供信息的方法。

# 概述

界面中每个显示的服务都包含以下部分：服务名称、服务链接以及服务的最新和历史状态，分别对应每行的标题、标题旁的链接按钮、状态显示以及历史状态图形化展示条。

## 服务名称

### 服务部署描述方式

每个服务名称后的括号(example/example)用于记录它的部署方式，从左向右为从您的浏览器到实际服务提供商，左斜杠用于分隔两个相邻的服务商代号。

|    服务商代号    |                                           描述                                           |
| :---------------: | :---------------------------------------------------------------------------------------: |
|        cf        |                 [Cloudflare](https://www.cloudflare.com/) 本站域名托管及CDN                 |
|      railway      |                      [Railway](https://railway.app/) Docker容器部署服务                      |
|     gh-pages     |               [GitHub Pages](https://pages.github.com/) GitHub的静态页托管服务               |
|      vercel      |      [Vercel](https://vercel.com/) 支持从代码库云端构建的页面托管服务以及Serverless服务      |
|    cf-workers    | [Cloudflare Workers](https://cloudflareworkers.com) 位于云端的可JavaScript编程的请求处理服务 |
|      yandex      |                     [Яндекс](https://yandex.ru/) 站点邮箱主提供商                     |
|    uptimerobot    |                   [UptimeRobot](https://uptimerobot.com/) 网站状态检测服务                   |
|      okteto      |                     [Okteto](https://okteto.com/) Kubernetes容器部署服务                     |
|      wikidot      |                        [Wikidot](https://www.wikidot.com/) Wiki类站点                        |
| any或其他未提到的 |                                 这个服务可能用于反向代理                                 |

### 弃用标记

(Deprecated)用于标记长期无人使用且不再被维护的服务，请一定不要使用这些服务，它们更有可能随时消失且不保留服务数据。

## 信息安全警告

这里列出的服务，除非在Blog中有明确的提示，否则均为不可靠服务。

也就是说，管理员并不在意这些服务的安全性。通常地，它们会使用弱密码和一次性数据库（即使这个服务看起来似乎应该长期储存您的信息）。

保护您在这些服务上的信息安全不是我们的首要目标，甚至根本不是目标。这些服务仅用于测试和个人使用。

对于过分地信任这些服务导致的任何事故，我们拒不承担任何责任。

如果您执意要使用的话，请做好数据或整个服务都可能会在下一秒消失的预期。
