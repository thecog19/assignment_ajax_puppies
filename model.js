var PUPPY = PUPPY || {};

PUPPY.Model = (function($) {

  var puppyList;

  var setPuppyList = function(value){
    puppyList = value;
  };

  var getPuppyList = function() {
    return puppyList
  };
  
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

  return {
    requestPuppyList,
    getPuppyList
  }
})($);


