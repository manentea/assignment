$(document).ready(function(){
  $('.new-dish').on('click', getDishForm);
  $('.left-container').on('submit', '.new-dish-form', submitDish);
});

var getDishForm = function(event){
  event.preventDefault();
  var $target = $(event.target);

  $.ajax({
    url: $target.attr('href'),
    method: 'get',
    dataType: 'html'
  }).done(function(response){
    $('.new-dish').toggle();
    $('.left-container').append(response);
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
    //finish this!!!
  }).fail(function(error){
    console.log(error)
  })
};