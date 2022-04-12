/**Utils for lwd-temp.github.io
 * Author:lwd-temp
 * Part of the code is copied from the Internet.
 */

//获取URL参数 via CSDN
function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) { return pair[1]; }
    }
    return (false);
}

//SCPFoundation Easter Egg checker for page footer via SCP Foundation
function scpegg() {
    loggedin = false;
    password = prompt();
    password = password.toLowerCase();
    // Add password-->
    if (password == "only when waning.") {
        loggedin = true;
        window.open('http://scp-wiki.wikidot.com/');
    }
    if (password == "仅在月亏之时。") {
        loggedin = true;
        window.open('http://scp-wiki-cn.wikidot.com/');
    }
    if (password == "onlywhenwaning") {
        loggedin = true;
        window.open('http://scp-wiki.wikidot.com/');
    }
    if (password == "仅在月亏之时") {
        loggedin = true;
        window.open('http://scp-wiki-cn.wikidot.com/');
    }
    if (password == "only when waning") {
        loggedin = true;
        window.open('http://scp-wiki.wikidot.com/');
    }
    // If login incorrect -->
    if (loggedin == false) {
        alert("Permission Denied");
    }
}

//scpegg GUI
/**
function scpeggui() {
    toastr.options = {
        "closeButton": true,
        "debug": true,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": 0,
        "extendedTimeOut": 0,
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut",
        "tapToDismiss": false
    };
    toastr["error"]('<div><input value="" id="scpeggpass" type="password"/>&nbsp;<button type="button" id="scpeggBtn" class="btn"onclick="scpegg();">Done</button></div>')
}
*/

//functions for toastr via https://blog.csdn.net/tangxiujiang/article/details/77992931

/**
function errorToast(content) {
    //设定参数
    toastr.options = {
        closeButton: false,
        debug: true,
        progressBar: true,
        positionClass: "toast-top-right",
        onclick: null,
        showDuration: "300",
        hideDuration: "1000",
        // timeOut: "1500",
        extendedTimeOut: "1000",
        showEasing: "swing",
        hideEasing: "linear",
        showMethod: "fadeIn",
        hideMethod: "fadeOut"
    };
    if (content == null) {
        content = '';
    }
    var len = content.length;
    if (len <= 10 && len > 0) {
        toastr.options.timeOut = "1800";
    } else if (len <= 20) {
        toastr.options.timeOut = "2800";
    } else if (len <= 30) {
        toastr.options.timeOut = "3800";
    } else if (len > 30) {
        toastr.options.timeOut = "4800";
    }
    //调用插件
    toastr.error(content);
}

function successToast(content) {
    toastr.options = {
        closeButton: false,
        debug: true,
        progressBar: true,
        positionClass: "toast-top-right",
        onclick: null,
        showDuration: "300",
        hideDuration: "1000",
        // timeOut: "1000",
        extendedTimeOut: "1000",
        showEasing: "swing",
        hideEasing: "linear",
        showMethod: "fadeIn",
        hideMethod: "fadeOut"
    };
    if (content == null) {
        content = '';
    }
    var len = content.length;
    if (len <= 10 && len > 0) {
        toastr.options.timeOut = "1800";
    } else if (len <= 20) {
        toastr.options.timeOut = "2800";
    } else if (len <= 30) {
        toastr.options.timeOut = "3800";
    } else if (len > 30) {
        toastr.options.timeOut = "4800";
    }
    toastr.success(content);
}

function infoToast(content) {
    toastr.options = {
        closeButton: false,
        debug: true,
        progressBar: true,
        positionClass: "toast-top-right",
        onclick: null,
        showDuration: "300",
        hideDuration: "1000",
        // timeOut: "1000",
        extendedTimeOut: "1000",
        showEasing: "swing",
        hideEasing: "linear",
        showMethod: "fadeIn",
        hideMethod: "fadeOut"
    };
    if (content == null) {
        content = '';
    }
    var len = content.length;
    if (len <= 10 && len > 0) {
        toastr.options.timeOut = "1800";
    } else if (len <= 20) {
        toastr.options.timeOut = "2800";
    } else if (len <= 30) {
        toastr.options.timeOut = "3800";
    } else if (len > 30) {
        toastr.options.timeOut = "4800";
    }
    toastr.info(content);
}

function warningToast(content) {
    toastr.options = {
        closeButton: false,
        debug: true,
        progressBar: true,
        positionClass: "toast-top-right",
        onclick: null,
        showDuration: "300",
        hideDuration: "1000",
        // timeOut: "1000",
        extendedTimeOut: "1000",
        showEasing: "swing",
        hideEasing: "linear",
        showMethod: "fadeIn",
        hideMethod: "fadeOut"
    };
    if (content == null) {
        content = '';
    }
    var len = content.length;
    if (len <= 10 && len > 0) {
        toastr.options.timeOut = "1800";
    } else if (len <= 20) {
        toastr.options.timeOut = "2800";
    } else if (len <= 30) {
        toastr.options.timeOut = "3800";
    } else if (len > 30) {
        toastr.options.timeOut = "4800";
    }
    toastr.warning(content);
}

function criticalToast(content) {
    toastr.options = {
        "closeButton": true,
        "debug": true,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": 0,
        "extendedTimeOut": 0,
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut",
        "tapToDismiss": false
    };
    if (content == null) {
        content = '';
    }
    toastr.error(content);
}
*/

//显示或隐藏特定id元素
function display(id) {
    var target = document.getElementById(id);
    if (target.style.display == "none") {
        target.style.display = "";
    } else {
        target.style.display = "none";
    }
}

//bind scpegglink
try {
    document.getElementById("scpegglink").addEventListener("click", function () { scpegg(); document.getElementById('scpegglink').remove(); });
} catch (error) {
    console.log("scpegglink error");
}


//redirect to /dev
var devcount = 0;

function devredirect() {
    if (devcount == 10) {
        window.location.href = "/dev";
        devcount = 0;
    }
    else {
        devcount++;
    }
}

//bind devredirect
try {
    document.querySelector(".page__footer-copyright").addEventListener("click", function () { devredirect(); });
} catch (error) {
    console.log("devredirect error");
}
