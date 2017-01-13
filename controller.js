var PUPPY = PUPPY || {};

PUPPY.Controller = (function($, View, Model) {

  var init = function(){
    Model.requestPuppyList().then(function() {
      View.populatePuppyList(Model.getPuppyList());
    });
  };

  return {
    init: init
  }

})($, PUPPY.View, PUPPY.Model);


$( document ).ready(function() {
    PUPPY.Controller.init();
});