---
title: 安装Kaspersky Security Cloud Free简体中文版或卡巴斯基免费版
date: 2023-07-23
tags: Windows 杀毒软件 Kaspersky 卡巴斯基
categories: article
---

Kaspersky Security Cloud Free是个人认为卡巴斯基系列免费版的最优（设置项、其他非杀毒工具/功能）产品，但是官方提供的下载渠道不包括简体中文版，本文描述如何安装Kaspersky Security Cloud简体中文版。

## 下载
从[卡巴斯基中国大陆](https://www.kaspersky.com.cn/)的[试用页面](https://www.kaspersky.com.cn/downloads)选择卡巴斯基安全软件的[30天试用下载](https://www.kaspersky.com.cn/downloads/internet-security-free-trial#download)。

## 安装
添加`/pPRODUCTTYPE=saas`参数启动安装程序，为了达到这个目的，可以在安装程序的快捷方式上添加参数，或者在安装程序的安装目录下创建一个`install.cmd`文件，内容如下：

我们假设下载的安装程序文件名为`kis21.3.10.391abzh-Hans_26153.exe`，则`install.cmd`文件内容为：

```powershell
kis21.3.10.391abzh-Hans_26153.exe /pPRODUCTTYPE=saas
```

运行`install.cmd`文件，即可安装Kaspersky Security Cloud中文版。

或者，在安装程序所在文件夹按下Shift+鼠标右键，选择“在此处打开PowerShell窗口”，输入以下命令：

```powershell
.\kis21.3.10.391abzh-Hans_26153.exe /pPRODUCTTYPE=saas
```

注意：使用Kaspersky Security Cloud Free需要注册Kaspersky账号。

## 备注
在联机时，采用此方法安装的Kaspersky Security Cloud中文版和通过官方渠道安装的英文版，版本号相同。

Kaspersky可能正在变更产品策略，若上述页面不可用，可尝试[此链接](https://trial.s.kaspersky-labs.com/registered/xapi5wqwgf32q6omgp38/3436353739367c44454c7c32_26153/kis21.3.10.391abzh-Hans_26153.exe)直接下载安装程序（通过Kaspersky的服务器）。（[备用在线安装链接，请也使用命令行参数调用](https://dm.s.kaspersky-labs.com/zh-Hans-CN/KIS/21.3.10.391/startup.exe)）

若您正在使用中国大陆的网络且登录Kaspersky账号有问题，请尝试使用全局代理。

## 卡巴斯基免费版
如果Kaspersky彻底移除了Kaspersky Security Cloud产品，您可以尝试卡巴斯基免费版（[在线安装链接](https://dm.s.kaspersky-labs.com/zh-Hans-CN/Kaspersky4Win/21.14.5.462/startup.exe)）并使用激活码：

<div>
    <div class="keys">
        <code>3SXCM-M9RJM-6985N-PWKP7</code>
    </div>
    <style>
        .keys {
            user-select: none;
            filter: blur(3px);
        }
    </style>
</div>

来激活免费版。

您可以参考[此资料](https://forum.kaspersky.com/topic/latest-offline-installer-for-kis-2572/#comment-13319)和[此资料](https://forum.kaspersky.com/topic/install-kaspersky-in-command-prompt-31603/)来构建Kaspersky拒绝提供的离线安装包。
