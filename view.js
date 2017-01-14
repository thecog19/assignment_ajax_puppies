var PUPPY = PUPPY || {};

PUPPY.View = (function($) {

  var populatePuppyList = function(puppyList){
    $(".puppy-list").text("")

    puppyList.forEach(function(puppy){
      $(".puppy-list").append("<li>");
      $("li").last().text(puppy.name + " " + "\(" + puppy.breed.name + "\) created " + puppy.created_at);
    })
  }

  var populateBreedList = function(breedList){
    breedList.forEach(function(breed){
      $("#breed-id").append("<option value=\"" + breed.id +"\">" + breed.name + "</option>");
    })

  };

  var addSingleDog = function(name, breed){
    $(".puppy-list").append("<li>");
    $("li").first().text(name + " " + "\(" + breed + "\)"); 
  }

  return {
    populateBreedList,
    populatePuppyList,
    addSingleDog
  }  
  })($);


