---
title: particles.js Demo
date: 2020-04-28
tags: demo 前端
categories: demo
---

<div id="particles-js" style="background:#000; color:#FFF">

<!--加入内容不会覆盖在粒子效果之上？-->


</div>
<script src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"></script>
<script>
/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', '/assets/json/particles.json', function() {
  console.log('callback - particles.js config loaded');
});
</script>