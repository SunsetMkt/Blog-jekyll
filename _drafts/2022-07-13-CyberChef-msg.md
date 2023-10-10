---
title: "【转载】基于CyberChef的RSA聊天加解密"
date: 2022-07-13
tags: IM 加密 v2ex 转载
categories: article
---

[来源](https://v2ex.com/t/865927)

---

[生成 Keypair](<https://gchq.github.io/CyberChef/#recipe=Generate_RSA_Key_Pair('2048','PEM')>)

[使用公钥加密](<https://gchq.github.io/CyberChef/#recipe=Register('(%5B%5C%5Cs%5C%5CS%5D%2B)',true,false,false)Generate_UUID()MD5()Register('(.%7B16%7D)',true,false,false)Find_/_Replace(%7B'option':'Regex','string':'%5B%5C%5Cs%5C%5CS%5D%2B'%7D,'$R1',true,false,true,false)RSA_Encrypt('','RSA-OAEP','SHA-1')To_Base64('A-Za-z0-9%2B/%3D')Register('(%5B%5C%5Cs%5C%5CS%5D%2B)',true,false,false)Find_/_Replace(%7B'option':'Regex','string':'%5B%5C%5Cs%5C%5CS%5D%2B'%7D,'$R0',true,false,true,false)AES_Encrypt(%7B'option':'UTF8','string':'$R1'%7D,%7B'option':'UTF8','string':'$R1'%7D,'CBC','Raw','Raw',%7B'option':'Hex','string':''%7D)To_Base64('A-Za-z0-9%2B/%3D')Find_/_Replace(%7B'option':'Regex','string':'%5E'%7D,'$R2%5C%5Cn',false,false,true,false)>)

[使用私钥解密](<https://gchq.github.io/CyberChef/#recipe=Register('(%5B%5E%5C%5Cn%5D%2B)%5C%5Cs%2B(%5B%5E%5C%5Cn%5D%2B)',true,false,false)Find_/_Replace(%7B'option':'Regex','string':'%5B%5C%5Cs%5C%5CS%5D%2B'%7D,'$R0',true,false,true,false)From_Base64('A-Za-z0-9%2B/%3D',true)RSA_Decrypt('','','RSA-OAEP','SHA-1')Register('(%5B%5E%5C%5Cn%5D%2B)',true,false,false)Find_/_Replace(%7B'option':'Regex','string':'%5B%5C%5Cs%5C%5CS%5D%2B'%7D,'$R1',true,false,true,false)From_Base64('A-Za-z0-9%2B/%3D',true)AES_Decrypt(%7B'option':'UTF8','string':'$R2'%7D,%7B'option':'UTF8','string':'$R2'%7D,'CBC','Raw','Raw',%7B'option':'Hex','string':''%7D,%7B'option':'Hex','string':''%7D)>)
