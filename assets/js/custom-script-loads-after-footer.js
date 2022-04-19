// Activate Google Translate
var lang = (navigator.language || navigator.browserLanguage).toLowerCase();
if (lang != 'zh-cn' || /translate=true/.test(window.location) || localStorage.getItem('translate') == 'true') {
    document.write('<scr' + 'ipt src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" defer="defer">' + '</scr' + 'ipt>');
    var google_translate_element = document.createElement('div');
    google_translate_element.innerHTML = '<div id="google_translate_element"></div>';
    document.getElementsByTagName('body')[0].appendChild(google_translate_element);
    function googleTranslateElementInit() {
        new google.translate.TranslateElement({
            pageLanguage: 'zh-CN',
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE
        }, 'google_translate_element');
    }
}
