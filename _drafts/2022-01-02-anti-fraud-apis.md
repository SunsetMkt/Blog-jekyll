---
title: 闲来无事看看反诈中心App
date: 2022-01-02
tags: 逆向工程 入狱警告 法律的边缘 Android
categories: article
---

冬日无事，听说“MIUI13 内置反诈中心”的“传言”（现在该叫谣言了）突发兴致，取反诈中心 apk 文件，看着 52pojie.cn 的逆向教程，做个零基础逆向工程。

## 咱用了什么工具

- AndroidKiller
- dex2jar
- apktool
- jd-gui
- frida

## 先放 AndroidKiller 里看看吧

定睛一看几个 qihoo 关键字，不得了，360 加固，代码先不管他。

这第一次搞逆向什么也不认识啊，lib 里大概都是 so 二进制；res 里一堆界面布局动画图片；smali 好像是各个函数之间的调用关系，加固的，没法看；kotlin？好像是什么新标准，不认识；就剩下 unknown 和 assets 了，挨个打开看看吧。

### assets

顾名思义，就资源文件呗，咱先看看都有点什么：

- 一个证书 GeoTrust Inc.
- 一个字体 DIN-Medium
- 几张图片
- 几个 so 库，360 加固的居多
- 两个大 json，什么 lottie on/off 看不懂
- 一个小 json，腾讯的什么 sdk 吧
- live*model*什么什么 好像是面部活体检测模型 dpn 文件 2020 年 12 月的好像
- 一个叫 address.txt 的 json，里面是硬编码进去的省市区地区选项，全国的都有
- 还有几个可能是数据库 dat sdb bks amf 文件，硬打开看看 UTF-8 解码好像有号码簿、证书集合、“反诈联盟”的不知道什么

### unknown

估计是 apktool 拆包之后不知道干什么的文件，打开看看呗：

- okhttp3/internal/publicsuffix okhttp3 库的公共后缀列表
- androidsupportmultidexversion.txt 里面就一句 git.version=一段 hash
- miui_push_version 记版本号
- openinstall 记版本号
- push_version 还是记版本号

感觉是不是打包了点多余的东西进去？

### AndroidManifest.xml

包信息，没什么值得注意的。

貌似注册了各个平台的推送服务。

差不多就这些，该脱壳了。

## frida 登场，脱壳，反编译

根据网上教程在手机上运行 frida，运行个 frida 脚本就能脱出 360 加固的 dex 文件，dex2jar 获得 jar 反编译得伪代码。

在手机上安装反诈中心，运行 frida，发现 MagiskHide 和 frida 不兼容报错，关闭 MagiskHide，启动 frida，frida 启动反诈中心，反诈中心提示 root 环境，行吧，差不多也提取了点 dex，就是可能不全。

把 jar 拖进 jd-gui 一看，好家伙，把 Android 还有 MediaTech 都给脱出来了，不管他，我看不懂的才是加固过的。

“a”、“b”、“c”就这样的，打开瞧瞧，大部分我都看不懂，就几个变量可能还有点用，我便猜猜：

### API 基础地址？

```java
public static void a() {
    a = "https://fzapp.gjfzpt.cn/hicore";
  }

  public static void b() {
    b = "https://fzapp.gjfzpt.cn/file";
    c = "https://fzapp.gjfzpt.cn/xcapi";
    b = q1.u(b);
    c = q1.u(c);
  }

  public static void c() {
    d = "https://fzapph5.gjfzpt.cn/";
    d = q1.u(d);
  }

  public static void d() {
    // 出于职业操守删节
    a = q1.u(a);
    // 出于职业操守删节
    b = q1.u(b);
    // 出于职业操守删节
    d = q1.u(d);
    e = d;
  }

  public static String e() {
    // 出于职业操守删节
  }
```

您说说，这要是拿几个 gov.cn 该多体面？

### API 地址？

```java
public class b {
    // 出于职业操守删节
  }
}
```

这 API 地址命名倒是有点乱，同一个名怎么还分首字母大小写？

### 不知道什么？

```java
public class c {
  public static String a = "call_intercepte";

  public static String b = "sms_intercepte";

  public static String c = "record_intercepte";

  public static String d = "app_intercepte";
}
```

估计就四个主打功能吧。

### 录音文件位置？

```java
public class d {
  public static final String a = "MIUI/sound_recorder/call_rec";

  public static final String b = "Recordings/Call Recordings";

  public static final String c = "Recordings";

  public static final String d = "Sounds/CallRecord";

  public static final String e = ";

  public static final String f = "Sounds";

  public static final String g = "Recorder/remote";
}
```

各种 UI 的通话录音位置，反编译中间缺个引号咱也不去管他。

剩下的东西零零散散也看不出什么，没有具体逻辑就不放出来了。

期间折腾我的 Android Studio 虚拟设备安装 Magisk 失败按下不表，最后还是在实体机上运行的 frida-server。

至于我用的那个提取 dex 的脚本网上搜索便是，而且可能有 bug，就不放出来误人子弟了。

## 总结一下？

我个人感觉啊，这个项目里面好像技术难度最高的应该是那个 360 加固。

下次打包的时候尽量别把版本信息什么的带进来，资源文件好好命个名，于人于己都方便。

活体验证就用个在线的 SDK 吧，本地模型该删就删。

API 服务器好像用的 CentOS？好像结束支持了该换就换吧，我个人推荐 Debian 系。

UI 风格有点辣眼睛，感觉像智能手机刚出来那会儿，那些个“360 手机卫士”。

有空给自己弄个 gov.cn 域名，看着气派。

我奉劝各位，以后写 Android App 的时候千万别学他。

差不多也饿了，想起前些日子填充的方便面储备库，煮一碗“鲜虾鱼板”面，嘬一口汤，今天的钠离子摄入量又要超标了。
