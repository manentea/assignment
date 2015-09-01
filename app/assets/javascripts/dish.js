$(document).ready(function(){
  $('.new-dish').on('click', getDishForm);
  $('.container').on('submit', '.new-dish-form', submitDish);
  $('.container').on('submit', '.new-item-form', submitItem);
  $('.container').on('click', '.finish', reset);
  $('.delete').on('click', deleteDish);
});

var deleteDish = function(event){
  event.preventDefault();
  $target = $(event.target);
  var controllerRoute = '/dishes/' + $target.data('id');
  $.ajax({
    url: controllerRoute,
    method: 'delete',
    dataType: 'json'
  }).done(function(response){
    console.log(response.status)
    location.reload();
  }).fail(function(error){
    console.log(error);
  });
};

var reset = function(){
  event.preventDefault();
  location.reload();
};

var blur = function(){
  $('.inner-container').toggleClass('blur');
};

var getDishForm = function(event){
  event.preventDefault();
  var $target = $(event.target);
  $.ajax({
    url: $target.data('path'),
    method: 'get',
    dataType: 'html'
  }).done(function(response){
    blur();
    $('.new-dish').toggle();
    $('.container').prepend(response);
    $('.finish').show();
  }).fail(function(error){
    console.log(error);
  });
};

var getItemForm = function(){
  $.ajax({
    url: 'items/new',
    method: 'get',
    dataType: 'html'

  }).done(function(response){
    blur();
    $('.container').append(response);
  }).fail(function(error){
    console.log(error);
  });
};

var submitItem = function(event){
  event.preventDefault();
  $target = $(event.target);
  var dishId = $('.left-container').children().first().attr('class');
  var dish = 'dish_id=' + dishId;
  var myData = $target.serialize() + '&' + dish;

  $.ajax({
    url: $target.attr('action'),
    method: 'post',
    data: myData,
    dataType: 'html'
  }).done(function(response){
    $target[0].reset();
  }).fail(function(error){
    console.log(error);
  });
};

var submitDish = function(event){
  event.preventDefault();
  var $target = $(event.target);

  $.ajax({
    url: $target.attr('action'),
    method: 'post',
    data: $target.serialize(),
    dataType: 'html'
  }).done(function(response){
    blur();
    $('.left-container').prepend(response);
    $('.new-dish-container').remove();
    getItemForm();
  }).fail(function(error){
    console.log(error)
  })
};