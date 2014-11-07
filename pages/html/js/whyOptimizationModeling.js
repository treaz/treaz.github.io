var pageId = "whyOptimizationModeling";

var attemptProdMix = "attemptProductMix"
var foundCorrectProductMix = "foundCorrectProductMix"

/* Functions used in the easy version*/
$(document).ready(function(){
  $('.validateProdMixEasy').on('click',function() {
    pageEvent("validateProdMixEasy", attemptProdMix);
    var plainToMake = $('.plainToMake').val();
    var mexicanToMake = $('.mexicanToMake').val();
    if (availableSlicingTime < plainToMake*sliceTimePlain + mexicanToMake*sliceTimeMexican) {
      bootbox.alert("You have exceeded the available slicing time.");
      return;
    }
    if (q1Profit===344) {
      bootbox.alert("You found the most profitable solution");
      pageEvent("validateProdMixEasy", foundCorrectProductMix);
      handleChipsProblemCorrectSubmission("easyDifficultyChips");
    } else {
      bootbox.alert("This is not the most profitable solution.");
    }
  });
  $('.plainToMake, .mexicanToMake').on('change',function() {
    q1Profit = $('.plainToMake').val()*sellPricePlain + $('.mexicanToMake').val()*sellPriceMexican;
    $(".q1Profit").text(q1Profit);
  });
});

/* Functions used in the medium version*/
$(document).ready(function(){
  $('.validateProdMixMed').on('click',function() {
    pageEvent("validateProdMixMed", attemptProdMix);
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
      pageEvent("validateProdMixMed", foundCorrectProductMix);
      handleChipsProblemCorrectSubmission("mediumDifficultyChips");
    } else {
      bootbox.alert("This is not the most profitable solution.");
    }
  });
  $('.plainToSliceMed, .mexicanToSliceMed').on('change',function() {
    medProfit = $('.plainToSliceMed').val()*sellPricePlain + $('.mexicanToSliceMed').val()*sellPriceMexican;
    $(".medProfit").text(medProfit);
  });
});

/* Functions used in the hard version*/
$(document).ready(function(){
  $('.validateProdMixHard').on('click',function() {
    pageEvent("validateProdMixHard", attemptProdMix);
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
      pageEvent("validateProdMixMed", foundCorrectProductMix);
      handleChipsProblemCorrectSubmission("hardDifficultyChips");
    } else {
      bootbox.alert("This is not the most profitable solution.");
    }
  });
  $('.plainToSliceHard, .mexicanToSliceHard').on('change',function() {
    hardProfit = $('.plainToSliceHard').val()*sellPricePlain + $('.mexicanToSliceHard').val()*sellPriceMexican;
    $(".hardProfit").text(hardProfit);
  });
});

/* Functions used in the very hard version*/
$(document).ready(function(){
  $('.validateProdMixVeryHard').on('click',function() {
    pageEvent("validateProdMixVeryHard", attemptProdMix);
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
      pageEvent("validateProdMixMed", foundCorrectProductMix);
      handleChipsProblemCorrectSubmission("veryHardDifficultyChips");
    } else {
      bootbox.alert("This is not the most profitable solution.");
    }
  });
  $('.plainToSliceVeryHard, .mexicanToSliceVeryHard, .twistedToSliceVeryHard').on('change',function() {
    veryHardProfit = $('.plainToSliceVeryHard').val()*sellPricePlain + $('.mexicanToSliceVeryHard').val()*sellPriceMexican + $('.twistedToSliceVeryHard').val()*sellPriceTwisted;
    $(".veryHardProfit").text(veryHardProfit);
  });
});

window.onload=function() {
  handleConceptGamification(pageId);
  handleStayedOnMainPageLongBadge(pageId);
  pageEvent(pageId, "openPage");
};

$(window).on('beforeunload', function () {
  pageEvent(pageId, "closePage");
  saveChatMessages();
});
