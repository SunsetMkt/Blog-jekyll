---
title: 简报：Steam商店疑似出现访问故障（已证实）
date: 2021-12-25 22:22:00 +0800
tags: Steam GitHub
categories: article
---

有未证实的报告称，Steam 商店自 2021-12-25 起在中国大陆部分地区出现访问异常。

SteamDB[声称](https://twitter.com/SteamDB/status/1474685012339531780)其亦收到相关报告。

> There are reports of Steam Store being blocked in China.
>
> Store and API subdomains appear to experience connection resets on some Akamai IPs (which is typical for great firewall), similar to how GitHub was being blocked. Other subdomains (like partner site) work at the moment.
>
> 下午 6:14 · 2021 年 12 月 25 日·TweetDeck

[reddit](https://www.reddit.com/r/Steam/comments/ro1rg9/breaking_news_steam_has_been_banned_in_china_the/)上亦出现相关内容。

不过随着圣诞节促销，Steam 商店在全球范围内也出现了不稳定的情况，有相关人士怀疑，部分访问故障可能来自服务器负荷过重导致的异常。

SteamDB 提到的 `similar to how GitHub was being blocked`指“检测 \*.github.com，以及 raw.githubusercontent.com 域名的 SNI，并对上述域名所对应的 IP 地址的 443 端口（HTTPS 协议）间歇性执行 TCP 重置攻击，或者直接封锁指定端口（强制丢包），从而出现连接重置、连接超时等错误，每次封锁至少持续 3 分钟后才能正常进入网站。这导致了 Github 在中国大陆的访问被严重干扰，非常不稳定，时断时续，相关干扰一直持续至今未解除”（语出 维基百科），相关报道参见 [这里](https://www.v2ex.com/t/760217) [这里](https://www.v2ex.com/t/761907) [还有这里](https://www.v2ex.com/t/761558)，这种方法的确能造成 Steam“不稳定”的假象。

（差不多解释一下，互联网通信标准在设计的时候似乎并没有考虑到**国家级的流氓行为**，所以即使是使用 TLS 等加密技术，我们也能通过未加密的证书交换环节以及 HTTPS 协议头里以及我不知道的地方的信息发现这个数据包的目的地，注意只是目的地不包括内容，但这足以用于判断和封锁。一些新的标准例如 DoH 还有 ESNI 什么的被用于防御这种流氓行径，目前采用这些技术的请求在中国大陆的跨国连接中均被无差别封锁）

~~目前，我们对此事持观望态度。~~

> 用伤害无辜者来掩盖自己的错误是心虚的体现，也永远掩盖不了。
>
> **他们也一样。**
> —— Hannah.梅

2021-12-26 更新

以下代码被用于测试 Steam 商店的可连接性

```python
#! /usr/bin/env python3
# steam_store_test.py - test the connectivity of steam store
# author: sunsets-deprecated-username
# date: 2021-12-26
import contextlib
import logging
import random
import time

import requests

# https://stackoverflow.com/questions/16337511/log-all-requests-from-the-python-requests-module/
try:
    from http.client import HTTPConnection  # py3
except ImportError:
    from httplib import HTTPConnection  # py2


def debug_requests_on():
    """Switches on logging of the requests module."""
    HTTPConnection.debuglevel = 1

    logging.basicConfig()
    logging.getLogger().setLevel(logging.DEBUG)
    requests_log = logging.getLogger("requests.packages.urllib3")
    requests_log.setLevel(logging.DEBUG)
    requests_log.propagate = True


def debug_requests_off():
    """Switches off logging of the requests module, might be some side-effects"""
    HTTPConnection.debuglevel = 0

    root_logger = logging.getLogger()
    root_logger.setLevel(logging.WARNING)
    root_logger.handlers = []
    requests_log = logging.getLogger("requests.packages.urllib3")
    requests_log.setLevel(logging.WARNING)
    requests_log.propagate = False


@contextlib.contextmanager
def debug_requests():
    """Use with 'with'!"""
    debug_requests_on()
    yield
    debug_requests_off()


logging.basicConfig(
    level=logging.DEBUG,
    format=" %(asctime)s - %(levelname)s - %(message)s",
    filename="steam_store_test.log",
)

debug_requests_on()


def get_steam(timeout=10):
    """get steam store page"""
    headers = {
        'Connection': 'keep-alive',
        'Pragma': 'no-cache',
        'Cache-Control': 'no-cache',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="96", "Microsoft Edge";v="96"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36 Edg/96.0.1054.62',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'Sec-Fetch-Site': 'none',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-User': '?1',
        'Sec-Fetch-Dest': 'document',
        'Accept-Language': 'zh-CN,zh;q=0.9',
    }
    req = requests.get(
        "https://store.steampowered.com/", timeout=timeout, headers=headers
    )
    return req


def get_steam_stat(timeout=10):
    """return status code"""
    try:
        return get_steam(timeout).status_code
    except:
        return 999  # any exception will be caught and return 999 as status code


def sleeper():
    """sleep to simulate human behavior"""
    time.sleep(random.randint(1, 10) * 0.1 + 1)


if __name__ == "__main__":
    logging.info("Starting steam_store_test.py")
    max_attempts = 100  # max attempts - customisable
    attempts = 0
    failed_attempts = 0
    timeout = 10  # timeout in seconds - customisable
    logging.info("max_attempts: %s" % max_attempts)
    logging.info("timeout: %s" % timeout)
    if timeout <= 1:
        logging.warning("timeout is too small, it may cause false positive")
    for attno in range(0, max_attempts):
        attempts += 1
        logging.info("Attempt #" + str(attempts))
        status = get_steam_stat()
        if status != 200:
            logging.info("Status code: " + str(status))
            failed_attempts += 1
            logging.warning("Total failed attempts " + str(failed_attempts))
        sleeper()

```

我在这里解释一下这是干什么的：这段代码会以普通网页浏览器的身份尝试访问 `https://store.steampowered.com/`，每次访问成功后休息 1~2 秒钟，如果一次访问在 10 秒钟内未加载完成/出于任何原因请求被阻断则视为访问失败（在程序中，这种情况的返回码为 999），如果由于其他原因访问失败也计入在内（返回码不是 999）。

我们在一位热心人士提供的北京市亚马逊云服务器上在 Docker 容器 Ubuntu 环境内运行了上述代码，log 如下：

```verilog
 2021-12-26 13:23:31,849 - INFO - Starting steam_store_test.py
 2021-12-26 13:23:31,849 - INFO - max_attempts: 100
 2021-12-26 13:23:31,849 - INFO - timeout: 10
 2021-12-26 13:23:31,849 - INFO - Attempt #1
 2021-12-26 13:23:31,855 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:23:42,144 - INFO - Status code: 999
 2021-12-26 13:23:42,144 - WARNING - Total failed attempts 1
 2021-12-26 13:23:43,746 - INFO - Attempt #2
 2021-12-26 13:23:43,747 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:23:43,968 - DEBUG - Setting read timeout to 10
 2021-12-26 13:23:44,306 - DEBUG - "GET / HTTP/1.1" 200 None
 2021-12-26 13:23:46,249 - INFO - Attempt #3
 2021-12-26 13:23:46,251 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:23:56,258 - INFO - Status code: 999
 2021-12-26 13:23:56,258 - WARNING - Total failed attempts 2
 2021-12-26 13:23:57,860 - INFO - Attempt #4
 2021-12-26 13:23:57,861 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:23:58,755 - DEBUG - Setting read timeout to 10
 2021-12-26 13:23:59,179 - DEBUG - "GET / HTTP/1.1" 200 None
 2021-12-26 13:24:01,127 - INFO - Attempt #5
 2021-12-26 13:24:01,128 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:24:01,746 - DEBUG - Setting read timeout to 10
 2021-12-26 13:24:02,193 - DEBUG - "GET / HTTP/1.1" 200 None
 2021-12-26 13:24:03,737 - INFO - Attempt #6
 2021-12-26 13:24:03,738 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:24:14,167 - INFO - Status code: 999
 2021-12-26 13:24:14,168 - WARNING - Total failed attempts 3
 2021-12-26 13:24:15,970 - INFO - Attempt #7
 2021-12-26 13:24:15,971 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:24:25,985 - INFO - Status code: 999
 2021-12-26 13:24:25,985 - WARNING - Total failed attempts 4
 2021-12-26 13:24:27,687 - INFO - Attempt #8
 2021-12-26 13:24:27,688 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:24:38,167 - INFO - Status code: 999
 2021-12-26 13:24:38,167 - WARNING - Total failed attempts 5
 2021-12-26 13:24:39,469 - INFO - Attempt #9
 2021-12-26 13:24:39,470 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:24:49,815 - INFO - Status code: 999
 2021-12-26 13:24:49,816 - WARNING - Total failed attempts 6
 2021-12-26 13:24:51,017 - INFO - Attempt #10
 2021-12-26 13:24:51,018 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:24:51,869 - DEBUG - Setting read timeout to 10
 2021-12-26 13:24:52,644 - DEBUG - "GET / HTTP/1.1" 200 None
 2021-12-26 13:24:54,810 - INFO - Attempt #11
 2021-12-26 13:24:54,812 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:24:55,581 - DEBUG - Setting read timeout to 10
 2021-12-26 13:24:56,308 - DEBUG - "GET / HTTP/1.1" 200 None
 2021-12-26 13:24:58,812 - INFO - Attempt #12
 2021-12-26 13:24:58,813 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:24:59,335 - DEBUG - Setting read timeout to 10
 2021-12-26 13:25:00,154 - DEBUG - "GET / HTTP/1.1" 200 None
 2021-12-26 13:25:02,080 - INFO - Attempt #13
 2021-12-26 13:25:02,081 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:25:12,454 - INFO - Status code: 999
 2021-12-26 13:25:12,454 - WARNING - Total failed attempts 7
 2021-12-26 13:25:13,956 - INFO - Attempt #14
 2021-12-26 13:25:13,957 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:25:24,218 - INFO - Status code: 999
 2021-12-26 13:25:24,218 - WARNING - Total failed attempts 8
 2021-12-26 13:25:25,820 - INFO - Attempt #15
 2021-12-26 13:25:25,821 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:25:35,832 - INFO - Status code: 999
 2021-12-26 13:25:35,833 - WARNING - Total failed attempts 9
 2021-12-26 13:25:36,934 - INFO - Attempt #16
 2021-12-26 13:25:36,935 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:25:47,017 - INFO - Status code: 999
 2021-12-26 13:25:47,017 - WARNING - Total failed attempts 10
 2021-12-26 13:25:48,519 - INFO - Attempt #17
 2021-12-26 13:25:48,520 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:25:58,532 - INFO - Status code: 999
 2021-12-26 13:25:58,532 - WARNING - Total failed attempts 11
 2021-12-26 13:25:59,634 - INFO - Attempt #18
 2021-12-26 13:25:59,635 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:26:09,709 - INFO - Status code: 999
 2021-12-26 13:26:09,709 - WARNING - Total failed attempts 12
 2021-12-26 13:26:11,011 - INFO - Attempt #19
 2021-12-26 13:26:11,012 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:26:11,511 - DEBUG - Setting read timeout to 10
 2021-12-26 13:26:11,810 - DEBUG - "GET / HTTP/1.1" 200 None
 2021-12-26 13:26:13,366 - INFO - Attempt #20
 2021-12-26 13:26:13,367 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:26:23,379 - INFO - Status code: 999
 2021-12-26 13:26:23,379 - WARNING - Total failed attempts 13
 2021-12-26 13:26:25,281 - INFO - Attempt #21
 2021-12-26 13:26:25,283 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:26:35,353 - INFO - Status code: 999
 2021-12-26 13:26:35,353 - WARNING - Total failed attempts 14
 2021-12-26 13:26:37,356 - INFO - Attempt #22
 2021-12-26 13:26:37,357 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:26:37,569 - DEBUG - Setting read timeout to 10
 2021-12-26 13:26:37,820 - DEBUG - "GET / HTTP/1.1" 200 None
 2021-12-26 13:26:39,602 - INFO - Attempt #23
 2021-12-26 13:26:39,604 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:26:49,775 - INFO - Status code: 999
 2021-12-26 13:26:49,776 - WARNING - Total failed attempts 15
 2021-12-26 13:26:51,478 - INFO - Attempt #24
 2021-12-26 13:26:51,479 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:27:01,568 - INFO - Status code: 999
 2021-12-26 13:27:01,568 - WARNING - Total failed attempts 16
 2021-12-26 13:27:03,471 - INFO - Attempt #25
 2021-12-26 13:27:03,472 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:27:13,483 - INFO - Status code: 999
 2021-12-26 13:27:13,484 - WARNING - Total failed attempts 17
 2021-12-26 13:27:14,985 - INFO - Attempt #26
 2021-12-26 13:27:14,986 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:27:15,831 - DEBUG - Setting read timeout to 10
 2021-12-26 13:27:16,227 - DEBUG - "GET / HTTP/1.1" 200 None
 2021-12-26 13:27:18,174 - INFO - Attempt #27
 2021-12-26 13:27:18,176 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:27:18,796 - DEBUG - Setting read timeout to 10
 2021-12-26 13:27:19,249 - DEBUG - "GET / HTTP/1.1" 200 None
 2021-12-26 13:27:20,895 - INFO - Attempt #28
 2021-12-26 13:27:20,897 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:27:21,518 - DEBUG - Setting read timeout to 10
 2021-12-26 13:27:21,957 - DEBUG - "GET / HTTP/1.1" 200 None
 2021-12-26 13:27:23,700 - INFO - Attempt #29
 2021-12-26 13:27:23,702 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:27:34,134 - INFO - Status code: 999
 2021-12-26 13:27:34,134 - WARNING - Total failed attempts 18
 2021-12-26 13:27:35,836 - INFO - Attempt #30
 2021-12-26 13:27:35,838 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:27:45,851 - INFO - Status code: 999
 2021-12-26 13:27:45,851 - WARNING - Total failed attempts 19
 2021-12-26 13:27:47,453 - INFO - Attempt #31
 2021-12-26 13:27:47,454 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:27:57,457 - INFO - Status code: 999
 2021-12-26 13:27:57,458 - WARNING - Total failed attempts 20
 2021-12-26 13:27:59,458 - INFO - Attempt #32
 2021-12-26 13:27:59,459 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:28:09,562 - INFO - Status code: 999
 2021-12-26 13:28:09,562 - WARNING - Total failed attempts 21
 2021-12-26 13:28:11,064 - INFO - Attempt #33
 2021-12-26 13:28:11,065 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:28:18,261 - DEBUG - Setting read timeout to 10
 2021-12-26 13:28:18,505 - DEBUG - "GET / HTTP/1.1" 200 None
 2021-12-26 13:28:20,591 - INFO - Attempt #34
 2021-12-26 13:28:20,593 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:28:21,203 - DEBUG - Setting read timeout to 10
 2021-12-26 13:28:21,888 - DEBUG - "GET / HTTP/1.1" 200 None
 2021-12-26 13:28:24,271 - INFO - Attempt #35
 2021-12-26 13:28:24,272 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:28:24,852 - DEBUG - Setting read timeout to 10
 2021-12-26 13:28:25,494 - DEBUG - "GET / HTTP/1.1" 200 None
 2021-12-26 13:28:27,605 - INFO - Attempt #36
 2021-12-26 13:28:27,607 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:28:37,618 - INFO - Status code: 999
 2021-12-26 13:28:37,618 - WARNING - Total failed attempts 22
 2021-12-26 13:28:39,521 - INFO - Attempt #37
 2021-12-26 13:28:39,522 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:28:49,533 - INFO - Status code: 999
 2021-12-26 13:28:49,533 - WARNING - Total failed attempts 23
 2021-12-26 13:28:51,535 - INFO - Attempt #38
 2021-12-26 13:28:51,537 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:28:52,263 - DEBUG - Setting read timeout to 10
 2021-12-26 13:28:52,841 - DEBUG - "GET / HTTP/1.1" 200 None
 2021-12-26 13:28:55,017 - INFO - Attempt #39
 2021-12-26 13:28:55,019 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:29:05,516 - INFO - Status code: 999
 2021-12-26 13:29:05,517 - WARNING - Total failed attempts 24
 2021-12-26 13:29:07,318 - INFO - Attempt #40
 2021-12-26 13:29:07,319 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:29:07,963 - DEBUG - Setting read timeout to 10
 2021-12-26 13:29:08,436 - DEBUG - "GET / HTTP/1.1" 200 None
 2021-12-26 13:29:10,304 - INFO - Attempt #41
 2021-12-26 13:29:10,306 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:29:10,878 - DEBUG - Setting read timeout to 10
 2021-12-26 13:29:11,442 - DEBUG - "GET / HTTP/1.1" 200 None
 2021-12-26 13:29:13,852 - INFO - Attempt #42
 2021-12-26 13:29:13,854 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:29:24,394 - INFO - Status code: 999
 2021-12-26 13:29:24,395 - WARNING - Total failed attempts 25
 2021-12-26 13:29:25,796 - INFO - Attempt #43
 2021-12-26 13:29:25,798 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:29:35,809 - INFO - Status code: 999
 2021-12-26 13:29:35,809 - WARNING - Total failed attempts 26
 2021-12-26 13:29:37,311 - INFO - Attempt #44
 2021-12-26 13:29:37,312 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:29:38,066 - DEBUG - Setting read timeout to 10
 2021-12-26 13:29:38,508 - DEBUG - "GET / HTTP/1.1" 200 None
 2021-12-26 13:29:40,003 - INFO - Attempt #45
 2021-12-26 13:29:40,005 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:29:50,016 - INFO - Status code: 999
 2021-12-26 13:29:50,016 - WARNING - Total failed attempts 27
 2021-12-26 13:29:52,018 - INFO - Attempt #46
 2021-12-26 13:29:52,019 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:30:02,031 - INFO - Status code: 999
 2021-12-26 13:30:02,031 - WARNING - Total failed attempts 28
 2021-12-26 13:30:03,833 - INFO - Attempt #47
 2021-12-26 13:30:03,834 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:30:04,608 - DEBUG - Setting read timeout to 10
 2021-12-26 13:30:04,993 - DEBUG - "GET / HTTP/1.1" 200 None
 2021-12-26 13:30:06,740 - INFO - Attempt #48
 2021-12-26 13:30:06,742 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:30:17,173 - INFO - Status code: 999
 2021-12-26 13:30:17,174 - WARNING - Total failed attempts 29
 2021-12-26 13:30:18,876 - INFO - Attempt #49
 2021-12-26 13:30:18,877 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:30:28,888 - INFO - Status code: 999
 2021-12-26 13:30:28,888 - WARNING - Total failed attempts 30
 2021-12-26 13:30:30,190 - INFO - Attempt #50
 2021-12-26 13:30:30,191 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:30:40,281 - INFO - Status code: 999
 2021-12-26 13:30:40,281 - WARNING - Total failed attempts 31
 2021-12-26 13:30:41,682 - INFO - Attempt #51
 2021-12-26 13:30:41,684 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:30:51,695 - INFO - Status code: 999
 2021-12-26 13:30:51,696 - WARNING - Total failed attempts 32
 2021-12-26 13:30:53,598 - INFO - Attempt #52
 2021-12-26 13:30:53,599 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:30:54,313 - DEBUG - Setting read timeout to 10
 2021-12-26 13:30:54,879 - DEBUG - "GET / HTTP/1.1" 200 None
 2021-12-26 13:30:56,781 - INFO - Attempt #53
 2021-12-26 13:30:56,783 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:30:57,336 - DEBUG - Setting read timeout to 10
 2021-12-26 13:30:57,907 - DEBUG - "GET / HTTP/1.1" 200 None
 2021-12-26 13:31:00,306 - INFO - Attempt #54
 2021-12-26 13:31:00,308 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:31:10,722 - INFO - Status code: 999
 2021-12-26 13:31:10,722 - WARNING - Total failed attempts 33
 2021-12-26 13:31:12,624 - INFO - Attempt #55
 2021-12-26 13:31:12,625 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:31:23,071 - INFO - Status code: 999
 2021-12-26 13:31:23,072 - WARNING - Total failed attempts 34
 2021-12-26 13:31:24,674 - INFO - Attempt #56
 2021-12-26 13:31:24,675 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:31:28,329 - DEBUG - Setting read timeout to 10
 2021-12-26 13:31:29,079 - DEBUG - "GET / HTTP/1.1" 200 None
 2021-12-26 13:31:31,110 - INFO - Attempt #57
 2021-12-26 13:31:31,111 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:31:31,671 - DEBUG - Setting read timeout to 10
 2021-12-26 13:31:32,374 - DEBUG - "GET / HTTP/1.1" 200 83317
 2021-12-26 13:31:34,177 - INFO - Attempt #58
 2021-12-26 13:31:34,179 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:31:34,707 - DEBUG - Setting read timeout to 10
 2021-12-26 13:31:35,264 - DEBUG - "GET / HTTP/1.1" 200 None
 2021-12-26 13:31:36,844 - INFO - Attempt #59
 2021-12-26 13:31:36,846 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:31:37,623 - DEBUG - Setting read timeout to 10
 2021-12-26 13:31:38,386 - DEBUG - "GET / HTTP/1.1" 200 None
 2021-12-26 13:31:40,549 - INFO - Attempt #60
 2021-12-26 13:31:40,550 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:31:41,090 - DEBUG - Setting read timeout to 10
 2021-12-26 13:31:41,785 - DEBUG - "GET / HTTP/1.1" 200 None
 2021-12-26 13:31:43,270 - INFO - Attempt #61
 2021-12-26 13:31:43,272 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:31:43,820 - DEBUG - Setting read timeout to 10
 2021-12-26 13:31:44,735 - DEBUG - "GET / HTTP/1.1" 200 83316
 2021-12-26 13:31:46,773 - INFO - Attempt #62
 2021-12-26 13:31:46,775 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:31:58,031 - INFO - Status code: 999
 2021-12-26 13:31:58,032 - WARNING - Total failed attempts 35
 2021-12-26 13:31:59,333 - INFO - Attempt #63
 2021-12-26 13:31:59,334 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:32:09,346 - INFO - Status code: 999
 2021-12-26 13:32:09,346 - WARNING - Total failed attempts 36
 2021-12-26 13:32:11,348 - INFO - Attempt #64
 2021-12-26 13:32:11,350 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:32:12,031 - DEBUG - Setting read timeout to 10
 2021-12-26 13:32:12,364 - DEBUG - "GET / HTTP/1.1" 200 None
 2021-12-26 13:32:14,856 - INFO - Attempt #65
 2021-12-26 13:32:14,858 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:32:24,991 - INFO - Status code: 999
 2021-12-26 13:32:24,992 - WARNING - Total failed attempts 37
 2021-12-26 13:32:26,594 - INFO - Attempt #66
 2021-12-26 13:32:26,595 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:32:36,607 - INFO - Status code: 999
 2021-12-26 13:32:36,607 - WARNING - Total failed attempts 38
 2021-12-26 13:32:38,008 - INFO - Attempt #67
 2021-12-26 13:32:38,010 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:32:38,880 - DEBUG - Setting read timeout to 10
 2021-12-26 13:32:39,259 - DEBUG - "GET / HTTP/1.1" 200 None
 2021-12-26 13:32:41,276 - INFO - Attempt #68
 2021-12-26 13:32:41,277 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:32:51,768 - INFO - Status code: 999
 2021-12-26 13:32:51,768 - WARNING - Total failed attempts 39
 2021-12-26 13:32:53,370 - INFO - Attempt #69
 2021-12-26 13:32:53,372 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:32:54,076 - DEBUG - Setting read timeout to 10
 2021-12-26 13:32:54,417 - DEBUG - "GET / HTTP/1.1" 200 None
 2021-12-26 13:32:56,425 - INFO - Attempt #70
 2021-12-26 13:32:56,427 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:32:57,131 - DEBUG - Setting read timeout to 10
 2021-12-26 13:32:57,467 - DEBUG - "GET / HTTP/1.1" 200 None
 2021-12-26 13:32:59,680 - INFO - Attempt #71
 2021-12-26 13:32:59,682 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:33:00,422 - DEBUG - Setting read timeout to 10
 2021-12-26 13:33:00,771 - DEBUG - "GET / HTTP/1.1" 200 83316
 2021-12-26 13:33:02,462 - INFO - Attempt #72
 2021-12-26 13:33:02,464 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:33:12,988 - INFO - Status code: 999
 2021-12-26 13:33:12,989 - WARNING - Total failed attempts 40
 2021-12-26 13:33:14,591 - INFO - Attempt #73
 2021-12-26 13:33:14,592 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:33:24,603 - INFO - Status code: 999
 2021-12-26 13:33:24,603 - WARNING - Total failed attempts 41
 2021-12-26 13:33:26,005 - INFO - Attempt #74
 2021-12-26 13:33:26,007 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:33:36,630 - INFO - Status code: 999
 2021-12-26 13:33:36,631 - WARNING - Total failed attempts 42
 2021-12-26 13:33:38,433 - INFO - Attempt #75
 2021-12-26 13:33:38,434 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:33:48,918 - INFO - Status code: 999
 2021-12-26 13:33:48,918 - WARNING - Total failed attempts 43
 2021-12-26 13:33:50,720 - INFO - Attempt #76
 2021-12-26 13:33:50,722 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:34:00,796 - INFO - Status code: 999
 2021-12-26 13:34:00,797 - WARNING - Total failed attempts 44
 2021-12-26 13:34:01,898 - INFO - Attempt #77
 2021-12-26 13:34:01,899 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:34:11,911 - INFO - Status code: 999
 2021-12-26 13:34:11,911 - WARNING - Total failed attempts 45
 2021-12-26 13:34:13,913 - INFO - Attempt #78
 2021-12-26 13:34:13,914 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:34:14,944 - DEBUG - Setting read timeout to 10
 2021-12-26 13:34:16,031 - DEBUG - "GET / HTTP/1.1" 200 None
 2021-12-26 13:34:18,223 - INFO - Attempt #79
 2021-12-26 13:34:18,224 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:34:19,010 - DEBUG - Setting read timeout to 10
 2021-12-26 13:34:19,666 - DEBUG - "GET / HTTP/1.1" 200 None
 2021-12-26 13:34:22,034 - INFO - Attempt #80
 2021-12-26 13:34:22,035 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:34:22,828 - DEBUG - Setting read timeout to 10
 2021-12-26 13:34:23,457 - DEBUG - "GET / HTTP/1.1" 200 None
 2021-12-26 13:34:25,931 - INFO - Attempt #81
 2021-12-26 13:34:25,932 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:34:35,944 - INFO - Status code: 999
 2021-12-26 13:34:35,944 - WARNING - Total failed attempts 46
 2021-12-26 13:34:37,346 - INFO - Attempt #82
 2021-12-26 13:34:37,347 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:34:38,133 - DEBUG - Setting read timeout to 10
 2021-12-26 13:34:38,473 - DEBUG - "GET / HTTP/1.1" 200 83360
 2021-12-26 13:34:40,957 - INFO - Attempt #83
 2021-12-26 13:34:40,959 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:34:41,702 - DEBUG - Setting read timeout to 10
 2021-12-26 13:34:42,057 - DEBUG - "GET / HTTP/1.1" 200 None
 2021-12-26 13:34:43,682 - INFO - Attempt #84
 2021-12-26 13:34:43,684 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:34:53,695 - INFO - Status code: 999
 2021-12-26 13:34:53,695 - WARNING - Total failed attempts 47
 2021-12-26 13:34:55,698 - INFO - Attempt #85
 2021-12-26 13:34:55,699 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:35:06,167 - INFO - Status code: 999
 2021-12-26 13:35:06,167 - WARNING - Total failed attempts 48
 2021-12-26 13:35:07,269 - INFO - Attempt #86
 2021-12-26 13:35:07,270 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:35:17,358 - INFO - Status code: 999
 2021-12-26 13:35:17,358 - WARNING - Total failed attempts 49
 2021-12-26 13:35:18,860 - INFO - Attempt #87
 2021-12-26 13:35:18,862 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:35:28,873 - INFO - Status code: 999
 2021-12-26 13:35:28,873 - WARNING - Total failed attempts 50
 2021-12-26 13:35:30,275 - INFO - Attempt #88
 2021-12-26 13:35:30,276 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:35:31,015 - DEBUG - Setting read timeout to 10
 2021-12-26 13:35:31,456 - DEBUG - "GET / HTTP/1.1" 200 None
 2021-12-26 13:35:33,317 - INFO - Attempt #89
 2021-12-26 13:35:33,318 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:35:33,549 - DEBUG - Setting read timeout to 10
 2021-12-26 13:35:33,883 - DEBUG - "GET / HTTP/1.1" 200 None
 2021-12-26 13:35:43,896 - INFO - Status code: 999
 2021-12-26 13:35:43,896 - WARNING - Total failed attempts 51
 2021-12-26 13:35:45,298 - INFO - Attempt #90
 2021-12-26 13:35:45,299 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:35:55,311 - INFO - Status code: 999
 2021-12-26 13:35:55,311 - WARNING - Total failed attempts 52
 2021-12-26 13:35:56,813 - INFO - Attempt #91
 2021-12-26 13:35:56,814 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:36:06,890 - INFO - Status code: 999
 2021-12-26 13:36:06,890 - WARNING - Total failed attempts 53
 2021-12-26 13:36:08,692 - INFO - Attempt #92
 2021-12-26 13:36:08,693 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:36:18,705 - INFO - Status code: 999
 2021-12-26 13:36:18,705 - WARNING - Total failed attempts 54
 2021-12-26 13:36:20,207 - INFO - Attempt #93
 2021-12-26 13:36:20,208 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:36:30,376 - INFO - Status code: 999
 2021-12-26 13:36:30,376 - WARNING - Total failed attempts 55
 2021-12-26 13:36:31,978 - INFO - Attempt #94
 2021-12-26 13:36:31,979 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:36:33,181 - DEBUG - Setting read timeout to 10
 2021-12-26 13:36:33,413 - DEBUG - "GET / HTTP/1.1" 200 None
 2021-12-26 13:36:34,772 - INFO - Attempt #95
 2021-12-26 13:36:34,773 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:36:34,995 - DEBUG - Setting read timeout to 10
 2021-12-26 13:36:35,453 - DEBUG - "GET / HTTP/1.1" 200 None
 2021-12-26 13:36:37,053 - INFO - Attempt #96
 2021-12-26 13:36:37,055 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:36:47,067 - INFO - Status code: 999
 2021-12-26 13:36:47,067 - WARNING - Total failed attempts 56
 2021-12-26 13:36:48,368 - INFO - Attempt #97
 2021-12-26 13:36:48,370 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:36:58,609 - INFO - Status code: 999
 2021-12-26 13:36:58,609 - WARNING - Total failed attempts 57
 2021-12-26 13:37:00,611 - INFO - Attempt #98
 2021-12-26 13:37:00,612 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:37:10,624 - INFO - Status code: 999
 2021-12-26 13:37:10,624 - WARNING - Total failed attempts 58
 2021-12-26 13:37:12,126 - INFO - Attempt #99
 2021-12-26 13:37:12,127 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:37:22,217 - INFO - Status code: 999
 2021-12-26 13:37:22,217 - WARNING - Total failed attempts 59
 2021-12-26 13:37:24,018 - INFO - Attempt #100
 2021-12-26 13:37:24,019 - INFO - Starting new HTTPS connection (1): store.steampowered.com
 2021-12-26 13:37:34,031 - INFO - Status code: 999
 2021-12-26 13:37:34,031 - WARNING - Total failed attempts 60
```

在 100 次尝试中，60 次尝试判定失败，失败原因均为超时（测试限制时间 10s，返回码定义 999），成功请求与失败请求交错分布。在我们的所处位置失败更频繁。

（我们采用 HTTPie 多次测试确定请求失败原因为 `[WinError 10060] 由于连接方在一段时间后没有正确答复或连接的主机没有反应，连接尝试失败。`）

北京亚马逊云 traceroute 输出如下：

```shell
traceroute to store.steampowered.com (69.192.208.101), 30 hops max, 60 byte packets
 1  ec2-54-223-0-62.cn-north-1.compute.amazonaws.com.cn (54.223.0.62)  22.114 ms ec2-54-223-0-46.cn-north-1.compute.amazonaws.com.cn (54.223.0.46)  25.168 ms ec2-54-223-0-48.cn-north-1.compute.amazonaws.com.cn (54.223.0.48)  25.187 ms
 2  100.66.0.184 (100.66.0.184)  12.928 ms 100.66.0.252 (100.66.0.252)  4.870 ms 100.66.0.246 (100.66.0.246)  17.397 ms
 3  100.66.3.98 (100.66.3.98)  11.644 ms 100.66.3.78 (100.66.3.78)  19.957 ms 100.66.3.162 (100.66.3.162)  12.904 ms
 4  100.66.7.103 (100.66.7.103)  16.281 ms 100.66.7.11 (100.66.7.11)  21.808 ms 100.66.7.169 (100.66.7.169)  21.794 ms
 5  100.66.4.43 (100.66.4.43)  12.401 ms 100.66.4.103 (100.66.4.103)  18.218 ms 100.66.4.215 (100.66.4.215)  19.833 ms
 6  100.65.9.33 (100.65.9.33)  0.786 ms 100.65.8.65 (100.65.8.65)  0.324 ms 100.65.10.193 (100.65.10.193)  0.248 ms
 7  54.222.25.6 (54.222.25.6)  1.762 ms 54.222.1.34 (54.222.1.34)  1.678 ms  1.945 ms
 8  54.222.0.217 (54.222.0.217)  1.804 ms 54.222.0.213 (54.222.0.213)  5.934 ms 54.222.0.215 (54.222.0.215)  1.548 ms
 9  54.222.31.122 (54.222.31.122)  2.053 ms 54.222.31.118 (54.222.31.118)  2.138 ms 54.222.31.116 (54.222.31.116)  2.047 ms
10  210.53.199.9 (210.53.199.9)  18.801 ms  36.845 ms  36.760 ms
11  * * *
12  210.78.6.213 (210.78.6.213)  21.589 ms 210.78.16.5 (210.78.16.5)  20.851 ms 210.78.6.213 (210.78.6.213)  21.494 ms
13  218.105.2.206 (218.105.2.206)  24.105 ms  24.046 ms 218.105.2.90 (218.105.2.90)  25.833 ms
14  204.148.55.129 (204.148.55.129)  159.652 ms  156.348 ms  156.383 ms
15  * * *
16  verizon-com.customer.alter.net (152.179.105.10)  203.413 ms  203.415 ms  202.807 ms
17  ae18.r04.border101.ord01.fab.netarch.akamai.com (23.203.151.245)  205.619 ms  205.622 ms  205.611 ms
18  * * *
19  * * *
20  * * *
21  * * *
22  * * *
23  * * *
24  * * *
25  * * *
26  * * *
27  * * *
28  * * *
29  * * *
30  * * *
```

在美国俄勒冈达尔斯谷歌云上在 Docker 容器 Debian 环境内，我们执行了相同的测试，log 如下：

```verilog
 2021-12-26 13:52:46,944 - INFO - Starting steam_store_test.py
 2021-12-26 13:52:46,945 - INFO - max_attempts: 100
 2021-12-26 13:52:46,945 - INFO - timeout: 10
 2021-12-26 13:52:46,945 - INFO - Attempt #1
 2021-12-26 13:52:46,947 - DEBUG - Starting new HTTPS connection (1): store.steampowered.com:443
 2021-12-26 13:52:47,078 - DEBUG - https://store.steampowered.com:443 "GET / HTTP/1.1" 200 None
 2021-12-26 13:52:48,394 - INFO - Attempt #2
 2021-12-26 13:52:48,396 - DEBUG - Starting new HTTPS connection (1): store.steampowered.com:443
 2021-12-26 13:52:48,514 - DEBUG - https://store.steampowered.com:443 "GET / HTTP/1.1" 200 None
 2021-12-26 13:52:50,432 - INFO - Attempt #3
 2021-12-26 13:52:50,435 - DEBUG - Starting new HTTPS connection (1): store.steampowered.com:443
 2021-12-26 13:52:50,551 - DEBUG - https://store.steampowered.com:443 "GET / HTTP/1.1" 200 81436
 2021-12-26 13:52:52,469 - INFO - Attempt #4
 2021-12-26 13:52:52,471 - DEBUG - Starting new HTTPS connection (1): store.steampowered.com:443
 2021-12-26 13:52:52,596 - DEBUG - https://store.steampowered.com:443 "GET / HTTP/1.1" 200 None
 2021-12-26 13:52:53,714 - INFO - Attempt #5
 2021-12-26 13:52:53,716 - DEBUG - Starting new HTTPS connection (1): store.steampowered.com:443
 2021-12-26 13:52:53,853 - DEBUG - https://store.steampowered.com:443 "GET / HTTP/1.1" 200 None
 2021-12-26 13:52:55,571 - INFO - Attempt #6
 2021-12-26 13:52:55,573 - DEBUG - Starting new HTTPS connection (1): store.steampowered.com:443
 2021-12-26 13:52:55,711 - DEBUG - https://store.steampowered.com:443 "GET / HTTP/1.1" 200 81435
 2021-12-26 13:52:57,328 - INFO - Attempt #7
 2021-12-26 13:52:57,331 - DEBUG - Starting new HTTPS connection (1): store.steampowered.com:443
 2021-12-26 13:52:57,464 - DEBUG - https://store.steampowered.com:443 "GET / HTTP/1.1" 200 81436
 2021-12-26 13:52:59,384 - INFO - Attempt #8
 2021-12-26 13:52:59,386 - DEBUG - Starting new HTTPS connection (1): store.steampowered.com:443
 2021-12-26 13:52:59,512 - DEBUG - https://store.steampowered.com:443 "GET / HTTP/1.1" 200 81436
 2021-12-26 13:53:01,326 - INFO - Attempt #9
 2021-12-26 13:53:01,329 - DEBUG - Starting new HTTPS connection (1): store.steampowered.com:443
 2021-12-26 13:53:01,460 - DEBUG - https://store.steampowered.com:443 "GET / HTTP/1.1" 200 None
 2021-12-26 13:53:03,479 - INFO - Attempt #10
 2021-12-26 13:53:03,483 - DEBUG - Starting new HTTPS connection (1): store.steampowered.com:443
 2021-12-26 13:53:03,601 - DEBUG - https://store.steampowered.com:443 "GET / HTTP/1.1" 200 None
 2021-12-26 13:53:04,718 - INFO - Attempt #11
 2021-12-26 13:53:04,721 - DEBUG - Starting new HTTPS connection (1): store.steampowered.com:443
 2021-12-26 13:53:04,847 - DEBUG - https://store.steampowered.com:443 "GET / HTTP/1.1" 200 None
 2021-12-26 13:53:06,164 - INFO - Attempt #12
 2021-12-26 13:53:06,166 - DEBUG - Starting new HTTPS connection (1): store.steampowered.com:443
 2021-12-26 13:53:06,318 - DEBUG - https://store.steampowered.com:443 "GET / HTTP/1.1" 200 None
 2021-12-26 13:53:07,935 - INFO - Attempt #13
 2021-12-26 13:53:07,938 - DEBUG - Starting new HTTPS connection (1): store.steampowered.com:443
 2021-12-26 13:53:08,072 - DEBUG - https://store.steampowered.com:443 "GET / HTTP/1.1" 200 None
 2021-12-26 13:53:09,493 - INFO - Attempt #14
 2021-12-26 13:53:09,495 - DEBUG - Starting new HTTPS connection (1): store.steampowered.com:443
 2021-12-26 13:53:09,608 - DEBUG - https://store.steampowered.com:443 "GET / HTTP/1.1" 200 None
 2021-12-26 13:53:10,724 - INFO - Attempt #15
 2021-12-26 13:53:10,726 - DEBUG - Starting new HTTPS connection (1): store.steampowered.com:443
 2021-12-26 13:53:10,831 - DEBUG - https://store.steampowered.com:443 "GET / HTTP/1.1" 200 None
 2021-12-26 13:53:12,648 - INFO - Attempt #16
 2021-12-26 13:53:12,651 - DEBUG - Starting new HTTPS connection (1): store.steampowered.com:443
 2021-12-26 13:53:12,995 - DEBUG - https://store.steampowered.com:443 "GET / HTTP/1.1" 200 None
 2021-12-26 13:53:14,311 - INFO - Attempt #17
 2021-12-26 13:53:14,314 - DEBUG - Starting new HTTPS connection (1): store.steampowered.com:443
 2021-12-26 13:53:14,433 - DEBUG - https://store.steampowered.com:443 "GET / HTTP/1.1" 200 81436
 2021-12-26 13:53:16,451 - INFO - Attempt #18
 2021-12-26 13:53:16,453 - DEBUG - Starting new HTTPS connection (1): store.steampowered.com:443
 2021-12-26 13:53:16,565 - DEBUG - https://store.steampowered.com:443 "GET / HTTP/1.1" 200 None
 2021-12-26 13:53:18,481 - INFO - Attempt #19
 2021-12-26 13:53:18,485 - DEBUG - Starting new HTTPS connection (1): store.steampowered.com:443
 2021-12-26 13:53:18,632 - DEBUG - https://store.steampowered.com:443 "GET / HTTP/1.1" 200 81436
 2021-12-26 13:53:19,949 - INFO - Attempt #20
 2021-12-26 13:53:19,951 - DEBUG - Starting new HTTPS connection (1): store.steampowered.com:443
 2021-12-26 13:53:20,072 - DEBUG - https://store.steampowered.com:443 "GET / HTTP/1.1" 200 81438
 2021-12-26 13:53:21,589 - INFO - Attempt #21
 2021-12-26 13:53:21,591 - DEBUG - Starting new HTTPS connection (1): store.steampowered.com:443
 2021-12-26 13:53:21,712 - DEBUG - https://store.steampowered.com:443 "GET / HTTP/1.1" 200 None
 2021-12-26 13:53:23,427 - INFO - Attempt #22
 2021-12-26 13:53:23,429 - DEBUG - Starting new HTTPS connection (1): store.steampowered.com:443
 2021-12-26 13:53:23,549 - DEBUG - https://store.steampowered.com:443 "GET / HTTP/1.1" 200 None
 2021-12-26 13:53:25,267 - INFO - Attempt #23
 2021-12-26 13:53:25,269 - DEBUG - Starting new HTTPS connection (1): store.steampowered.com:443
 2021-12-26 13:53:25,402 - DEBUG - https://store.steampowered.com:443 "GET / HTTP/1.1" 200 None
 2021-12-26 13:53:26,621 - INFO - Attempt #24
 2021-12-26 13:53:26,623 - DEBUG - Starting new HTTPS connection (1): store.steampowered.com:443
 2021-12-26 13:53:26,745 - DEBUG - https://store.steampowered.com:443 "GET / HTTP/1.1" 200 None
 2021-12-26 13:53:28,063 - INFO - Attempt #25
 2021-12-26 13:53:28,066 - DEBUG - Starting new HTTPS connection (1): store.steampowered.com:443
 2021-12-26 13:53:28,193 - DEBUG - https://store.steampowered.com:443 "GET / HTTP/1.1" 200 None
（以下省略）
```

100 次尝试没有出现任何问题，可以排除 Steam 服务器对测试程序的针对性屏蔽。

值得注意的是，测试人员的设备和北京亚马逊云尝试连接的并不是同一个服务器 IP（分别位于美国的两个不同的州且 IP 段有非常明显的差别），不太可能是针对某一个服务器 IP 的*“失误”*，况且还能 ping 通。

上述测验证明了如下结论：

- 本次针对 Steam 的封锁与 GitHub 相似（消息证实）
- 也许不是*“错误地”*封锁了某个 IP 段

~~我们会尽可能跟进报道。~~

2021-12-27 更新

根据 v2ex 网友的[方法](https://www.v2ex.com/t/824179)构建的[测试工具包](https://github.com/sunsets-deprecated-username/steam-store-checker)现已发布，在多处地点已复现成功。

详见页首视频。

2021-12-31 更新

于 2021 年 12 月 31 日 上午 12:08 来自 Steam 客服的信息

您好：

对于迟来的回复，我们深表歉意。

这是一个您当前所在的地区已知的网络服务现象；部分平台社区功能如交易（报价、确认）、添加好友等均无法正常使用。

这个问题不会影响到您游玩库里头的游戏。

目前我们仍无任何排解办法，也没有解决的估计时程能提供给您；对此我们深表歉意。

感谢您的谅解与包涵。

Thanks for using Steam,
Michel C

2022-01-07 更新

冬促结束，情况依旧。
