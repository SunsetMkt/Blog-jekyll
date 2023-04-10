---
title: "在适用于 Android™️ 的 Windows 子系统中启用VPN应用程序"
date: 2023-04-10
tags: Microsoft Windows WSA Android
categories: article
---

虽然WSA似乎已提供`VpnDialogs`应用程序，但它似乎仍然不能正常显示VPN应用授权对话。

这是一个可行的跳过授权的方法：

启动WSA的开发人员模式后，使用`adb`连接WSA。

执行：

```shell
adb shell

appops set example.package.name ACTIVATE_VPN allow
```

（将`example.package.name`替换成需要授权的应用程序包名）
