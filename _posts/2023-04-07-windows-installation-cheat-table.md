---
title: 标准Windows安装速查表
date: 2023-04-07
tags: Microsoft Windows Office
categories: article
---

## 系统镜像
[官方媒体制作工具/ISO下载](https://www.microsoft.com/zh-cn/software-download/windows11)

> 如不显示ISO下载，使用开发人员工具切换UserAgent到Apple设备（iPad等），刷新。

或者，

[定制镜像](https://uupdump.net/)

### ISO写入USB设备
[Rufus](https://rufus.ie/zh/)

### Windows 11 OOBE跳过在线账号
按下`Shift + F10`，在弹出的CMD中执行`oobe\bypassnro`

## 安装Office
[Office Tool Plus](https://otp.landian.vip/zh-cn/)

[官方O365ProPlusRetail简体中文在线安装程序](https://c2rsetup.officeapps.live.com/c2r/download.aspx?productReleaseID=O365ProPlusRetail&platform=Def&language=zh-cn)

## 激活
> 虽然最好是支持正版的说...

> ~~微软官方客服使用的（[来源](https://twitter.com/TCNOco/status/1634620446002774018)，[网页存档](https://archive.is/kThLf)，[新闻报道](https://www.bleepingcomputer.com/news/security/microsoft-support-cracks-windows-for-customer-after-activation-fails/)）~~激活脚本：

[Microsoft-Activation-Scripts](https://github.com/massgravel/Microsoft-Activation-Scripts)

或者直接在Powershell中执行：

```pwsh
irm https://massgrave.dev/get | iex
```

支持永久数字激活Windows 10/11，KMS激活Windows和Office（包括365，以一种*workaround*的方法）。

或者，

[CMWTAT_Digital_Edition](https://github.com/TGSAN/CMWTAT_Digital_Edition)

有漂亮的GUI，并且可以切换Windows授权版本。

> 两者可以结合使用，`CMWTAT_Digital_Edition`切换版本和激活Windows，`Microsoft-Activation-Scripts`KMS激活Office。

