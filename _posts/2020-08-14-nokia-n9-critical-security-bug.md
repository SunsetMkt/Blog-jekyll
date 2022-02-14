---
title: Nokia N9 的关键性安全漏洞
date: 2020-08-14
tags:  MeeGo Nokia 漏洞 bug 关键性
categories: article
---

首次发布于[Maemo Talk 论坛](http://talk.maemo.org/showthread.php?p=1568752)。

### 中英对照翻译版本（原稿英语）

The Aegis Security system checks each executable's md5 when it is executed.But the referred md5(calculated when the executable first installed) is stored in an unsafe file.

Aegis安全系统在可执行文件以特定高权限（详见`accli -I`）执行时检查每个可执行文件的MD5。但对照的MD5（在deb包安装时计算）保存在不安全的文件中。

/var/lib/aegis/refhashlist (or some path like this)

文件路径：`/var/lib/aegis/refhashlist`（或类似的路径）

The file has a `rw-rw-rw-` permission which means any user could read and write it.

此文件权限设置为`rw-rw-rw-`（所属用户（即root）可读可写，同组（即root组）用户可读可写，其他用户（除上述root及root组外）可读可写），这意味着任何用户均可读写。

So,a malware executed by user(with lowest permission) could just write it to an empty file to break the Aegis and crash the MeeGo OS.

所以，一个被用户（以最低权限）执行的恶意软件可以将其写为空文件以破坏Aegis并使操作系统崩溃。

For example:

例如：

\-----------


Don't try this on your phone!!!!

不要在你的设备上尝试！！！！


\----------
I tried this on a newly flashed N9 device with a 3rd party terminal without developer mode.

我在一个新刷机的N9设备上未开启开发者模式使用第三方终端模拟器尝试这个操作。

I just simply run:

我简单地执行了：

echo ''&gt;&gt;The path to the refhashlist file.

`echo ''>>到refhashlist文件的路径`

And

和

echo ''&gt;&gt;There is also a refhashlist.bak file.

`echo ''>>还有refhashlist.bak文件的路径`

If you do so,any executable with root permission won't run again.The device won't shutdown unless you force it by long-press the power button.

如果你这么做，任何以root权限执行的可执行文件不会再次运行。设备无法关机（因为`shutdown`程序无法运行）除非长按电源键强制关机。

The device reports OS error and request fixing when you try to boot it after the force shutdown.

当你在强制关机之后再次启动时，设备报告操作系统错误并且要求维修。

I'm afraid that this would be a critical safety problem for MeeGo.

By the way,is there a security problem with the OpenSSH Server installed by Developer Mode?

### bug修复建议[^1]


鉴于Aegis在`dpkg`执行时以root权限执行，可以考虑建立一个只有root用户可读写的原始文件（例如`refhashlist.origin`，仅在安装新可执行文件时可写）。在`/etc`下复制一份只读文件（例如`refhashlist.read`）并由特定程序与原始文件对照更新（例如`aegis-refhashlistupdaterd`）。

[^1]: Nokia的原开发团队已解散，这部分代码未开源。