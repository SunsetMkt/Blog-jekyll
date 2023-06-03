---
title: 取决于日期的自动网页黑白滤镜Demo
date: 2021-12-13
tags: demo 前端 JavaScript
categories: demo
---

```javascript
function applyBlackAndWhiteFilterOnDate(targetDate) {
  var currentDate = new Date();
  var targetMonth = targetDate.split('-')[0];
  var targetDay = targetDate.split('-')[1];
  
  // 检查当前日期是否与目标日期相等
  if (
    currentDate.getMonth() + 1 === parseInt(targetMonth) &&
    currentDate.getDate() === parseInt(targetDay)
  ) {
    // 将整个 HTML 页面设置为黑白滤镜
    document.documentElement.style.filter = "grayscale(100%)";
  }
}

applyBlackAndWhiteFilterOnDate('12-31');
```
