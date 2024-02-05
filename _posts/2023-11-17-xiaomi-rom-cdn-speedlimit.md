---
title: "小米ROM下载限速解决方案"
date: 2023-11-17
tags: Android MIUI
categories: article
---

{% include warning-xiaomi.md %}

## 替换域名

将`bigota.d.miui.com`替换为`cdn-ota.azureedge.net`、`bn.d.miui.com`或`bkt-sgp-miui-ota-update-alisgp.oss-ap-southeast-1.aliyuncs.com`。

## 修改 hosts

当前，此方法似乎已失效。将跳转后链接中的`bigota`或`hugeota`替换成`superota`或`ultimateota`或许有效。

> 我不知道这样做为什么会有用，但确实有用，所以记录在这里。

修改 hosts：

```
123.6.13.6 bigota.d.miui.com
123.6.13.6 hugeota.d.miui.com
# 下面的不是必须
123.6.13.6 superota.d.miui.com
123.6.13.6 ultimateota.d.miui.com
```
