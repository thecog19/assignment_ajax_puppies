//link to model
//pass on request to view
//view DOM mainpulates and renders. 

var PUPPY = PUPPY || {};

PUPPY.Controller = (function($, View, Model) {

  var init = function(){
    View.populateList(Model.getPuppyList())
  }

  return {
    init: init
  }

  }
)($, PUPPY.View, PUPPY.Model);


$( document ).ready(function() {
    PUPPY.Controller.init()
});