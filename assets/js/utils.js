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

//get cf cdn info
function getCDNinfo() {
    try {
        var xhr = new XMLHttpRequest();
        xhr.addEventListener('error', function () {
            document.getElementById("cdn-info").style.display = "none";
        });
        xhr.open("GET", "/cdn-cgi/trace", true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                try {
                    let data = xhr.responseText;
                    let areas = "Antananarivo, Madagascar - (TNR);Cape Town, South Africa - (CPT);Casablanca, Morocco - (CMN);Dar Es Salaam, Tanzania - (DAR);Djibouti City, Djibouti - (JIB);Durban, South Africa - (DUR);Johannesburg, South Africa - (JNB);Kigali, Rwanda - (KGL);Lagos, Nigeria - (LOS);Luanda, Angola - (LAD);Maputo, MZ - (MPM);Mombasa, Kenya - (MBA);Port Louis, Mauritius - (MRU);Réunion, France - (RUN);Bangalore, India - (BLR);Bangkok, Thailand - (BKK);Bandar Seri Begawan, Brunei - (BWN);Cebu, Philippines - (CEB);Chengdu, China - (CTU);Chennai, India - (MAA);Chittagong, Bangladesh - (CGP);Chongqing, China - (CKG);Colombo, Sri Lanka - (CMB);Dhaka, Bangladesh - (DAC);Dongguan, China - (SZX);Foshan, China - (FUO);Fuzhou, China - (FOC);Guangzhou, China - (CAN);Hangzhou, China - (HGH);Hanoi, Vietnam - (HAN);Hengyang, China - (HNY);Ho Chi Minh City, Vietnam - (SGN);Hong Kong - (HKG);Hyderabad, India - (HYD);Islamabad, Pakistan - (ISB);Jakarta, Indonesia - (CGK);Jinan, China - (TNA);Karachi, Pakistan - (KHI);Kathmandu, Nepal - (KTM);Kolkata, India - (CCU);Kuala Lumpur, Malaysia - (KUL);Lahore, Pakistan - (LHE);Langfang, China - (NAY);Luoyang, China - (LYA);Macau - (MFM);Malé, Maldives - (MLE);Manila, Philippines - (MNL);Mumbai, India - (BOM);Nagpur, India - (NAG);Nanning, China - (NNG);New Delhi, India - (DEL);Osaka, Japan - (KIX);Phnom Penh, Cambodia - (PNH);Qingdao, China - (TAO);Seoul, South Korea - (ICN);Shanghai, China - (SHA);Shenyang, China - (SHE);Shijiazhuang, China - (SJW);Singapore, Singapore - (SIN);Suzhou, China - (SZV);Taipei - (TPE);Thimphu, Bhutan - (PBH);Tianjin, China - (TSN);Tokyo, Japan - (NRT);Ulaanbaatar, Mongolia - (ULN);Vientiane, Laos - (VTE);Wuhan, China - (WUH);Wuxi, China - (WUX);Xi'an, China - (XIY);Yerevan, Armenia - (EVN);Zhengzhou, China - (CGO);Zuzhou, China - (CSX);Amsterdam, Netherlands - (AMS);Athens, Greece - (ATH);Barcelona, Spain - (BCN);Belgrade, Serbia - (BEG);Berlin, Germany - (TXL);Brussels, Belgium - (BRU);Bucharest, Romania - (OTP);Budapest, Hungary - (BUD);Chișinău, Moldova - (KIV);Copenhagen, Denmark - (CPH);Cork, Ireland -  (ORK);Dublin, Ireland - (DUB);Düsseldorf, Germany - (DUS);Edinburgh, United Kingdom - (EDI);Frankfurt, Germany - (FRA);Geneva, Switzerland - (GVA);Gothenburg, Sweden - (GOT);Hamburg, Germany - (HAM);Helsinki, Finland - (HEL);Istanbul, Turkey - (IST);Kyiv, Ukraine - (KBP);Lisbon, Portugal - (LIS);London, United Kingdom - (LHR);Luxembourg City, Luxembourg - (LUX);Madrid, Spain - (MAD);Manchester, United Kingdom - (MAN);Marseille, France - (MRS);Milan, Italy - (MXP);Moscow, Russia - (DME);Munich, Germany - (MUC);Nicosia, Cyprus - (LCA);Oslo, Norway - (OSL);Paris, France - (CDG);Prague, Czech Republic - (PRG);Reykjavík, Iceland - (KEF);Riga, Latvia - (RIX);Rome, Italy - (FCO);Saint Petersburg, Russia - (LED);Sofia, Bulgaria - (SOF);Stockholm, Sweden - (ARN);Tallinn, Estonia - (TLL);Thessaloniki, Greece - (SKG);Vienna, Austria - (VIE);Vilnius, Lithuania - (VNO);Warsaw, Poland - (WAW);Zagreb, Croatia - (ZAG);Zürich, Switzerland - (ZRH);Arica, Chile - (ARI);Asunción, Paraguay - (ASU);Bogotá, Colombia - (BOG);Buenos Aires, Argentina - (EZE);Curitiba, Brazil - (CWB);Fortaleza, Brazil - (FOR);Guatemala City, Guatemala - (GUA);Lima, Peru - (LIM);Medellín, Colombia - (MDE);Panama City, Panama - (PTY);Porto Alegre, Brazil - (POA);Quito, Ecuador - (UIO);Rio de Janeiro, Brazil - (GIG);São Paulo, Brazil - (GRU);Santiago, Chile - (SCL);Willemstad, Curaçao - (CUR);St. George's, Grenada - (GND);Amman, Jordan - (AMM);Baghdad, Iraq - (BGW);Baku, Azerbaijan - (GYD);Beirut, Lebanon - (BEY);Doha, Qatar - (DOH);Dubai, United Arab Emirates - (DXB);Kuwait City, Kuwait - (KWI);Manama, Bahrain - (BAH);Muscat, Oman - (MCT);Ramallah - (ZDM);Riyadh, Saudi Arabia - (RUH);Tel Aviv, Israel - (TLV);Ashburn, VA, United States - (IAD);Atlanta, GA, United States - (ATL);Boston, MA, United States - (BOS);Buffalo, NY, United States - (BUF);Calgary, AB, Canada - (YYC);Charlotte, NC, United States - (CLT);Chicago, IL, United States - (ORD);Columbus, OH, United States - (CMH);Dallas, TX, United States - (DFW);Denver, CO, United States - (DEN);Detroit, MI, United States - (DTW);Honolulu, HI, United States - (HNL);Houston, TX, United States - (IAH);Indianapolis, IN, United States - (IND);Jacksonville, FL, United States - (JAX);Kansas City, MO, United States - (MCI);Las Vegas, NV, United States - (LAS);Los Angeles, CA, United States - (LAX);McAllen, TX, United States - (MFE);Memphis, TN, United States - (MEM);Mexico City, Mexico - (MEX);Miami, FL, United States - (MIA);Minneapolis, MN, United States - (MSP);Montgomery, AL, United States - (MGM);Montréal, QC, Canada - (YUL);Nashville, TN, United States - (BNA);Newark, NJ, United States - (EWR);Norfolk, VA, United States - (ORF);Omaha, NE, United States - (OMA);Philadelphia, United States - (PHL);Phoenix, AZ, United States - (PHX);Pittsburgh, PA, United States - (PIT);Port-Au-Prince, Haiti - (PAP);Portland, OR, United States - (PDX);Queretaro, MX, Mexico - (QRO);Richmond, Virginia - (RIC);Sacramento, CA, United States - (SMF);Salt Lake City, UT, United States - (SLC);San Diego, CA, United States - (SAN);San Jose, CA, United States - (SJC);Saskatoon, SK, Canada - (YXE);Seattle, WA, United States - (SEA);St. Louis, MO, United States - (STL);Tampa, FL, United States - (TPA);Toronto, ON, Canada - (YYZ);Vancouver, BC, Canada - (YVR);Tallahassee, FL, United States - (TLH);Winnipeg, MB, Canada - (YWG);Adelaide, SA, Australia - (ADL);Auckland, New Zealand - (AKL);Brisbane, QLD, Australia - (BNE);Melbourne, VIC, Australia - (MEL);Noumea, New caledonia - (NOU);Perth, WA, Australia - (PER);Sydney, NSW, Australia - (SYD)".split(";");
                    let area = data.split("colo=")[1].split("\n")[0];
                    for (var i = 0; i < areas.length; i++) {
                        if (areas[i].indexOf(area) != -1) {
                            document.getElementById("cdn-info-content").innerHTML = areas[i];
                            return areas[i];
                        }
                    }
                    //if not exist, fallback to raw data
                    document.getElementById("cdn-info-content").innerHTML = area;
                    return area;
                } catch (error) {
                    //hide cdn-info
                    console.log(error)
                    document.getElementById("cdn-info").style.display = "none";
                }
            }
        }
        xhr.send(null);
    } catch (error) {
        //hide cdn-info
        console.log(error)
        document.getElementById("cdn-info").style.display = "none";
    }
}

if (document.getElementById("cdn-info")) {
    try {
        getCDNinfo();
    } catch (error) {
        //hide cdn-info
        console.log(error);
        document.getElementById("cdn-info").style.display = "none";
    }
} else {
    console.log("cdn-info not found");
}