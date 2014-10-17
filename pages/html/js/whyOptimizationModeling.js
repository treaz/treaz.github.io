/*table 1 values*/
var sliceTimePlain = 2;
var sliceTimeMexican = 4;
var sliceTimeTwisted = 3;
var fryingTimePlain = 4;
var fryingTimeMexican = 5;
var fryingTimeTwisted = 6;
var packingTimePlain = 4;
var packingTimeMexican = 2;
var packingTimeTwisted = 4;

/*table 1 values*/
var availableSlicingTime = 345;
var availableFryingTime = 480;
var availablePackingTime = 330;

/*table 3 values*/
var sellPricePlain = 2;
var sellPriceMexican = 1.5;
var sellPriceTwisted = 2.5;

var q1Profit = 0;
var medProfit = 0;
var hardProfit = 0;
var veryHardProfit = 0;

/* Functions used in the easy version*/
$(document).ready(function(){
  $('.validateProdMixEasy').on('click',function() {
    var plainToMake = $('.plainToMake').val();
    var mexicanToMake = $('.mexicanToMake').val();
    if (availableSlicingTime < plainToMake*sliceTimePlain + mexicanToMake*sliceTimeMexican) {
      bootbox.alert("You have exceeded the available slicing time.");
      return;
    }
    if (q1Profit===344) {
      bootbox.alert("You found the most profitable solution");
      //playbasis.rule(playbasisToken, "read", USER_ID, "ORValue", function (result) {
      //  console.log("pb.auth");
      //  console.log(result);
      //});
    } else {
      bootbox.alert("This is not the most profitable solution.");
    }
  });
});

$(document).ready(function(){
  $('.plainToMake, .mexicanToMake').on('change',function() {
    q1Profit = $('.plainToMake').val()*sellPricePlain + $('.mexicanToMake').val()*sellPriceMexican;
    $(".q1Profit").text(q1Profit);
  });
});

/* Functions used in the medium version*/
$(document).ready(function(){
  $('.validateProdMixMed').on('click',function() {
    var plainToMake = $('.plainToSliceMed').val();
    var mexicanToMake = $('.mexicanToSliceMed').val();
    if (availableSlicingTime < plainToMake*sliceTimePlain + mexicanToMake*sliceTimeMexican) {
      bootbox.alert("You have exceeded the available slicing time.");
      return;
    }
    if (availableFryingTime < plainToMake*fryingTimePlain + mexicanToMake*fryingTimeMexican) {
      bootbox.alert("You have exceeded the available frying time.");
      return;
    }
    if (medProfit===240) {
      bootbox.alert("You found the most profitable solution");
      //playbasis.rule(playbasisToken, "read", USER_ID, "ORValue", function (result) {
      //  console.log("pb.auth");
      //  console.log(result);
      //});
    } else {
      bootbox.alert("This is not the most profitable solution.");
    }
  });
});

$(document).ready(function(){
  $('.plainToSliceMed, .mexicanToSliceMed').on('change',function() {
    medProfit = $('.plainToSliceMed').val()*sellPricePlain + $('.mexicanToSliceMed').val()*sellPriceMexican;
    $(".medProfit").text(medProfit);
  });
});

/* Functions used in the hard version*/
$(document).ready(function(){
  $('.validateProdMixHard').on('click',function() {
    var plainToMake = $('.plainToSliceHard').val();
    var mexicanToMake = $('.mexicanToSliceHard').val();
    if (availableSlicingTime < plainToMake*sliceTimePlain + mexicanToMake*sliceTimeMexican) {
      bootbox.alert("You have exceeded the available slicing time.");
      return;
    }
    if (availableFryingTime < plainToMake*fryingTimePlain + mexicanToMake*fryingTimeMexican) {
      bootbox.alert("You have exceeded the available frying time.");
      return;
    }
    if (availablePackingTime < plainToMake*packingTimePlain + mexicanToMake*packingTimeMexican) {
      bootbox.alert("You have exceeded the available packing time.");
      return;
    }
    if (hardProfit===189) {
      bootbox.alert("You found the most profitable solution");
      //playbasis.rule(playbasisToken, "read", USER_ID, "ORValue", function (result) {
      //  console.log("pb.auth");
      //  console.log(result);
      //});
    } else {
      bootbox.alert("This is not the most profitable solution.");
    }
  });
});

