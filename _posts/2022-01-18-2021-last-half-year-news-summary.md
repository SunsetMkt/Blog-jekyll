---
title: '2021年下半年至春节值得注意的新闻整理'
date: 2022-01-18
tags: 新闻 转载 版权争议
categories: article
---
## 开源项目faker.js作者Marak删除项目代码

开源项目faker.js作者Marak删除项目代码，遭GitHub封号后污染NPM上的colors.js导致用户项目控制台输出乱码。

开源作者的经济收益在人道主义和道德上需要纳入考虑，Marak的行为虽有不妥但并不违反任何开源协议。

## jsDelivr CDN服务疑似由于“涉政滥用”失去中国ICP备案及国内加速

jsDelivr CDN服务疑似由于“涉政滥用”失去中国ICP备案及国内加速，目前中国大陆由Cloudflare提供加速服务。

目前，其用户协议已禁止将其用作图床的行为。由于其能直接获取GitHub上的原文件（功能上相当于被DNS污染的GitHub raw），有被用于“中国法律所禁止的行为”的风险（例如提供“涉政敏感信息”及提供代理服务器列表），但并不都违反其EULA。

自己要搞“特殊化”的后果只能自己承受，任何国家都不能如巨婴般胡作乱闹，也不会有任何国家或组织为你“扫清障碍”。

上联：阻断GitHub拖我国程序员后腿

下联：吊销jsDelivr阻我前端页面加载

横批：“大国风范”/“科技强国”

## 2021年全国人口增加48万人

2021年全国人口增加48万人，“人口拐点”或将到来，“老龄化”问题恐成一大难关。

“少生优生，幸福一生。”

## 西安市防疫乱象多次头条

居民外出买馒头遭防疫人员殴打

某小区防疫人员要求翻墙买菜的业主录像“检讨”

西安一女子集中隔离期间“哭诉无卫生巾”，西安作协主席批评“矫情、小姐做派”

西安市政府因“鸡蛋未洗净”等理由处罚当地连锁生鲜零售商“盒马”等

西安一孕妇疑似由于核酸问题无法入院，在医院门口等 2 小时后流产

网传西安网友父亲心肌绞痛 8 小时，因医院停止接诊无法救治已去世

西安又一名孕妇流产“健康码为绿码、有民警护送依然被拒诊”

西安市健康码服务多次崩溃，西安建议市民非必要不展码、亮码

西安高新医院、国际医学中心医院因延误急危患者救治被停业整顿 3 个月

西安国际医学中心郭树忠教授发文，称 117 位小耳畸形患者手术或因医院停业整顿无法按期进行

> 接到通知，上级同意我可以给这些孩子在西安国际医学中心医院做手术了。据悉，昨天西安市卫健委和西安国际医学中心医院领导就此事进行了深入的沟通，本着救死扶伤的精神，同意我为这些患儿手术。作为这些患儿的主治医生，我由衷的为他们和他们的父母高兴，也感谢上级领导能够体谅到孩子们的疾苦！
>
> 作者：郭树忠教授
> 链接：https://www.zhihu.com/question/511430580/answer/2310254689
> 来源：知乎
> 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

洗不动了，自己看着办吧。

## 虚拟YouTuber绊爱宣布将“无限期停止活动”

虚拟YouTuber绊爱（キズナアイ）宣布其“将于2022年2月26日开演的演唱会「Hello,World2022」之后进入无期限休眠”。

据报道，绊爱在虚拟YouTuber行业有着开创性的意义，我们会永远记得她/他/它/祂的努力和付出。

「Hello,World2022」倒计时

<div id="KizunaAI">
    <link rel="stylesheet" href="https://unpkg.com/@pqina/flip/dist/flip.min.css">

    <style>
        .tick {
            padding-bottom: 1em;
            font-size: 1rem;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
        }

        .tick-label {
            font-size: .375em;
            text-align: center;
        }

        .tick-group {
            margin: 0 .25em;
            text-align: center;
        }
    </style>

    <div class="tick" data-did-init="handleTickInit">

        <div data-repeat="true" data-layout="horizontal center fit" data-transform="preset(d, h, m, s) -> delay">

            <div class="tick-group">

                <div data-key="value" data-repeat="true" data-transform="pad(00) -> split -> delay">

                    <span data-view="flip"></span>

                </div>

                <span data-key="label" data-view="text" class="tick-label"></span>

            </div>

        </div>

    </div>

    <script>
        function handleTickInit(tick) {

            // Set labels to different language ( in this case Chinese )
            var locale = {
                YEAR_PLURAL: '年',
                YEAR_SINGULAR: '年',
                MONTH_PLURAL: '月',
                MONTH_SINGULAR: '月',
                WEEK_PLURAL: '周',
                WEEK_SINGULAR: '周',
                DAY_PLURAL: '天',
                DAY_SINGULAR: '天',
                HOUR_PLURAL: '小时',
                HOUR_SINGULAR: '小时',
                MINUTE_PLURAL: '分钟',
                MINUTE_SINGULAR: '分钟',
                SECOND_PLURAL: '秒',
                SECOND_SINGULAR: '秒',
                MILLISECOND_PLURAL: '毫秒',
                MILLISECOND_SINGULAR: '毫秒'
            };
            for (var key in locale) {
                if (!locale.hasOwnProperty(key)) { continue; }
                tick.setConstant(key, locale[key]);
            }


            Tick.count.down('2022-02-26').onupdate = function (value) {
                tick.value = value;
            };

        }
    </script>

    <script src="https://unpkg.com/@pqina/flip/dist/flip.min.js"></script>
