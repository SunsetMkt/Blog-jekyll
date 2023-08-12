---
title: "关于MIUI国际版的备忘"
date: 2023-04-19
tags: Android MIUI
categories: article
---

* 中国大陆版的备份功能在国际版MIUI中**不一定可用**。[Android-DataBackup](https://github.com/XayahSuSuSu/Android-DataBackup)（需要[root](https://github.com/topjohnwu/Magisk)）是个不错的替代品。
* 大多数国际版的拨号键盘、日历和通讯录使用Google原版应用，除了部分**印尼版**MIUI（也有通话录音功能）。
* [EU](https://xiaomi.eu/community/)版不是官方维护的版本，使用中国大陆的MIUI修改而来。

其他的Tips：

* 对于部分小米设备，如果跟随[Magisk的官方安装教程](https://topjohnwu.github.io/Magisk/install.html)，在执行`fastboot flash vbmeta --disable-verity --disable-verification vbmeta.img`后发生了bootloop，这可能说明这一步根本不需要。执行`fastboot flash vbmeta vbmeta.img`可能会修复bootloop。
* 在一些设备上，刷入国际版系统后登录Google账号可能会导致不可逆的交替性开机时间严重延长，原因未知。恢复出厂设置可以解决问题，但登录Google账号后问题仍发生。
