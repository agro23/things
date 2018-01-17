$(document).ready(function() {  // ready function when doc is loaded

var favoriteThings = []; // create the empty array

var someFunc = function () {
  return answer;
}

  $("form#things").submit(function(e) {
    e.preventDefault();
    console.log("got the results.")

    /*
    * Use square bracket notation to access the second, first, and third elements of the original array of favorite things.
    * Then, use push() to add only these elements to a brand new array.
    * Finally, display this new array in your page's HTML as list items in a <ul> tag.
    */

    icecream = $("#icecream").val();
    car = $("#car").val();
    animal = $("#animal").val();
    movie = $("#movie").val();
    song = $("#song").val();

    favoriteThings[0] = icecream;
    favoriteThings[1] = car;
    favoriteThings[2] = animal;
    favoriteThings[3] = movie;
    favoriteThings[4] = song;

    console.log("Second Element: " + favoriteThings[1]);
    console.log("First Element: " + favoriteThings[0]);
    console.log("Third Element: " + favoriteThings[2]);

    newArray = [];
    newArray.push(favoriteThings[1], favoriteThings[0], favoriteThings[2]);

    console.log("New Array: " + newArray);

    listItem1 = newArray[1];
    listItem2 = newArray[0];
    listItem3 = newArray[2];

    console.log("listItem1: " + listItem1);

    output = "<ul>";
    output = output + "<li>" + listItem1 + "</li>";
    output = output + "<li>" + listItem2 + "</li>";
    output = output + "<li>" + listItem3 + "</li>";
    output = output + "</ul>";

    HTML = $.parseHTML(output);

console.log ("Output: " + output);

    $("#myH2").append(HTML);
    $(".results").show();


  // console.log("Answers: " + answers);

    //name = $("#name").val();

  }); // END SUBMIT

}); // END READY
