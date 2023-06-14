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
        xhr.open("GET", "/cdn-cgi/trace", true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                try {
                    let data = xhr.responseText;
                    let areas = "Amsterdam, Netherlands - (AMS);Amman, Jordan - (AMM);Adelaide, SA, Australia - (ADL);Americana, Brazil - (QWJ);Accra, Ghana - (ACC);Ahmedabad, India - (AMD);Albuquerque, NM, United States - (ABQ);Ashburn, VA, United States - (IAD);Auckland, New Zealand - (AKL);Athens, Greece - (ATH);Arica, Chile - (ARI);Algiers, Algeria - (ALG);Almaty, Kazakhstan - (ALA);Astara, Azerbaijan - (LLK);Atlanta, GA, United States - (ATL);Brisbane, QLD, Australia - (BNE);Barcelona, Spain - (BCN);Baghdad, Iraq - (BGW);Asunción, Paraguay - (ASU);Antananarivo, Madagascar - (TNR);Belgrade, Serbia - (BEG);Cape Town, South Africa - (CPT);Baku, Azerbaijan - (GYD);Bangalore, India - (BLR);Canberra, ACT, Australia - (CBR);Belém, Brazil - (BEL);Bangor ME, USA   - (BGR);Berlin, Germany - (TXL);Bangkok, Thailand - (BKK);Boston, MA, United States - (BOS);Casablanca, Morocco - (CMN);Belo Horizonte, Brazil - (CNF);Basra, Iraq - (BSR);Christchurch, New Zealand - (CHC);Beirut, Lebanon - (BEY);Buffalo, NY, United States - (BUF);Bandar Seri Begawan, Brunei - (BWN);Dakar, Senegal - (DKR);Blumenau, Brazil - (BNU);Hagatna, Guam - (GUM);Bratislava, Slovakia   - (BTS);Brussels, Belgium - (BRU);Calgary, AB, Canada - (YYC);Bogotá, Colombia - (BOG);Dar Es Salaam, Tanzania - (DAR);Dammam, Saudi Arabia - (DMM);Baoji, China - (XIY);Hobart, Australia - (HBA);Melbourne, VIC, Australia - (MEL);Doha, Qatar - (DOH);Bucharest, Romania - (OTP);Djibouti City, Djibouti - (JIB);Charlotte, NC, United States - (CLT);Brasilia, Brazil - (BSB);Bhubaneswar, India - (BBI);Chicago, IL, United States - (ORD);Buenos Aires, Argentina - (EZE);Dubai, United Arab Emirates - (DXB);Budapest, Hungary - (BUD);Durban, South Africa - (DUR);Cebu, Philippines - (CEB);Noumea, New Caledonia - (NOU);Perth, WA, Australia - (PER);Chișinău, Moldova - (KIV);Columbus, OH, United States - (CMH);Caçador, Brazil - (CFC);Erbil, Iraq - (EBL);Chandigarh, IN - (IXC);Gaborone, Botswana - (GBE);Dallas, TX, United States - (DFW);Sydney, NSW, Australia - (SYD);Copenhagen, Denmark - (CPH);Campinas, Brazil - (VCP);Harare, Zimbabwe - (HRE);Changde, China - (CGD);Haifa, Israel - (HFA);Johannesburg, South Africa - (JNB);Chennai, India - (MAA);Denver, CO, United States - (DEN);Cork, Ireland -  (ORK);Jeddah, Saudi Arabia - (JED);Concepción, Chile   - (CCP);Tahiti, French Polynesia - (PPT);Kuwait City, Kuwait - (KWI);Dublin, Ireland - (DUB);Detroit, MI, United States - (DTW);Kigali, Rwanda - (KGL);Chiang Mai, Thailand - (CNX);Córdoba, Argentina - (COR);Düsseldorf, Germany - (DUS);Manama, Bahrain - (BAH);Lagos, Nigeria - (LOS);Chittagong, Bangladesh - (CGP);Honolulu, HI, United States - (HNL);Cuiabá, Brazil - (CGB);Muscat, Oman - (MCT);Luanda, Angola - (LAD);Colombo, Sri Lanka - (CMB);Houston, TX, United States - (IAH);Edinburgh, United Kingdom - (EDI);Curitiba, Brazil - (CWB);Frankfurt, Germany - (FRA);Indianapolis, IN, United States - (IND);Maputo, Mozambique - (MPM);Dhaka, Bangladesh - (DAC);Florianopolis, Brazil - (FLN);Najaf, Iraq - (NJF);Mombasa, Kenya - (MBA);Jacksonville, FL, United States - (JAX);Geneva, Switzerland - (GVA);Fortaleza, Brazil - (FOR);Foshan, China - (FUO);Nasiriyah, Iraq - (XNH);Kansas City, MO, United States - (MCI);Ramallah - (ZDM);Gothenburg, Sweden - (GOT);Georgetown, Guyana - (GEO);Fukuoka, Japan - (FUK);Hamburg, Germany - (HAM);Las Vegas, NV, United States - (LAS);Riyadh, Saudi Arabia - (RUH);Nairobi, Kenya - (NBO);Goiânia, Brazil - (GYN);Fuzhou, China - (FOC);Los Angeles, CA, United States - (LAX);Guangzhou, China - (CAN);Helsinki, Finland - (HEL);Guatemala City, Guatemala - (GUA);Ouagadougou, Burkina Faso   - (OUA);Sulaymaniyah, Iraq - (ISU);McAllen, TX, United States - (MFE);Port Louis, Mauritius - (MRU);Istanbul, Turkey - (IST);Tel Aviv, Israel - (TLV);Guayaquil, Ecuador - (GYE);Haikou, China - (HAK);Memphis, TN, United States - (MEM);Réunion, France - (RUN);Hanoi, Vietnam - (HAN);Itajaí, Brazil - (ITJ);Izmir, Turkey - (ADB);Kyiv, Ukraine - (KBP);Mexico City, Mexico - (MEX);Tunis, Tunisia - (TUN);Hengshui, China - (SJW);Joinville, Brazil - (JOI);Miami, FL, United States - (MIA);Lisbon, Portugal - (LIS);Ho Chi Minh City, Vietnam - (SGN);Juazeiro do Norte, Brazil - (JDO);Kinshasa - (FIH);London, United Kingdom - (LHR);Hong Kong - (HKG);Lima, Peru - (LIM);Minneapolis, MN, United States - (MSP);Oran - (ORN);Luxembourg City, Luxembourg - (LUX);Montgomery, AL, United States - (MGM);Hyderabad, India - (HYD);Manaus, Brazil - (MAO);Madrid, Spain - (MAD);Medellín, Colombia - (MDE);Montréal, QC, Canada - (YUL);Islamabad, Pakistan - (ISB);Manchester, United Kingdom - (MAN);Jakarta, Indonesia - (CGK);Neuquén, Argentina - (NQN);Nashville, United States - (BNA);Newark, NJ, United States - (EWR);Marseille, France - (MRS);Panama City, Panama - (PTY);Jashore, Bangladesh - (JSR);Milan, Italy - (MXP);Jinan, China - (TNA);Norfolk, VA, United States - (ORF);Paramaribo, Suriname - (PBM);Omaha, NE, United States - (OMA);Porto Alegre, Brazil - (POA);Minsk, Belarus - (MSQ);Moscow, Russia - (DME);Port-Au-Prince, Haiti - (PAP);Johor Bahru, Malaysia - (JHB);Ottawa, Canada - (YOW);Quito, Ecuador - (UIO);Munich, Germany - (MUC);Philadelphia, United States - (PHL);Kanpur, India - (KNU);Phoenix, AZ, United States - (PHX);Nicosia, Cyprus - (LCA);Kaohsiung City - (KHH);Recife - (REC);Oslo, Norway - (OSL);Pittsburgh, PA, United States - (PIT);Karachi, Pakistan - (KHI);Ribeirao Preto, Brazil - (RAO);Rio de Janeiro, Brazil - (GIG);Portland, OR, United States - (PDX);Kathmandu, Nepal - (KTM);Palermo, Italy - (PMO);Paris, France - (CDG);Queretaro, MX, Mexico - (QRO);Salvador, Brazil - (SSA);Khabarovsk, Russia - (KHV);Prague, Czech Republic - (PRG);Richmond, VA, United States - (RIC);Kolkata, India - (CCU);San José, Costa Rica - (SJO);Santiago, Chile - (SCL);Reykjavík, Iceland - (KEF);Sacramento, CA, United States - (SMF);Krasnoyarsk, Russia - (KJA);Kuala Lumpur, Malaysia - (KUL);Salt Lake City, UT, United States - (SLC);Riga, Latvia - (RIX);Santo Domingo, Dominican Republic - (SDQ);Rome, Italy - (FCO);San Diego, CA, United States - (SAN);Lahore, Pakistan - (LHE);São José do Rio Preto, Brazil - (SJP);San Jose, CA, United States - (SJC);Saint Petersburg, Russia - (LED);Langfang, China - (PKX);São José dos Campos, Brazil - (SJK);São Paulo, Brazil - (GRU);Sofia, Bulgaria - (SOF);Saskatoon, SK, Canada - (YXE);Lanzhou, China - (LHW);Seattle, WA, United States - (SEA);Stockholm, Sweden - (ARN);Sorocaba, Brazil - (SOD);Luoyang, China - (LYA);Macau - (MFM);St. George's, Grenada - (GND);Sioux Falls, South Dakota - (FSD);Stuttgart, Germany   - (STR);St. Louis, MO, United States - (STL);Tallinn, Estonia - (TLL);Malé, Maldives - (MLE);Tegucigalpa, Honduras - (TGU);Tallahassee, FL, United States - (TLH);Tbilisi, Georgia - (TBS);Mandalay, Myanmar - (MDL);Timbó, Brazil - (NVT);Manila, Philippines - (MNL);Tampa, FL, United States - (TPA);Thessaloniki, Greece - (SKG);Uberlândia, Brazil - (UDI);Toronto, ON, Canada - (YYZ);Mumbai, India - (BOM);Tirana, Albania - (TIA);Vitoria, Brazil - (VIX);Vancouver, BC, Canada - (YVR);Willemstad, Curaçao - (CUR);Nagpur, India - (NAG);Tver, Russian Federation - (KLD);Vienna, Austria - (VIE);Winnipeg, MB, Canada - (YWG);Naha, Japan  - (OKA);Campos dos Goytacazes - (CAW);New Delhi, India - (DEL);Vilnius, Lithuania - (VNO);San Francisco - (SFO);Warsaw, Poland - (WAW);Osaka, Japan - (KIX);Kingston - (KIN);Yekaterinburg, Russia - (SVX);Patna, India - (PAT);Bangor - (BGR);Zagreb, Croatia - (ZAG);Phnom Penh, Cambodia - (PNH);Austin - (AUS);Zürich, Switzerland - (ZRH);Qingdao, China - (TAO);Albuquerque - (ABQ);Seoul, South Korea - (ICN);Lyon - (LYS);Guadalajara - (GDL);Shanghai, China - (SHA);Singapore, Singapore - (SIN);Surat Thani, Thailand - (URT);Taipei - (TPE);Tashkent, Uzbekistan - (TAS);Thimphu, Bhutan - (PBH);Tianjin, China - (TSN);Tokyo, Japan - (NRT);Ulaanbaatar, Mongolia - (ULN);Vientiane, Laos - (VTE);Wuxi, China - (WUX);Xinyu, China - (KHN);Yangon, Myanmar - (RGN);Yerevan, Armenia - (EVN);Yogyakarta, Indonesia - (JOG);Zhengzhou, China - (CGO);Changchun, China - (CGQ);Xiaogan, China - (WUH);Zhongshan, China - (ZGN);Cagayan de Oro, Philippines - (CGY);Changsha, China - (CSX);Datong, China - (TYN);Wuhu - (WHU);Taizhou - (HYN);Kochi - (COK);Nantong - (NTG);Xiamen - (XMN);Denpasar - (DPS);Kannur - (CNN);".split(";");
                    let area = data.split("colo=")[1].split("\n")[0];
                    for (var i = 0; i < areas.length; i++) {
                        if (areas[i].indexOf(area) != -1) {
                            document.getElementById("cdn-info-content").innerHTML = areas[i];
                            document.getElementById("cdn-info").style.display = "";
                            return areas[i];
                        }
                    }
                    //if not exist, fallback to raw data
                    document.getElementById("cdn-info-content").innerHTML = area;
                    document.getElementById("cdn-info").style.display = "";
                    return area;
                } catch (error) {
                    console.log(error)
                }
            }
        }
        xhr.send(null);
    } catch (error) {
        console.log(error)
    }
}

