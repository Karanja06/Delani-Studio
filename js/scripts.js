$(document).ready(function(){
    $("form#show").submit(function(event) {
 
      event.preventDefault();
      var name = $.trim($('#name').val());
      var email = $.trim($('#email').val());
      if ((name === '') || (email === '')) {
        alert("Please fill your name and email in the space provided");//checks if either field is empty and alerts user
        return false;
      } else {
        alert("You message has been received... Delani studio thanks you for reaching out!!");
        $("#show")[0].reset();
      }
    });
 
    $("#do1").click(function() {
      $(".designimage").toggle();
 
      $(".designdesc").show();
      //this shows description. Happens the same way to the below funtions
    });
 
 
    $("#do1").mousedown(function() {
      $(".designdesc").fadeOut(100);
    });
 
 
 
    $("#do2").click(function() {
      $(".devimage").toggle();
      $(".developdesc").show();
    });
 
    $("#do2").mousedown(function() {
      $(".developdesc").fadeOut(100);
    });
 
    $("#do3").click(function() {
      $(".productimage").toggle();
      $(".productdesc").show();
    });
    $("#do3").mousedown(function() {
      $(".productdesc").fadeOut(100);
    });
 
 
 
 
 
  });