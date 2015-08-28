$(document).ready(function(){
  $('.new-dish').on('click', getDishForm);
  $('.left-container').on('submit', '.new-dish-form', submitDish);
  $('.left-container').on('submit', '.new-item-form', submitItem);
  $('.finish').on('click', reset);
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

var getDishForm = function(event){
  event.preventDefault();
  var $target = $(event.target);

  $.ajax({
    url: $target.attr('href'),
    method: 'get',
    dataType: 'html'
  }).done(function(response){
    $('.new-dish').toggle();
    $('.left-container').prepend(response);
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
    $('.left-container').append(response);
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
    $('.' + dishId).append(response);
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
    $('.left-container').prepend(response);
    $('.new-dish-container').remove();
    getItemForm();
  }).fail(function(error){
    console.log(error)
  })
};