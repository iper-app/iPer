/*********************************************************************************************************************/ 
// File: temas.js
// Nadim Aseq A Arman
// Para mostrar las temas del curso.
/*********************************************************************************************************************/
navigator.notification.loadingStart()
$.getJSON(serviceURL + 'temas.php', function(data) {
    $('#temaList div').remove();
    temas = data.items;
    //console.log(data);
    var tema = eval(data);

    for (var i in tema) {
        $('#temaList').append('<div class="item"><a href="contenidos_tema.html?id=' + tema[i].idTema + '">' + utf8_encode(tema[i].codTema + ' ' + tema[i].tema) + '</a></div>');
    }
    $('#temaList').append('<div class="item claro"><a href="glosario.html">Glosario</a></div>'
            + '<div class="item claro"><a href="diccionario.html">Diccionario</a></div>');
navigator.notification.loadingStop()
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