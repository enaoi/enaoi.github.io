---
title: 浏览器安全机制
date: 2019-12-05 10:26:26
categories:
- security
tags:
- security
---

浏览器的同源策略导致了跨域。seesion和cookie在维护HTTP无状态会话的同时，也会产生安全问题。

## web 安全设置

### 设置 Header

通过某些特定的head头配置，就可以完成浏览器前端的安全设置。下面是几个典型的安全消息头设置：

#### X-XSS-Protection，启用 XSS 过滤

这个head头设置主要是用来防止浏览器中的反射性 XSS 攻击。

语法如下：

```javascript
X-XSS-Protection: 0;  // 禁止XSS过滤
X-XSS-Protection: 1;  // 启用XSS过滤

// 启用XSS过滤。 如果检测到攻击，浏览器将不会清除页面，而是阻止页面加载
X-XSS-Protection: 1; mode=block

// 启用XSS过滤。 如果检测到跨站脚本攻击，浏览器将清除页面并使用CSP report-uri指令的功能发送违规报告。
X-XSS-Protection: 1; report=<reporting-uri>  
```

#### Strict-Transport-Security

Strict-Transport-Security(STS)是一种用来配置浏览器和服务器之间安全通信的机制，主要用来防止中间者攻击，因为它强制所有的通信都使用HTTPs，在普通的HTTP报文请求中配置STS是没有作用的，而且攻击者也可以改变这些值。

#### Access-Control-Allow-Origin

这个设置决定哪些网站可以访问当前服务器资源。
一般用作跨域共享设置的一种实现方式。

## HTTPS

### 对称加密

缺点：加密和解谜是同一个密钥。每个传输对象的密钥都不同，如何传递密钥是个问题。

图片

### RSA：非对称加密

RSA的密钥分为：公钥和私钥。
用公钥加密的数据只有对应的私钥才能解密；用私钥加密的数据只有对应的公钥加密。

图片

缺点：RSA算法加密时间长，对称机密时间短

### 非对称加密 + 对称加密

非对称加密传输对称加密的密钥，之后使用对称加密传输。
解决了非对称加密时间过久和对称加密的密钥传输问题。

缺点： 中间人劫持

### 中间人劫持

在公钥发送的过程中，中间人劫持了A发送的公钥，将自己的公钥发送给了B，这样就完全劫持了A和B的传输。

### 数字证书

个人将`个人的公钥和个人信息等其它信息`使用hash算法生成一个`消息摘要`。

将`消息摘要`用CA（公信力的认证中心）的私钥对消息加密，形成`数字签名`。

将`数字签名`和 `个人的公钥和个人信息等其它信息`这个原始信息合并，形成全新的东西，叫做`数字证书`。

浏览器一般内置了根证书。

### HTTPS原理

图片

## 同源策略

> 同源策略限制了从同一个源加载的文档或脚本如何与来自另一个源的资源进行交互。这是一个用于隔离潜在恶意文件的重要安全机制。

### 跨域问题

同源策略限制了恶意文件的攻击，但是也导致我们某些特殊的需求需要解决跨域问题。

目前常用的解决方案有以下几种：

- JSONP
- CROS
- Nginx
- ...

## session 和 cookie

Cookie和Session是为了在无状态的HTTP协议之上维护会话状态，使得服务器可以知道当前是和哪个客户在打交道。

因为HTTP协议是无状态的，即每次用户请求到达服务器时，HTTP服务器并不知道这个用户是谁、是否登录过等。现在的服务器之所以知道我们是否已经登录，是因为服务器在登录时设置了浏览器的Cookie！Session则是借由Cookie而实现的更高层的服务器与浏览器之间的会话。

### cookie

#### cookie的机制

图片

#### cookie的安全隐患

Cookie提供了一种手段使得HTTP请求可以附加当前状态， 现今的网站也是靠Cookie来标识用户的登录状态的：

