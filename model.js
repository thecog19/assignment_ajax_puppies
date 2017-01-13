var PUPPY = PUPPY || {};

PUPPY.Model = (function($) {

  var item = undefined;

  var storeItem = function(value){
    item = value
  }
  
  var getPuppyList = function(){
    var list 
    $.ajax({
      url: "https://ajax-puppies.herokuapp.com/puppies.json",
      type: "GET",
      dataType: "json",
      success: function(json){
        storeItem(json)
      }
    })
  };

  return {
    getPuppyList: getPuppyList,
    item: item
  }
})($);


