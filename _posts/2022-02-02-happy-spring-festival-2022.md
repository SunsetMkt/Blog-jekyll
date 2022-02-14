---
title: 2022春节有奖解密活动结束：流程与原理
date: 2022-02-02
tags: Python 解密 站务
categories: article
---
参与者通过事先发放的二维码进入活动网站2022.lwd-temp.top（已停用），获取一份Python程序源码进行解密。

```python
#!/usr/bin/env python3
# coding: utf-8
# Quiz for 2022 Spring Festival Gift Activity
# Author: @lwd-temp & GitHub Copilot
# Repo: https://github.com/lwd-temp/happy-spring-festival-2022
# Date: 2022-01-27
# 也可以在 https://2022.lwd-temp.top/quiz.py 获取此文件
import hashlib
import random
import string
import webbrowser

salt1 = "happy-spring-festival-2022"
salt2 = "用伤害无辜者来掩盖自己的错误是心虚的体现，也永远掩盖不了。他们也一样。"  # Via. Hannah_AI
salt3 = "千言万语，此时也只能汇作相伴。"


def randstr(num):
    '''Generate random string with lower case ascii letters.'''
    salt = ''.join(random.sample(string.ascii_letters.lower(), num))
    return salt


def sha256(data):
    '''SHA256 hash.'''
    data_sha256 = hashlib.sha256(data.encode('utf-8')).hexdigest()
    return data_sha256

def horizontal_line():
    '''Print a horizontal line.'''
    print('-' * 10)

if __name__ == "__main__":
    # Run directly.
    print("2022春节礼物活动题目")
    print("您好！这里藏着一个谜题，如果您可以成为前3个完成谜题的人，就可以获得一份由我提供的《Mirror 2: Project X》Steam平台游戏。")
    print("您的谜题如下：")

    # Part1
    # Dev Notice: 这个字符串是我随机生成的，但我知道它是唯一的，它对应的SHA256值也是唯一的。
    #             如果您看不懂这句话，请相信这里有唯一解，而且对于了解hash概念的人来说，解法也是很明显的。
    horizontal_line()
    print("第一题：这里有一个唯一的由五个小写字母组成的的字符串，请您根据源代码获取并输入这个字符串。如果正确，您会获得提示。")
    while True:
        quiz_str1 = input("请输入第一步的字符串并按下Enter键：")
        quiz_str1_hash = sha256(quiz_str1)
        if quiz_str1_hash == "0b720c64b2a12c00d4b1ccc0b9dbcbbd42ba66a28aa5bce6c167d2deb0e1f04f":
            print("正确！您已经成功获得了第一步的字符串，您可以继续下一步了。")
            quiz_salt1 = quiz_str1
            break
        else:
            print("错误！您输入的字符串不正确，请重新输入。")

    # Part2
    # Dev Notice: 这里获得的文件是 莫娜_by_原神_b8870c3980f838bd2bca5ea9011e3d63.zip ，是一个适用于MMD的模型文件，版权信息见压缩包内容。
    #             在“《原神》国服部分角色皮肤仓促修改事件导致的举报和反馈热潮”事件中，此角色的更改被着重反对。
    #             请保管好它，不仅因为这是未来解密的keyfile，更因为这是一些有爱的玩家群体抗争失败的唯一遗产。
    horizontal_line()
    print("第二题：这个部分没有任何需要您解决的问题。您将会获得一个文件，请保管好它。")
    quiz_str2 = "https://drive.lwd-temp.top/api?path=/%E6%A1%A3%E6%A1%88%E4%B8%8E%E6%9D%82%E9%A1%B9/%E5%8E%9F%E7%A5%9EMMD%E6%A8%A1%E5%9E%8B%E5%A4%87%E4%BB%BD/%E8%8E%AB%E5%A8%9C_by_%E5%8E%9F%E7%A5%9E_b8870c3980f838bd2bca5ea9011e3d63.zip&raw=true"
    print("您的第二步的文件获取链接为：")
    print(quiz_str2)
    print("为了方便您下载，请输入y并按下Enter键，我们会通过您的默认浏览器下载此文件。您也可以输入n并按下Enter键，这样就不会打开浏览器。")
    quiz_input2 = input("请输入y或n并按下Enter键：")
    if quiz_input2.lower() == "y":
        webbrowser.open(quiz_str2)
    else:
        pass

    # Part3
    # Dev Notice: 大力支持，避免学生苦心孤诣地来偷做没出息孩子的玩意！（鲁迅《风筝》）
    horizontal_line()
    print("第三题：在过去的一年中，发生了很多有趣且富有争议的事件。")
    print("例如：“近日，国家新闻出版署下发通知，要求：严限网游企业向未成年提供服务时长，所有网络游戏企业仅可在周五、周六、周日和法定节假日每日20时至21时向未成年人提供1小时服务；不得以任何形式（含游客体验模式）向未实名注册和登录的用户提供游戏服务。”")
    print("请找出“国家新闻出版署关于进一步严格管理切实防止未成年人沉迷网络游戏的通知”的发布日期，并以YYYY-MM-DD的格式输入，按下Enter键结束。")
    while True:
        quiz_str3 = input("请输入日期：")
        quiz_str3_hash = sha256(quiz_str3)
        if quiz_str3_hash == "43b22139fd8be640faf4325252665eb9cefa6a438378068540cf8015dc813716":
            print("正确！")
            quiz_salt2 = quiz_str3
            break
        else:
            print("错误！您输入的日期不正确，请重新输入。")

    # Part4
    horizontal_line()
    print("恭喜您！您已经接近本程序结束。还记得我承诺的礼物吗？")
    print("《Mirror 2: Project X》，一个Steam平台游戏，对吧？")
    print("但是，您知道吗，Steam商店自2021年年末起在中国大陆受到干扰，导致了其在本地区的服务质量下降。")
    print("具体表现为：随机的无法连接以及莫名其妙的一段时间的服务不可用，您可以通过在商店首页不断打开新的商品来复现此现象。")
    print("在业内人士中，这种现象被称作“针对store.steampowered.com的___阻断攻击”。")
    print("第四题：请输入上方留空的内容（大写的3个字母），按下Enter键结束。")
    while True:
        quiz_str4 = input("请输入答案：")
        quiz_str4_hash = sha256(quiz_str4)
        if quiz_str4_hash == "db544c564b28ece6838260990d1dff973b544f60f2f25afd6f2d267533cde097":
            print("正确！")
            quiz_salt3 = quiz_str4
            break
        else:
            print("错误！您输入的内容不正确，请重新输入。")

    # Part5
    horizontal_line()
    print("您已经通过了本次测验，感谢您的参与。")
    fullsalt = quiz_salt1 + quiz_salt2 + quiz_salt3 + salt1 + salt2 + salt3
    password = sha256(fullsalt)
    print("请记录如下字符串：" + password)
    print("重复一遍：")
    print(password)
    print("您在第二题中获得的文件被称作“密钥文件”，您会在接下来的解密中用到它。")
    print("请下载此开源软件：VeraCrypt，这是一个开源且高强度的加密软件。")
    print("稍后，我们会提供给您一个用于下一步解密的VeraCrypt加密卷（一个加密的虚拟磁盘，以文件的形式储存），")
    print("它的密码是上述字符串，密钥文件为您在第二题中获得的文件，请使用VeraCrypt解密此卷。")
    print("在解密后，您将会得到一份指导，请继续完成其所述内容。")
    print("请不要放弃！这将是最后一个解密环节。")
    disk_url = "https://drive.lwd-temp.top/api?path=/%E6%A1%A3%E6%A1%88%E4%B8%8E%E6%9D%82%E9%A1%B9/Quiz/quiz.hc&raw=true"
    print("用于下一步解密的VeraCrypt加密卷的下载地址：")
    print(disk_url)
    print("为了方便您下载，请输入y并按下Enter键，我们会通过您的默认浏览器下载此文件。您也可以输入n并按下Enter键，这样就不会打开浏览器。")
    user_download = input("请输入y或n并按下Enter键：")
    if user_download.lower() == "y":
        webbrowser.open(disk_url)
    else:
        pass
    print("您可以在 https://www.veracrypt.fr/en/Downloads.html 获得VeraCrypt。")
    print("祝您新年快乐。")
    input()

```

