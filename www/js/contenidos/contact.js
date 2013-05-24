/*********************************************************************************************************************/
// File: contact.js
// Nadim Aseq A Arman
// Uso: Para enviar correos al iPer atravez del formulario de contacto.
// Esto utilizara en 2 citios de applicacion.
/*********************************************************************************************************************/

/*
 console.log("hola");
 $.ajax({
 type: 'POST',
 url: serviceURL + 'contact_form.php',
 data: data,
 beforeSend: function() {
 launchpreloader();
 },
 complete: function() {
 stopPreloader();
 },
 success: function(result) {
 console.log(result);
 $('#form div').remove();
 
 $('#form').append('<div class="item">Mensaje enviado correctamente.</div>');
 }
 });
 
 */
/*
 $(document).ready(function() {
 $('#submit').click(function() {
 $('#contact_form').submit(function() {
 this.action = 'http://iper.accountsupport.com/per_phpfiles/phpfiles/contact_form.php';
 });
 });
 
 });**/

$(function() {
    var url = serviceURL;
    $('#submit').click(function() {
        var data = $('#contact_form').serialize();
        var email = $('#email').val();
        if (email != "") {
            if (navigator.onLine) {
                $('#submit').action = url + 'contact_form.php?' + data;
                $.ajax({
                    type: 'POST',
                    url: serviceURL + 'contact_form.php?' + data,
                    data: data,
                    complete: function() {
                        alert("Mensaje enviado correctamente.");
                        $('#loading').fadeOut(2000);
                    },
                    success: function(result) {
                        $('#loading').fadeOut(2000);
                    }
                });
            } else {
                alert("Comprueba conección de internet.");
                $('#loading').fadeOut(2000);
            }
        } else {
            alert("Comprueba los campos obligatorios.");
            $('#loading').fadeOut(2000);
        }

    });

});
