---
title: AntiDisableLike
date: 2020-03-17
tags:  原创 JavaScript 前端
categories: article
---

# 反禁止点赞  
在LikeSummoner中,我们讨论了如何修改上传点赞数量,接下来,我们将讨论如何绕过禁止点赞.  
# 我们需要什么?  
见LikeSummoner.  
# 我们怎么知道我们要做什么?  
我们仍然使用名称搜索法来尝试使网页忽略禁止点赞设置.  
以Disable为关键词在source.js中查找,发现`disableThumbup`变量及相关函数.  
```javascript
14251,21:                     disableThumbup: !1,  
14262,26:                     this.disableThumbup ? this.messageBox(I.i18next.t("pc_grouplive_live_favor_ban_tips"), [I.i18next.t("pc_grouplive_i_know"), ""]) : (this.favorCountType = "action", this.favorCount++, this.favorCountCache++)  
14518,35:                             o = n.disableThumbup,  
14520,109:                         t.viewCount = e.liveStats.audienceCount, t.liveStatus = r, t.viewerShareType = i, t.disableThumbup = a, 2 === r && (t.status = "pause")  
```
阅读代码,注意到如下代码段:  
```javascript
14262,26:                     this.disableThumbup ? this.messageBox(I.i18next.t("pc_grouplive_live_favor_ban_tips"), [I.i18next.t("pc_grouplive_i_know"), ""]) : (this.favorCountType = "action", this.favorCount++, this.favorCountCache++)  
```
# 这是什么东西???  
三元运算符是软件编程中的一个固定格式，语法是“条件表达式？表达式1：表达式2”。使用这个算法可以使调用数据时逐级筛选。  
语法为：条件表达式？表达式1：表达式2。  
说明：问号前面的位置是判断的条件，判断结果为`bool`型，为`true`时调用表达式1，为`false`时调用表达式2。  
其逻辑为：“如果条件表达式成立或者满足则执行表达式1，否则执行第二个。”常用在设置默认值,例如某个值不一定存在,则判断这个值是否存在,不存在给默认值(表达式2)。  
(来源 百度百科)  
所以原代码可解释为 禁止点赞了吗?如果是,给个弹窗,内容是变量(可能是为了实现多语言)PC群直播禁止点赞提醒,按钮内容是PC群直播我知道.如果未禁止,点赞计数类型变量改为`action`,点赞数自加`1`,点赞数上传缓存自加`1`.  
# 我们的需求呢?  
无论何时都允许点赞,即无论何时都"点赞计数类型变量改为`action`,点赞数自加`1`,点赞数上传缓存自加`1`"  
于是原代码可改为 禁止点赞了吗?如果是,点赞计数类型变量改为`action`,点赞数自加`1`,点赞数上传缓存自加`1`.如果未禁止,点赞计数类型变量改为`action`,点赞数自加`1`,点赞数上传缓存自加`1`.  
# 道理我都懂,可是代码呢?  
根据原始代码,我们可以直接照抄表达式2如下:  
```javascript
this.disableThumbup ? (this.favorCountType = "action", this.favorCount++, this.favorCountCache++) : (this.favorCountType = "action", this.favorCount++, this.favorCountCache++)  
```
可见,原始代码:  
```javascript
this.disableThumbup ? this.messageBox(I.i18next.t("pc_grouplive_live_favor_ban_tips"), [I.i18next.t("pc_grouplive_i_know"), ""]) : (this.favorCountType = "action", this.favorCount++, this.favorCountCache++)  
```
修改后代码:  
```javascript
this.disableThumbup ? (this.favorCountType = "action", this.favorCount++, this.favorCountCache++) : (this.favorCountType = "action", this.favorCount++, this.favorCountCache++)  
```
将对`messageBox`函数的调用改为对变量的操作.  
# 我们要怎么做?  
1.获取pc-live-v3.html并保存备份.  
2.修改`this.messageBox(I.i18next.t("pc_grouplive_live_favor_ban_tips"), [I.i18next.t("pc_grouplive_i_know"), ""])`为`(this.favorCountType = "action", this.favorCount++, this.favorCountCache++)`并保存为patched-pc-live-v3.html(实例见代码库)  
3.替换请求,参照LikeSummoner操作.  
# 新的限制?  
2020\3\17测试,此解决方案似乎只有和LikeSummoner结合使用才能有显著效果?  
# 警告  
此解决方案仅用于技术研究,作者不对任何人的不当行为负责.  
# 关于真实性检验和DingTalk方面的修复意见  
禁用点赞功能的直播不能点赞.  
在服务器端禁止点赞数据接收和推送.  
# 版权  
此文档为原创内容,转载请注明原始URL.  