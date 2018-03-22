//BUSINESS LOGIC

//my function will take a genre, an age group and a season and will return a celebrity match
function celebrityMatcher(genre, age, season) {
  var result1 = "jimcarrey";
  var result2 = "steve";
  var result3 = "adam";
  var result4 = "willf";
  var result5 = "sweeny";
  var result6 = "helena";
  var result7 = "shining";
  var result8 = "insidious";
  var result9 = "wilson";
  var result10 = "julia";
  var result11 = "jake";
  var result12 = "deniro";
  var result13 = "scarface";
  var result14 = "willis";
  var result15 = "jason";
  var result16 = "will";

if (genre == 1) { //FOR COMEDY LOVERS
  if (age == "young") {
      if(season == warm)
      {
        return result1;
      } else {
        return result2;
      }
  } else {
    if(season == warm)
    {
      return result3;
    } else {
      return result4;
    }
  }
}

if (genre == 2) { //FOR Horror LOVERS
  if (age == "young") {
      if(season == warm)
      {
        return result5;
      } else {
        return result6;
      }
  } else {
    if(season == warm)
    {
      return result7;
    } else {
      return result8;
    }
  }
}

if (genre == 3) { //FOR Drama LOVERS
  if (age == "young") {
      if(season == warm)
      {
        return result9;
      } else {
        return result10;
      }
  } else {
    if(season == warm)
    {
      return result11;
    } else {
      return result12;
    }
  }
}

if (genre == 4) { //FOR Action LOVERS
  if (age == "young") {
      if(season == warm)
      {
        return result13;
      } else {
        return result14;
      }
  } else {
    if(season == warm)
    {
      return result15;
    } else {
      return result16;
    }
  }
}
}




//USER LOGIC

$(document).ready(function(){
  $("#quizform").submit(function(event){
    event.preventDefault();

    var userGenre = $("#genre").val();
    var userAge = $("#age");
    var userSeason = "SUMMER";

    console.log("USER ENTERED: "+userGenre+" USER ENTERED: "+userAge+" USER ENTERED: "+userSeason);

    var userResult = celebrityMatcher(userGenre, userAge, userSeason);

    if (userResult === "Jim Carrey") {
      $("#jimcarrey").show(); //be showing the image of the chosen celebrity
    }

//var radioValue = $("input[name='Celebrity']:checked").val();

  });

});
