(function(){

  $(document).ready(function(){
    $('.new-dish-form').on('submit', createDish);
    $('.new-item-form').on('submit', createItem);
    $('.finish').on('click', resetDish);
    $('.right-container').on('click','.delete', deleteDish);
  });

  var Dish = function(name) {
    var self = this;
    self.name = name;
  };

  var Item = function(name, ingredients) {
    var self = this;
    self.name = name;
    self.ingredients = ingredients;
  };

  var createItemDiv = function(item) {
    var div = '<div>Name: ' + item.name + ' </div> <div> Ingredients: ' + item.ingredients + '</div><br>';
    $('.dish').append(div);
  };

  var createItem = function(event) {
    event.preventDefault();
    $target = $(event.target);
    var thisItem = $target.serializeArray();
    var itemName = thisItem[0].value;
    var itemIngredients = thisItem[1].value;
    var newItem = new Item(itemName, itemIngredients);
    $target[0].reset();
    createItemDiv(newItem);
  };

  var createTitleDiv = function(dish) {
    var div = '<div class=dish></div>';
    $('.new-item').append(div);
    var titleDiv = '<h2>' + dish.name + '</h2>' + '<div class=items><h3>Items: </h3> </div>';
    $('.dish').append(titleDiv);
    switchToItem();
  };

  var switchToItem = function() {
    $('.new-dish-form').toggle(false);
    $('.new-item').show();
  };

  var createDish = function(event) {
    event.preventDefault();
    var $target = $(event.target);
    var dishName = $target.serializeArray()[0].value;
    var newDish = new Dish(dishName);
    $target[0].reset();
    createTitleDiv(newDish);
  };

  var resetDish = function(event) {
    $('.new-item').toggle(false);
    $('.new-dish-form').toggle(true);
    addToList();
  };

  var addToList = function(){
    var dishDiv = $('.dish').html()
    $('.dish-list').append('<li class=list-item></li>');
    $('.dish-list').children().last().append(dishDiv);
    $('.dish-list').children().last().append('<button class=delete>Delete</button>');
    $('.dish').remove();
  };

  var deleteDish = function(event) {
    this.parentElement.remove(0);
  };

})();