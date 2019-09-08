$(document).ready(function(){
    // Toggle side bar
    $('a.sidebar-toggle').on("click", function () {
        $('#sidebar').sidebar('toggle');
        console.log("pressed");
    })
    // Allow image to check out more when hover
    $('.special.cards .image').dimmer({
        on: 'hover'
    });
})