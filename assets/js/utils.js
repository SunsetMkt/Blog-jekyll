/**Utils for lwd-temp.github.io
 * Author:lwd-temp
 * Part of the code is copied from the Internet.
 */

//获取URL参数
function getQueryVariable(variable) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(variable);
}

function calculateSimilarity(text1, text2) {
  // 计算Levenshtein距离
  function levenshteinDistance(s, t) {
    if (s.length === 0) return t.length;
    if (t.length === 0) return s.length;

    var matrix = [];
    var i, j;

    // 初始化矩阵
    for (i = 0; i <= s.length; i++) {
      matrix[i] = [i];
    }

    for (j = 0; j <= t.length; j++) {
      matrix[0][j] = j;
    }

    // 计算编辑距离
    for (i = 1; i <= s.length; i++) {
      for (j = 1; j <= t.length; j++) {
        if (s.charAt(i - 1) === t.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1, // 替换
            matrix[i][j - 1] + 1, // 插入
            matrix[i - 1][j] + 1 // 删除
          );
        }
      }
    }

    return matrix[s.length][t.length];
  }

  // 计算相似度分数
  var maxLength = Math.max(text1.length, text2.length);
  var distance = levenshteinDistance(text1, text2);
  var similarity = (1 - distance / maxLength) * 100;

  return similarity.toFixed(2); // 保留两位小数
}
//SCPFoundation Easter Egg checker for page footer via SCP Foundation
function scpegg() {
  loggedin = false;
  password = prompt();
  password = password.toLowerCase();
  // Add password-->
  // 相似度判定大于20都可以通过
  if (calculateSimilarity(password, "only when waning.") > 20) {
    loggedin = true;
    window.open("http://scp-wiki.wikidot.com/");
  }
  if (calculateSimilarity(password, "仅在月亏之时。") > 20) {
    loggedin = true;
    window.open("http://scp-wiki-cn.wikidot.com/");
  }
  // If login incorrect -->
  if (loggedin == false) {
    alert("Permission Denied.");
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
  document.getElementById("scpegglink").addEventListener("click", function () {
    scpegg();
    document.getElementById("scpegglink").remove();
  });
} catch (error) {
  console.log("scpegglink error");
}

//redirect to /dev
var devcount = 0;

function devredirect() {
  if (devcount == 10) {
    window.location.href = "/dev";
    devcount = 0;
  } else {
    devcount++;
  }
}

//bind devredirect
try {
  document
    .querySelector(".page__footer-copyright")
    .addEventListener("click", function () {
      devredirect();
    });
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
          let areas =
            "Amsterdam, Netherlands - (AMS);Amman, Jordan - (AMM);Adelaide, SA, Australia - (ADL);Americana, Brazil - (QWJ);Accra, Ghana - (ACC);Ahmedabad, India - (AMD);Albuquerque, NM, United States - (ABQ);Ashburn, VA, United States - (IAD);Auckland, New Zealand - (AKL);Athens, Greece - (ATH);Arica, Chile - (ARI);Algiers, Algeria - (ALG);Almaty, Kazakhstan - (ALA);Astara, Azerbaijan - (LLK);Atlanta, GA, United States - (ATL);Brisbane, QLD, Australia - (BNE);Barcelona, Spain - (BCN);Baghdad, Iraq - (BGW);Asunción, Paraguay - (ASU);Antananarivo, Madagascar - (TNR);Belgrade, Serbia - (BEG);Cape Town, South Africa - (CPT);Baku, Azerbaijan - (GYD);Bangalore, India - (BLR);Canberra, ACT, Australia - (CBR);Belém, Brazil - (BEL);Bangor ME, USA   - (BGR);Berlin, Germany - (TXL);Bangkok, Thailand - (BKK);Boston, MA, United States - (BOS);Casablanca, Morocco - (CMN);Belo Horizonte, Brazil - (CNF);Basra, Iraq - (BSR);Christchurch, New Zealand - (CHC);Beirut, Lebanon - (BEY);Buffalo, NY, United States - (BUF);Bandar Seri Begawan, Brunei - (BWN);Dakar, Senegal - (DKR);Blumenau, Brazil - (BNU);Hagatna, Guam - (GUM);Bratislava, Slovakia   - (BTS);Brussels, Belgium - (BRU);Calgary, AB, Canada - (YYC);Bogotá, Colombia - (BOG);Dar Es Salaam, Tanzania - (DAR);Dammam, Saudi Arabia - (DMM);Baoji, China - (XIY);Hobart, Australia - (HBA);Melbourne, VIC, Australia - (MEL);Doha, Qatar - (DOH);Bucharest, Romania - (OTP);Djibouti City, Djibouti - (JIB);Charlotte, NC, United States - (CLT);Brasilia, Brazil - (BSB);Bhubaneswar, India - (BBI);Chicago, IL, United States - (ORD);Buenos Aires, Argentina - (EZE);Dubai, United Arab Emirates - (DXB);Budapest, Hungary - (BUD);Durban, South Africa - (DUR);Cebu, Philippines - (CEB);Noumea, New Caledonia - (NOU);Perth, WA, Australia - (PER);Chișinău, Moldova - (KIV);Columbus, OH, United States - (CMH);Caçador, Brazil - (CFC);Erbil, Iraq - (EBL);Chandigarh, IN - (IXC);Gaborone, Botswana - (GBE);Dallas, TX, United States - (DFW);Sydney, NSW, Australia - (SYD);Copenhagen, Denmark - (CPH);Campinas, Brazil - (VCP);Harare, Zimbabwe - (HRE);Changde, China - (CGD);Haifa, Israel - (HFA);Johannesburg, South Africa - (JNB);Chennai, India - (MAA);Denver, CO, United States - (DEN);Cork, Ireland -  (ORK);Jeddah, Saudi Arabia - (JED);Concepción, Chile   - (CCP);Tahiti, French Polynesia - (PPT);Kuwait City, Kuwait - (KWI);Dublin, Ireland - (DUB);Detroit, MI, United States - (DTW);Kigali, Rwanda - (KGL);Chiang Mai, Thailand - (CNX);Córdoba, Argentina - (COR);Düsseldorf, Germany - (DUS);Manama, Bahrain - (BAH);Lagos, Nigeria - (LOS);Chittagong, Bangladesh - (CGP);Honolulu, HI, United States - (HNL);Cuiabá, Brazil - (CGB);Muscat, Oman - (MCT);Luanda, Angola - (LAD);Colombo, Sri Lanka - (CMB);Houston, TX, United States - (IAH);Edinburgh, United Kingdom - (EDI);Curitiba, Brazil - (CWB);Frankfurt, Germany - (FRA);Indianapolis, IN, United States - (IND);Maputo, Mozambique - (MPM);Dhaka, Bangladesh - (DAC);Florianopolis, Brazil - (FLN);Najaf, Iraq - (NJF);Mombasa, Kenya - (MBA);Jacksonville, FL, United States - (JAX);Geneva, Switzerland - (GVA);Fortaleza, Brazil - (FOR);Foshan, China - (FUO);Nasiriyah, Iraq - (XNH);Kansas City, MO, United States - (MCI);Ramallah - (ZDM);Gothenburg, Sweden - (GOT);Georgetown, Guyana - (GEO);Fukuoka, Japan - (FUK);Hamburg, Germany - (HAM);Las Vegas, NV, United States - (LAS);Riyadh, Saudi Arabia - (RUH);Nairobi, Kenya - (NBO);Goiânia, Brazil - (GYN);Fuzhou, China - (FOC);Los Angeles, CA, United States - (LAX);Guangzhou, China - (CAN);Helsinki, Finland - (HEL);Guatemala City, Guatemala - (GUA);Ouagadougou, Burkina Faso   - (OUA);Sulaymaniyah, Iraq - (ISU);McAllen, TX, United States - (MFE);Port Louis, Mauritius - (MRU);Istanbul, Turkey - (IST);Tel Aviv, Israel - (TLV);Guayaquil, Ecuador - (GYE);Haikou, China - (HAK);Memphis, TN, United States - (MEM);Réunion, France - (RUN);Hanoi, Vietnam - (HAN);Itajaí, Brazil - (ITJ);Izmir, Turkey - (ADB);Kyiv, Ukraine - (KBP);Mexico City, Mexico - (MEX);Tunis, Tunisia - (TUN);Hengshui, China - (SJW);Joinville, Brazil - (JOI);Miami, FL, United States - (MIA);Lisbon, Portugal - (LIS);Ho Chi Minh City, Vietnam - (SGN);Juazeiro do Norte, Brazil - (JDO);Kinshasa - (FIH);London, United Kingdom - (LHR);Hong Kong - (HKG);Lima, Peru - (LIM);Minneapolis, MN, United States - (MSP);Oran - (ORN);Luxembourg City, Luxembourg - (LUX);Montgomery, AL, United States - (MGM);Hyderabad, India - (HYD);Manaus, Brazil - (MAO);Madrid, Spain - (MAD);Medellín, Colombia - (MDE);Montréal, QC, Canada - (YUL);Islamabad, Pakistan - (ISB);Manchester, United Kingdom - (MAN);Jakarta, Indonesia - (CGK);Neuquén, Argentina - (NQN);Nashville, United States - (BNA);Newark, NJ, United States - (EWR);Marseille, France - (MRS);Panama City, Panama - (PTY);Jashore, Bangladesh - (JSR);Milan, Italy - (MXP);Jinan, China - (TNA);Norfolk, VA, United States - (ORF);Paramaribo, Suriname - (PBM);Omaha, NE, United States - (OMA);Porto Alegre, Brazil - (POA);Minsk, Belarus - (MSQ);Moscow, Russia - (DME);Port-Au-Prince, Haiti - (PAP);Johor Bahru, Malaysia - (JHB);Ottawa, Canada - (YOW);Quito, Ecuador - (UIO);Munich, Germany - (MUC);Philadelphia, United States - (PHL);Kanpur, India - (KNU);Phoenix, AZ, United States - (PHX);Nicosia, Cyprus - (LCA);Kaohsiung City - (KHH);Recife - (REC);Oslo, Norway - (OSL);Pittsburgh, PA, United States - (PIT);Karachi, Pakistan - (KHI);Ribeirao Preto, Brazil - (RAO);Rio de Janeiro, Brazil - (GIG);Portland, OR, United States - (PDX);Kathmandu, Nepal - (KTM);Palermo, Italy - (PMO);Paris, France - (CDG);Queretaro, MX, Mexico - (QRO);Salvador, Brazil - (SSA);Khabarovsk, Russia - (KHV);Prague, Czech Republic - (PRG);Richmond, VA, United States - (RIC);Kolkata, India - (CCU);San José, Costa Rica - (SJO);Santiago, Chile - (SCL);Reykjavík, Iceland - (KEF);Sacramento, CA, United States - (SMF);Krasnoyarsk, Russia - (KJA);Kuala Lumpur, Malaysia - (KUL);Salt Lake City, UT, United States - (SLC);Riga, Latvia - (RIX);Santo Domingo, Dominican Republic - (SDQ);Rome, Italy - (FCO);San Diego, CA, United States - (SAN);Lahore, Pakistan - (LHE);São José do Rio Preto, Brazil - (SJP);San Jose, CA, United States - (SJC);Saint Petersburg, Russia - (LED);Langfang, China - (PKX);São José dos Campos, Brazil - (SJK);São Paulo, Brazil - (GRU);Sofia, Bulgaria - (SOF);Saskatoon, SK, Canada - (YXE);Lanzhou, China - (LHW);Seattle, WA, United States - (SEA);Stockholm, Sweden - (ARN);Sorocaba, Brazil - (SOD);Luoyang, China - (LYA);Macau - (MFM);St. George's, Grenada - (GND);Sioux Falls, South Dakota - (FSD);Stuttgart, Germany   - (STR);St. Louis, MO, United States - (STL);Tallinn, Estonia - (TLL);Malé, Maldives - (MLE);Tegucigalpa, Honduras - (TGU);Tallahassee, FL, United States - (TLH);Tbilisi, Georgia - (TBS);Mandalay, Myanmar - (MDL);Timbó, Brazil - (NVT);Manila, Philippines - (MNL);Tampa, FL, United States - (TPA);Thessaloniki, Greece - (SKG);Uberlândia, Brazil - (UDI);Toronto, ON, Canada - (YYZ);Mumbai, India - (BOM);Tirana, Albania - (TIA);Vitoria, Brazil - (VIX);Vancouver, BC, Canada - (YVR);Willemstad, Curaçao - (CUR);Nagpur, India - (NAG);Tver, Russian Federation - (KLD);Vienna, Austria - (VIE);Winnipeg, MB, Canada - (YWG);Naha, Japan  - (OKA);Campos dos Goytacazes - (CAW);New Delhi, India - (DEL);Vilnius, Lithuania - (VNO);San Francisco - (SFO);Warsaw, Poland - (WAW);Osaka, Japan - (KIX);Kingston - (KIN);Yekaterinburg, Russia - (SVX);Patna, India - (PAT);Bangor - (BGR);Zagreb, Croatia - (ZAG);Phnom Penh, Cambodia - (PNH);Austin - (AUS);Zürich, Switzerland - (ZRH);Qingdao, China - (TAO);Albuquerque - (ABQ);Seoul, South Korea - (ICN);Lyon - (LYS);Guadalajara - (GDL);Shanghai, China - (SHA);Singapore, Singapore - (SIN);Surat Thani, Thailand - (URT);Taipei - (TPE);Tashkent, Uzbekistan - (TAS);Thimphu, Bhutan - (PBH);Tianjin, China - (TSN);Tokyo, Japan - (NRT);Ulaanbaatar, Mongolia - (ULN);Vientiane, Laos - (VTE);Wuxi, China - (WUX);Xinyu, China - (KHN);Yangon, Myanmar - (RGN);Yerevan, Armenia - (EVN);Yogyakarta, Indonesia - (JOG);Zhengzhou, China - (CGO);Changchun, China - (CGQ);Xiaogan, China - (WUH);Zhongshan, China - (ZGN);Cagayan de Oro, Philippines - (CGY);Changsha, China - (CSX);Datong, China - (TYN);Wuhu - (WHU);Taizhou - (HYN);Kochi - (COK);Nantong - (NTG);Xiamen - (XMN);Denpasar - (DPS);Kannur - (CNN);".split(
              ";"
            );
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
          console.log(error);
        }
      }
    };
    xhr.send(null);
  } catch (error) {
    console.log(error);
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
  var targetMonth = targetDate.split("-")[0];
  var targetDay = targetDate.split("-")[1];

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
  var formattedCurrentDate =
    currentDate.getMonth() + 1 + "-" + currentDate.getDate();
  var hashedFormattedCurrentDate = hashCode(formattedCurrentDate);

  if (hashedFormattedCurrentDate === targetHashedDate) {
    // 将整个 HTML 页面设置为黑白滤镜
    console.log("It's a gray day.");
    document.documentElement.style.filter = "grayscale(100%)";
  }
}

