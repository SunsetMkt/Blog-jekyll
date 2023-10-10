---
title: "聚焦：商业化的虚拟主播行业可能存在的对“中之人”的压榨"
date: 2022-05-11
tags: 评论 聚焦 新闻 虚拟主播 ASoul
categories: article
---

> 本事件目前处于【未决】状态，本站【不为】消息的真实性负责。
>
> 不得不说您们年轻人的东西我是越来越搞不懂了......
>
> 无论真实性如何，这个问题的提出还是有些太晚了......

## 相关链接：

[A-SOUL_Official 的个人空间](https://space.bilibili.com/703007996/dynamic)

[皇珈骑士周报的个人空间](https://space.bilibili.com/1638018482/dynamic)

[【直播复盘】【5 月 11 日 【B 限】和大家聊聊天（珈乐单播部分）】](https://www.bilibili.com/read/cv16569045)

[【直播复盘】【5 月 11 日 【B 限】和大家聊聊天（珈乐单播部分）】(archive.org)](https://web.archive.org/web/20220512030348/https%3A%2F%2Fwww.bilibili.com%2Fread%2Fcv16569045)

[给一个魂们的一封信](https://www.bilibili.com/read/cv16567240)

[给一个魂们的一封信(archive.org)](https://web.archive.org/web/20220512030536/https%3A%2F%2Fwww.bilibili.com%2Fread%2Fcv16567240)

[枝江一朵雲的个人空间](https://space.bilibili.com/11855711/dynamic)

[WsNdiEee 的动态-哔哩哔哩](https://t.bilibili.com/658594232268750851)

[失乡骑士 33 的动态-哔哩哔哩](https://t.bilibili.com/658609938967298057)

[衿 gachi 的动态-哔哩哔哩](https://t.bilibili.com/658594154953048066)

## 另附：

似乎有那么点思辨性？不妨一看。

{% include video id="BV1XY4y1Y7BT" provider="bilibili" %}

<div>
    <div id="carol"></div>
    <script>
        function carol() {
            document.getElementById("carol").innerHTML = "https://space.bilibili.com/33605910" + "<br>" + "https://weibo.com/u/5693602165" + "<br>" + "https://music.163.com/artist?id=52047598";
            //window.open("https://space.bilibili.com/33605910");
            //window.open("https://weibo.com/u/5693602165");
            //window.open("https://music.163.com/artist?id=52047598");
        }
    </script>
    <a class="btn btn--info" onclick="carol();">Carol</a>
</div>

一个有趣的网页自动刷新脚本，在需要刷新的网页调试 Console 内执行。

```javascript
var timeout = 30;
var current = location.href;
if (timeout > 0) {
  setTimeout("reload()", 1000 * timeout);
} else {
  location.replace(current);
}

function reload() {
  setTimeout("reload()", 1000 * timeout);
  var fr4me = " <frameset cols='*'>\n<frame src='" + current + "' />";
  fr4me += "</frameset>";
  with (document) {
    write(fr4me);
    void close();
  }
}
```
