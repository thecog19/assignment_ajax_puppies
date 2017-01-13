var PUPPY = PUPPY || {};

PUPPY.View = (function($) {

  var populatePuppyList = function(puppyList){
    puppyList.forEach(function(puppy){
      console.log(puppy);
      $(".puppy-list").append("<li>");
      $("li").last().text(puppy.name + " " + "\(" + puppy.breed.name + "\) created " + puppy.created_at);
    })
  }

  return {
    populatePuppyList
  }  
  })($);