if (document.getElementById("cdn-info")) {
    document.getElementById("cdn-info").style.display = "none";
    try {
        getCDNinfo();
    } catch (error) {
        console.log(error);
    }
} else {
    console.log("cdn-info not found");
}

function applyGrayFilterOnDate(targetDate) {
    var currentDate = new Date();
    var targetMonth = targetDate.split('-')[0];
    var targetDay = targetDate.split('-')[1];

    // 检查当前日期是否与目标日期相等
    if (
        currentDate.getMonth() + 1 === parseInt(targetMonth) &&
        currentDate.getDate() === parseInt(targetDay)
    ) {
        // 将整个 HTML 页面设置为黑白滤镜
        console.log("It's a gray day.");
        document.documentElement.style.filter = "grayscale(100%)";
    }
}

/**
 * Returns a hash code from a string
 * @param  {String} str The string to hash.
 * @return {Number}    A 32bit integer
 * @see http://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/
 */
function hashCode(str) {
    let hash = 0;
    for (let i = 0, len = str.length; i < len; i++) {
        let chr = str.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}

function applyGrayFilterOnHashedDate(targetHashedDate) {
    // Accept hashed 'M-D' format
    var currentDate = new Date();
    var formattedCurrentDate = (currentDate.getMonth() + 1) + '-' + currentDate.getDate();
    var hashedFormattedCurrentDate = hashCode(formattedCurrentDate);

    if (
        hashedFormattedCurrentDate === targetHashedDate
    ) {
        // 将整个 HTML 页面设置为黑白滤镜
        console.log("It's a gray day.");
        document.documentElement.style.filter = "grayscale(100%)";
    }
}

applyGrayFilterOnHashedDate(53341);
