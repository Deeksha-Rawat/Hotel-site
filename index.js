$('#reserveButton').click(function(){
    $('#formModal').modal('show');
});

$('#loginButton').click(function(){
    $('#loginModal').modal('show');
});


$(document).ready(function(){
    $('#mycarousel').carousel({interval: 2000});
    $('#mycarousel-pause').click(function() {
        $('#mycarousel').carousel('pause')
    });
    $('#mycarousel-play').click(function() {
        $('#mycarousel').carousel('cycle')
    });
});

