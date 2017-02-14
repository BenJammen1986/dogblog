$(document).ready(function() {
  $("button#dark").click(function() {
    $("body").addClass("darktheme");
  });

  $("button#light").click(function() {
    $("body").removeClass("darktheme");
  });

});
