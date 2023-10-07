---
title: '在Root设备中导出Microsoft Authenticator中的TOTP密钥'
date: 2023-10-07
tags: MicrosoftAuthenticator Android
categories: article
---

> 由于Microsoft Authenticator不提供手工导出功能，不建议将其用于除Microsoft账号外的2FA验证软件。

Microsoft Authenticator的密钥保存在SQLite数据库中，路径为`/data/data/com.azure.authenticator/databases/PhoneFactor`。

注意，访问`/data/data/`目录需要root权限。

将`PhoneFactor`、`PhoneFactor-shm`、`PhoneFactor-wal`（若存在后两个）复制到PC上，使用SQLite数据库的图形化浏览程序即可获得密钥。
