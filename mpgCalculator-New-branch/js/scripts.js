console.log("Hello World!");
$(document).ready(function() {
  var mpg;
  var cost;
  $("#submit").click(function() {
    var gallonInput = $("#gallon").val();
    var distanceTravelled = $("#miles").val();
    var gasInputValue = $("#gasPrice").val();
    console.log(gallonInput, distanceTravelled);
    mpg = calMPG(gallonInput, distanceTravelled);
    $("#result1").val(mpg);
    costPerMile = calCostPerMile(gasInputValue, gallonInput, distanceTravelled);
    $("#result2").val(costPerMile);
    distancePerDollar = calDistancePerDollar(gasInputValue, gallonInput, distanceTravelled);
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
  $("#calculateSavings").click(function() {
    var priceA = $("#gasPriceA").val();
    var priceD = $("#gasPriceB").val();
    var distanceA = $("#aDistance").val();
    var distanceB = $("#bDistance").val();
    var costA = $("#costToA").val();
    var costB = $("#costToB").val();
    var purchaseG = $("#gallonToPurchase").val();

    mpg = calMPG(gallonInput, distanceTravelled);
    $("#result1").val(mpg);
    costPerMile = calCostPerMile(gasInputValue, gallonInput, distanceTravelled);
    $("#result2").val(costPerMile);
    distancePerDollar = calDistancePerDollar(gasInputValue, gallonInput, distanceTravelled);
    $("#result3").val(distancePerDollar);
    //console.log(gallonInput, gasInputValue);

  });
});

function calMPG(gallonInput, distanceTravelled) {
  mpgvalue = parseInt(distanceTravelled) / parseInt(gallonInput);
  mpg = mpgvalue.toFixed(2) + " mpg";
  console.log("ran");
  return mpg;

}

function calCostPerMile(gasInputValue, gallonInput, distanceTravelled) {
  pricePerMileValue = parseFloat(gasInputValue) / (parseInt(distanceTravelled) / parseInt(gallonInput));
  costPerMile = "$" + pricePerMileValue.toFixed(2);
  console.log("ran");
  return costPerMile;
}

function calDistancePerDollar(gasInputValue, gallonInput, distanceTravelled) {
  distancePerDollarValue = (parseInt(distanceTravelled) / parseInt(gallonInput)) / parseFloat(gasInputValue);
  distancePerDollar = distancePerDollarValue.toFixed(2) + " miles";
  console.log("ran");
  return distancePerDollar;
}

function calCostToGetThere(distanceA, costPerMile) {
  costValue = parseInt(distanceA) * parseInt(pricePerMileValue);
  cost = "$" + costValue;
  console.log("ran");
  return cost;

}