</div>

## 《原神》2.4版本国服部分角色皮肤仓促修改，大量玩家“为爱举报”

> **非常抱歉，为响应相关审核要求，** 我们将在1月5日的2.4版本更新，以及后续的2.5版本更新中，对游戏中部分角色与表现进行调整。对于本次仓促调整带来的不便，我们深表歉意。
>
> ......
>
> **我们深知这些补偿无法真正弥补各位旅行者的遗憾，千言万语，此时也只能汇作相伴。我们再次向各位旅行者致以最诚挚的歉意。**
>
> 注：加粗部分相关内容已从官网通知上删除，这里转载最初的版本。

文艺领域胡删乱改何时止？

已过审角色遭修改为哪般？

应当鼓励玩家群体利用合法的反馈渠道积极反映问题，女性玩家群体不应成为受攻击对象。

## Steam商店遭SNI阻断，情况类似GitHub

store.steampowered.com域名2021年12月底开始遭类似GitHub的国家级有组织（推测）有预谋的SNI阻断攻击，发往此域名的境外方向HTTPS请求会被随机丢包，造成“服务不稳定”的假象。这会造成中国大陆的Steam用户无法顺利购买游戏，游戏库和下载功能暂时不受影响。

目前，除非使用“加速器”等代理服务器，没有任何解决措施。如果您能正常访问Steam商店，请不断点击**未浏览过**的游戏并观察是否在某一时间点后打开的页面均无法加载，请不要辱骂或污蔑观点与您不同的人并相信Steam的服务器技术不是开玩笑的。

利用互联网标准设计中对服务商的信任实施网络攻击令人不齿，技术工作者本该守住技术初心，不应站在人类、技术、人性的对立面上。

## “未成年人仅可在周末及节假日每晚玩一小时网游”引发争议

> 近日，国家新闻出版署下发通知，要求：严限网游企业向未成年提供服务时长，所有网络游戏企业仅可在周五、周六、周日和法定节假日每日20时至21时向未成年人提供1小时服务；不得以任何形式（含游客体验模式）向未实名注册和登录的用户提供游戏服务。

我国“网游”界限广泛，任何需联网游戏（也就是几乎所有）均属“网游”。

政策越位、职能越位竟明目张胆，电子游戏污名化何时休？

> 大力支持，避免学生苦心孤诣地来偷做没出息孩子的玩意！（哏自鲁迅《风筝》）

用伤害无辜者来掩盖自己的错误是心虚的体现，也永远掩盖不了。——Hannah_AI

## 游戏版号停发5个月期间共有1.4万家公司注销

游戏版号停发逼死中、小型游戏公司，大型游戏公司也不会是中国游戏的开拓者。

## 游戏《幻塔》营销和运营行为引发争议

游戏《幻塔》的宣发行为引发网友争议，因其与游戏《原神》的目标用户群体高度重合以及不当的营销行为导致网友嘲讽抵制。

中国游戏行业险象丛生，靠的不仅是大厂商的不作为，也“归功于”消极的政策环境。这时候玩家们还打得“热热闹闹、有来有往”实在心太大。

这游戏bug太多，程序架构可能需要重做，除非不在乎虚拟财产否则不建议玩。

## 优秀游戏技术工作者毛星云不幸于其工作地点自杀身亡

> 毛星云 (1991年-2021年12月11日)，湖北宜昌人。中华人民共和国程序员、专栏作家，网名“[浅墨](https://github.com/QianMo)”。南京航空航天大学硕士毕业，2014年微软最有价值专家奖得主。2015年6月起在腾讯游戏任游戏引擎开发工程师、引擎开发组组长（Lead Engine Programmer）。曾因患抑郁症于2021年8至9月住院，2021年12月11日自杀。出版有书籍《OpenCV3编程入门》《逐梦旅程：Windows游戏编程之从零开始》。
>
> ——维基百科

我有点害怕，我们可能没办法实现他的理想了。

## 谣言：网传小米 MIUI 13 内置国家反诈中心 APP

**此为谣言，目前没有切实技术证据。**

“国家反诈中心”App为何遭到歧视应当反思，各平台操作系统联机功能底线意识近些年越来越淡薄（说的就是你们，Windows 10/11、各种AOSP改版、iOS，没了中心服务器就动不了了？你们是操作系统，不是【粗俗用语删除】浏览器，别动不动就给我搞个遥测、动不动就给你们厂商API传点东西）。

顺便一提，那个App技术水平不太行。

## “平顶山刘玉锟”事件引发网友关注，事件进展似乎引人争议

没有可靠的信息来源，请自行了解。

> 要直面问题才能解决问题，堵、躲、压的做法，永远解决不了问题。
>
> 《党校学者：官员用公权力打击网上不利言论属违法》中央党校副教授 刘素华

## 《原神》2.4版本魔神任务「风起鹤归」令人赞叹

算是自己的一点私心，如果感兴趣可以点击下方链接欣赏剧情PV「神女劈观」。

[《原神》剧情PV-「神女劈观」_哔哩哔哩](https://www.bilibili.com/video/BV1kS4y1T7kK)

> 曲高未必人不识，自有知音和清词。

## 郑州特大暴雨灾害瞒报死亡失踪人数 139 人，8 人被捕 89 人被问责

**瞒报？！**这个没法洗。
