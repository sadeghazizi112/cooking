// Convert Tablespoons to cups
//
// 1 Cup = 16 Tablespoons
//
// Cups/16 = Tablespoon
// Tablespoon*16 = Cups

var divide = function(number1, number2) {
  return number1 / number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

$(document).ready(function() {
  $("form#cupToSpoons").submit(function(event) {
   event.preventDefault();
    var number1 = $("#cups").val();
    var result = multiply(number1, 16);
    $("#output").text("There" + " " + "are" + " " + result + " " + "tablespoons.")
  });

$("form#spoonsToCups").submit(function(event) {
  event.preventDefault();
  var number1 = $("#tablespoons").val();
  console.log(number1);
  var result = divide(number1, 16);
  console.log(result);
  $("#output").text("There" + " " + "are" + " " + result + " " + "cups.")
  });

});
