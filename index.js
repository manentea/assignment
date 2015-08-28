(function(){

  $(document).ready(function(){

  });

  var Dish = function(name) {
    var self = this;
    self.name = name;
    self.items = [];
  };

  var Item = function(name) {
    var self = this;
    self.name = name;
    self.ingredients = [];
  };

  var Ingredient = function(name) {
    var self = this;
    self.name = name;
  };



})();