---
title: iOS 字符串渲染bug
date: 2020-04-27
tags:  iOS bug
categories: article
---

[体验一下？](/assets/html/ios-str-bug.html)

[如何看待苹果设备疑似出现重大闪退的 Bug？可能的原因是什么？ - 知乎](https://www.zhihu.com/question/390280089)

```
作者：Belleve
链接：https://www.zhihu.com/question/390280089/answer/1177554064
来源：知乎
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

U+0628 U+064D U+064D U+064D U+064D U+064E U+064E U+064F U+064F U+064F U+0650 U+0651 U+0651 U+0651 U+0652
U+0631 U+064D U+064D U+064D U+064D U+064E U+064E U+064F U+064F U+0650 U+0650 U+0651 U+0651 U+0651 U+0652
U+0622 U+064D U+064D U+064D U+064E U+064F U+0651
U+1F1EE U+1F1F9 U+0020
U+0628 U+064D U+064D U+064D U+064D U+064E U+064E U+064F U+064F U+064F U+0650 U+0651 U+0651 U+0651 U+0652
U+0631 U+064D U+064D U+064D U+064D U+064E U+064E U+064F U+064F U+0650 U+0650 U+0651 U+0651 U+0651 U+0652
U+0622 U+064D U+064D U+064D U+064E U+064F U+0651
U+1F1EE U+1F1F9
```

```
作者：fwq2020
https://www.bilibili.com/read/cv5754045/
出处： bilibili
\u628\u64d\u64d\u64d\u64d\u64e\u64e\u64f\u64f\u64f\u650\u651\u651\u651\u652\u631\u64d\u64d\u64d\u64d\u64e\u64e\u64f\u64f\u650\u650\u651\u651\u651\u652\u622\u64d\u64d\u64d\u64e\u64f\u651\u20\ud83e\udda0\u20\u628\u64d\u64d\u64d\u64d\u64e\u64e\u64f\u64f\u64f\u650\u651\u651\u651\u652\u631\u64d\u64d\u64d\u64d\u64e\u64e\u64f\u64f\u650\u650\u651\u651\u651\u652\u622\u64d\u64d\u64d\u64e\u64f\u651
```