$(document).ready(function() {
$('#show-popup').on('click',function(){

$('.popup').fadeIn(200);
setTimeou(function() {
   $('.popup').show();
      }), 200;

    });


$('.popup').on('click',function(){

$('.popup').fadeOut(200);
setTimeou(function() {
   $('.popup').hide();
      }), 200;

    });




});