- 用户提交用户名和密码的表单，这通常是一个POST HTTP请求。
- 服务器验证用户名与密码，如果合法则返回200（OK）并设置Set-Cookie为authed=true。
- 浏览器存储该Cookie。
- 浏览器发送请求时，设置Cookie字段为authed=true。
- 服务器收到第二次请求，从Cookie字段得知该用户已经登录。 按照已登录用户的权限来处理此次请求。

这里面的问题在哪里？

我们知道可以发送HTTP请求的不只是浏览器，很多HTTP客户端软件（包括curl、Node.js）都可以发送任意的HTTP请求，可以设置任何头字段。 假如我们直接设置Cookie字段为authed=true并发送该HTTP请求， 服务器岂不是被欺骗了？这种攻击非常容易，**Cookie是可以被篡改的！**

#### cookie 的防篡改机制

服务器可以为每个Cookie项生成签名，由于用户篡改Cookie后无法生成对应的签名， 服务器便可以得知用户对Cookie进行了篡改。一个简单的校验过程可能是这样的：

- 在服务器中配置一个不为人知的字符串（我们叫它Secret），比如：x$sfz32。
- 当服务器需要设置Cookie时（比如authed=false），不仅设置authed的值为false， 在值的后面进一步设置一个签名，最终设置的Cookie是authed=false|6hTiBl7lVpd1P。
- 签名6hTiBl7lVpd1P是这样生成的：Hash('x$sfz32'+'false')。 要设置的值与Secret相加再取哈希。
- 用户收到HTTP响应并发现头字段Set-Cookie: authed=false|6hTiBl7lVpd1P。
- 用户在发送HTTP请求时，篡改了authed值，设置头字段Cookie: authed=true|???。 因为用户不知道Secret，无法生成签名，只能随便填一个。
- 服务器收到HTTP请求，发现Cookie: authed=true|???。服务器开始进行校验： Hash('true'+'x$sfz32')，便会发现用户提供的签名不正确。
通过给Cookie添加签名，使得服务器得以知道Cookie被篡改。然而故事并未结束。

**因为Cookie是明文传输的**， 只要服务器设置过一次authed=true|xxxx我不就知道true的签名是xxxx了么， 以后就可以用这个签名来欺骗服务器了。因此Cookie中最好不要放敏感数据。 一般来讲Cookie中只会放一个Session Id，而Session存储在服务器端。

### Session

#### Session的实现机制

Session 是存储在服务器端的，避免了在客户端Cookie中存储敏感数据。 Session 可以存储在HTTP服务器的内存中，也可以存在内存数据库（如redis）中， 对于重量级的应用甚至可以存储在数据库中。

我们以存储在redis中的Session为例，还是考察如何验证用户登录状态的问题。

- 用户提交包含用户名和密码的表单，发送HTTP请求。
- 服务器验证用户发来的用户名密码。
- 如果正确则把当前用户名（通常是用户对象）存储到redis中，并生成它在redis中的ID。

- 这个ID称为Session ID，通过Session ID可以从Redis中取出对应的用户对象， 敏感数据（比如authed=true）都存储在这个用户对象中。

- 设置Cookie为sessionId=xxxxxx|checksum并发送HTTP响应， 仍然为每一项Cookie都设置签名。
- 用户收到HTTP响应后，便看不到任何敏感数据了。在此后的请求中发送该Cookie给服务器。
- 服务器收到此后的HTTP请求后，发现Cookie中有SessionID，进行防篡改验证。
- 如果通过了验证，根据该ID从Redis中取出对应的用户对象， 查看该对象的状态并继续执行业务逻辑。
- Web应用框架都会实现上述过程，在Web应用中可以直接获得当前用户。 相当于在HTTP协议之上，通过Cookie实现了持久的会话。这个会话便称为Session。

但基于cookie机制，其实也不是很安全，容易被 CSRF。

## 参考资料

1. [《现代前端技术解析》](https://book.douban.com/subject/27021790/)
2. [Cookie/Session的机制与安全](https://harttle.land/2015/08/10/cookie-session.html)
3. [《码农翻身》](https://book.douban.com/subject/30231515/)
