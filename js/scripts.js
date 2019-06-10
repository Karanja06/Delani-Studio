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

  });