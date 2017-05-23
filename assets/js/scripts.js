$('body').scrollspy({
    target: '.navbar'
});

$(document).ready(function() {
    $(".navbar a, footer a[href='#mypage']").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            let hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 950, function() {

                window.location.hash = hash;
            });
        }
    });

    $(window).scroll(function() {
        $(".slideanim").each(function() {
            let pos = $(this).offset().top;

            let winTop = $(window).scrollTop();
            if (pos < winTop + 600) {
                $(this).addClass("slide");
            }
        });
    });
});