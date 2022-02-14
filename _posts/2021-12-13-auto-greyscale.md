---
title: 取决于日期的自动网页黑白滤镜Demo
date: 2021-12-13
tags: demo 前端 JavaScript
categories: demo
---

```javascript
//这是一段来自某省青年大学习的陈旧代码
var b = new Date()
var day = b.getFullYear() + '-' + (b.getMonth() + 1) + '-' + b.getDate()
if (day == '2020-4-4') {
    var style = document.createElement("style");
    var t = document.createTextNode("html { -webkit-filter: grayscale(100%);-moz-filter: grayscale(100%);-ms-filter: grayscale(100%);-o-filter: grayscale(100%);filter: grayscale(100%);filter: gray; }");
    style.appendChild(t);
    document.body.appendChild(style);
}
```

优化版

```javascript
//我本来想列出全部的纪念日，查了一下发现这样就没剩下什么不用这个函数的时候了，
//于是作罢，这个需要用户自行补充，这里只提供一些随便打的日期，仅供观赏

function greyscale() {
    var newstyle = document.createElement("style");
    var newstylecontent = document.createTextNode("html { -webkit-filter: grayscale(100%);-moz-filter: grayscale(100%);-ms-filter: grayscale(100%);-o-filter: grayscale(100%);filter: grayscale(100%);filter: gray; }");
    newstyle.appendChild(newstylecontent);
    document.body.appendChild(newstyle);
}

function setGreyscaleByDate() {
    var nowdate = new Date();
    var phrasedday = (nowdate.getMonth() + 1) + '-' + nowdate.getDate();
    //GitHub Copilot的自动补全生成了这些日期，可以自行添加或修改
    var greydays = ['12-13', '9-18', '4-4', '4-21', '5-1', '5-2', '5-3', '5-4', '5-5', '5-6', '5-7', '5-8', '5-9', '5-10', '5-11', '5-12', '5-13', '5-14', '5-15', '5-16', '5-17', '5-18', '5-19', '5-20', '5-21', '5-22', '5-23', '5-24', '5-25', '5-26', '5-27', '5-28', '5-29', '5-30', '5-31', '6-1', '6-2', '6-3', '6-4', '6-5', '6-6', '6-7', '6-8', '6-9', '6-10', '6-11', '6-12', '6-13', '6-14', '6-15', '6-16', '6-17', '6-18', '6-19', '6-20', '6-21', '6-22', '6-23', '6-24', '6-25', '6-26', '6-27', '6-28', '6-29', '6-30', '7-1', '7-2', '7-3', '7-4', '7-5', '7-6', '7-7', '7-8', '7-9', '7-10', '7-11', '7-12', '7-13', '7-14', '7-15', '7-16', '7-17', '7-18', '7-19', '7-20', '7-21', '7-22', '7-23', '7-24', '7-25', '7-26', '7-27', '7-28', '7-29', '7-30', '7-31', '8-1', '8-2', '8-3', '8-4', '8-5', '8-6', '8-7', '8-8'];
    if (greydays.includes(phrasedday)) {
        console.log("It's a grey day!");
        greyscale();
    }
}

setGreyscaleByDate();
```

再改进一点？

```javascript
function greyscale() {
    var newstyle = document.createElement("style");
    var newstylecontent = document.createTextNode("html { -webkit-filter: grayscale(100%);-moz-filter: grayscale(100%);-ms-filter: grayscale(100%);-o-filter: grayscale(100%);filter: grayscale(100%);filter: gray; }");
    newstyle.appendChild(newstylecontent);
    document.body.appendChild(newstyle);
}

function confGreyscaleByDate(datelist) {
    var nowdate = new Date();
    var phrasedday = (nowdate.getMonth() + 1) + '-' + nowdate.getDate();
    var greydays = datelist;
    if (greydays.includes(phrasedday)) {
        greyscale();
    }
}

confGreyscaleByDate(['12-19']); //把这里的列表换成你想要的日期
```


<script>
//我本来想列出全部的纪念日，查了一下发现这样就没剩下什么不用这个函数的时候了，
//于是作罢，这个需要用户自行补充，这里只提供一些随便打的日期，仅供观赏

function greyscale() {
    var newstyle = document.createElement("style");
    var newstylecontent = document.createTextNode("html { -webkit-filter: grayscale(100%);-moz-filter: grayscale(100%);-ms-filter: grayscale(100%);-o-filter: grayscale(100%);filter: grayscale(100%);filter: gray; }");
    newstyle.appendChild(newstylecontent);
    document.body.appendChild(newstyle);
}

function setGreyscaleByDate() {
    var nowdate = new Date();
    var phrasedday = (nowdate.getMonth() + 1) + '-' + nowdate.getDate();
    //GitHub Copilot的自动补全生成了这些日期，可以自行添加或修改
    var greydays = ['12-13', '9-18', '4-4', '4-21', '5-1', '5-2', '5-3', '5-4', '5-5', '5-6', '5-7', '5-8', '5-9', '5-10', '5-11', '5-12', '5-13', '5-14', '5-15', '5-16', '5-17', '5-18', '5-19', '5-20', '5-21', '5-22', '5-23', '5-24', '5-25', '5-26', '5-27', '5-28', '5-29', '5-30', '5-31', '6-1', '6-2', '6-3', '6-4', '6-5', '6-6', '6-7', '6-8', '6-9', '6-10', '6-11', '6-12', '6-13', '6-14', '6-15', '6-16', '6-17', '6-18', '6-19', '6-20', '6-21', '6-22', '6-23', '6-24', '6-25', '6-26', '6-27', '6-28', '6-29', '6-30', '7-1', '7-2', '7-3', '7-4', '7-5', '7-6', '7-7', '7-8', '7-9', '7-10', '7-11', '7-12', '7-13', '7-14', '7-15', '7-16', '7-17', '7-18', '7-19', '7-20', '7-21', '7-22', '7-23', '7-24', '7-25', '7-26', '7-27', '7-28', '7-29', '7-30', '7-31', '8-1', '8-2', '8-3', '8-4', '8-5', '8-6', '8-7', '8-8'];
    if (greydays.includes(phrasedday)) {
        console.log("It's a grey day!");
        greyscale();
    }
}

setGreyscaleByDate();
</script>
