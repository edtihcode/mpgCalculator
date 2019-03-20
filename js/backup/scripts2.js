console.log("Hello World!");
$(document).ready(function() {
  var mpg;
  $("#submit").click(function() {
    var gallonInput = $("#gallon").val();
    var distanceTravelled = $("#miles").val();
    var gasInputValue = $("#gasPrice").val();
    // console.log(gallonInput,distanceTravelled);
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
  $("#calculateSavings").click(function() {
    var priceA= $("#gasPriceA").val();
    var priceB= $("#gasPriceB").val();
    var distanceA= $("#aDistance").val();
    var distanceB= $("#bDistance").val();
    var costA = $("#costToA").val();
    var costB = $("#costToB").val();
    var purchaseG = $("#gallonToPurchase").val();

    costToGetToA = calCostToGetThere(distanceA,costPerMile);
    $("#costToA").val("$" + costToGetToA);
    purchaseA = purchaseValueG(priceA,purchaseG);
    totalCostValueA = calTotalCostValue(purchaseValue,costValue);
    costToGetToB = calCostToGetThere(distanceB,costPerMile);
    $("#costToB").val("$" + costToGetToB);
    purchaseB = purchaseValueG(priceB,purchaseG);
    totalCostValueB = calTotalCostValue(purchaseValue,costValue);
    totalSavings = compare(totalCostValueA,totalCostValueB);
    console.log(totalCostValueA+ "for a");
    console.log(totalCostValueB+ "for b");
    console.log(totalSavings);


    });

});
function calTotalCostValue(purchaseValue,costValue){
  totalCostValue = purchaseValue + costValue ;
  return totalCostValue;
}

function compare(a,b){
  if (a > b) {
    savings = a - b;
    var stationOfChoice = "B";
    var result = {value: savings, station: stationOfChoice};
    var car = {type:"Fiat", model:"500", color:"white"};
    return results;
  }else if (b > a) {
    savings = b - a;
    var stationOfChoice = "A";
    var result = {value: savings, station: stationOfChoice};
    return result;
  }else {
    var stationOfChoice = "No difference/cannot be computed";
  }

}

function purchaseValueG(price,purchaseG){
  purchaseValue = parseInt(price) * parseInt(purchaseG);
  return purchaseValue;
}

function calMPG(gallonInput,distanceTravelled){
  mpgvalue = parseInt(distanceTravelled) / parseInt(gallonInput);
  mpg = mpgvalue.toFixed(2) + " mpg";
    // console.log("ran");
  return mpg;

}

function calDistancePerDollar(gasInputValue,gallonInput,distanceTravelled){
  distancePerDollarValue = (parseInt(distanceTravelled) / parseInt(gallonInput))/parseFloat(gasInputValue);
  distancePerDollar = distancePerDollarValue.toFixed(2) + " miles";
    // console.log("ran");
  return distancePerDollar;
}

function calCostToGetThere(distanceA,costPerMile){
  costValue = parseInt(distanceA) * parseInt(pricePerMileValue);
  cost =  costValue;
    //console.log(cost);
  return cost;
}

function calCostPerMile(gasInputValue,gallonInput,distanceTravelled){
  pricePerMileValue = parseFloat(gasInputValue)/ (parseInt(distanceTravelled) / parseInt(gallonInput));
  costPerMile = "$" + pricePerMileValue.toFixed(2);
    console.log("ran");
  return costPerMile;
}
