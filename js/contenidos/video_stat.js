/*********************************************************************************************************************/
// File: video_stat.js
// Nadim Aseq A Arman
// Estado de video. Si este video esta visto y el usuario quieren repitir o no...
/*********************************************************************************************************************/

$(document).ready(function() {
    $.getJSON(serviceURL + 'video_template.php?idVideo=' + id + "&idUsuario=" + window.sessionStorage.getItem("id"), function(data) {
        var videoTema = eval(data);
        $('#title div').remove();

        for (var v in videoTema) {
            //var videoRuta = videoTema[v].ruta.split('/');
        }
        $('#title').append('<span class="title">' + videoTema[0].numeros + ' ' + videoTema[0].textoDelBoton + '</span>');
    });

    function goto(stat) {
        console.log(stat);
    }
    $("a.repetir").click(function() {
        console.log("data");
        $.post(serviceURL + 'video_status.php?idVideo=' + id + "&idUsuario=" + window.sessionStorage.getItem("id") + "&estado=1", function(data) {
            var d = eval(data);
            window.location.href = "contenidos_tema.html?id=" + d[0].idTema;
        });
    });
    $("a.ok").click(function() {
        console.log("data");
        $.post(serviceURL + 'video_status.php?idVideo=' + id + "&idUsuario=" + window.sessionStorage.getItem("id") + "&estado=2", function(data) {
            var d = eval(data);
            window.location.href = "contenidos_tema.html?id=" + d[0].idTema;
        });
    });
    $("a.nada").click(function() {

        $.post(serviceURL + 'video_status.php?idVideo=' + id + "&idUsuario=" + window.sessionStorage.getItem("id") + "&estado=0", function(data) {
            var d = eval(data);
            window.location.href = "contenidos_tema.html?id=" + d[0].idTema;
        });
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
});
