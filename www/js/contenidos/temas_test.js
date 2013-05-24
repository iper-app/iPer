/*********************************************************************************************************************/
// File: temas_test.js
// Nadim Aseq A Arman
// Es lo mismo como temas.js pero aqui se llaman la lista de las temas para examen.
/*********************************************************************************************************************/
navigator.notification.loadingStart()
$.getJSON(serviceURL + 'temas.php?for=test', function(data) {
    $('#temaList div').empty();
    temas = data.items;

    var tema = eval(data);
    console.log(tema);
    for (var i in tema) {
        $('#temaList').append('<div class="item"><a href="testpormaterias.html?id=' + tema[i].idTema + '">' + tema[i].codTema + ' ' + tema[i].tema + '</a></div>');
    }
navigator.notification.loadingStop();
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