---
title: Terminal.js Demo
date: 2020-10-31
tags: demo 前端 JavaScript
categories: demo
---

[Based on AVGP/fake-terminal](https://github.com/AVGP/fake-terminal)

<html>

<head>
  <link rel="stylesheet" href="/assets/terminal.js/terminal.css">
  <style>
    #terminal {
      background: black;
      color: white;

      width: 100%;
      height: 100%;

      padding: 0;
      margin: 0;

      box-sizing: border-box;
    }

  </style>
</head>

<body>
  <div id="terminal">
    <p class="thisshouldnotbehiddenwhenitisonthissite">
      <span class="prompt">user@browser &sim; &gt; </span>
      <span contenteditable="true" class="input"> </span>
    </p>
  </div>
  <script src="/assets/terminal.js/terminal.js"></script>
  <script>

    var commands = {};

    commands.help = function () {
      var output = "<div>" +
        "<ul>" +
        "<li><strong>help</strong> - display this help.</li>" +
        "<li><strong>hello NAME</strong> - displays a greeting for NAME.</li>" +
        "<li><strong>log INFO</strong> - console.log(INFO).</li>" +
        "<li><strong>ls</strong> - list (emulated) files.</li>" +
        "<li><strong>echo TEXT</strong> - show TEXT.</li>" +
        "<li><strong>cat FILENAME</strong> - show file content.</li>" +
        "<li><strong>exit</strong> - quit this page.</li>" +
        "</ul></div>";
      return output;
    };

    commands.hello = function (args) {
      if (args.length < 2) return "<p>Hello. Why don't you tell me your name?</p>";
      return "Hello " + args[1];
    };

    commands.log = function (args) {
      if (args.length < 2) return "<p>No log content.</p>";
      console.log(args[1]);
      return "";
    };

    commands.ls = function () {
      return "file1";
    };

    commands.echo = function (args) {
      if (args.length < 2) return "";
      return args[1];
    };

    commands.cat = function (args) {
      if (args.length < 2) return "<p>No file selected.</p>";
      var filecontent = "No such file.";
      if (args[1] == "file1") {
        filecontent = "Hello world!";
      }
      return filecontent;
    };

    commands.exit = function () {
      window.location.href = "/";
      return "";
    };

    Terminal.init(document.getElementById("terminal"), commands);

  </script>
</body>

</html>
