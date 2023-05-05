---
title: Endnote 20 License.dat 授权文件
date: 2023-05-03
tags:  EndNote 版权争议
categories: article
---

<div>
    <style>
        body {
            /* Blur */
            filter: blur(5px);
        }
    </style>
</div>

## 基于CyberChef的简单字符串的非对称加密
使用CyberChef可以实现简单字符串的非对称加密，例子如下：

* 我们有一个String
* [生成Keypair](https://gchq.github.io/CyberChef/#recipe=Generate_RSA_Key_Pair('2048','PEM'))

```
-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAoerkbkEDzBMCAY49+y2Z
zng/pyxf5eaqtl7p5TuG/i0bKIRMMqGsgnMgl3d+cpSzNu4U9nOcqaX+sj1XqPjm
jusUH8v6gSr376RCxz7hiIOQIjJCFvzampST7+4MjpoOh9HGhFrIcT3WRFWOjiod
NXb9TUDh9O7MWemgqPJ4jq3pguf6LvTuzeRGs+cyjoFmsXqPBdANgQyy8G0jha51
7B4uW+lktu5LECJ+3xnm3KHcntRH1GAADq/GkBmbNWZK2JuH6V1+zOHKswub9zQ3
lMv0lcNYYesWOI+j9XwjuXPIwMG2MBui+6fcnNJcSL/8C6juedRakXE+DrOclYj/
1QIDAQAB
-----END PUBLIC KEY-----

-----BEGIN RSA PRIVATE KEY-----
MIIEowIBAAKCAQEAoerkbkEDzBMCAY49+y2Zzng/pyxf5eaqtl7p5TuG/i0bKIRM
MqGsgnMgl3d+cpSzNu4U9nOcqaX+sj1XqPjmjusUH8v6gSr376RCxz7hiIOQIjJC
FvzampST7+4MjpoOh9HGhFrIcT3WRFWOjiodNXb9TUDh9O7MWemgqPJ4jq3pguf6
LvTuzeRGs+cyjoFmsXqPBdANgQyy8G0jha517B4uW+lktu5LECJ+3xnm3KHcntRH
1GAADq/GkBmbNWZK2JuH6V1+zOHKswub9zQ3lMv0lcNYYesWOI+j9XwjuXPIwMG2
MBui+6fcnNJcSL/8C6juedRakXE+DrOclYj/1QIDAQABAoIBAAZIPZAsjBfrJeEH
Eo8QDB9naXrUPS1Hl5iHUrZe6qQqflsCVQ2C2dVe36UY0QpjjBeFwcD1J98qLlle
iWvoKlPhuZBpQuEnmGKPIjsmTKxWBG3bOta2/UlRmfLNbuXKguVQpY3lktDX+BwD
IMqRxjvYj8fjTFELQdj8OExNyhEpDOyJeNz7/k9AUazYGXgNH7Z2PipslMNfrxrA
fWMXbcSogofeOlRpPz2RSO9flevxpn9fyJm8q2Bs6evXPVHxeEDe66V2OYHegj/c
c9aLsuNSJL2xTk/Y0DuXAWyENPhMwGR+Y8gx+H2F9e9NYet9L4KgcOXE9aexDAjV
GazIBeECgYEA1g8IogM5L4IutVvgx/9GM6V8ACvmGqjqaKqN861Xcoce2M6HOvas
UopV88yY6DwPSRkH1FfwYOIgY+WprZfnB6aVQ5ouhjfGbYSwpGi8Ec3kP3cLFraV
z3JzYBGON9aKCDlcIEIanaSPK3I8P5B6zJ4PnvCuai0ryUvoqBJzMiECgYEAwaSC
tIXBGpyQ9BFYqgWlFiS9lRoFajptMnGbapUuRx39ur8RP4I7aVOIYjszd72JF9yn
4dpKnGvINWkOOpDB3dp+BaYbatfOAYBWaptgq8cnVHw4WBrsKQIKV9KMl4rY+EE+
8p7ru97qossPm9BltFeuWZuJUPPEnYXLFIopvzUCgYEAi+zX38/rmbqnfbXJgfLE
mQ4buKD5kYPJdxHGKPuuphbdeyvGCi0lB++VsACWE3jvJQFPtOanIy2trp96AxfA
1ad2+vHWZ7Yd54lNTquIBLtp8HKItRg1ZZ2S/cF8DdQX9rhIGG4dp97iF6xc5dAz
9X19CJCb8pwEe1k7hGJLGwECgYBZdOp9Ax2GcbX1St4vDZSKekaqzu6ZeIxhtWIb
BvfuGsjQsNwC/uL7cX+cAcVxF7pxr5pPGE1HnfNL2VCddapaF0oIygf4f+HHh8Zk
UYuDT+m3eft9mFJpT2v/zmDs0VQSu/GcnBZDIGQ8+JopXUje23LMKrJxF2xJaTm8
L2fB0QKBgCFwiY83qGIxidpaGhOyIQcUPRu4k9mdnuARWjyBogIhJiZgtEqw6N6z
65nO+/nldBn74n5O9Az/dQ7MUDyD08lglEwq4QoGQsPjMuU+gmLDZWAcznFSEhOE
nfoG7jJPF96DvDKJWjeXk6olhkc2bx5IbcaIIzhJjx6Zq5ZbQTTk
-----END RSA PRIVATE KEY-----
```

* [使用公钥加密](https://gchq.github.io/CyberChef/#recipe=Register('(%5B%5C%5Cs%5C%5CS%5D%2B)',true,false,false)Generate_UUID()MD5()Register('(.%7B16%7D)',true,false,false)Find_/_Replace(%7B'option':'Regex','string':'%5B%5C%5Cs%5C%5CS%5D%2B'%7D,'$R1',true,false,true,false)RSA_Encrypt('','RSA-OAEP','SHA-1')To_Base64('A-Za-z0-9%2B/%3D')Register('(%5B%5C%5Cs%5C%5CS%5D%2B)',true,false,false)Find_/_Replace(%7B'option':'Regex','string':'%5B%5C%5Cs%5C%5CS%5D%2B'%7D,'$R0',true,false,true,false)AES_Encrypt(%7B'option':'UTF8','string':'$R1'%7D,%7B'option':'UTF8','string':'$R1'%7D,'CBC','Raw','Raw',%7B'option':'Hex','string':''%7D)To_Base64('A-Za-z0-9%2B/%3D')Find_/_Replace(%7B'option':'Regex','string':'%5E'%7D,'$R2%5C%5Cn',false,false,true,false))

```
RyPVnvbetdzcTPPaLPw86TJHlqpqjpzkm5kgVvofvWO0xEl+w+uXAuoAdCBZL96PBRwbOGVdkfcswSaIWBEi+dfEUBN5fts6IHuF2bIsXzW2lPNdSSCFejGz5iVWeOZvuFgycQHuYLt+OWkzm74OxgwxWirtS23HS49lx1yB81ufOeId07PnDb4UUXRpfeJRvKt4I8dNvyfGhFS8TAZ3PFr4kNHaCT5GZxpp6XhBwC2wTQDYjrVaV1952+SDFgRPBWXZRAuPBIsVqt/LW1eNVr0SV/ihAtNOcZbWWWGdhm8ZOKy8hzcD0868bds3bLSiGoJVTurD5nr+y+3AdYCXBQ==
eAab/Gn8QgE7NSTL8wp8zJC4p8gf2dUVFV35LuDXCbZJwsystXb6P5x8cReIV9lnVR46lEeOlTWyzYs1IYIGAaJjf+2LfmQNtEWPJR4IoBjDnvrW1H8vBagoBdXY5yNAnNwnzzxDkeDPEsDsANHPI1vqLrWHiiCEXrGnj2rni1DP1G8V6yWWymeV6kWkN2maMenzM2CFeAbGqz6zyep34V2HXkZccCxUuLRTsZn0G9W9LpcCUQ3083tsN3QHAjCOBAgWAy6mwdYE+tkQZonxrJTrQkfgwQhh5650K3HZBvRQrAlojTqAW6Ebb+fAgV/4+IL5KnRnHGGI7e+nsUyOMV5v6pTB1GzvgBtcSLJtvF7wU7ERpKzJX3sFE0kbEHrp9CL3vNGr/NR7AC8SUcsC9xTChWSWnuZ2piebiisAXKdv1S4ENOw7b3eqD11TTzljsBgbdROVic9yXoEUptDAu3hDAg1PyAeMrhEotQtszDvnKpUMGRkExe0N0nrSG7sKl4KQDqOc/81CL71dme/Re2VZG2O8A5RW6Q9kZb099ecopqRCXwRSvmHhw7d9CWScA/GyPQ4XVqHf2Rf2NI6S9IM6/nxBNtX1aR+uR83n/2S+2MMGN5zGLGBBFMvYoaqy1St/Z4vU39mPfIDnpMsXnIiC+PGLLImBQyAqhchMYLYdh51XRUTx21cilX4xKBSkhx+CTfqWxq7+Bsnh2p4dLxULWqm4sXSzoqR7R881gsGh3C/MbKvaRKlLY6pI/WsYYKqqh6JqcTU4vD/mIw5ZpmClL5VmkuJo61N1wdr/MSepw4hL1kY4pCDfnhu8bo1fGKKbtf6hnqBBdf9xKZzfpHL1K0UQTgZTMud5P9zTEKBe+nW0SSGQfIMBEsc/ae182fi3xLdWuMGPEcuYmmP2lSLRHfQiL4QN0Q/Ngna9TkE6HEO4HgnLZlQSrfoBqcnXwidD4O/6WFZoVTV27IWfQk8AXi0xD0snA36VQF8N8ndhfpFqmqugILwQa14b4Ibq7FrwKVLMTM+CYv0zOwncv4OFRLt+ZTwGzH0zvxPs9X0ST+j/4kDOj0JW5QgbNeQ31uPDj0Ure+l9sKHyVxSLFxImWP7DIKjGS0oHaJSTl9fNbszpFyyIOA4Gq6UxNzF9wBdlACfOsDZsLPNKUkwks0uwQF7Bp5Jd1rMJXnHe2rWFmykrnqOQvh7kecFcISpztcRouG/ZbZCdFi/Tgr6lSZYBC74+kfg7rJ+ExUz48BzrO2v4RQsD3A4RVYjyGoyf081jkHJQUNl/J2QSrbDmtK0UtYFkEI9f+sqbKHWpaJDa6Ai3Rfxcxp52QzIMfI0Q+pnnMNP8YRXYnzaE9JG8cwkr12ge9OBa0dT2K+VtJaA=
```

* [使用私钥解密](https://gchq.github.io/CyberChef/#recipe=Register('(%5B%5E%5C%5Cn%5D%2B)%5C%5Cs%2B(%5B%5E%5C%5Cn%5D%2B)',true,false,false)Find_/_Replace(%7B'option':'Regex','string':'%5B%5C%5Cs%5C%5CS%5D%2B'%7D,'$R0',true,false,true,false)From_Base64('A-Za-z0-9%2B/%3D',true)RSA_Decrypt('','','RSA-OAEP','SHA-1')Register('(%5B%5E%5C%5Cn%5D%2B)',true,false,false)Find_/_Replace(%7B'option':'Regex','string':'%5B%5C%5Cs%5C%5CS%5D%2B'%7D,'$R1',true,false,true,false)From_Base64('A-Za-z0-9%2B/%3D',true)AES_Decrypt(%7B'option':'UTF8','string':'$R2'%7D,%7B'option':'UTF8','string':'$R2'%7D,'CBC','Raw','Raw',%7B'option':'Hex','string':''%7D,%7B'option':'Hex','string':''%7D))
* 得到String

这里提供的示例*似乎*不能用于非ASCII字符，至少在中文字符上表现不如预期。
