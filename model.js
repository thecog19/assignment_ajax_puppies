var PUPPY = PUPPY || {};
console.log(PUPPY)

PUPPY.Model = (function($) {
  
  var getPuppyList = function(){
    $.ajax({
      url: "https://ajax-puppies.herokuapp.com/puppies.json",
      type: "GET",
      dataType: "json",
      success: function(json){
        return json
      }
    })
  };

  return {
    getPuppyList: getPuppyList
  }
})($);


