$(function() {
    $('.map').maphilight();
    $('#squidheadlink').mouseover(function(e) {
        $('#squidhead').mouseover();
    }).mouseout(function(e) {
        $('#squidhead').mouseout();
    }).click(function(e) { e.preventDefault(); });
});