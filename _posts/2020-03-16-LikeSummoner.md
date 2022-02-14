---
title: LikeSummoner
date: 2020-03-16
tags:  原创 JavaScript 前端
categories: article
---

# 点赞召唤者  
使用类中间人攻击替换修改的PC端直播页面便于增加点赞数量.  
本实验中使用Fiddler实现请求替换.  
# 甚么是Fiddler?
Fiddler是一个HTTP协议调试代理工具,它能够记录并检查所有你的电脑和互联网之间的HTTP通讯,设置断点,查看所有的“进出”Fiddler的数据（指Cookies,HTML,Javascript,CSS等文件）.(来源 百度百科)  
https://www.telerik.com/fiddler  
# 我们要用它来做什么?  
使用其AutoResponder功能实现类似中间人攻击的页面替换效果.  
# 我们怎么知道我们要怎么做?  
通过前期抓包测试,我们可以发现,DingTalk的PC端直播页面使用HTML,CSS和JavaScript实现,并且可以获得直播页面的原始URL如下:  
https://h5.m.taobao.com/tblive/dingtalk/pc-live-v3.html  
(代码库内包含此文件在2020\3\13的版本)  
提取文件中的JavaScript部分并排版可得source.js  
根据函数名,在js文件中的14548行可以找到`dingtalk.grouplive.uploadLikesClick(B, t.favorCountCache)`即 函数 钉钉.群直播.上传赞点击(B变量,赞数缓存)  
在其他功能尚不明晰的情况下(本仓库作者并未学习JavaScript),我们可以尝试修改`t.favorCountCache`变量为一个常量从而使每次上传时提交的赞数保持一定值.  
修改`t.favorCountCache`为任意大于0的整数(不要过大,极限为2147483647,会导致溢出,不要使用上述极限值),或可实现需求.  
注意:截至2020\3\15,DingTalk服务器似乎已经禁止了过大数值的上传,每次上传数值似乎不能大于100?  
# 新的限制和解决方案  
可以通过多次少量的方法实现大量的点赞召唤,注意到代码  
`t.favorCountCache > 0 && (dingtalk.grouplive.uploadLikesClick(B, t.favorCountCache),t.favorCountCache = 0)}, 1e4)`  
我们可以组阻止`favorCountCache`被重置为0以便点赞流程循环进行,1e4即1*10^4,盲猜延时(毫秒),故我们可以将原始代码修改为:  
`t.favorCountCache > 0 && (dingtalk.grouplive.uploadLikesClick(B,20),t.favorCountCache = 1)}, 1)`  
即一旦点击点赞按钮每1毫秒上传20次点赞.  
注意:使用此方法修改会导致死循环.  
最好的方案是新增网页元素,提供新按钮用于控制循环,在这里我们暂且不作讨论.  
# 我们要怎么做?  
1.请求https://h5.m.taobao.com/tblive/dingtalk/pc-live-v3.html 并保存.  
2.修改t.favorCountCache或使用你喜欢的方式修改并保存为patched-pc-live-v3.html (实例见代码库)  
3.安装并打开Fiddler.  
4.点击Tools-Options-HTTPS 勾选Capture HTTPS CONNECTs 和Decrypt HTTPS traffic 安装证书(如果提示) 勾选Check for certificate revocation  
5.回到主界面,点击AutoResponder 勾选Enable rules和Unmatched requests passthrough  
6.点击Add Rules 在Rule Editor的第一行填入https://h5.m.taobao.com/tblive/dingtalk/pc-live-v3.html 第二行填入patched-pc-live-v3.html文件路径 点击Save  
7.清除DingTalk的网页缓存`%LOCALAPPDATA%\DingTalk\Cache`下以f开头的某个文件或者点击直播窗口上的无延迟模式以诱导重新载入网页.  
8.测试点赞  
# 警告  
此解决方案仅用于技术研究,作者不对任何人的不当行为负责.  
# 关于真实性检验和DingTalk方面的修复意见  
40min内可能达到的最大真实(仅使用原始点击操作)点赞数在2000万左右.  
可以考虑增加每用户每分钟点赞最大数量限制或对请求的内容校验?  
# 版权和引用资料  
此文档的部分内容参考自互联网上的相关内容,作者不保留对此文档的任何权利.  