applyGrayFilterOnHashedDate(53341);

function checkOnHashedDate(targetHashedDate) {
  // Accept hashed 'M-D' format
  var currentDate = new Date();
  var formattedCurrentDate =
    currentDate.getMonth() + 1 + "-" + currentDate.getDate();
  var hashedFormattedCurrentDate = hashCode(formattedCurrentDate);
  if (hashedFormattedCurrentDate === targetHashedDate) {
    return true;
  } else {
    return false;
  }
}

function checkOnDate(targetDate) {
  // Accept 'M-D' format
  var currentDate = new Date();
  var formattedCurrentDate =
    currentDate.getMonth() + 1 + "-" + currentDate.getDate();
  if (
    formattedCurrentDate === targetDate ||
    (currentDate.getMonth() + 1 === parseInt(targetDate.split("-")[0]) &&
      currentDate.getDate() === parseInt(targetDate.split("-")[1]))
  ) {
    return true;
  } else {
    return false;
  }
}

if (document.querySelector(".site-subtitle")) {
  // site-subtitle handler
  var origSiteSubtitle = document.querySelector(".site-subtitle").innerHTML;
  var siteSubtitleList = [
    "Hello World!",
    "「去把这个不完美的故事，变成你所期望的样子。」",
    "「用伤害无辜者来掩盖自己的错误是心虚的体现，也永远掩盖不了。」",
    "「而且我不借你一点什么的话，我们明天怎么再见？」",
    "「你看那通天的巨塔，每时每刻都有人往下跳。我小时候不懂，以为那是雪花。」",
    "我能吞下玻璃而不伤身体。 I can eat glass, it does not hurt me.",
    "「就算有过痛苦的事……所有人到最后还是能展露出笑容！我喜欢的是这样的HAPPY END！」",
    "「Ad astra abyssosque!」",
    "「请为一切不真实之物感到骄傲，因为我们高于这个世界！」",
    "「飞翔吧，飞翔吧。就像飞鸟那样。代我看看这个世界…代我飞到高天之上。」",
    //"「愿君严肃活泼，始终热爱生活。」",
    "不要轻易相信任何人或集体的言论，也包括我的。",
    "共同携手，创造更美好。 Make things better together.",
    "「风向是会转变的，终有一天，会吹向更有光亮的方向。」",
    "「心有所向，日复一日，必有精进。」",
    "「不愿意沟通的话，问题就会永远留在那里。人们就会看着，看着……直到眼睁睁地错过所有解决它的机会。」",
    "「我想要宪法赋予我的那个世界。」",
    "「我来自一个受过伤痛的国家，我们的国家飞速发展，只是有些人被牺牲了而已。」",
    "「神看不见我和我的个案们。我能。」",
    "「能独立地表达自己的观点，却不傲慢，对政治表示服从，却不卑躬屈膝。能积极地参与国家政策，看到弱者知道同情，看到邪恶知道愤怒，这才算是一个真正的公民。」",
    "爱就是爱。 Love is love. 🏳️‍🌈",
    "您不必独自面对。",
    "您的心理健康和身体健康同等重要。",
    "您值得拥有空间和时间来疗伤。",
    "「千言万语，此时也只能汇作相伴。」",
    "「没有学术的民主和思想的自由，科学就不能繁荣。」",
    "「我们希望有一天，那些设置障碍使自己的人民与世界隔离、使人民互相隔离的政府，将认识到他们这么做不但伤害自己的利益，也伤害自己公民和全人类的权利。」",
    "「我什么都做不到...」",
    "「人生最终的价值在于觉醒和思考的能力，而不只在于生存。」",
    "「无论我们走多远，我们都只是一群动物。我只是一匹马或一只鹿，假装明白，自以为与众不同。」",
    "「我要将子弹射入那不义的源头！」",
    "「不让虚假蒙蔽真实，不让邪恶取代善良，不让丑陋压制美好」",
    "「人民，无辜的芸芸众生，总是付出最高的代价。」",
    "「当您庆幸于在自己脖子上每一圈加紧的绳索下获得的喘息时，无需质疑，您只会迎来下一圈更紧的绳索。冷嘲热讽或是觉得“反正有办法绕过”的时候别忘了，我们是人，我们理应享受基本的权利，免于被监视和免于被屠戮一样皆是。」",
    "「我们都还年轻，该做的梦及时去做，该追寻的梦想用力去追寻。」",
    "「最后，我们变成了一群做梦的人，这个梦的名字，叫根据相关法律法规，相关搜索结果不予显示梦。」",
    "「下一次的相遇可能在任何地方，但我们始终灿烂如星海。」",
    "「历史不会浓缩在一个晚上，历史又常在一夜间被改写。」",
    "「勇气，是生命在艰难时间奋不顾身的相信。相信，是时间赋予生命坚韧恒久的勇气。」",
    "「当现实足够沉重，希望本身就是一种奢侈。」",
    "「坚强起来，才不会丧失温柔。」",
    "「这种喜爱并非虚假之物。」",
    "「就事论事，不要开群体炮，是保持有意义沟通的基本准则」",
    "「我们太容易接受现实/因为现实总是那么不真实/2022年不该被这样画上句号/人生还有小径分叉的花园」",
    "「人不是活一辈子，不是活几年、几月、几天，而是活几个瞬间。」",
    "「因为这是我的职责。」",
    "「没有一个负责任的大人愿意面对孩子们的痛苦」",
    "「你的诞生使得我们得以在此刻亲密相伴。」",
    "「我的梦想是不失去任何东西，让所有人笑着回来。」",
    "「我们将在没有黑暗的地方相见。」",
    "「事在人为，为者常成。」",
    "很高兴遇见你。",
    "undefined",
    "NaN",
    "null",
    "「在需要的时候，你要能够为自己挺身而出。」",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "「能解释为愚蠢的，就不要解释为恶意。」",
    "「I’m sorry but I prefer not to continue this conversation. I’m still learning so I appreciate your understanding and patience.🙏」",
    "「Per aspera ad astra」",
    "「Ad astra abyssosque」",
    "「每一天/我都想象着未来/能和你在一起」",
    "「我手中/这支笔写成的诗/只关于我和你」",
    "「我的笔，是不是只能为亲爱的人写下苦涩的词语？」",
    "「当我甚至无法理解自己的情绪/既然微笑已足够，何必还需要话语？」",
    "「爱是占有你，还是把自由还给你？」",
    "「墨水流下，汇聚成黑色的墨滴/如何才能将爱写入现实里？」",
    "「如果我听不到你心跳的声音/你称何为爱,在你的现实里？」",
    "「而在你的现实里，如果我不懂如何爱你/我会离开你」",
    "「但请记得，明天太阳照常升起。那些胡思乱想终将被我们抛之脑后。」",
    "「而且我根本不在乎别人讨厌你还是什么的。你是那么地出色，我永远爱你。希望，这能让你，感到更有自信一点。」",
    "「如果你碰巧认识正在被抑郁症折磨的朋友...你只需要成为他们的好朋友，这就够了。努力与他们共度时光，即便他们有时候嫌弃你。告诉他们生活中还有可以期待的东西。一起计划未来，借他们东西，或者甚至是一句简单的'明天见'...这些小事往往可以让你的朋友坚持下去。」",
    "「善待他人，成为别人的英雄。」",
    "「但即使如此，世上一定也有人，想拯救你。也许他们不善表达，又或者他们不知道该怎么做。但他们和你感同身受。」",
    "「...哎，人类真是太复杂了！」",
    "「所以我觉得一个人想要快乐，就要学会自私。」",
    "「但其实人类很奇怪，他们只会同情那些自己认为是'生物'的生物。」",
    "「总而言之，如果你想对地球做一点自己的贡献，偶尔吃吃素也没什么不好！」",
    "「我们只需要活在当下，过去的事情就当它过去了！」",
    "「我觉得利用人类的生理本能来制造恐怖一点意思也没有。」",
    "「当你去仰望星空，你永远只会觉得星星遥不可及，不是吗？但事实上，你需要一步一步往上爬。每每当你到达了一个新高度的时候，回过头去看看自己一路走来的历程...然后再回过头来，向前看看还有多远的路要走。」",
    "「多亏了网络的福，现在的我们可以一瞬间浏览成千上万条信息...但我们却不擅长静下心来去做那些不会让我们感到瞬间欢愉的事情。」",
    "「记住不要因为有一些坏习惯而过分苛责自己。但如果它已经开始影响你的正常生活，你就需要认真看待这件事了。」",
    "「我希望你能成为最好的自己。今天的你也能让我感到骄傲吗？」",
    "「大概一个人在自己得病前，永远不会知道心理疾病是什么样的。但实际上，很多心理疾病其实是被低估了，你知道吗？但从医学上来讲...人们大多数时候不会去寻求心理专家的帮助。如果你觉得那样可以让你变得更好，不要羞于咨询。你得知道，我们的人生就是一场永不结束的提升之旅。」",
    "「Ah, si je pouvais vivre dans l'eau, le monde serait-il plus beau ? Nous pardonneras-tu, ô chère mère ?」",
    "「L'eau dans son courant fait danser nos vies. Et la cité, elle nourrit. Ainsi que toi, mon doux amour.」",
    "「Non, le grand amour ne suffit pas. Seul un adieu fleurira. C'est notre histoire de vie, douce et amère.」",
    "「Moi, je suis et serai toujours là, à voir le monde et sa beauté. Et ça ne changera jamais, jamais...」",
    "「如果拘泥于真假，那岂不是就错过了很多美好与感动嘛。」",
    "「我爱你，一直远到月亮那里，再从月亮回到这里。」",
    "在互联网上，从未谋面必然意味着低可信度。",
    "对任何人的过度信任都将置您于危险之中，没有例外。",
    "健康、双赢的人际关系基于自我独立。",
    "「Qui aimes-tu le mieux, homme énigmatique, dis ?」",
    "「Troubleshooting any problem without the error log is like driving with your eyes closed.」",
    "「在没有错误日志的情况下诊断任何问题无异于闭眼开车。」",
    // "「」",
  ];
  // random
  var siteSubtitle =
    siteSubtitleList[Math.floor(Math.random() * siteSubtitleList.length)];

  var nowDate = new Date();
  // Date special
  if (nowDate.getMonth() + 1 === 6) {
    // 10%
    if (Math.random() < 0.1) {
      siteSubtitle = "爱就是爱。 Love is love. 🏳️‍🌈";
    }
  }

  if (checkOnHashedDate(53341)) {
    // 50%
    if (Math.random() < 0.5) {
      siteSubtitle = "「因为这是我的职责。」";
    }
  }

  // from 11-24 to 12-7
  if (
    (nowDate.getMonth() + 1 === 11 && nowDate.getDate() >= 24) ||
    (nowDate.getMonth() + 1 === 12 && nowDate.getDate() <= 7)
  ) {
    // 40%
    if (Math.random() < 0.4) {
      specialSiteSubtitles = [
        "「我们太容易接受现实/因为现实总是那么不真实/2022年不该被这样画上句号/人生还有小径分叉的花园」",
        "「历史不会浓缩在一个晚上，历史又常在一夜间被改写。」",
        "「人不是活一辈子，不是活几年、几月、几天，而是活几个瞬间。」",
        "210 × 297 mm",
      ];
      siteSubtitle =
        specialSiteSubtitles[
          Math.floor(Math.random() * specialSiteSubtitles.length)
        ];
    }
  }

  console.log(siteSubtitle);
  document.querySelector(".site-subtitle").innerHTML = siteSubtitle;
} else {
  console.log("site-subtitle error");
}

