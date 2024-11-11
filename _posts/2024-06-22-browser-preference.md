---
title: 提案：在Manifest V3和Google的推动下向Firefox和Brave移动
date: 2024-06-22
tags: Firefox Brave 浏览器 Windows
categories: article
---

快速获取浏览器：[Firefox](https://www.mozilla.org/firefox/) [Brave](https://brave.com/)

Google 决定在 Chromium 中推行富有争议 Manifest V3 标准并移除对 V2 的支持，这将导致大量依赖 V2 版本 API 的广告屏蔽和隐私保护扩展的表现不佳。此更改会影响 Chrome 和 Edge 等依赖 Chromium 的浏览器。

在这里，我们主要讨论 PC 端体验。它们需要满足以下要求：

- Windows 下对 x64 和 ARM64 架构的支持
- Linux 支持
- 隐私保护特性
- 开放源代码（可编译）
- 不强制使用 VPN

我们谨慎地评估了市面上常见的浏览器，并最终选择了 Firefox 和 Brave（基于 Chromium，使用[brave-debullshitinator](https://github.com/MulesGaming/brave-debullshitinator)移除不必要的功能。请注意，Brave 的开发商不是非营利性组织）。

预期中的使用场景是：主要使用 Firefox，并将 Brave 作为兼容性替代。（MS Edge 可作为 Internet Explorer 的兼容性替代，但是，说真的，我们最好尽快弃用那些仅支持 Internet Explorer 的网站）

对于那些即将淘汰的没有预装 MS Edge 的 Windows 设备，Chrome 可以作为临时的快速替代品。

在 Google 提供更多有利于广告屏蔽扩展的变更前，我们将不再积极推荐基于 Chromium 的浏览器。
