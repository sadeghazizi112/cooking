// Convert Tablespoons to cups
//
// 1 Cup = 16 Tablespoons
//
// Cups/16 = Tablespoon
// Tablespoon*16 = Cups

var cupstospoons = function(cupnumber1) {
  return cupnumber1 / 16;
};

$(document).ready(function() {
  console.log("pageloaded");
  $("form#cupToSpoons").submit(function(event) {
   event.preventDefault();
   console.log("hello");
    var cupnumber1 = parseInt($("#div1").val());
    var result = divide(cupnumber1, 16);
    $("#output").text("yourresultis" + result);
  });
});
