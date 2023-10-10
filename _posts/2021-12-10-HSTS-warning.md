---
title: "警告：HSTS已全站启用"
date: 2021-12-10
tags: 站务
categories: notice
---

以下信息已包含在所有由 Cloudflare 代理的 https 流量请求 HTTP header 中

```http
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
X-Content-Type-Options: nosniff
```

本站域名已提交 Chromium 的 HSTS 预加载列表（[HSTS Preload List Submission](https://hstspreload.org/)），正在等待提交到预加载列表(is pending submission to the preload list)。

强制 HTTPS 跳转已经通过 Cloudflare 页面规则设置在大部分页面上，lwd-temp.top 的跳转规则经过特殊设置以便实现 HSTS 合规，部分页面（Vercel 的域名验证）强制使用不安全连接。

# 备忘

[HTTP Strict Transport Security - HTTP | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Strict-Transport-Security)

[X-Content-Type-Options - HTTP | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/X-Content-Type-Options)

# HTTP Strict Transport Security

`<strong> HTTP Strict Transport Security</strong>`（通常简称为[HSTS](https://developer.mozilla.org/zh-CN/docs/Glossary/HSTS)）是一个安全功能，它告诉浏览器只能通过 HTTPS 访问当前资源，而不是[HTTP](https://developer.mozilla.org/en-US/HTTP "en/HTTP")。

| Header type                                                                                      | [Response header](https://developer.mozilla.org/zh-CN/docs/Glossary/Response_header) |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| [Forbidden header name](https://developer.mozilla.org/zh-CN/docs/Glossary/Forbidden_header_name) | no                                                                                   |

## [语法](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Strict-Transport-Security#%E8%AF%AD%E6%B3%95 "Permalink to 语法")

```
Strict-Transport-Security: max-age=<expire-time>
Strict-Transport-Security: max-age=<expire-time>; includeSubDomains
Strict-Transport-Security: max-age=<expire-time>; preload
```

## [指令](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Strict-Transport-Security#%E6%8C%87%E4%BB%A4 "Permalink to 指令")

`max-age=<expire-time>`设置在浏览器收到这个请求后的 `<expire-time>`秒的时间内凡是访问这个域名下的请求都使用 HTTPS 请求。`includeSubDomains` **可选**如果这个可选的参数被指定，那么说明此规则也适用于该网站的所有子域名。`preload` **可选**查看 [预加载 HSTS](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Strict-Transport-Security#%E9%A2%84%E5%8A%A0%E8%BD%BD_hsts) 获得详情。不是标准的一部分。

## [描述](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Strict-Transport-Security#%E6%8F%8F%E8%BF%B0 "Permalink to 描述")

一个网站接受一个 HTTP 的请求，然后跳转到 HTTPS，用户可能在开始跳转前，通过没有加密的方式和服务器对话，比如，用户输入http://foo.com或者直接foo.com。

这样存在中间人攻击潜在威胁，跳转过程可能被恶意网站利用来直接接触用户信息，而不是原来的加密信息。

网站通过 HTTP Strict Transport Security 通知浏览器，这个网站禁止使用 HTTP 方式加载，浏览器应该自动把所有尝试使用 HTTP 的请求自动替换为 HTTPS 请求。

**注意:** `Strict-Transport-Security` 在通过 HTTP 访问时会被浏览器**忽略;** 因为攻击者可以通过中间人攻击的方式在连接中修改、注入或删除它. 只有在你的网站通过 HTTPS 访问并且没有证书错误时, 浏览器才认为你的网站支持 HTTPS 然后使用 `Strict-Transport-Security` 的值 .

### [浏览器如何处理](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Strict-Transport-Security#%E6%B5%8F%E8%A7%88%E5%99%A8%E5%A6%82%E4%BD%95%E5%A4%84%E7%90%86 "Permalink to 浏览器如何处理")

你的网站第一次通过 HTTPS 请求，服务器响应 `Strict-Transport-Security` 头，浏览器记录下这些信息，然后后面尝试访问这个网站的请求都会自动把 HTTP 替换为 HTTPS。

当 HSTS 头设置的过期时间到了，后面通过 HTTP 的访问恢复到正常模式，不会再自动跳转到 HTTPS。

每次浏览器接收到 Strict-Transport-Security 头，它都会更新这个网站的过期时间，所以网站可以刷新这些信息，防止过期发生。

Chrome、Firefox 等浏览器里，当您尝试访问该域名下的内容时，会产生一个 307 Internal Redirect（内部跳转），自动跳转到 HTTPS 请求。

### [示例场景](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Strict-Transport-Security#%E7%A4%BA%E4%BE%8B%E5%9C%BA%E6%99%AF "Permalink to 示例场景")

你连接到一个免费 WiFi 接入点，然后开始浏览网站，访问你的网上银行，查看你的支出，并且支付一些订单。很不幸，你接入的 WiFi 实际上是黑客的笔记本热点，他们拦截了你最初的 HTTP 请求，然后跳转到一个你银行网站一模一样的钓鱼网站。 现在，你的隐私数据暴露给黑客了。

Strict Transport Security 解决了这个问题；只要你通过 HTTPS 请求访问银行网站，并且银行网站配置好 Strict Transport Security，你的浏览器知道自动使用 HTTPS 请求，这可以阻止黑客的中间人攻击的把戏。

## [预加载 HSTS](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Strict-Transport-Security#%E9%A2%84%E5%8A%A0%E8%BD%BD_hsts "Permalink to 预加载 HSTS")

谷歌维护着一个 [HSTS 预加载服务](https://hstspreload.appspot.com/)。按照如下指示成功提交你的域名后，浏览器将会永不使用非安全的方式连接到你的域名。虽然该服务是由谷歌提供的，但所有浏览器都有使用这份列表的意向（或者已经在用了）。但是，这不是 HSTS 标准的一部分，也不该被当作正式的内容。

- Chrome & Chromium 的 HSTS 预加载列表： [https://www.chromium.org/hsts](https://www.chromium.org/hsts)
- Firefox 的 HSTS 预加载列表：[nsSTSPreloadList.inc](https://hg.mozilla.org/mozilla-central/raw-file/tip/security/manager/ssl/nsSTSPreloadList.inc)

## [示例](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Strict-Transport-Security#%E7%A4%BA%E4%BE%8B "Permalink to 示例")

现在和未来的所有子域名会自动使用 HTTPS 连接长达一年。同时阻止了只能通过 HTTP 访问的内容。

```
Strict-Transport-Security: max-age=31536000; includeSubDomains
```

## [规范](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Strict-Transport-Security#%E8%A7%84%E8%8C%83 "Permalink to 规范")

| 规范                                                                                                                           | 状态         | 注释               |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------ | ------------------ |
| [HTTP Strict Transport Security (HSTS)](https://datatracker.ietf.org/doc/html/rfc6797 "HTTP Strict Transport Security (HSTS)") | **IETF RFC** | Initial definition |

# X-Content-Type-Options

`<strong>X-Content-Type-Options</strong>` HTTP 消息头相当于一个提示标志，被服务器用来提示客户端一定要遵循在 [`Content-Type`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Type) 首部中对 [MIME 类型](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) 的设定，而不能对其进行修改。这就禁用了客户端的 [MIME 类型嗅探](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types#MIME_sniffing)行为，换句话说，也就是意味着网站管理员确定自己的设置没有问题。

该消息头最初是由微软在 IE 8 浏览器中引入的，提供给网站管理员用作禁用内容嗅探的手段，内容嗅探技术可能会把不可执行的 MIME 类型转变为可执行的 MIME 类型。在此之后，其他浏览器也相继引入了这个消息头，尽管它们的 MIME 嗅探算法没有那么有侵略性。

安全测试人员通常期望站点设置了该消息头。

注意: `nosniff` 只应用于 "`script`" 和 "`style`" 两种类型。事实证明，将其应用于图片类型的文件会导致[与现有的站点冲突](https://github.com/whatwg/fetch/issues/395)。

| Header type                                                                                      | [Response header](https://developer.mozilla.org/zh-CN/docs/Glossary/Response_header) |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| [Forbidden header name](https://developer.mozilla.org/zh-CN/docs/Glossary/Forbidden_header_name) | no                                                                                   |

## [语法](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/X-Content-Type-Options#%E8%AF%AD%E6%B3%95 "Permalink to 语法")

```
X-Content-Type-Options: nosniff
```

## [指令](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/X-Content-Type-Options#%E6%8C%87%E4%BB%A4 "Permalink to 指令")

`nosniff`下面两种情况的请求将被阻止：\* 请求类型是"`style`" 但是 MIME 类型不是 "`text/css`"，

- 请求类型是"`script`" 但是 MIME 类型不是 [JavaScript MIME 类型](https://html.spec.whatwg.org/multipage/scripting.html#javascript-mime-type)。
