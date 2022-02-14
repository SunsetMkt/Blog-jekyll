---
title: 再见，DingTalk.
date: 2020-05-31
tags:  随笔
categories: article
---

三个月的网课假期最终还是结束了。为什么说是“假期”呢？因为在这三个月里我真的做了很多在学期内做不到的事。

首先在春节前完工了[happy-birthday-zwt-win32](https://github.com/lwd-temp/happy-birthday-zwt-win32)。虽然最后没能实际部署也（应该？）不会再有机会部署但还是很有趣的经历。

比起rns.py（随机姓名选择器）的“开发”速度，这次已经有了很大的发展。

希望还能有机会玩一玩Win32API和C++.

也希望还能再有机会让<span class="heimu" title="你知道的太多了">上层叙事Z</span>再惊奇（？）（还是惊吓(笑)）一次。

其次，第一次使用专业的抓包工具（Fiddler）抓取并替换了钉钉的页面请求实现了快速刷赞并随后发布了教程和技术分析（GitHub项目DingTalkUtil），并实现了破解禁止点赞和丧心病狂的死循环刷赞。

虽然点赞数可任意上传的漏洞最后被修补，单次请求最高赞数限制在20，死循环点赞依然有效。

还要强调一点，使用最初的技术手段刷赞**绝对不可能**造成直播卡顿，只靠单次上传较大数值就造成直播卡顿几乎是不可能的（反倒是后期的死循环刷赞理论上更易造成服务器繁忙，不过直播服务和信息推送和接受服务应该分离才对吧？）（我也进行了相关测试）唯一可能的解释是钉钉在**最初**无法承受大量多人直播而导致卡顿。

对于刷赞者的污名化我保持理解，但在做出推断前还请亲自证实。我们的世界并不充满了巴浦洛夫式的直观条件反射，很多技术问题是不能通过现象解决的。

还有一件事，钉钉的直播是可以同时下载的，请求通常为flv视频文件，把URL丢给ffmpeg就可以保存了，命令举例：
```shell
ffmpeg -i 直播URL 文件名.mp4
```

（为什么是flv？因为这是一种直播技术，这里不作赘述。）

如果要下载回放：
```shell
ffmpeg -i m3u8文件URL -c:v copy -c:a copy -bsf:a aac_adtstoasc 文件名.mp4
```

还有一些有趣的事情，

* 原始意图是改善我过于hardcore的Bilibili首页推荐（之前一直充满了“如何折磨你的硬件/软件”和古老游戏的讲解，甚至还有Python教学视频）决定看一看日漫，没想到却意外地适合我。（真的惊艳于制作工艺和叙事手法）
* 写了个无聊的软件，却在处理大文件时直接OutOfMemory了。
* 用于测试钉钉功能的组织“余晖教育和科技集团”真的有了[具体设定](/article/about-lwd-temp)
* 意外地练熟了Markdown
* 搞了这个网站
* 熟悉了git的操作
* 认真地维护了一下我的GitHub账号

关于上文的*无聊的软件*，它就是[Zwtfy.py](https://github.com/lwd-temp/Zwtfy.py).

开发时间更短（几个小时），bug也更少（OutOfMemory不是软件的错啦！(其实是优化~~没做好~~根本没做)），后期测试表明它用于混淆短字符串更有前途。

最后尝试了用Fiddler替换青年大学习的视频内容。事实证明，只要配置得当，只需要一个内网HTTP服务器和Fiddler就能把视频替换成你想要的任何内容（时长不限）。

实现思路1

> 直接替换所有mp4请求为本地文件
> 
> （本地文件太大就不太稳定了）

实现思路2

> 修改主机hosts，使大学习资源文件服务器域名指向内网HTTP服务器。
> 
> 手机端尝试播放视频，获取404记录，在服务器上合适的位置放置你的视频文件并在手机上播放。

还有一件事情不能多说，<span class="heimu" title="你知道的太多了">综评网的很多API不验证权限和操作</span>。

最后一件事情，我在网课的最后三天体验了一次网课“摸鱼”，认真地说，这真的很令人难以忍受，在上课时拒绝听讲这种不人道的事情是怎么可能坚持三个月的？

在文章的最后，我想再纪念一些人，

* “造谣者”Dr.Li和其余共8人
* 武汉市由于“医疗挤兑”和大量医院关停而无法得到及时救治的其他患者
* 全国所有因新冠肺炎不幸去世和已治愈但可能留有后遗症的患者们
* 无论怎样宣称“援鄂医疗队零感染零伤亡”但仍无法回避的殉职的医护人员们
* 殉职的其他工作人员
* 在网课期间由于种种情况处于困境中或决定自杀的学生们
* 世界上所有感染COVID-19的人们，这些是人，不是数字。
* 所有人，毕竟你们都还在这里。
<!--* 还有不知名的某位学姐，我没有忘记悲剧，为你哀悼-->

还有一件事，钉钉在这三个月里免费提供了各种超cool的功能，包括千人直播、在线多人协作表格编辑还有绝对不限速的钉盘（就是没有办法直接分享直链）。钉钉的公关也很令人称道，从发视频[“求饶”](https://www.bilibili.com/video/BV1K7411E7Zm)到“无中生有”地创新了[两个虚拟角色](https://www.bilibili.com/video/BV1xE411p7KS)，再到[与其他产品的联动](https://www.bilibili.com/video/BV1XE41157Wo)和[3D模型的成功构建](https://www.bilibili.com/video/BV1xA411t7FE)，以及[在发布会上的出现](https://www.bilibili.com/video/BV12i4y1473n)（就是很好奇是真的3D投影还是类似春晚的处理方式），每一次都令人惊喜。

Hmm...也许“五星好评，一次付清”？

（钉钉的正式英文翻译应该是DingTalk）

{% include video id="BV1pp4y1X7Wa" provider="bilibili" %}

<style>
.heimu, .heimu a, a .heimu, .heimu a.new {
    background-color: #252525;
    color: #252525;
    text-shadow: none;
}
.heimu:hover, .heimu:active,
.heimu:hover .heimu, .heimu:active .heimu {
    color: white !important;
}
.heimu:hover a, a:hover .heimu,
.heimu:active a, a:active .heimu {
    color: lightblue !important;
}
.heimu:hover .new, .heimu .new:hover, .new:hover .heimu,
.heimu:active .new, .heimu .new:active, .new:active .heimu {
    color: #BA0000 !important;
}

/*阅读更多：https://zh.moegirl.org/MediaWiki:Mobile.css 本文引自萌娘百科(https://zh.moegirl.org)，文字内容默认使用《知识共享 署名-非商业性使用-相同方式共享 3.0》协议。*/
</style>
