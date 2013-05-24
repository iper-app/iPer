/*********************************************************************************************************************/
// File: fechasdelexamen.js
// Nadim Aseq A Arman
// Este script se utiliza en la pagina de fechas del examen donde se ve las fechas disponibles en futuro.
// Las fechas esta en base de datos.
/*********************************************************************************************************************/
$(document).ready(function() {

    var data = [{"idFechas": "4", "ccaa": "Andaluc\u00eda\r\n", "lugarExamen": "M\u00e1laga\r\n", "abre": "2013-04-26", "finaliza": "2013-05-06", "examen": "2013-06-14"}, {"idFechas": "5", "ccaa": "Andaluc\u00eda\r\n", "lugarExamen": "Puerto Real", "abre": "2013-04-26", "finaliza": "2013-05-06", "examen": "2013-06-14"}, {"idFechas": "6", "ccaa": "Andaluc\u00eda\r\n", "lugarExamen": "Sevilla", "abre": "2013-04-26", "finaliza": "2013-05-06", "examen": "2013-06-14"}, {"idFechas": "7", "ccaa": "Andaluc\u00eda\r\n", "lugarExamen": "M\u00e1laga\r\n", "abre": "2013-09-10", "finaliza": "2013-09-19", "examen": "2013-11-08"}, {"idFechas": "8", "ccaa": "Andaluc\u00eda\r\n", "lugarExamen": "Puerto Real", "abre": "2013-09-10", "finaliza": "2013-09-19", "examen": "2013-11-08"}, {"idFechas": "9", "ccaa": "Andaluc\u00eda\r\n", "lugarExamen": "Sevilla", "abre": "2013-09-10", "finaliza": "2013-09-19", "examen": "2013-11-08"}, {"idFechas": "10", "ccaa": "", "lugarExamen": "", "abre": "0000-00-00", "finaliza": "0000-00-00", "examen": "0000-00-00"}, {"idFechas": "11", "ccaa": "Arag\u00f3n\r\n", "lugarExamen": "Zaragoza", "abre": "2013-01-01", "finaliza": "2013-05-03", "examen": "2013-05-22"}, {"idFechas": "12", "ccaa": "Arag\u00f3n\r\n", "lugarExamen": "Zaragoza", "abre": "2013-01-01", "finaliza": "2013-10-19", "examen": "2013-11-13"}, {"idFechas": "13", "ccaa": "", "lugarExamen": "", "abre": "0000-00-00", "finaliza": "0000-00-00", "examen": "0000-00-00"}, {"idFechas": "18", "ccaa": "Canarias", "lugarExamen": "Lanzarote", "abre": "2013-04-19", "finaliza": "2013-04-30", "examen": "2013-06-01"}, {"idFechas": "19", "ccaa": "Canarias", "lugarExamen": "La gomera", "abre": "2013-05-17", "finaliza": "2013-05-28", "examen": "2013-06-29"}, {"idFechas": "20", "ccaa": "Canarias", "lugarExamen": "El Hierro", "abre": "2013-08-09", "finaliza": "2013-08-20", "examen": "2013-09-21"}, {"idFechas": "21", "ccaa": "Canarias", "lugarExamen": "Lanzarote", "abre": "2013-09-09", "finaliza": "2013-09-19", "examen": "2013-10-19"}, {"idFechas": "22", "ccaa": "Canarias", "lugarExamen": "Tenerife", "abre": "2013-09-20", "finaliza": "2013-10-01", "examen": "2013-11-02"}, {"idFechas": "23", "ccaa": "Canarias", "lugarExamen": "Gran Canaria", "abre": "2013-10-04", "finaliza": "2013-10-16", "examen": "2013-11-16"}, {"idFechas": "24", "ccaa": "", "lugarExamen": "", "abre": "0000-00-00", "finaliza": "0000-00-00", "examen": "0000-00-00"}, {"idFechas": "25", "ccaa": "Cantabria", "lugarExamen": "Santander", "abre": "2013-04-02", "finaliza": "2013-04-30", "examen": "2013-06-04"}, {"idFechas": "26", "ccaa": "", "lugarExamen": "", "abre": "0000-00-00", "finaliza": "0000-00-00", "examen": "0000-00-00"}, {"idFechas": "32", "ccaa": "Catalunya", "lugarExamen": "Girona", "abre": "2013-01-01", "finaliza": "2013-05-08", "examen": "2013-05-24"}, {"idFechas": "33", "ccaa": "Catalunya", "lugarExamen": "Barcelona", "abre": "2013-01-01", "finaliza": "2013-05-29", "examen": "2013-06-15"}, {"idFechas": "34", "ccaa": "Catalunya", "lugarExamen": "Barcelona", "abre": "2013-01-01", "finaliza": "2013-07-02", "examen": "2013-07-13"}, {"idFechas": "35", "ccaa": "Catalunya", "lugarExamen": "Tarragona", "abre": "2013-01-01", "finaliza": "2013-09-04", "examen": "2013-09-20"}, {"idFechas": "36", "ccaa": "Catalunya", "lugarExamen": "Barcelona", "abre": "2013-01-01", "finaliza": "2013-10-02", "examen": "2013-10-19"}, {"idFechas": "37", "ccaa": "Catalunya", "lugarExamen": "Barcelona", "abre": "2013-01-01", "finaliza": "2013-10-30", "examen": "2013-11-15"}, {"idFechas": "38", "ccaa": "Catalunya", "lugarExamen": "Barcelona", "abre": "2013-01-01", "finaliza": "2013-12-04", "examen": "2013-12-21"}, {"idFechas": "39", "ccaa": "", "lugarExamen": "", "abre": "0000-00-00", "finaliza": "0000-00-00", "examen": "0000-00-00"}, {"idFechas": "41", "ccaa": "Ceuta", "lugarExamen": "Ceuta", "abre": "2013-09-03", "finaliza": "2013-09-16", "examen": "2013-10-19"}, {"idFechas": "42", "ccaa": "", "lugarExamen": "", "abre": "0000-00-00", "finaliza": "0000-00-00", "examen": "0000-00-00"}, {"idFechas": "44", "ccaa": "Com. Madrid", "lugarExamen": "Madrid", "abre": "2013-01-01", "finaliza": "2013-05-31", "examen": "2013-06-16"}, {"idFechas": "45", "ccaa": "Com. Madrid", "lugarExamen": "Madrid", "abre": "2013-01-01", "finaliza": "2013-11-22", "examen": "2013-12-14"}, {"idFechas": "46", "ccaa": "", "lugarExamen": "", "abre": "0000-00-00", "finaliza": "0000-00-00", "examen": "0000-00-00"}, {"idFechas": "49", "ccaa": "Com. Valencia", "lugarExamen": "Alicante", "abre": "2013-05-28", "finaliza": "2013-06-10", "examen": "2013-06-28"}, {"idFechas": "51", "ccaa": "Com. Valencia", "lugarExamen": "Valencia", "abre": "2013-10-29", "finaliza": "2013-11-12", "examen": "2013-11-29"}, {"idFechas": "52", "ccaa": "", "lugarExamen": "", "abre": "0000-00-00", "finaliza": "0000-00-00", "examen": "0000-00-00"}, {"idFechas": "55", "ccaa": "Euskadi", "lugarExamen": "", "abre": "2013-08-16", "finaliza": "2013-08-30", "examen": "2013-09-16"}, {"idFechas": "56", "ccaa": "Euskadi", "lugarExamen": "", "abre": "2013-10-21", "finaliza": "2013-10-28", "examen": "2013-11-13"}, {"idFechas": "57", "ccaa": "", "lugarExamen": "", "abre": "0000-00-00", "finaliza": "0000-00-00", "examen": "0000-00-00"}, {"idFechas": "58", "ccaa": "Galicia", "lugarExamen": "Ferrol", "abre": "2013-04-01", "finaliza": "2013-04-17", "examen": "2013-05-21"}, {"idFechas": "59", "ccaa": "Galicia", "lugarExamen": "Ribeira", "abre": "2013-04-01", "finaliza": "2013-04-17", "examen": "2013-05-21"}, {"idFechas": "60", "ccaa": "Galicia", "lugarExamen": "Vigo", "abre": "2013-04-01", "finaliza": "2013-04-17", "examen": "2013-05-21"}, {"idFechas": "61", "ccaa": "Galicia", "lugarExamen": "Ferrol", "abre": "2013-07-15", "finaliza": "2013-08-01", "examen": "2013-09-04"}, {"idFechas": "62", "ccaa": "Galicia", "lugarExamen": "Ribeira", "abre": "2013-07-15", "finaliza": "2013-08-01", "examen": "2013-09-04"}, {"idFechas": "63", "ccaa": "Galicia", "lugarExamen": "Vigo", "abre": "2013-07-15", "finaliza": "2013-08-01", "examen": "2013-09-04"}, {"idFechas": "64", "ccaa": "", "lugarExamen": "", "abre": "0000-00-00", "finaliza": "0000-00-00", "examen": "0000-00-00"}, {"idFechas": "68", "ccaa": "Illes Balears", "lugarExamen": "Palma", "abre": "2013-05-13", "finaliza": "2013-05-23", "examen": "2013-06-29"}, {"idFechas": "69", "ccaa": "Illes Balears", "lugarExamen": "Ibiza", "abre": "2013-05-13", "finaliza": "2013-05-23", "examen": "2013-07-02"}, {"idFechas": "70", "ccaa": "Illes Balears", "lugarExamen": "Mah\u00f3n\r\n", "abre": "2013-05-13", "finaliza": "2013-05-23", "examen": "2013-07-02"}, {"idFechas": "71", "ccaa": "Illes Balears", "lugarExamen": "Ibiza", "abre": "2013-08-01", "finaliza": "2013-08-12", "examen": "2013-09-11"}, {"idFechas": "72", "ccaa": "Illes Balears", "lugarExamen": "Mah\u00f3n\r\n", "abre": "2013-08-01", "finaliza": "2013-08-12", "examen": "2013-09-11"}, {"idFechas": "73", "ccaa": "Illes Balears", "lugarExamen": "Palma", "abre": "2013-08-01", "finaliza": "2013-08-12", "examen": "2013-09-21"}, {"idFechas": "74", "ccaa": "Illes Balears", "lugarExamen": "Palma", "abre": "2013-10-21", "finaliza": "2013-10-31", "examen": "2013-12-14"}, {"idFechas": "75", "ccaa": "Illes Balears", "lugarExamen": "Ibiza", "abre": "2013-10-21", "finaliza": "2013-10-31", "examen": "2013-12-17"}, {"idFechas": "76", "ccaa": "Illes Balears", "lugarExamen": "Mah\u00f3n\r\n", "abre": "2013-10-21", "finaliza": "2013-10-31", "examen": "2013-12-17"}, {"idFechas": "77", "ccaa": "", "lugarExamen": "", "abre": "0000-00-00", "finaliza": "0000-00-00", "examen": "0000-00-00"}, {"idFechas": "79", "ccaa": "", "lugarExamen": "", "abre": "0000-00-00", "finaliza": "0000-00-00", "examen": "0000-00-00"}, {"idFechas": "80", "ccaa": "Princip. Asturias", "lugarExamen": "Gij\u00f3n\r\n", "abre": "2013-03-25", "finaliza": "2013-04-06", "examen": "2013-05-22"}, {"idFechas": "81", "ccaa": "", "lugarExamen": "", "abre": "0000-00-00", "finaliza": "0000-00-00", "examen": "0000-00-00"}, {"idFechas": "83", "ccaa": "Regi", "lugarExamen": "Murcia", "abre": "2013-05-06", "finaliza": "2013-05-20", "examen": "2013-06-23"}, {"idFechas": "84", "ccaa": "Regi", "lugarExamen": "Murcia", "abre": "2013-10-07", "finaliza": "2013-10-22", "examen": "2013-11-24"}];

    //temas = data.items;
    //var fechas = data.evalJSON(true);
    var fechas1 = $.toJSON(data);
    var fechas = $.evalJSON(fechas1);

    //var fechas = eval(data);
    $('#fechasExamen').append('<table id="tableFExamen" class="tableFExamen">');
    $('#tableFExamen').append('<tr><td>CC.AA.</td><td>Lugar Examen</td><td>Abre</span></td><td>Finaliza</td><td>Examen</td><tr>');

    $('#fechasExamen div').empty();
    for (var i in fechas) {
        //console.log(fechas[i].ccaa);
        if (fechas[i].finaliza === "0000-00-00") {
            $('#tableFExamen').append('\
            <tr>\n\
                <td colspan="5">' + "&nbsp;" + '</td>\n\
            </tr>');
        } else {

            $('#tableFExamen').append('\
            <tr style="background:none repeat scroll 0 0 #DCE6F1">\n\
                <td>' + fechas[i].ccaa + '</td>\n\
                <td>' + fechas[i].lugarExamen + '</td>\n\
                <td>' + fechas[i].abre + '</td>\n\
                <td>' + fechas[i].finaliza + '</td>\n\
                <td>' + fechas[i].examen + '</td>\n\
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