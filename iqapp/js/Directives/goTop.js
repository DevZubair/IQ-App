

$(document).ready(function() {
    // Show or hide the sticky footer button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 720) {
            $('.go-top').fadeIn(500);
            $('.navbar-default').css('background-color', '#000000');
            $('.navbar-default').css('opacity', '1');
        } else {
            $('.go-top').fadeOut(300);
            $('.navbar-default').css('background-color', 'transparent');
            $('.navbar-default').css('opacity', '1');
        }
    });

    // Animate the scroll to top
    $('.go-top').click(function(event) {
        event.preventDefault();

        $('html, body').animate({scrollTop: 0}, 300);
    })
});
