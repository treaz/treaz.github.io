var pageId = "whyOptimizationModeling";

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
      handleChipsProblemCorrectSubmission("easyDifficultyChips");
      //playbasis.rule(playbasisToken, "read", USER_ID, "ORValue", function (result) {
      //  console.log("pb.auth");
      //  console.log(result);
      //});
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
      handleChipsProblemCorrectSubmission("mediumDifficultyChips");
      //playbasis.rule(playbasisToken, "read", USER_ID, "ORValue", function (result) {
      //  console.log("pb.auth");
      //  console.log(result);
      //});
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
      handleChipsProblemCorrectSubmission("hardDifficultyChips");
      //playbasis.rule(playbasisToken, "read", USER_ID, "ORValue", function (result) {
      //  console.log("pb.auth");
      //  console.log(result);
      //});
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
      handleChipsProblemCorrectSubmission("veryHardDifficultyChips");
      //playbasis.rule(playbasisToken, "read", USER_ID, "ORValue", function (result) {
      //  console.log("pb.auth");
      //  console.log(result);
      //});
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
  pageEvent(USER_ID, pageId, "openPage");
};

$(window).on('beforeunload', function () {
  pageEvent(USER_ID, pageId, "closePage");
});
