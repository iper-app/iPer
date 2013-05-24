/*********************************************************************************************************************/ 
// File: ranking.js
// Nadim Aseq A Arman
// Con ayuda de este script se mostrara el ranking del test.
/*********************************************************************************************************************/

var idUsuario = 1;
$.getJSON(serviceURL + 'ranking.php', function(data) {
    $('#rankingTable table').remove();
    var ranking = eval(data);

    //$('#ranking').append('<table width="100%">');
//console.log(data);
    var opt = 1;
    for (var i in ranking) {
        console.log(idUsuario);
        if (ranking[i].idPersona == idUsuario) {
            $('#rankingTable').append('<tr class="me"><td width="60%">' + opt + ' - ' + ranking[i].nombre + '</td><td align="right">' + ranking[i].puntos + '</td></tr>');
        }else{
             $('#rankingTable').append('<tr><td width="60%">' + opt + ' - ' + ranking[i].nombre + '</td><td align="right">' + ranking[i].puntos + '</td></tr>');
        }
        opt++;
    }
    // $('#ranking').append('</table>');

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