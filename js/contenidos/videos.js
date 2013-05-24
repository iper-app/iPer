/*********************************************************************************************************************/
// File: videos.js
// Nadim Aseq A Arman
// Lista de videos
/*********************************************************************************************************************/
$('#wrapper').bind('pageinit', function(event) {
    getTemaList();
});


$.getJSON(serviceURL + 'videos.php?idTema=' + id + '&idUsuario=' + window.sessionStorage.getItem("id"), function(data) {
    $('#videoList div').remove();
    videos = data.items;
    $('#title div').remove();

    var video = eval(data);
    //console.log(window.sessionStorage.getItem("id"));
    var codTema = video[0].video[0].codTema;
    //console.log(codTema);
    if (codTema === "04") {
        $('#videoList').append('<div class="item claro"><a href="tipeo.html">Tipeo</a></div>');
    }
    for (var v in video[0].video) {
        $('#videoList').append('<div class="item"><a id="' + video[0].video[v].idVideo + '" href="videos_template.html?id=' + video[0].video[v].idVideo + '">' + video[0].video[v].numeros + ' ' + video[0].video[v].textoDelBoton + '</a></div>');
        for (var vm in video[0].video_mirado) {
            if (video[0].video[v].idVideo == video[0].video_mirado[vm].idVideos) {
                if (video[0].video_mirado[vm].estado == "1") {
                    $("#" + video[0].video[v].idVideo).addClass("rojo");
                } else if (video[0].video_mirado[vm].estado == "2") {
                    $("#" + video[0].video[v].idVideo).addClass("verde");
                }
            }

        }
    }
    $('#title').append('<span class="title">' + video[0].video[0].codTema + ' ' + video[0].video[0].tema + '</span>');
    /*$('#temaList').append('<div class="item claro"><a href="glosario.html">Glosario</a></div>'
     + '<div class="item claro"><a href="diccionario.html">Diccionario</a></div>');*/

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