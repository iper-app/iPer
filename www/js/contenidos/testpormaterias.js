/*********************************************************************************************************************/
// File: testpormaterias.js
// Nadim Aseq A Arman
// Lista del test de cada tema con calculacion de intentos.
/*********************************************************************************************************************/

var idT = 0;
var titulo = "";
if (id == null) {
    idT = 0;
} else {
    idT = id;
}
if (navigator.onLine) {

    $.getJSON(serviceURL + 'testpormaterias.php?codTema=' + idT + '&idUsuario=' + window.sessionStorage.getItem("id"), function(data) {
        $('#testList div').remove();

        $('#title div').remove();

        var test = eval(data);

        for (var t in test) {
            for (var u in test[t].test) {
                $('#testList').append('<div id="' + test[t].test[u].idTestExamen + ' "class="item"><a id=' + test[t].test[u].idTestExamen + ' href="test.html?id=' + test[t].test[u].idTestExamen + '" class="nomPreg">Nº ' + test[t].test[u].numDeTest + '<span  class="testStatus"></span></a></div>');
            }
        }
        if (id == null) {
            titulo = "EXAMEN COMPLETA";
        } else {
            titulo = test[t].test[u].codTema + ' ' + test[t].test[u].tema;
        }
        $('#title').append('<span class="title">' + titulo + '</span>');
    });

    $.getJSON(serviceURL + 'testpormaterias.php?codTema=' + idT + '&idUsuario=' + window.sessionStorage.getItem("id"), function(data) {
        var test = eval(data);
        for (var v in test[0].intento) {
            $('#' + test[0].intento[v].idTestExamen + '').empty();
            $('#' + test[0].intento[v].idTestExamen + '').append("Nº " + test[0].intento[v].numDeTest + '<img class="testStatus"src="img/correct.png"/><span class="aprobado">' + test[0].intento[v].aprobado + '</span><span class="testStatus">(' + test[0].intento[v].intentado + ')</span></a></div>');
        }

    });
}
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