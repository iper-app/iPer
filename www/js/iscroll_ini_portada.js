var myScroll;
function loaded() {
	myScroll = new iScroll('wrapper_portada');
}

document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
document.addEventListener('DOMContentLoaded', function () { setTimeout(loaded, 200); }, false);