$(document).ready(function(){
  $('.plainToSliceHard, .mexicanToSliceHard').on('change',function() {
    hardProfit = $('.plainToSliceHard').val()*sellPricePlain + $('.mexicanToSliceHard').val()*sellPriceMexican;
    $(".hardProfit").text(hardProfit);
  });
});

/* Functions used in the very hard version*/
$(document).ready(function(){
  $('.validateProdMixVeryHard').on('click',function() {
    var plainToMake = $('.plainToSliceVeryHard').val();
    var mexicanToMake = $('.mexicanToSliceVeryHard').val();
    var twistedToMake = $('.twistedToSliceVeryHard').val();
    if (availableSlicingTime < plainToMake*sliceTimePlain + mexicanToMake*sliceTimeMexican + twistedToMake*sliceTimeTwisted) {
      bootbox.alert("You have exceeded the available slicing time.");
      return;
    }
    if (availableFryingTime < plainToMake*fryingTimePlain + mexicanToMake*fryingTimeMexican + twistedToMake*fryingTimeTwisted) {
      bootbox.alert("You have exceeded the available frying time.");
      return;
    }
    if (availablePackingTime < plainToMake*packingTimePlain + mexicanToMake*packingTimeMexican + twistedToMake*packingTimeTwisted) {
      bootbox.alert("You have exceeded the available packing time.");
      return;
    }
    if (veryHardProfit===201.5) {
      bootbox.alert("You found the most profitable solution");
      //playbasis.rule(playbasisToken, "read", USER_ID, "ORValue", function (result) {
      //  console.log("pb.auth");
      //  console.log(result);
      //});
    } else {
      bootbox.alert("This is not the most profitable solution.");
    }
  });
});

$(document).ready(function(){
  $('.plainToSliceVeryHard, .mexicanToSliceVeryHard, .twistedToSliceVeryHard').on('change',function() {
    veryHardProfit = $('.plainToSliceVeryHard').val()*sellPricePlain + $('.mexicanToSliceVeryHard').val()*sellPriceMexican + $('.twistedToSliceVeryHard').val()*sellPriceTwisted;
    $(".veryHardProfit").text(veryHardProfit);
  });
});

$(document).ready(function() {
  
  /*initialize table 1 across all versions of problem*/
  $(".slicingTimePlain").text(sliceTimePlain);
  $(".slicingTimeMexican").text(sliceTimeMexican);
  $(".slicingTimeTwisted").text(sliceTimeTwisted);
  $(".fryingTimePlain").text(fryingTimePlain);
  $(".fryingTimeMexican").text(fryingTimeMexican);
  $(".fryingTimeTwisted").text(fryingTimeTwisted);
  $(".packingTimePlain").text(packingTimePlain);
  $(".packingTimeMexican").text(packingTimeMexican);
  $(".packingTimeTwisted").text(packingTimeTwisted);
  
  /*initialize table 2 across all versions of problem*/
  $(".availableSlicingTime").text(availableSlicingTime);
  $(".availableFryingTime").text(availableFryingTime);
  $(".availablePackingTime").text(availablePackingTime);
  
  /*initialize table 3 across all versions of problem*/
  $(".sellPricePlain").text(sellPricePlain);
  $(".sellPriceMexican").text(sellPriceMexican);
  $(".sellPriceTwisted").text(sellPriceTwisted);
  $(".q1Profit").text(q1Profit);
  $(".medProfit").text(medProfit);
  $(".hardProfit").text(hardProfit);
  $(".veryHardProfit").text(veryHardProfit);
});