// class = .class
// id = #id


$(document).ready(function() {

    /*
    $('.sue').slideUp(1000);
    $('.sue').delay(1000).slideDown(1000, function() {
        $('div').fadeOut(2000);
        $('div').delay(1000).fadeIn(2000);
    });
    */

    $('#fireworks').click(function() {
        $('h2').fadeOut();

        $('.purple').animate({ //we're resetting the animation so it can be played again
            height: '0px',
            width: '0px',
            top: '300px',
            left: '460px'
        }, function() {
            $(this).show();
        });

        $('.green').animate({
            height: '0px',
            width: '0px',
            top: '300px',
            left: '460px'
        }, function() {
            $(this).show();
        });

        $('.red').animate({
            height: '0px',
            width: '0px',
            top: '300px',
            left: '460px'
        }, function() {
            $(this).show();
        });

        $('.purple').animate({ // effect, timer, linear or swing, and what to do once done
            height: '640px',
            width: '640px',
            top: '15px',
            left: '150px'
        }, 600 /*timer*/, 'linear' /*easing*/, function() { /*callback*/
            $(this).hide(); // you can use 'this' inside the callback
        });

        $('.green').delay(560).animate({
            height: '640px',
            width: '640px',
            top: '15px',
            left: '150px'
        }, 600 /*timer*/, 'linear' /*easing*/, function() { /*callback*/
            $(this).hide();
        });

        $('.red').delay(1100).animate({
            height: '640px',
            width: '640px',
            top: '15px',
            left: '150px'
        }, 600 /*timer*/, 'linear' /*easing*/, function() { /*callback*/
            $(this).fadeOut(300);
        });

        $('h2').delay(1500).fadeIn();
    });

})