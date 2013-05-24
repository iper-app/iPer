$(document).ready(function() {

    $('div#atras a').click(function() {
        history.back();
        return false;
    });

    //actives en android


    $("body#portada nav a").bind("touchstart", function() {
        $(this).parent().addClass("activo");
    });
    $("body#portada nav a").bind("touchend", function() {
        $(this).parent().removeClass("activo");
    });
    $("body#portada nav a").bind("touchcancel", function() {
        $(this).parent().removeClass("activo");
    });


    $("div.item a").bind("touchstart", function() {
        $(this).parent().addClass("activo");
    })
    $("div.item a").bind("touchend", function() {
        $(this).parent().removeClass("activo");
    });
    $("div.item a").bind("touchcancel", function() {
        $(this).parent().removeClass("activo");
    });


    $("div#atras").bind("touchstart", function() {
        $(this).addClass("activo_inf");
        $('#central').addClass('central-left');
    })
    $("div#atras").bind("touchend", function() {
        $(this).removeClass("activo_inf");
        $('#central').removeClass('central-left');
    });
    $("div#atras").bind("touchcancel", function() {
        $(this).removeClass("activo_inf");
        $('#central').removeClass('central-left');
    });

    $("div#menu").bind("touchstart", function() {
        $(this).addClass("activo_inf");
        $('#central').addClass('central-right');
    })
    $("div#menu").bind("touchend", function() {
        $(this).removeClass("activo_inf");
        $('#central').removeClass('central-right');
    });
    $("div#menu").bind("touchcancel", function() {
        $(this).removeClass("activo_inf");
        $('#central').removeClass('central-right');
    });



    //Actives en web
    $('div.item a').mousedown(function() {
        $(this).parent().addClass('activo')
    });
    $('div.item a').mouseup(function() {
        $(this).parent().removeClass('activo')
    });

    $('div#atras').mousedown(function() {
        $(this).addClass('activo_inf')
        $('#central').addClass('central-left');
    });
    $('div#atras').mouseup(function() {
        $(this).removeClass('activo_inf')
        $('#central').removeClass('central-left');
    });

    $('div#menu').mousedown(function() {
        $(this).addClass('activo_inf')
        $('#central').addClass('central-right');
    });
    $('div#menu').mouseup(function() {
        $(this).removeClass('activo_inf')
        $('#central').removeClass('central-right');
    });

}); // fin query

function utf8_encode(argString) {
    // http://kevin.vanzonneveld.net
    // +   original by: Webtoolkit.info (http://www.webtoolkit.info/)
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: sowberry
    // +    tweaked by: Jack
    // +   bugfixed by: Onno Marsman
    // +   improved by: Yves Sucaet
    // +   bugfixed by: Onno Marsman
    // +   bugfixed by: Ulrich
    // +   bugfixed by: Rafal Kukawski
    // +   improved by: kirilloid
    // +   bugfixed by: kirilloid
    // *     example 1: utf8_encode('Kevin van Zonneveld');
    // *     returns 1: 'Kevin van Zonneveld'

    if (argString === null || typeof argString === "undefined") {
        return "";
    }

    var string = (argString + ''); // .replace(/\r\n/g, "\n").replace(/\r/g, "\n");
    var utftext = '',
            start, end, stringl = 0;

    start = end = 0;
    stringl = string.length;
    for (var n = 0; n < stringl; n++) {
        var c1 = string.charCodeAt(n);
        var enc = null;

        if (c1 < 128) {
            end++;
        } else if (c1 > 127 && c1 < 2048) {
            enc = String.fromCharCode(
                    (c1 >> 6) | 192,
                    (c1 & 63) | 128
                    );
        } else if (c1 & 0xF800 != 0xD800) {
            enc = String.fromCharCode(
                    (c1 >> 12) | 224,
                    ((c1 >> 6) & 63) | 128,
                    (c1 & 63) | 128
                    );
        } else { // surrogate pairs
            if (c1 & 0xFC00 != 0xD800) {
                throw new RangeError("Unmatched trail surrogate at " + n);
            }
            var c2 = string.charCodeAt(++n);
            if (c2 & 0xFC00 != 0xDC00) {
                throw new RangeError("Unmatched lead surrogate at " + (n - 1));
            }
            c1 = ((c1 & 0x3FF) << 10) + (c2 & 0x3FF) + 0x10000;
            enc = String.fromCharCode(
                    (c1 >> 18) | 240,
                    ((c1 >> 12) & 63) | 128,
                    ((c1 >> 6) & 63) | 128,
                    (c1 & 63) | 128
                    );
        }
        if (enc !== null) {
            if (end > start) {
                utftext += string.slice(start, end);
            }
            utftext += enc;
            start = end = n + 1;
        }
    }

    if (end > start) {
        utftext += string.slice(start, stringl);
    }

    return utftext;
}
var myScroll;
function loaded() {
    myScroll = new iScroll('wrapper', {
        useTransition: true
    });

    setTimeout(function() {
        document.getElementById('wrapper').style.left = '0';
    }, 800);
}

function iscroll_ini() {
    document.addEventListener('resize', function() {
        myScroll.refresh();
    }, false);

    document.addEventListener('deviceready', function() {
        myScroll.refresh();
    }, false);


    document.addEventListener('touchmove', function(e) {
        e.preventDefault();
    }, false);
    document.addEventListener('DOMContentLoaded', function() {
        setTimeout(loaded, 200);
    }, false);
}

(function($) {
    $.fn.serializeFormJSON = function() {

        var o = {};
        var a = this.serializeArray();
        $.each(a, function() {
            if (o[this.name]) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    };
})(jQuery);