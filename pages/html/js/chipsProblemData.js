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