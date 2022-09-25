---
title: 蔚蓝档案的现存可能逆向工程方案和一些废话
date: 2022-09-25
tags: 逆向工程 Unity 蔚蓝档案
categories: article
---

## 背景
蔚蓝档案(Blue Archive)是个除了Gameplay外都很有趣的游戏。

## 资源文件下载解包
游戏的资源文件是Unity的AssetBundle，可以通过AssetStudio解包。

[K0lb3/Blue-Archive---Asset-Downloader](https://github.com/K0lb3/Blue-Archive---Asset-Downloader)是一个支持下载蔚蓝档案资源文件并导出的工具。

BA的大部分媒体资源文件都未经加密，可以直接解包。文本资源是加密的，具体解密方法见`K0lb3/Blue-Archive---Asset-Downloader`，我读不懂。

我的执念之一是导出这个游戏的对话文本，似乎很难实现。

和此项目类似的还有[blue-archive-spine](https://github.com/respectZ/blue-archive-spine)用于下载并导出蔚蓝档案的Spine动画和立绘（纪念大厅动画和人物立绘），并可直接在浏览器中播放。（不幸的是，部分动画会崩坏，原因不明）

此项目的日服支持见[这个Fork](https://github.com/lwd-temp/blue-archive-spine)，可能并不完善。

## 私服？
这个游戏存在创建私服的可能性，但是我不知道如何实现。

一些初步调查表明，它没有SSL Pinning，连接使用TCP。

## 有趣的事实
BA会收集用户的手机型号、通信运营商、系统语言、系统地区、内网和公网IP、系统Launcher（启动器）包名和系统版本。
