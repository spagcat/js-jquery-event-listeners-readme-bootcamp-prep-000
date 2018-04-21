//define functions here

function getIt() {
  $('p').on("click", function() {
    alert('Hey!');
  });
}

function frameIt() {
  $('img').on("load", function() {
    $('img').addClass('tasty');
  });
}

function pressIt() {
  $('form').on("keypress", function(key) {
    if(key.which == 71) {
      alert('G has been pressed bitch');
    }
  });
}

$(document).ready(function(){

// call functions here

});
