/*********************************************************************************************************************/
// File: fechasdelexamen.js
// Nadim Aseq A Arman
// Este script se utiliza en la pagina de fechas del examen donde se ve las fechas disponibles en futuro.
// Las fechas esta en base de datos.
/*********************************************************************************************************************/
$(document).ready(function() {

    var data = [{"idFechas": "18", "ccaa": "Catalunya", "lugarExamen": "Barcelona", "abre": "Abierto", "finaliza": "2013-05-21", "examen": "2013-05-21", "precio": " 87,95 ", "paypal": "https:\/\/www.paypal.com\/cgi-bin\/webscr?cmd=_s-xclick&hosted_button_id=87WF3YBCSK58E"}, {"idFechas": "19", "ccaa": "Catalunya", "lugarExamen": "Girona", "abre": "Abierto", "finaliza": "2013-05-22", "examen": "2013-05-22", "precio": " 87,95 ", "paypal": "https:\/\/www.paypal.com\/cgi-bin\/webscr?cmd=_s-xclick&hosted_button_id=7C8YZ6V79PEWL"}, {"idFechas": "20", "ccaa": "Catalunya", "lugarExamen": "Barcelona", "abre": "Abierto", "finaliza": "2013-05-23", "examen": "2013-05-23", "precio": " 87,95 ", "paypal": "https:\/\/www.paypal.com\/cgi-bin\/webscr?cmd=_s-xclick&hosted_button_id=T8P5ZVG5X778C"}, {"idFechas": "21", "ccaa": "Catalunya", "lugarExamen": "Barcelona", "abre": "Abierto", "finaliza": "2013-05-24", "examen": "2013-05-24", "precio": " 87,95 ", "paypal": "https:\/\/www.paypal.com\/cgi-bin\/webscr?cmd=_s-xclick&hosted_button_id=T6EFRWVKEU58S"}, {"idFechas": "22", "ccaa": "Catalunya", "lugarExamen": "Tarragona", "abre": "Abierto", "finaliza": "2013-05-25", "examen": "2013-05-25", "precio": " 87,95 ", "paypal": "https:\/\/www.paypal.com\/cgi-bin\/webscr?cmd=_s-xclick&hosted_button_id=D8NAQBFPSKZVQ"}, {"idFechas": "23", "ccaa": "Catalunya", "lugarExamen": "Barcelona", "abre": "Abierto", "finaliza": "2013-05-26", "examen": "2013-05-26", "precio": " 87,95 ", "paypal": "https:\/\/www.paypal.com\/cgi-bin\/webscr?cmd=_s-xclick&hosted_button_id=3F88JY3PKVKLU"}, {"idFechas": "24", "ccaa": "Catalunya", "lugarExamen": "Barcelona", "abre": "Abierto", "finaliza": "2013-05-27", "examen": "2013-05-27", "precio": " 87,95 ", "paypal": "https:\/\/www.paypal.com\/cgi-bin\/webscr?cmd=_s-xclick&hosted_button_id=LUMCRDZ46HZKN"}, {"idFechas": "25", "ccaa": "Catalunya", "lugarExamen": "Barcelona", "abre": "Abierto", "finaliza": "2013-05-28", "examen": "2013-05-28", "precio": " 87,95 ", "paypal": "https:\/\/www.paypal.com\/cgi-bin\/webscr?cmd=_s-xclick&hosted_button_id=2BJF2GDKEGZXG"}, {"idFechas": "26", "ccaa": "Ceuta", "lugarExamen": "Ceuta", "abre": "Abierto", "finaliza": "2013-05-29", "examen": "2013-05-29", "precio": " 76,75 ", "paypal": "https:\/\/www.paypal.com\/cgi-bin\/webscr?cmd=_s-xclick&hosted_button_id=BH6SZ4UAHN2VJ"}, {"idFechas": "27", "ccaa": "Com. Madrid", "lugarExamen": "Madrid", "abre": "Abierto", "finaliza": "2013-05-30", "examen": "2013-05-30", "precio": " 77,74 ", "paypal": "https:\/\/www.paypal.com\/cgi-bin\/webscr?cmd=_s-xclick&hosted_button_id=D4D3JJRFNDE9W"}, {"idFechas": "28", "ccaa": "Com. Madrid", "lugarExamen": "Madrid", "abre": "Abierto", "finaliza": "2013-05-31", "examen": "2013-05-31", "precio": " 77,74 ", "paypal": "https:\/\/www.paypal.com\/cgi-bin\/webscr?cmd=_s-xclick&hosted_button_id=7QXUNTVUDSLYU"}, {"idFechas": "29", "ccaa": "Com. Valencia", "lugarExamen": "Valencia", "abre": "Abierto", "finaliza": "2013-06-01", "examen": "2013-06-01", "precio": " 85,58 ", "paypal": "https:\/\/www.paypal.com\/cgi-bin\/webscr?cmd=_s-xclick&hosted_button_id=D3EQSARZ73LNA"}, {"idFechas": "30", "ccaa": "Com. Valencia", "lugarExamen": "Alicante", "abre": "Abierto", "finaliza": "2013-06-02", "examen": "2013-06-02", "precio": " 85,58 ", "paypal": "https:\/\/www.paypal.com\/cgi-bin\/webscr?cmd=_s-xclick&hosted_button_id=SQ3654UL37E9A"}, {"idFechas": "31", "ccaa": "Com. Valencia", "lugarExamen": "Castell\u00f3n\r\n", "abre": "Abierto", "finaliza": "2013-06-03", "examen": "2013-06-03", "precio": " 85,58 ", "paypal": "https:\/\/www.paypal.com\/cgi-bin\/webscr?cmd=_s-xclick&hosted_button_id=48R5AGWLHBSTQ"}, {"idFechas": "32", "ccaa": "Com. Valencia", "lugarExamen": "Valencia", "abre": "Abierto", "finaliza": "2013-06-04", "examen": "2013-06-04", "precio": " 85,58 ", "paypal": "https:\/\/www.paypal.com\/cgi-bin\/webscr?cmd=_s-xclick&hosted_button_id=RE4Y9PBM7ZXWG"}, {"idFechas": "33", "ccaa": "Euskadi", "lugarExamen": "", "abre": "Abierto", "finaliza": "2013-06-05", "examen": "2013-06-05", "precio": " 62,65 ", "paypal": "https:\/\/www.paypal.com\/cgi-bin\/webscr?cmd=_s-xclick&hosted_button_id=ZQALMH5C7YTC8"}, {"idFechas": "34", "ccaa": "Euskadi", "lugarExamen": "", "abre": "Abierto", "finaliza": "2013-06-06", "examen": "2013-06-06", "precio": " 62,65 ", "paypal": "https:\/\/www.paypal.com\/cgi-bin\/webscr?cmd=_s-xclick&hosted_button_id=TUFHH7MEK9L3N"}, {"idFechas": "35", "ccaa": "Euskadi", "lugarExamen": "", "abre": "Abierto", "finaliza": "2013-06-07", "examen": "2013-06-07", "precio": " 62,65 ", "paypal": "https:\/\/www.paypal.com\/cgi-bin\/webscr?cmd=_s-xclick&hosted_button_id=ZBMSVKZ7PPY96"}, {"idFechas": "36", "ccaa": "Galicia", "lugarExamen": "Ferrol", "abre": "Abierto", "finaliza": "2013-06-08", "examen": "2013-06-08", "precio": " 62,91 ", "paypal": "https:\/\/www.paypal.com\/cgi-bin\/webscr?cmd=_s-xclick&hosted_button_id=M5T742RAJKJG2"}, {"idFechas": "37", "ccaa": "Galicia", "lugarExamen": "Ribeira", "abre": "Abierto", "finaliza": "2013-06-09", "examen": "2013-06-09", "precio": " 62,91 ", "paypal": "https:\/\/www.paypal.com\/cgi-bin\/webscr?cmd=_s-xclick&hosted_button_id=JK5CAV86X3SCL"}, {"idFechas": "38", "ccaa": "Galicia", "lugarExamen": "Vigo", "abre": "Abierto", "finaliza": "2013-06-10", "examen": "2013-06-10", "precio": " 62,91 ", "paypal": "https:\/\/www.paypal.com\/cgi-bin\/webscr?cmd=_s-xclick&hosted_button_id=96VH77BK4GPDL"}, {"idFechas": "39", "ccaa": "Galicia", "lugarExamen": "Ferrol", "abre": "Abierto", "finaliza": "2013-06-11", "examen": "2013-06-11", "precio": " 62,91 ", "paypal": "https:\/\/www.paypal.com\/cgi-bin\/webscr?cmd=_s-xclick&hosted_button_id=Y3BDSZZ35PD5C"}, {"idFechas": "40", "ccaa": "Galicia", "lugarExamen": "Ribeira", "abre": "Abierto", "finaliza": "2013-06-12", "examen": "2013-06-12", "precio": " 62,91 ", "paypal": "https:\/\/www.paypal.com\/cgi-bin\/webscr?cmd=_s-xclick&hosted_button_id=E3RQQQU6W6AMA"}, {"idFechas": "41", "ccaa": "Galicia", "lugarExamen": "Vigo", "abre": "Abierto", "finaliza": "2013-06-13", "examen": "2013-06-13", "precio": " 62,91 ", "paypal": "https:\/\/www.paypal.com\/cgi-bin\/webscr?cmd=_s-xclick&hosted_button_id=9ASJ8FNJBSMEA"}, {"idFechas": "42", "ccaa": "Illes Balears", "lugarExamen": "Palma", "abre": "Abierto", "finaliza": "2013-06-14", "examen": "2013-06-14", "precio": " 80,94 ", "paypal": "https:\/\/www.paypal.com\/cgi-bin\/webscr?cmd=_s-xclick&hosted_button_id=7HKVU94446HWJ"}, {"idFechas": "43", "ccaa": "Illes Balears", "lugarExamen": "Ibiza", "abre": "Abierto", "finaliza": "2013-06-15", "examen": "2013-06-15", "precio": " 80,94 ", "paypal": "https:\/\/www.paypal.com\/cgi-bin\/webscr?cmd=_s-xclick&hosted_button_id=DCVUJ24U7JGGQ"}, {"idFechas": "44", "ccaa": "Illes Balears", "lugarExamen": "Mah\u00f3n\r\n", "abre": "Abierto", "finaliza": "2013-06-16", "examen": "2013-06-16", "precio": " 80,94 ", "paypal": "https:\/\/www.paypal.com\/cgi-bin\/webscr?cmd=_s-xclick&hosted_button_id=VCNQ9DG4DFRZW"}, {"idFechas": "45", "ccaa": "Illes Balears", "lugarExamen": "Ibiza", "abre": "Abierto", "finaliza": "2013-06-17", "examen": "2013-06-17", "precio": " 80,94 ", "paypal": "https:\/\/www.paypal.com\/cgi-bin\/webscr?cmd=_s-xclick&hosted_button_id=BENBGAWCTDKZQ"}, {"idFechas": "46", "ccaa": "Illes Balears", "lugarExamen": "Mah\u00f3n\r\n", "abre": "Abierto", "finaliza": "2013-06-18", "examen": "2013-06-18", "precio": " 80,94 ", "paypal": "https:\/\/www.paypal.com\/cgi-bin\/webscr?cmd=_s-xclick&hosted_button_id=U8RAE2MTRW2GC"}, {"idFechas": "47", "ccaa": "Illes Balears", "lugarExamen": "Palma", "abre": "Abierto", "finaliza": "2013-06-19", "examen": "2013-06-19", "precio": " 80,94 ", "paypal": "https:\/\/www.paypal.com\/cgi-bin\/webscr?cmd=_s-xclick&hosted_button_id=LJPR96S7DJGA2"}, {"idFechas": "48", "ccaa": "Illes Balears", "lugarExamen": "Palma", "abre": "Abierto", "finaliza": "2013-06-20", "examen": "2013-06-20", "precio": " 80,94 ", "paypal": "https:\/\/www.paypal.com\/cgi-bin\/webscr?cmd=_s-xclick&hosted_button_id=H75JH8QG593EJ"}, {"idFechas": "49", "ccaa": "Illes Balears", "lugarExamen": "Ibiza", "abre": "Abierto", "finaliza": "2013-06-21", "examen": "2013-06-21", "precio": " 80,94 ", "paypal": "https:\/\/www.paypal.com\/cgi-bin\/webscr?cmd=_s-xclick&hosted_button_id=KF6RRQXPH5JCQ"}, {"idFechas": "50", "ccaa": "Illes Balears", "lugarExamen": "Mah\u00f3n\r\n", "abre": "Abierto", "finaliza": "2013-06-22", "examen": "2013-06-22", "precio": " 80,94 ", "paypal": "https:\/\/www.paypal.com\/cgi-bin\/webscr?cmd=_s-xclick&hosted_button_id=6D33YQ4ZRUPRN"}, {"idFechas": "51", "ccaa": "Melilla", "lugarExamen": "Melilla", "abre": "Abierto", "finaliza": "2013-06-23", "examen": "2013-06-23", "precio": " 75,00 ", "paypal": "https:\/\/www.paypal.com\/cgi-bin\/webscr?cmd=_s-xclick&hosted_button_id=6D58HMRJ96G3A"}, {"idFechas": "52", "ccaa": "Princip. Asturias", "lugarExamen": "Gij\u00f3n\r\n", "abre": "Abierto", "finaliza": "2013-06-24", "examen": "2013-06-24", "precio": " 49,50 ", "paypal": "https:\/\/www.paypal.com\/cgi-bin\/webscr?cmd=_s-xclick&hosted_button_id=39UNXB3ZLNDKQ"}, {"idFechas": "53", "ccaa": "Regi\u00f3n de Murcia", "lugarExamen": "Murcia", "abre": "Abierto", "finaliza": "2013-06-25", "examen": "2013-06-25", "precio": " 75,53 ", "paypal": "https:\/\/www.paypal.com\/cgi-bin\/webscr?cmd=_s-xclick&hosted_button_id=HKR227PM6RNE8"}, {"idFechas": "54", "ccaa": "Regi\u00f3n de Murcia\r\n", "lugarExamen": "Murcia", "abre": "Abierto", "finaliza": "2013-06-26", "examen": "2013-06-26", "precio": " 75,53 ", "paypal": "https:\/\/www.paypal.com\/cgi-bin\/webscr?cmd=_s-xclick&hosted_button_id=5WLBVESMUCCPC"}];

    //temas = data.items;
    //var fechas = data.evalJSON(true);
    var fechas1 = $.toJSON(data);
    var fechas = $.evalJSON(fechas1);

    //var fechas = eval(data);
    $('#fechasExamen').append('<table id="tableFExamen" class="tableFExamen">');
    $('#tableFExamen').append('<tr><td>CC.AA.</td><td>Lugar Examen</td><td>Apertura</span></td><td>Cierre(*)</td><td>Examen</td><td>Tasas+Gestión</td><td>Pago</td><tr>');

    $('#fechasExamen div').empty();
    for (var i in fechas) {
        //console.log(fechas[i].ccaa);
        if (fechas[i].finaliza === "0000-00-00") {
            $('#tableFExamen').append('\
            <tr>\n\
                <td colspan="6">' + "&nbsp;" + '</td>\n\
            </tr>');
        } else {

            $('#tableFExamen').append('\
            <tr href='+fechas[i].paypal+'style="background:none repeat scroll 0 0 #DCE6F1">\n\
                <td>' + fechas[i].ccaa + '</td>\n\
                <td>' + fechas[i].lugarExamen + '</td>\n\
                <td>' + fechas[i].abre + '</td>\n\
                <td>' + fechas[i].finaliza + '</td>\n\
                <td>' + fechas[i].examen + '</td>\n\\n\
            <td style="text-align:center;">' + fechas[i].precio + '</td>\n\\n\
            <td style="text-align:center;"><a href="' + fechas[i].paypal + '" target=_blank>Paypal</a></td>\n\
            </tr>');
        }
    }
    $('#fechasExamen').append('</table>');
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