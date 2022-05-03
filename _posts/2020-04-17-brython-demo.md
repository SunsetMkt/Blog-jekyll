---
title: Brython Demo
date: 2020-04-17
tags: demo 前端 Python Brython JavaScript
categories: demo
---
<html>
    <head>
        <!--support for raw python code-->
        <script type="text/javascript"
            src="https://cdn.jsdelivr.net/npm/brython@3.8.8/brython.min.js">
        </script>
        <!--support for libs-->
        <script type="text/javascript"
            src="https://cdn.jsdelivr.net/npm/brython@3.8.8/brython_stdlib.js">
        </script>
        <!--https://github.com/brython-dev/brython-->
    </head>
    <body onload="brython()">
        <script type="text/python">
        # Write Python code here.
        from browser import document,timer
        count=0
        def docadd():
            global count
            document <= str(count)+" "
            count=count+1
        timer.set_interval(docadd,20)
        </script>
    </body>
</html>