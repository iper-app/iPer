/*********************************************************************************************************************/ 
// File: correccion.js
// Nadim Aseq A Arman
// Para mostrar resultados del test despues de acabar el test. De aqui se recibira datos del php para mostrar 
// las respuestas correctas y las respuestas que han fallado el usuario.
/*********************************************************************************************************************/


var test;
$.getJSON(serviceURL + 'test.php?id=' + id, function(data) {
    $('#pregList div').remove();
    test = eval(data);
    var opt = 1;
    var video;
    $('#test').append('<input type="hidden" name="idTestExamen" value="' + data[0].idTestExamen + '"/>');

    for (var i in test) {
        opt = opt + 1;
        if (i % 4 === 0) {
            $('#pregList').append('<div class="preguntas"><a href="#">Nº '
                    + test[i].nombre + ' - ' + test[i].pregunta + '</a>');
            if (test[i].video !== "") {
                video = test[i].video;
                $('#pregList').append('<div class="subPreg"><a class="seeRef button" target="_blank" href="' + test[i].video + '">'
                        + test[i].videoTxt + '</a></div>');
            }
            opt = 1;
        }
        $('#pregList').append('<input id="' + test[i].nombre + '_' + opt + '" type = "radio" name = "' + test[i].idPreguntas + '" value = "' + opt + '" />\n\
            <label for="' + test[i].nombre + '_' + opt + '">' + test[i].respuestas + '</label>');
        if (i % 3 === 0) {
            $('#pregList').append('</div>');
        }
    }
    //$('#pregList').append('<br><br><br><br><div class="itemBtn" style="float:right;"><a id="submitTest" href="javascript:submitTest()">GUARDAR</a></div>')
});

$.getJSON(serviceURL + 'getUltimoIntento.php?idUsuario=1', function(data2) {
    $('#test').append('<input type="hidden" name="idInicioIntentos" value="' + data2[0].idIntento + '"/>');
});

$(document).ready(function() {
  $.getJSON(serviceURL + 'testResults.php?' + data, function(data) {
        //console.log(data);
        var dataRes = eval(data);
        for (var i in dataRes) {
            var $radios = $('input:radio[name=' + dataRes[i].idPreguntas + ']');
            $radios.filter('[value=' + dataRes[i].respuesta + ']').prop('checked', true);
        }
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