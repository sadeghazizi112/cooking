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
  console.log("pageloaded");
  $("form#cupToSpoons").submit(function(event) {
   event.preventDefault();
   console.log("hello");
    var number1 = $("#cups").val();
    console.log(number1);
    // var number2 =
    var result = multiply(number1, 16);
    console.log(result);
    $("#output").text("your" + " " + "result" + " " + "is" + " " + result);
  });
});
