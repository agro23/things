$(document).ready(function() {  // ready function when doc is loaded

var items = ["", "", "", "", ""];
i = 0;

  $("form#things").submit(function(e) {
    e.preventDefault();
    // console.log("got the results.")

    // icecream1 = $("#icecream1").val();
    // icecream2 = $("#icecream2").val();
    // icecream3 = $("#icecream3").val();
    // icecream4 = $("#icecream4").val();
    // icecream5 = $("#icecream5").val();


    // icecreams.push( $("#icecream1").val() );
    // icecream2 = $("#icecream2").val();
    // icecream3 = $("#icecream3").val();
    // icecream4 = $("#icecream4").val();
    // icecream5 = $("#icecream5").val();
    $("#things").hide();




    items.forEach(function(item) {
      i+=1;
      items[i-1] = $("#item"+i).val().toUpperCase();
    });

    items.sort();

    items.forEach(function(item) {
      value = item + "<br>";
      HTML = $.parseHTML(value);
      $("#myH2").append(HTML);
    });



    // icecreams
    // $("#myH2").append(HTML);

    $(".results").show();


    // car = $("#car").val();
    // animal = $("#animal").val();
    // movie = $("#movie").val();
    // song = $("#song").val();
    //
    // favoriteThings[0] = icecream;
    // favoriteThings[1] = car;
    // favoriteThings[2] = animal;
    // favoriteThings[3] = movie;
    // favoriteThings[4] = song;
    //
    // console.log("Second Element: " + favoriteThings[1]);
    // console.log("First Element: " + favoriteThings[0]);
    // console.log("Third Element: " + favoriteThings[2]);
    //
    // newArray = [];
    // newArray.push(favoriteThings[1], favoriteThings[0], favoriteThings[2]);
    //
    // console.log("New Array: " + newArray);
    //
    // listItem1 = newArray[1];
    // listItem2 = newArray[0];
    // listItem3 = newArray[2];
    //
    // console.log("listItem1: " + listItem1);

//     output = "<ul>";
//     output = output + "<li>" + listItem1 + "</li>";
//     output = output + "<li>" + listItem2 + "</li>";
//     output = output + "<li>" + listItem3 + "</li>";
//     output = output + "</ul>";
//
//     HTML = $.parseHTML(output);
//
// console.log ("Output: " + output);
//
//     $("#myH2").append(HTML);
//     $(".results").show();


  // console.log("Answers: " + answers);

    //name = $("#name").val();

  }); // END SUBMIT

}); // END READY
