$(document).ready(function() {
    $('.hw12MovingExplosion').animate({
        height: '0px',
        width: '0px',
        left: '25%',
        bottom: '50px'
    }, 1);

    $('.hw12Button').click(function() {
        $('.hw12MovingExplosion').animate({
            height: '418px',
            width: '500px'
        })
        $('.hw12MovingExplosion').fadeOut();

        $('.hw12MovingExplosion').animate({
            height: '0px',
            width: '0px'
        })
        $('.hw12MovingExplosion').fadeIn();
    });

})