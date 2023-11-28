$(document).ready(function() {

    $('.explosionImgLeft').animate({ //hiding
        height: '0px'
    }, 1, function() {
        $('.explosionImgLeft').animate({ //showing
            height: '150px'
        }, 200);
    });

    $('.explosionImgRight').animate({ //hiding
        height: '0px'
    }, 1, function() {
        $('.explosionImgRight').animate({ //showing
            height: '150px'
        }, 200);
    });

    $('.headerText').slideUp(1, function() { //hiding
        $('.headerText').slideDown(1000); //showing
    });

    $('.topLeftExplosion').animate({
        height: '0px',
        top: '100px',
        left: '150px'
    }, 1);
    $('.topRightExplosion').animate({
        height: '0px',
        top: '100px',
        right: '150px'
    }, 1);
    $('.bottomLeftExplosion').animate({
        height: '0px',
        bottom: '100px',
        left: '150px'
    }, 1);
    $('.bottomRightExplosion').animate({
        height: '0px',
        bottom: '100px',
        right: '150px'
    }, 1);
    $('.otherExplosion').animate({
        height: '0px',
        left: '25%',
        top: '50px'
    }, 1);

    $('.mainButton').click(function() {

        $('.mainExplosion').slideUp(2000);

        $('.topLeftExplosion').delay(2000).animate({ // Show explosions
            height: '418px',
            width: '500px'
        }, 300);
        $('.topRightExplosion').delay(2000).animate({
            height: '418px',
            width: '500px'
        }, 300);
        $('.bottomLeftExplosion').delay(2000).animate({
            height: '418px',
            width: '500px'
        }, 300);
        $('.bottomRightExplosion').delay(2000).animate({
            height: '418px',
            width: '500px'
        }, 300);
        $('.otherExplosion').delay(2000).animate({
            height: '835px',
            width: '1000px'
        }, 300);

        $('.topLeftExplosion').fadeOut(function() {
            $('.topLeftExplosion').animate({ // Move explosions back to original position
                height: '0px',
            }, 1);

            $('.topLeftExplosion').fadeIn();
        }); // Fade out explosions
        $('.topRightExplosion').fadeOut(function() {
            $('.topRightExplosion').animate({ // Move explosions back to original position
                height: '0px',
            }, 1);
            
            $('.topRightExplosion').fadeIn();
        });
        $('.bottomLeftExplosion').fadeOut(function() {
            $('.bottomLeftExplosion').animate({ // Move explosions back to original position
                height: '0px',
            }, 1);
            
            $('.bottomLeftExplosion').fadeIn();
        });
        $('.bottomRightExplosion').fadeOut(function() {
            $('.bottomRightExplosion').animate({ // Move explosions back to original position
                height: '0px',
            }, 1);
            
            $('.bottomRightExplosion').fadeIn();
        });
        $('.otherExplosion').fadeOut(function() {
            $('.otherExplosion').animate({ // Move explosions back to original position
                height: '0px',
            }, 1);
            
            $('.otherExplosion').fadeIn();
        });

        $('.mainExplosion').delay(1000).slideDown(2000);

    });

});