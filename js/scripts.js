$(document).ready(function() {

    $(".design").click(function(){
      $(".design-show").toggle();
      $(".design-hide").toggle();
    });
    $(".development").click(function() {
      $(".development-hide").toggle();
      $(".development-show").toggle();
    });
    $(".product").click(function() {
      $(".product-show").toggle();
      $(".product-hide").toggle();
    });
    $(".form").submit(function(){
      event.preventDefault();
      var name = $(".name").val()
      $(".result").append("Thank you "+ name+ ".");
    });
    $('.over').hover(function() {
         $(this).animate({
           opacity: '1'
         });
       },
       function() {
         $(this).animate({
           opacity: '0'
         });
       });
  });