var lastScrollLeft = 0;
var lastScrollRight = 0;

const scrolls = $('.scroller');

$('.tracks').scroll(function() {
    var tracksScrollLeft = $('.tracks').scrollLeft();
    if (lastScrollLeft != tracksScrollLeft) {

        scrolls.scrollLeft(tracksScrollLeft);
        lastScrollLeft = tracksScrollLeft;
    }
});