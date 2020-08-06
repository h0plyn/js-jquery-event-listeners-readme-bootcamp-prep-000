//define functions here
function getIt() {
  $('p').on('click', function(){
    alert("Hey!");
  });
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass("tasty");
  });
}

function pressIt() {
  $('document').on('keydown', function() {
    if (key.which === 71) {
      alert('You have pressed G.')
    }
  })
};

function submitIt() {
  $('input').on('')
};

$(document).ready(function(){



});
