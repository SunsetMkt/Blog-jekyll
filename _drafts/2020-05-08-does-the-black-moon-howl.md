---
title: Does the black moon howl? 暗月是否嚎叫？
date: 2020-05-08
tags: demo 前端 SCPFoundation
categories: demo
---

<script language="javascript">

function LogIn(){
loggedin=false;
password="";
password=prompt("Input:","");
password=password.toLowerCase();

// Add password-->
if (password=="Only when waning.") {
loggedin=true;
window.open('http://scp-wiki.wikidot.com/');
}
if (password=="仅在月亏之时。") {
loggedin=true;
window.open('http://scp-wiki-cn.wikidot.com/');
}
if (password=="onlywhenwaning") {
loggedin=true;
window.open('http://scp-wiki.wikidot.com/');
}
if (password=="仅在月亏之时") {
loggedin=true;
window.open('http://scp-wiki-cn.wikidot.com/');
}
if (password=="Only when waning") {
loggedin=true;
window.open('http://scp-wiki.wikidot.com/');
}
if (password=="only when waning.") {
loggedin=true;
window.open('http://scp-wiki.wikidot.com/');
}
if (password=="only when waning") {
loggedin=true;
window.open('http://scp-wiki.wikidot.com/');
}

// If login incorrect -->
if (loggedin==false) {
alert("Permission Denied");
}
}

</script>

<a onclick="LogIn()">Does the black moon howl? 暗月是否嚎叫？</a>

<script>
console.log("一个SCP Foundation的彩蛋")
</script>