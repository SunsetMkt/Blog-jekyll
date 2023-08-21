---
title: 标准Windows安装速查表
date: 2023-04-07
tags: Microsoft Windows Office
categories: article
---

## 推荐的方案
对于任何可运行Windows 11的现代设备，推荐使用Windows 11专业工作站版。

不再建议安装Windows 10，除非有必须这样做的原因。

若设备无法运行面向个人消费者的Windows 10版本，可使用Windows 10 IoT Enterprise LTSC 2021（使用简体中文版Enterprise LTSC 2021安装，Microsoft-Activation-Scripts会自动将其转换为IoT版本）。

Office版本一律推荐O365ProPlus，并使用Microsoft-Activation-Scripts激活。

## 系统镜像
建议：[Windows 11 官方媒体制作工具/ISO下载](https://www.microsoft.com/zh-cn/software-download/windows11)

不建议：[Windows 10（October 14, 2025停止支持）](https://www.microsoft.com/zh-cn/software-download/windows10)

> 如不显示ISO下载，使用开发人员工具切换UserAgent到Apple设备（iPad等），刷新。

### ISO写入USB存储设备
[Rufus](https://rufus.ie/zh/)

### Windows 11 OOBE跳过在线账号
按下`Shift + F10`，在弹出的CMD中执行`oobe\bypassnro`

## 安装Office
推荐：[官方O365ProPlusRetail简体中文在线安装程序](https://c2rsetup.officeapps.live.com/c2r/download.aspx?productReleaseID=O365ProPlusRetail&platform=Def&language=zh-cn)

<!--
https://massgrave.dev/office_c2r_links.html#Chinese_[zh-cn] 认为，此链接为
https://c2rsetup.officeapps.live.com/c2r/download.aspx?ProductreleaseID=O365ProPlusRetail&platform=x64&language=zh-cn&version=O16GA
-->

需要安装特定版本：[Office Tool Plus](https://otp.landian.vip/zh-cn/)

## 激活
> 虽然最好是支持正版的说...

> ~~微软官方客服使用的（[来源](https://twitter.com/TCNOco/status/1634620446002774018)，[网页存档](https://archive.is/kThLf)，[新闻报道](https://www.bleepingcomputer.com/news/security/microsoft-support-cracks-windows-for-customer-after-activation-fails/)）~~激活脚本：

推荐：[Microsoft-Activation-Scripts](https://github.com/massgravel/Microsoft-Activation-Scripts)

或者直接在Powershell中执行：

```pwsh
irm https://massgrave.dev/get | iex
```

支持永久数字激活Windows 10/11，KMS激活Windows和Office（包括365，以一种*workaround*的方法），并且可以切换Windows授权版本。

或者，

[CMWTAT_Digital_Edition](https://github.com/TGSAN/CMWTAT_Digital_Edition)

有漂亮的GUI，并且可以切换Windows授权版本。

## 其他的
可以通过[创建一个恢复驱动器](https://support.microsoft.com/zh-cn/windows/%E5%88%9B%E5%BB%BA%E4%B8%80%E4%B8%AA%E6%81%A2%E5%A4%8D%E9%A9%B1%E5%8A%A8%E5%99%A8-abb4691b-5324-6d4a-8766-73fab304c246)来备份OEM提供的操作系统镜像（若存在），建议在收到产品后就这样做，此备份可能有不可替代的应用场景。

你可以在[这里](https://massgrave.dev/)获得更多关于下载和安装Windows和Office的参考资料。此第三方提供的[Windows和Office下载资源](https://massgrave.dev/genuine-installation-media.html)被认为是可靠的。

不建议使用[UUPDump](https://uupdump.net/)获取镜像，除非有必须这样做的需求。

有关下载Windows 10 LTSC的说明,请参考[这里](https://massgrave.dev/windows_ltsc_links.html)。[TL;DR](https://files.rg-adguard.net/file/7ce8b5a4-57d2-905c-62f3-e4d44e25bcf3)。

LTSC安装Microsoft Store：管理员执行`wsreset -i`。

特别感谢[MASSGRAVE](https://github.com/massgravel)。
