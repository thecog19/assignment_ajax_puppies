var PUPPY = PUPPY || {};

PUPPY.Controller = (function($, View, Model) {

  var init = function(){
    Model.requestBreedList().then(function(){
      View.populateBreedList(Model.getBreedList())
    })
    refreshList()
    $(".refresh").on("click", refreshList)
    $("#puppy-add").on("submit", function(event){
      event.preventDefault();
      Model.submitNewPuppy(event).then(
      function(){
        var breed = $("#breed-id").text();
        var name = $("#name").val();
        View.addSingleDog(name, breed);
      })}
    )
  };

  var refreshList = function(){
    Model.requestPuppyList().then(function() {
      View.populatePuppyList(Model.getPuppyList());
    });
  }

  return {
    init: init
  }

})($, PUPPY.View, PUPPY.Model);


$( document ).ready(function() {
    PUPPY.Controller.init();
});