/*********************************************************************************************************************/
// File: correccion.js
// Nadim Aseq A Arman
// Es para reproducir el video de cada tema.
/*********************************************************************************************************************/

$.getJSON(serviceURL + 'video_template.php?idVideo=' + id + "&idUsuario=" + window.sessionStorage.getItem("id"), function(data) {
    if (!navigator.onLine) {
        alert("Para ver videos necesita conneción a internet.")
    }

    var videoTema = eval(data);
    $('#title div').remove();

    for (var v in videoTema) {
        var videoRuta = videoTema[v].ruta.split('/');
    }
    console.log(window.sessionStorage.getItem("id"));
    $('#title').append('<span class="title">' + videoTema[0].numeros + ' ' + videoTema[0].textoDelBoton + '</span>');
    if (window.sessionStorage.getItem("id")) {
        $('div#atras').empty();
        $('div#atras').append('<a href="video_stat.html?id=' + videoTema[0].idVideo + '&idUsuario=' + window.sessionStorage.getItem("id") + '&idTema=' + videoTema[0].idTema + '"><img id=\"cola\" src=\"img/atras.png\" alt=\"atras\"/>atras</a>');
    }

    var ancho = $(window).width();
    var video = $('.video');
    var rutaVideo = 'http://iper.accountsupport.com/curso/temas/'; // ruta general del servidor
    var rutaTema = videoRuta[2] + '/'; // nombre de la carpeta de ese tema
    var nombreVideo = videoRuta[3]; // nombre archivo sin extension

    var resolucion_1 = [600, 450];
    var rutaRes_1 = resolucion_1[0] + "x" + resolucion_1[1] + "/";
    var resolucion_2 = [800, 600];
    var rutaRes_2 = resolucion_2[0] + "x" + resolucion_2[1] + "/";
    var anchoCambio = 600; //ancho a partir del cual cambia a mejor calidad 
    if (ancho > anchoCambio) {
        var ruta = rutaVideo + rutaTema + rutaRes_2 + nombreVideo;
        console.log(ruta);
        $('#videoWrapper div').remove();
        $("#videoWrapper").append("<video id='video' class='video' controls/>");
        $("#video").attr('src', ruta);

        if (device.platform.match(/Android/)) {
            window.plugins.videoPlayer.play(ruta);
        } else {

            video.attr('width', resolucion_1[0]);
            video.attr('height', resolucion_1[1]);
            $("#video").attr('src', ruta);
            $('#video').load();
        }
    } else {

        var ruta = rutaVideo + rutaTema + rutaRes_1 + nombreVideo;
        $('#videoWrapper div').remove();
        $("#videoWrapper").append("<video id='video' class='video' controls/>");
        $("#video").attr('src', ruta);

        if (device.platform.match(/Android/)) {
            window.plugins.videoPlayer.play(ruta);
        } else {

            video.attr('width', resolucion_1[0]);
            video.attr('height', resolucion_1[1]);
            $("#video").attr('src', ruta);
            $('#video').load();
        }
    }
});

var myScroll;
function loaded() {
    myScroll = new iScroll('wrapper');
}

document.addEventListener('touchmove', function(e) {
    e.preventDefault();
}, false);
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(loaded, 200);
}, false);