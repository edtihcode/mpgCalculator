console.log("Hello World!");
$(document).ready(function() {
  var mpg;

  $("#submit").click(function() {
    var gallonInput = $("#gallon").val();
    var distanceTravelled = $("#miles").val();
    var gasInputValue = $("#gasPrice").val();
    console.log(gallonInput,distanceTravelled);
    mpg = calMPG(gallonInput,distanceTravelled);
    $("#result1").val(mpg);
    costPerMile = calCostPerMile(gasInputValue,gallonInput,distanceTravelled);
    $("#result2").val(costPerMile);
    distancePerDollar = calDistancePerDollar(gasInputValue,gallonInput,distanceTravelled);
    $("#result3").val(distancePerDollar);
    //console.log(gallonInput, gasInputValue);

    });
  //   console.log(validateEmail(emailText), passwordText);
  //   $("#error").css("visibility", "visible")
  //
  //   if (emailText == "hello@gmail.com") {
  //     if (passwordText == "123456") {
  //       console.log("password is right");
  //     } else {
  //       console.log("wrong password");
  //     }
  //
  //   } else {
  //     console.log("no user with email " + emailText + " exist");
  //   }
  // });

});
function calMPG(gallonInput,distanceTravelled){
  mpgvalue = parseInt(distanceTravelled) / parseInt(gallonInput);
  mpg = mpgvalue + " mpg"
    console.log("ran");
  return mpg;

}
function calCostPerMile(gasInputValue,gallonInput,distanceTravelled){
  pricePerMileValue = parseFloat(gasInputValue)/ (parseInt(distanceTravelled) / parseInt(gallonInput));
  costPerMile = "$" + pricePerMileValue.toFixed(2);
    console.log("ran");
  return costPerMile;
}
function calDistancePerDollar(gasInputValue,gallonInput,distanceTravelled){
  distancePerDollarValue = (parseInt(distanceTravelled) / parseInt(gallonInput))/parseFloat(gasInputValue);
  distancePerDollar = distancePerDollarValue.toFixed(2) + " miles";
    console.log("ran");
  return distancePerDollar;
}
