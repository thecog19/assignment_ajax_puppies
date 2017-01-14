var PUPPY = PUPPY || {};

PUPPY.Model = (function($) {

  var puppyList;

  var setPuppyList = function(value){
    puppyList = value;
  };

  var getPuppyList = function() {
    return puppyList
  };

  var breedList;

  var setBreedList = function(value){
    breedList = value;
  }

  var getBreedList = function(){
    return breedList
  }
  
  var requestPuppyList = function(){
    var list 
    return $.ajax({
      url: "https://ajax-puppies.herokuapp.com/puppies.json",
      type: "GET",
      dataType: "json",
      success: function(json){
        setPuppyList(json);
      }
    });
  };

  var requestBreedList = function(){
    return $.ajax({
      url: "https://ajax-puppies.herokuapp.com/breeds.json",
      type: "GET",
      dataType: "json",
      success: function(json){
        setBreedList(json);
      }
    });
  };

  var submitNewPuppy = function(event){
    event.preventDefault();
    var data = {};
    data.breed_id = $("#breed-id").val();
    data.name = $("#name").val();
    data = JSON.stringify(data);
    
    return $.ajax({
      url: "https://ajax-puppies.herokuapp.com/puppies.json",
      type: "POST",
      contentType: "application/json",
      data: data
    });

  }

  return {
    requestPuppyList,
    getPuppyList,
    submitNewPuppy,
    getBreedList,
    requestBreedList
  }
})($);


