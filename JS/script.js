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
        items: 4,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            938:{
                items:4
            }
        }
    });

    $('.chart').easyPieChart({
        easing: 'easeInOut',
        barColor: '#fff',
        trackColor: false,
        scaleColor: false,
        lineWidth: 4,
        size: 152,
        onStep: function(from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
        }
    });
    
});