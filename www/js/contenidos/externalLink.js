/*********************************************************************************************************************/ 
// File: externalLink.js
// Nadim Aseq A Arman
// Es un pequeño script para abrir algun enlaçe en navegador de movil.
/*********************************************************************************************************************/


$('a').click(function() {
    navigator.notification.loadingStart();
    var url = $(this).attr('href');
    if (device.platform.match(/Android/)) {
        navigator.app.loadUrl(url);
        navigator.notification.loadingStop();        
    } else {
        window.location.href = url;
        navigator.notification.loadingStop();        
    }
});