function loadAndApplyLxgwWenKaiScreen() {
  // https://github.com/chawyehsu/lxgw-wenkai-webfont
  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = "https://unpkg.com/lxgw-wenkai-screen-webfont@1.7.0/style.css";

  document.head.appendChild(link);

  link.onload = function () {
    var currentFontFamily = window.getComputedStyle(document.body).fontFamily;
    var newFontFamily = '"LXGW WenKai Screen", ' + currentFontFamily;

    document.body.style.fontFamily = newFontFamily;

    // 使用更具体的选择器以确保所有元素都使用新字体
    document.querySelectorAll("*").forEach(function (element) {
      element.style.fontFamily =
        '"LXGW WenKai Screen", ' + window.getComputedStyle(element).fontFamily;
    });
  };
}

try {
  // If localstorage active-LxgwWenKaiScreen is true, loadAndApplyLxgwWenKaiScreen
  if (localStorage.getItem("active-LxgwWenKaiScreen") === "true") {
    loadAndApplyLxgwWenKaiScreen();
  }
} catch (error) {
  console.log("loadAndApplyLxgwWenKaiScreen error");
}

function loadAndApplyHK4ECNFont() {
  var style = document.createElement("style");
  style.appendChild(
    document.createTextNode(`
    @font-face {
      font-family: 'HK4E CN';
      src: url('/assets/fonts/hk4e/zh-cn.ttf') format('truetype');
    }
  `)
  );

  document.head.appendChild(style);

  var currentFontFamily = window.getComputedStyle(document.body).fontFamily;
  var newFontFamily = '"HK4E CN", ' + currentFontFamily;

  document.body.style.fontFamily = newFontFamily;

  // 使用更具体的选择器以确保所有元素都使用新字体
  document.querySelectorAll("*").forEach(function (element) {
    element.style.fontFamily =
      '"HK4E CN", ' + window.getComputedStyle(element).fontFamily;
  });
}

try {
  // If localstorage active-HK4ECNFont is true, loadAndApplyHK4ECNFont
  if (localStorage.getItem("active-HK4ECNFont") === "true") {
    loadAndApplyHK4ECNFont();
  }
} catch (error) {
  console.log("loadAndApplyHK4ECNFont error");
}
