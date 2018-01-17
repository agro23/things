$(document).ready(function(event) {  // ready function when doc is loaded

var suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
var ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
var Deck = [];

// Business Logic

  suits.forEach(function (suit) {
    ranks.forEach(function (rank) {
      Deck.push(rank + " of " + suit);
    });
  });

  // console.log("Deck: " + Deck);

// Display Logic

  $(".results").css("max-height", 1250);
  $(".results").css("max-width", 300);
  $("#myP").append($.parseHTML("<h3>A DECK OF CARDS</h3>"));
  $("#myP").append($.parseHTML("<ul>"));
  Deck.forEach(function(card) {
    $("#myP").append($.parseHTML("<li>" + card + "</li>"));
    }
  )
  $("#myP").append($.parseHTML("</ul>"));
  $(".results").show();

}); // END READY
