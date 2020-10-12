$(document).ready(function() {
    $('#slides').superslides({
        animation: 'fade',
        play: 5000
    });

    var typed = new Typed(".typed",  {
        strings: ["Javascript Devoloper.", "Web Development.", "Web Design."],
        typeSped: 110,
        loop: true,
        startDelay: 2000,
        showCursor: false
    });

});