仔细观察可知，此程序没有安全漏洞或逻辑错误，需要参与者准确获取缺失信息。

## 第一题

此题为全程最难题目。

由五个小写字母组成的的字符串且SHA256为0b720c64b2a12c00d4b1ccc0b9dbcbbd42ba66a28aa5bce6c167d2deb0e1f04f，由于哈希算法特性，我们几乎无法逆运算得出原始字符串。

故穷举，代码如下：

```python
import hashlib
import string


def sha256(data):
    '''SHA256 hash.'''
    data_sha256 = hashlib.sha256(data.encode('utf-8')).hexdigest()
    return data_sha256


for a in string.ascii_lowercase:
    for b in string.ascii_lowercase:
        for c in string.ascii_lowercase:
            for d in string.ascii_lowercase:
                for e in string.ascii_lowercase:
                    full = a+b+c+d+e
                    if sha256(full) == "0b720c64b2a12c00d4b1ccc0b9dbcbbd42ba66a28aa5bce6c167d2deb0e1f04f":
                        print(full)

```

解得 `hgbwq`。

## 第二题

本题会指引用户下载[莫娜_by_原神_b8870c3980f838bd2bca5ea9011e3d63.zip](https://drive.lwd-temp.top/api?path=/%E6%A1%A3%E6%A1%88%E4%B8%8E%E6%9D%82%E9%A1%B9/%E5%8E%9F%E7%A5%9EMMD%E6%A8%A1%E5%9E%8B%E5%A4%87%E4%BB%BD/%E8%8E%AB%E5%A8%9C_by_%E5%8E%9F%E7%A5%9E_b8870c3980f838bd2bca5ea9011e3d63.zip&raw=true)，本题设计原因如注释所述。

```python
    # Part2
    # Dev Notice: 这里获得的文件是 莫娜_by_原神_b8870c3980f838bd2bca5ea9011e3d63.zip ，是一个适用于MMD的模型文件，版权信息见压缩包内容。
    #             在“《原神》国服部分角色皮肤仓促修改事件导致的举报和反馈热潮”事件中，此角色的更改被着重反对。
    #             请保管好它，不仅因为这是未来解密的keyfile，更因为这是一些有爱的玩家群体抗争失败的唯一遗产。
```

> 这里获得的文件是 莫娜_by_原神_b8870c3980f838bd2bca5ea9011e3d63.zip ，是一个适用于MMD的模型文件，版权信息见压缩包内容。
>
> 在“《原神》国服部分角色皮肤仓促修改事件导致的举报和反馈热潮”事件中，此角色的更改被着重反对。
>
> 请保管好它，不仅因为这是未来解密的keyfile，更因为这是一些有爱的玩家群体抗争失败的唯一遗产。

详见本站文章。

## 第三题

2021-08-30，考察用户对于时事新闻的了解。

## 第四题

SNI，见[Steam 商店 store.steampowered.com 疑似 443 端口被干扰？ ICMP 80 端口均正常 - V2EX](https://www.v2ex.com/t/824179)及本站相关文章。

## 整体代码逻辑

每题分别通过校验hash的方式确定答案是否正确（都可以通过穷举获得答案），最后拼接全部答案及所有salt并算hash作为key。

## 加密卷

在向用户提供key后引导用户下载加密卷（链接已停用），解密后根据内部文档使用key以及第二题中密钥文件解密获取证明文件下载链接（已停用，是基于Vaultwarden私人部署的加密下载链接，在产品中被称为“Bitwarden Send”）。

## 致谢

感谢所有参与解密的热心人士。

根据统计，共有两次成功下载证明文件的记录。我们未能与他们取得联系，因此无法兑现承诺。

在构建整个解密流程中，有以下服务或开源项目被使用：

* [python/cpython: The Python programming language (github.com)](https://github.com/python/cpython)
* [spencerwooo/onedrive-vercel-index: OneDrive public directory listing, powered by Vercel and Next.js (github.com)](https://github.com/spencerwooo/onedrive-vercel-index)
* [dani-garcia/vaultwarden: Unofficial Bitwarden compatible server written in Rust, formerly known as bitwarden_rs (github.com)](https://github.com/dani-garcia/vaultwarden)
* [veracrypt/VeraCrypt: Disk encryption with strong security based on TrueCrypt (github.com)](https://github.com/veracrypt/VeraCrypt)
* [coder/code-server: VS Code in the browser (github.com)](https://github.com/coder/code-server)
* [git/git: Git Source Code Mirror - This is a publish-only repository but pull requests can be turned into patches to the mailing list via GitGitGadget (https://gitgitgadget.github.io/). Please follow Documentation/SubmittingPatches procedure for any of your improvements.](https://github.com/git/git)
* [Microsoft Visual Studio Code](https://code.visualstudio.com/)
* [GitHub]()
* [Railway](https://railway.app/)
* [Microsoft SharePoint](https://www.microsoft.com/zh-cn/microsoft-365/sharepoint/collaboration)
