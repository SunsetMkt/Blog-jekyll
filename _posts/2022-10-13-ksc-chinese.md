---
title: 安装Kaspersky Security Cloud Free中文版
date: 2022-10-13
tags: Windows 杀毒软件 Kaspersky 卡巴斯基
categories: article
---

Kaspersky Security Cloud Free是个人认为卡巴斯基系列免费版的最优产品，但是官方提供的下载渠道不包括中文版，本文介绍如何安装中文版。

## 下载
从[卡巴斯基中国](https://www.kaspersky.com.cn/)的[试用页面](https://www.kaspersky.com.cn/downloads)选择卡巴斯基安全软件的[30天试用下载](https://www.kaspersky.com.cn/downloads/internet-security-free-trial#download)。

## 安装
添加`/pPRODUCTTYPE=saas`参数启动安装程序，为了达到这个目的，可以在安装程序的快捷方式上添加参数，或者在安装程序的安装目录下创建一个`install.cmd`文件，内容如下：

我们假设下载的安装程序文件名为`kis21.3.10.391abzh-Hans_26153.exe`，则`install.cmd`文件内容为：

```cmd
kis21.3.10.391abzh-Hans_26153.exe /pPRODUCTTYPE=saas
```

运行`install.cmd`文件，即可安装Kaspersky Security Cloud Free中文版。

或者，在安装程序所在文件夹按下Shift+鼠标右键，选择“在此处打开PowerShell窗口”，输入以下命令：

```powershell
.\kis21.3.10.391abzh-Hans_26153.exe /pPRODUCTTYPE=saas
```

注意：使用Kaspersky Security Cloud Free需要注册账号。
