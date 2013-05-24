/*********************************************************************************************************************/
// File: registrar.js
// Nadim Aseq A Arman
// Para registrar un nuevo usuario.
/*********************************************************************************************************************/


$(document).ready(function() {
    $('#register').click(function() {
        var data = $('.regForm').serialize();
        $.ajax({
            type: "POST",
            url: serviceURL + 'user_handle.php',
            data: "user=reg&" + data,
            complete: function() {
                alert("Gracias por registrar.");
                $('#loading').fadeOut(2000);
            },
            success: function(result) {
                console.log(result);
                alert("Ya puedes entrar con tu correo electronico.");
            },
        });
    });
    $('#submit').click(function() {
        var data = $('#login').serialize();
        $.ajax({
            type: "POST",
            url: serviceURL + 'user_handle.php',
            data: "user=login&" + data,
            complete: function() {
                alert("Estas connectado.");
                $('#loading').fadeOut(2000);
            },
            success: function(result) {
                $('#loginDiv').empty();
                // keyname is now equal to "key"
                //idUsuario = window.localStorage.getItem("idUsuario");
                console.log(result);

                var userData = eval(result);

                for (var i in userData) {
                    window.sessionStorage.setItem("id", userData[i].idUsuario);
                    window.sessionStorage.setItem("name", userData[i].nombre);
                    idUsuario = window.sessionStorage.getItem("id");
                    window.sessionStorage.setItem("email", userData[i].email);
                    email = window.sessionStorage.getItem("email");
                    window.location.reload();
                }
            },
        });

    });

    if (window.sessionStorage.getItem("email") != null) {
        console.log(window.sessionStorage.getItem("email"));
        $('#loginDiv').hide();
        $('#userinfo').append('<div class="userinfo"><label>Patrón conectado:</label><br><label>' + window.sessionStorage.getItem("name") + '</label>');
        $('#userinfo').append('<div id="logout" class="itemBtn"><a href="#">SALIR</a></div></div>');      
    }else{
        $('#userinfo').hide();
    }
    $("#logout").click(function() {
        logout();
        sessionStorage.removeItem('email');
        sessionStorage.removeItem('id');
        sessionStorage.removeItem('name');
        $('#loginDiv').show();        
        window.location.reload();
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

});

