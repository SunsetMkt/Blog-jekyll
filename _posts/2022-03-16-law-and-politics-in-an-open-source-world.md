---
title: "【转载】开源世界里的法律与政治"
date: 2022-03-16
tags: 公益 战争 开源 转载
categories: article
---

作者：庄表伟

出处：https://zhuangbiaowei.github.io/opensource/2022/03/07/law-and-politics-in-an-open-source-world.html

版权：本作品采用「[署名-非商业性使用-相同方式共享 4.0 国际](http://creativecommons.org/licenses/by-nc-sa/4.0/)」许可协议进行许可。

-----

## 缘起

写这篇文章，其实有很多原因。因为最近发生的俄罗斯与乌克兰的战争，各种影响蔓延到了IT产业、互联网、社交媒体，当然也“烧”到了开源世界。

值得讨论的新闻事件，主要是2个，我在文章里，可能还会提到一些其他的事情。

* https://github.blog/2022-03-02-our-response-to-the-war-in-ukraine/
  * 2022 年 3 月 2 日 GitHub CEO Thomas Dohmke 发文《我们对乌克兰战争的回应》
* https://github.com/facebook/react/issues
  * 也是在 3 月 2 ~ 3 日，有很多人冲到 React 的社区，用简体中文谩骂 React 与美国，因为他们在自己的社区首页声明“ Support Ukraine ”

但是，真正让我觉得必须要写一篇文章来讨论这个事情的，是腾源会的一篇公众号文章《[GitHub 限制俄罗斯使用代码，「开源无国界」是伪命题吗？](https://mp.weixin.qq.com/s/Atc2lrpGddKmueymDJzuBA)》

所以，我打算写一篇文章，阐述三个观点：**法律有国界、政治有立场、开源无歧视**

## 一篇博客的两种报道方式

其实，在 3 月 2 日， GitHub CEO 的文章发布之后，在中文社区有很多报道。我看到的标题，比较有典型性的是两个：

* 云头条：《[GitHub：严格限制俄罗斯获取维持其侵略性军事能力所需要的技术](https://mp.weixin.qq.com/s/YIsgkiztpFE40ka3TbMZqw)》
* 新智元：《[俄罗斯开发者或因制裁无法访问开源代码？Github CEO发文否认](https://mp.weixin.qq.com/s/HHPQj0qJqmxoWrNx4Wlpiw)》

咱们来看看原文：

> In parallel with our efforts to make sure GitHub is available to developers in all countries, we are continuing to ensure free open source services are available to all, **including developers in Russia**.

DeepL 翻译：

> 在我们努力确保所有国家的开发者都能使用GitHub的同时，我们也在继续确保所有人都能获得免费的开源服务，**包括俄罗斯的开发者**。

另外一段话也非常重要，接着看原文：

> Our legal team examines such mandates thoroughly, and we are complying with export controls and trade regulations as they evolve. This includes implementing stringent new export controls that are aimed at severely restricting Russia’s access to technologies and other items it needs to sustain its aggressive military capabilities. 

DeepL 翻译

> 我们的法律团队对此类任务进行了彻底审查，而且我们正在遵守不断发展的出口管制和贸易法规。这包括实施严格的新出口管制，旨在严格限制俄罗斯获得其维持侵略性军事能力所需的技术和其他物品。

## 如何解读 GitHub 的这篇博客？

我翻译一下：我们是一家美国公司，当然要遵守美国的法律。在法律允许的范围内，我们会尽力提供最好的服务，包括面向俄罗斯的开源开发者，提供免费的开源服务。但是，法律一直在变化，我们的法律团队，也在不断追踪变化发展的法律，保证持续守法。

更进一步的讨论，其实需要更多的延伸阅读。

* Linux 基金会：《[Understanding US export controls with open source projects](https://www.linuxfoundation.org/tools/understanding-us-export-controls-with-open-source-projects/)》
  * 中文翻译： 《[Linux 基金会发布白皮书：公开发布给全世界的开源技术不受 EAR 约束](https://www.oschina.net/news/117075/understanding-us-export-controls-with-open-source-projects)》
* Apache 基金会：《[Statement by The Apache Software Foundation regarding US Federal Register Notice of non-US affiliates added to Entity List Ruling](https://blogs.apache.org/foundation/entry/statement-by-the-apache-software)》
  * 中文翻译：《[Apache 软件基金会回应：参与开源不受 EAR 约束](https://www.oschina.net/news/106904/statement-by-the-apache-software)》

其实，涉及到这两篇文章所提及的法律细节，还是非常复杂的。如果不复杂，也不必靠一个专门的法律团队来解读了。

如果我们愿意成为精通法律专业的人士，愿意去深入解读美国甚至欧美各国的相关法律、法规、甚至具体案例。我们才能够真正评估到底有多大的风险。

任何听风就是雨的**夸大风险**，或者掩耳盗铃式的**忽略风险**，都是不负责任的。

## 法律是有国界的

在我之前写的《[我所理解的开源软件供应链安全](/opensource/2021/05/12/about-OSS-Supply-Chain.html)》，其实已经在分析各种可能的风险，也提到了“整个 Github 不允许你使用”这种可能性。但是，并没有展开讨论其可能性，以及为何可能？

确实，在 2019 年 GitHub 出于美国贸易管制法律要求，对伊朗、克里米亚的开发者用户进行了限制，甚至是封禁账号。这当然是出于“遵守美国法律”的原因。

只要 GitHub 不打算从美国搬走，它总是要遵守美国的法律。事实上，即使他搬到其他国家，也得遵守那个国家的法律。假设， GitHub 真的搬到了俄罗斯，美国的开发者是不是也可能被禁用？假设他们搬到了中国，其他国家，就能放心？

在地缘政治可能影响一国的法律，在国家的法律可能影响平台服务，进而影响开源的时候。将平台放在任何一个国家，都是存在风险的。如果这个世界可能被割裂，无论代码仓库放在哪里，整个世界都会受到伤害。所以关键不是**自己也搞一个**。而是要努力建设不会被**割裂**的开源世界。

但是，这个话题太大了，下次再展开。

## React 那边，发生了什么？

按照李磊文章中的说法：“React 在 Github 的代码仓库涌入了来自全世界的政见不合的开发者， 彼此通过提交 issue 的方式发表激烈意见，直到官方入场才得以平息。”

另外还有一句：“程序员之间也同样有国界，这也是为什么大家在 Github 的 React 代码仓库争论的原因。”

那边真的是“全世界的开发者”，只是发表“激烈意见”，真的是在“争论”吗？

![](/assets/postres/2022-03-16-law-and-politics-in-an-open-source-world/react-2.jpg)
...
![](/assets/postres/2022-03-16-law-and-politics-in-an-open-source-world/react.jpg)

说实话，我非常希望能够证明，这些文字不是中国大陆的程序员在那边发布的。而是某种极具恶意的机器人，刷屏发的。

## 尤雨溪以及其他开源社区是如何处理这个问题的？

很有意思的是，在 React 那边有一个 issue ，努力劝大家别用 React ，而是选择 Vue 。结果就有人在下面回复，把尤雨溪在 Vue 社区里的事情报道了一下。

[https://github.com/vuejs/vue/pull/12483](https://github.com/vuejs/vue/pull/12483)

这是一个被关闭的 issue 。是一位名叫 [Vasyl Nahuliak](https://github.com/vasylnahuliak) 的 React Native 开发者提交的 PR 。结果被尤雨溪关掉了。而且，他还提交了另外 6 个 PR ，只可惜都被关闭了。

![](/assets/postres/2022-03-16-law-and-politics-in-an-open-source-world/Github-PR.png)

尤雨溪的答复是：

> As an individual, I deeply sympathize with what the Ukrainian people are going through and wish nothing but peace and safety for Ukraine. I have personally expressed support on Twitter, and many Vue team / community members have done the same. However, I do not want Vue, an OSS project, to become a vehicle for political messages. We will do what we can as individuals, but not under the name of the project.

翻译：

> 作为个人，我对乌克兰人民所经历的一切深表同情，只希望乌克兰和平和安全。我个人在Twitter上表示支持，许多Vue团队/社区成员也做了同样的事情。然而，我不希望Vue这个开放源码软件项目成为政治信息的载体。我们将作为个人做我们能做的，但不是以项目的名义。

在 996icu 项目，一位管理员写到：

> You want to do the same thing as NATO？ Please don't get involved in politics. The open source community can't be like FIFA, that's disgusting.

翻译：

> 你想做和北约一样的事？
> 请不要参与政治。
> 开源社区不能像国际足联那样，那是令人厌恶的。

## 应该如何在开源社区表达政治立场？

简单的说：我非常赞同尤雨溪的表述：开源项目、开源社区，不应该成为政治信息的载体。在 Issue List 或 Mailist 上，也不应该成为政治信息的载体。

还有两个案例，可以提及一下。

* https://github.com/xianyi/OpenBLAS/issues/3551
  * 有人在 OpenBLAS 项目上提议，删除对俄罗斯 Elbrus 处理器的支持，大意是：“继续支持 OpenBLAS 中的 Elbrus 处理器就等于支持普京政权及其军事侵略。”
* https://git.eclipse.org/r/c/platform/eclipse.platform.swt/+/191171
  * 有人在 Eclipse 项目上提议，不仅应该移除对 Elbrus 处理器的支持，还应该移除对中国的龙芯处理器的支持。

因此，我非常厌恶那些在 react 项目下破口大骂的人，也不认同那些开源社区纷纷挂出的 Support Ukraine 的标签。更加反感那些看似义愤填膺，努力在开源社区里“**搞政治**”的人。

令人感到高兴的是：大多数社区，都反感在讨论代码和技术的地方，讨论不相干的政治问题。因为任何政治的讨论，都会涉及到各自的立场，而在开源社区，就应该是“**非政治**”的。

## 回顾一下 OSD 的第五、第六条吧

> 5、 No Discrimination Against Persons or Groups
> 
> The license must not discriminate against any person or group of persons.
> 
> 6、 No Discrimination Against Fields of Endeavor
> 
> The license must not restrict anyone from making use of the program in a specific field of endeavor. For example, it may not restrict the program from being used in a business, or from being used for genetic research.

翻译：

> 5、 不歧视个人或团体
> 
> 许可证不得歧视任何个人或团体。
> 
> 6、 不歧视工作领域
> 
> 许可证不得限制任何人在某一特定领域的工作中使用该程序。例如，它不得限制该程序在企业中使用，或用于遗传研究。

甚至，在 OSI 网站的 [FAQ](https://opensource.org/faq#evil) 里，还特别注明：

> Can I stop "evil people" from using my program?
> 
> No. The Open Source Definition specifies that Open Source licenses may not discriminate against persons or groups. Giving everyone freedom means giving evil people freedom, too.

翻译

> 我可以阻止 "邪恶的人 "使用我的程序吗？
> 
> 不能。开源定义规定，开源许可证不得歧视个人或团体。给予每个人自由意味着也给邪恶的人自由。

是的，真正的践行开源精神，就是要做到这样。

## 也许我们应该更进一步完善 Open Source Definition

> 所谓不歧视，应该不歧视任何使用，不歧视任何修改，不歧视任何分发，不歧视任何代码贡献，不歧视任何社区贡献！

而在原来的 OSD 中，可能会被错误的解读为：仅仅不歧视使用。

在之前的《[开源人宣言](https://github.com/kaiyuanshe/Open-Source-Fans-Manifesto)》中，我们写到：面对一个急速变幻、急速下坠、甚至可能变得撕裂的世界，我们更应该推广开源精神，凝聚众人向善之力，汇聚众人向善之智，开放协作、互惠共赢，为这个世界变得更好做出贡献！

现在，我越来越清晰的意识到：**我们需要建立一种开源世界的反分裂共识**

也许，可以从推广这个“**更加完善的非歧视条款**”开始！
