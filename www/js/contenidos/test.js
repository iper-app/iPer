/*********************************************************************************************************************/
// File: test.js
// Nadim Aseq A Arman
// Es el test.
/*********************************************************************************************************************/

$(document).ready(function() {


    var test;
    var idUsuario = window.sessionStorage.getItem("id");
    if (idUsuario === null || idUsuario == "") {
        idUsuario = 1;
    }
    if (navigator.onLine) {
        $.getJSON(serviceURL + 'test.php?id=' + id + '&idUsuario=' + idUsuario, function(data) {

            $('#pregList div').remove();
            test = eval(data);
            var opt = 1;
            var video;

            $('#test').append('<input type="hidden" name="idTestExamen" value="' + data[0].idTestExamen + '"/>');
            $('#title').empty();
            $('#title').append('<span class="title">Nº ' + data[0].numDeTest + '</span>');
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
            $('#pregList').append('<br><br><br><br><div class="itemBtn" style="float:right;"><a id="submitTest" href="javascript:submitTest()">GUARDAR</a></div>')
            $('#pregList').append('<p style="float:left;"><span style="float:left;">Necesitas acabar el test en más de 7 minutos y estar registrado para que te puntúe en el ránking y en la gráfica personal.</span><span id="chronotime" style="font-size: 1.5em;float:right;">0:00:00</span></p>');

            $('#pregList').append('');
            $('#pregList').append('<form name="chronoForm"><input type="hidden" id="start" name="startstop" value="start!" onClick="chronoStart()" />');
            $('#pregList').append('<input type="hidden" name="reset" value="reset!" onClick="chronoReset()" />');
            $('#pregList').append('</form>');
        });

        $.getJSON(serviceURL + 'getUltimoIntento.php?id=' + id + '&idUsuario=' + idUsuario, function(data2) {
            var d2 = eval(data2);
            for (var ii in d2) {
                $('#test').append('<input type="hidden" name="idInicioIntentos" value="' + d2[ii].idIntento.idInicioIntento + '"/>');
            }
        });
    } else {
        $('#pregList').empty();
        var varName;
        if (id == 2) varName = test2;
        if (id == 3) varName = test3;
        if (id == 4) varName = test4;
        if (id == 5) varName = test5;
        if (id == 6) varName = test6;
        if (id == 7) varName = test7;
        if (id == 8) varName = test8;
        if (id == 9) varName = test9;
        if (id == 10) varName = test10;
        if (id == 11) varName = test11;
        if (id == 12) varName = test12;
        if (id == 13) varName = test13;
        if (id == 14) varName = test14;
        if (id == 15) varName = test15;
        if (id == 16) varName = test16;
        if (id == 17) varName = test17;
        if (id == 18) varName = test18;
        if (id == 19) varName = test19;
        if (id == 20) varName = test20;
        if (id == 21) varName = test21;
        if (id == 22) varName = test22;
        if (id == 23) varName = test23;
        if (id == 24) varName = test24;
        if (id == 25) varName = test25;
        if (id == 26) varName = test26;
        if (id == 27) varName = test27;
        if (id == 28) varName = test28;
        if (id == 29) varName = test29;
        if (id == 30) varName = test30;
        if (id == 31) varName = test31;
        if (id == 32) varName = test32;
        if (id == 33) varName = test33;
        if (id == 34) varName = test34;
        if (id == 35) varName = test35;
        if (id == 36) varName = test36;
        if (id == 37) varName = test37;
        if (id == 38) varName = test38;
        if (id == 39) varName = test39;
        if (id == 40) varName = test40;
        if (id == 41) varName = test41;
        if (id == 42) varName = test42;
        if (id == 43) varName = test43;
        if (id == 44) varName = test44;
        if (id == 45) varName = test45;
        if (id == 46) varName = test46;
        if (id == 47) varName = test47;
        if (id == 48) varName = test48;
        if (id == 49) varName = test49;
        if (id == 50) varName = test50;
        if (id == 51) varName = test51;
        if (id == 52) varName = test52;
        if (id == 53) varName = test53;
        if (id == 54) varName = test54;
        if (id == 55) varName = test55;
        if (id == 56) varName = test56;
        if (id == 57) varName = test57;
        if (id == 58) varName = test58;
        if (id == 59) varName = test59;
        if (id == 60) varName = test60;
        if (id == 61) varName = test61;
        if (id == 62) varName = test62;
        if (id == 63) varName = test63;
        if (id == 64) varName = test64;
        if (id == 65) varName = test65;
        if (id == 66) varName = test66;
        if (id == 67) varName = test67;
        if (id == 68) varName = test68;
        if (id == 69) varName = test69;
        if (id == 70) varName = test70;
        if (id == 71) varName = test71;
        if (id == 72) varName = test72;
        if (id == 73) varName = test73;
        if (id == 74) varName = test74;
        if (id == 75) varName = test75;
        if (id == 76) varName = test76;
        if (id == 77) varName = test77;
        if (id == 78) varName = test78;
        if (id == 79) varName = test79;
        if (id == 80) varName = test80;
        if (id == 81) varName = test81;
        if (id == 82) varName = test82;
        if (id == 83) varName = test83;
        if (id == 84) varName = test84;
        if (id == 85) varName = test85;
        if (id == 86) varName = test86;
        if (id == 87) varName = test87;
        if (id == 88) varName = test88;
        if (id == 89) varName = test89;
        if (id == 90) varName = test90;
        if (id == 91) varName = test91;
        if (id == 92) varName = test92;
        if (id == 93) varName = test93;
        if (id == 94) varName = test94;
        if (id == 95) varName = test95;
        if (id == 96) varName = test96;
        if (id == 97) varName = test97;

        var testTmp = $.toJSON(varName);
        var test = $.evalJSON(testTmp);
        var opt = 1;
        var video;

        $('#test').append('<input type="hidden" name="idTestExamen" value="' + test[0].idTestExamen + '"/>');
        $('#title').empty();
        $('#title').append('<span class="title">Nº ' + test[0].numDeTest + '</span>');
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
        $('#pregList').append('<br><br><br><br><div class="itemBtn" style="float:right;"><a id="submitTest" href="javascript:submitTest()">GUARDAR</a></div>')
        $('#pregList').append('<p style="float:left;"><span style="float:left;">Necesitas acabar el test en más de 7 minutos y estar registrado para que te puntúe en el ránking y en la gráfica personal.</span><span id="chronotime" style="font-size: 1.5em;float:right;">0:00:00</span></p>');

        $('#pregList').append('');
        $('#pregList').append('<form name="chronoForm"><input type="hidden" id="start" name="startstop" value="start!" onClick="chronoStart()" />');
        $('#pregList').append('<input type="hidden" name="reset" value="reset!" onClick="chronoReset()" />');
        $('#pregList').append('</form>');
    }
});
$(document).ready(function() {
    $('#submitTest').click(function() {
        submitTest();
    });
    
});

function submitTest() {
    var form = $('#test');
    formData = form.serializeFormJSON();
    var dataForm = form.serialize();    
    $('#pregList div').remove();    
    window.location.href = "testResults.html?" + dataForm;
}

//PARA MOSTRAR REFERENCIA DE LAS PREGUNTAS
$('.seeRef').click(function() {
    var url = $(this).attr('href');
    if (device.platform.match(/Android/)) {
        navigator.app.loadUrl(url);
    } else {
        window.location.href = url;
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

