var PUPPY = PUPPY || {};


PUPPY.View = (function($) {
  var populateList = function(list){
    list.forEach(function(item){
      console.log(item)

    })
  }

  return {
    populateList: populateList
  }  
  })($);


