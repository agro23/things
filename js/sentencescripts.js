$(document).ready(function() {  // ready function when doc is loaded

var words = [];
var threePlus = [];
var moreWords = [];

  $("form#sentence").submit(function(e) {
    e.preventDefault();
    // console.4 = $("#icecream4").val();
    // icecream5 = $("#icecream5").val();
    // $("#things").hide();

    sentence = $("#words").val();
    // console.log ("sentence = " + sentence);

    words = sentence.split(" ");
    console.log ("Words = " + words);

    words.forEach(function(word) {
      if (word.length >=3) {
        threePlus.push(word);
      }
    });

    threePlus.reverse();

    var newSentence = threePlus.join(" ");
    console.log("New: " + newSentence);

    $("#myH2").append($.parseHTML("<p>" + newSentence + "</p>"));

    $(".results").show();
    // });

    // console.log("Threeplus: " + threePlus);

  }); // END SUBMIT

}); // END READY
