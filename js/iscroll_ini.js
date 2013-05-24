    var myScroll,
            pullDownEl, pullDownOffset,
            pullUpEl, pullUpOffset,
            generatedCount = 0;

    function pullDownAction() {
        setTimeout(function() {	// <-- Simulate network congestion, remove setTimeout from production!
            var el, li, i;
            el = document.getElementById('thelist');

            for (i = 0; i < 3; i++) {
                li = document.createElement('li');
                li.innerText = 'Generated row ' + (++generatedCount);
                el.insertBefore(li, el.childNodes[0]);
            }

            myScroll.refresh();		// Remember to refresh when contents are loaded (ie: on ajax completion)
        }, 1000);	// <-- Simulate network congestion, remove setTimeout from production!
    }

    function pullUpAction() {
        setTimeout(function() {	// <-- Simulate network congestion, remove setTimeout from production!
            var el, li, i;
            el = document.getElementById('thelist');

            for (i = 0; i < 3; i++) {
                li = document.createElement('li');
                li.innerText = 'Generated row ' + (++generatedCount);
                el.appendChild(li, el.childNodes[0]);
            }

            myScroll.refresh();		// Remember to refresh when contents are loaded (ie: on ajax completion)
        }, 1000);	// <-- Simulate network congestion, remove setTimeout from production!
    }

    function loaded() {
        myScroll = new iScroll('wrapper', {
            useTransition: true
        });

        setTimeout(function() {
            document.getElementById('wrapper').style.left = '0';
        }, 800);
    }

    document.addEventListener('touchmove', function(e) {
        e.preventDefault();
    }, false);

    document.addEventListener('DOMContentLoaded', function() {
        setTimeout(loaded, 200);
    }, false);

    document.addEventListener('resize', function() {
        myScroll.refresh();
    }, false);

    document.addEventListener('deviceready', function() {
        myScroll.refresh();
    }, false);

/*var myScroll;
 function loaded() {
 myScroll = new iScroll('wrapper');
 }
 
 document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
 document.addEventListener('DOMContentLoaded', function () { setTimeout(loaded, 200); }, false);*/