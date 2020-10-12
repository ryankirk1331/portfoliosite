$(document).ready(function() {
    $('#slides').superslides({
        animation: 'fade',
        play: 5000
    });

    var typed = new Typed(".typed",  {
        strings: ["Javascript Devoloper.", "Web Development.", "Web Design."],
        typeSpeed: 70,
        loop: true,
        startDelay: 1020,
        showCursor: false
    });



    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });

});