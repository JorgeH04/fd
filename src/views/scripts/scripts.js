   
 
////////////////////////////////like ofertauno/////////////////////////////////////////7
$(document).ready(function() {
  
  $('.item').on ("click", "#btn-like",function (e) {
  e.preventDefault();

   let $this = $(this);
  
   let imgId = $(this).attr('data-id');
  console.log(imgId)
    $.ajax({
      url: '/like/' + imgId,
      type: 'GET'
    }) 
      .done(function(result) {
     //   $this.removeClass('button button-outline-secondary').addClass('btn-danger');
        $this.removeClass('far fa-heart').addClass('fas fa-heart');
       // $this.find('i').removeClass('fa-times').addClass('fa-check');
       // $this.append('<span>Deleted!</span>'); 
           
      }
    
    );
  //}
});
});


      
///////////////////////////////////like ofertados///////////////////////////////////////////////////7


$(document).ready(function() {

$('.item').on ("click", "#btnn-like",function (e) {
e.preventDefault();

 let $this = $(this);

 let imgId = $(this).attr('data-id');
console.log(imgId)
  $.ajax({
    url: '/likedos/' + imgId,
    type: 'GET'
  }) 
    .done(function(result) {
      $this.removeClass('far fa-heart').addClass('fas fa-heart');

     // $this.find('i').removeClass('fa-times').addClass('fa-check');
     // $this.append('<span>Deleted!</span>'); 
       
    }
  
  );
//}
});
});



////////////////////////////////////like ofertatres//////////////////////////////////////////////////7


$(document).ready(function() {

$('.item').on ("click", "#btn-likedes",function (e) {
e.preventDefault();

 let $this = $(this);

 let imgId = $(this).attr('data-id');
console.log(imgId)
  $.ajax({
    url: '/liketres/' + imgId,
    type: 'GET'
  }) 
    .done(function(result) {
      $this.removeClass('far fa-heart').addClass('fas fa-heart');

     // $this.find('i').removeClass('fa-times').addClass('fa-check');
     // $this.append('<span>Deleted!</span>'); 
       
    }
  
  );
//}
});
});




////////////////////////////////////like produno//////////////////////////////////////////////////7


$(document).ready(function() {

$('.item').on ("click", "#btn-likeuno",function (e) {
e.preventDefault();

 let $this = $(this);

 let imgId = $(this).attr('data-id');
console.log(imgId)
  $.ajax({
    url: '/likeproduno/' + imgId,
    type: 'GET'
  }) 
    .done(function(result) {
      $this.removeClass('far fa-heart').addClass('fas fa-heart');

     // $this.find('i').removeClass('fa-times').addClass('fa-check');
     // $this.append('<span>Deleted!</span>'); 
       
    }
  
  );
//}
});
});





////////////////////////////////////like proddos//////////////////////////////////////////////////7


$(document).ready(function() {

$('.item').on ("click", "#btn-likedos",function (e) {
e.preventDefault();

 let $this = $(this);

 let imgId = $(this).attr('data-id');
console.log(imgId)
  $.ajax({
    url: '/likeproddos/' + imgId,
    type: 'GET'
  }) 
    .done(function(result) {
      $this.removeClass('far fa-heart').addClass('fas fa-heart');

     // $this.find('i').removeClass('fa-times').addClass('fa-check');
     // $this.append('<span>Deleted!</span>'); 
       
    }
  
  );
//}
});
});






////////////////////////////////////like prodtres//////////////////////////////////////////////////7


$(document).ready(function() {

$('.item').on ("click", "#btn-liketres",function (e) {
e.preventDefault();

 let $this = $(this);

 let imgId = $(this).attr('data-id');
console.log(imgId)
  $.ajax({
    url: '/likeprodtres/' + imgId,
    type: 'GET'
  }) 
    .done(function(result) {
      $this.removeClass('far fa-heart').addClass('fas fa-heart');

     // $this.find('i').removeClass('fa-times').addClass('fa-check');
     // $this.append('<span>Deleted!</span>'); 
       
    }
  
  );
//}
});
});





////////////////////////////////////like prodcuatro//////////////////////////////////////////////////7


$(document).ready(function() {

$('.item').on ("click", "#btn-likecuatro",function (e) {
e.preventDefault();

 let $this = $(this);

 let imgId = $(this).attr('data-id');
console.log(imgId)
  $.ajax({
    url: '/likeprodcuatro/' + imgId,
    type: 'GET'
  }) 
    .done(function(result) {
      $this.removeClass('far fa-heart').addClass('fas fa-heart');

     // $this.find('i').removeClass('fa-times').addClass('fa-check');
     // $this.append('<span>Deleted!</span>'); 
       
    }
  
  );
//}
});
});





////////////////////////////////////like prodcinco//////////////////////////////////////////////////7


$(document).ready(function() {

$('.item').on ("click", "#btn-like",function (e) {
e.preventDefault();

 let $this = $(this);

 let imgId = $(this).attr('data-id');
console.log(imgId)
  $.ajax({
    url: '/likeprodcinco/' + imgId,
    type: 'GET'
  }) 
    .done(function(result) {
      $this.removeClass('far fa-heart').addClass('fas fa-heart');

     // $this.find('i').removeClass('fa-times').addClass('fa-check');
     // $this.append('<span>Deleted!</span>'); 
        
    }
  
  );
//}
});
});





////////////////////////////////////like prodtseis//////////////////////////////////////////////////7


$(document).ready(function() {

$('.item').on ("click", "#btn-like",function (e) {
e.preventDefault();

 let $this = $(this);

 let imgId = $(this).attr('data-id');
console.log(imgId)
  $.ajax({
    url: '/likeprodseis/' + imgId,
    type: 'GET'
  }) 
    .done(function(result) {
      $this.removeClass('far fa-heart').addClass('fas fa-heart');

     // $this.find('i').removeClass('fa-times').addClass('fa-check');
     // $this.append('<span>Deleted!</span>'); 
       
    }
  
  );
//}
});
});






////////////////////////////////////like prodsiete//////////////////////////////////////////////////7


$(document).ready(function() {

$('.item').on ("click", "#btn-like",function (e) {
e.preventDefault();

 let $this = $(this);

 let imgId = $(this).attr('data-id');
console.log(imgId)
  $.ajax({
    url: '/likeprodsiete/' + imgId,
    type: 'GET'
  }) 
    .done(function(result) {
      $this.removeClass('far fa-heart').addClass('fas fa-heart');

     // $this.find('i').removeClass('fa-times').addClass('fa-check');
     // $this.append('<span>Deleted!</span>'); 
       
    }
  
  );
//}
});
});








////////////////////////////////////like prodtocho//////////////////////////////////////////////////7


$(document).ready(function() {

$('.item').on ("click", "#btn-like",function (e) {
e.preventDefault();

 let $this = $(this);

 let imgId = $(this).attr('data-id');
console.log(imgId)
  $.ajax({
    url: '/likeprodocho/' + imgId,
    type: 'GET'
  }) 
    .done(function(result) {
      $this.removeClass('far fa-heart').addClass('fas fa-heart');

     // $this.find('i').removeClass('fa-times').addClass('fa-check');
     // $this.append('<span>Deleted!</span>'); 
       
    }
  
  );
//}
});
});







////////////////////////////////////like prodnueve//////////////////////////////////////////////////7


$(document).ready(function() {

$('.item').on ("click", "#btn-like",function (e) {
e.preventDefault();

 let $this = $(this);

 let imgId = $(this).attr('data-id');
console.log(imgId)
  $.ajax({
    url: '/likeprodnueve/' + imgId,
    type: 'GET'
  }) 
    .done(function(result) {
      $this.removeClass('far fa-heart').addClass('fas fa-heart');

     // $this.find('i').removeClass('fa-times').addClass('fa-check');
     // $this.append('<span>Deleted!</span>'); 
       
    }
  
  );
//}
});
});







////////////////////////////////////like proddiez//////////////////////////////////////////////////7


$(document).ready(function() {

$('.item').on ("click", "#btn-like",function (e) {
e.preventDefault();

 let $this = $(this);

 let imgId = $(this).attr('data-id');
console.log(imgId)
  $.ajax({
    url: '/likeproddiez/' + imgId,
    type: 'GET'
  }) 
    .done(function(result) {
      $this.removeClass('far fa-heart').addClass('fas fa-heart');

     // $this.find('i').removeClass('fa-times').addClass('fa-check');
     // $this.append('<span>Deleted!</span>'); 
       
    }
  
  );
//}
});
});







////////////////////////////////////like prodonce//////////////////////////////////////////////////7


$(document).ready(function() {

$('.item').on ("click", "#btn-like",function (e) {
e.preventDefault();

 let $this = $(this);

 let imgId = $(this).attr('data-id');
console.log(imgId)
  $.ajax({
    url: '/likeprodonce/' + imgId,
    type: 'GET'
  }) 
    .done(function(result) {
      $this.removeClass('far fa-heart').addClass('fas fa-heart');

     // $this.find('i').removeClass('fa-times').addClass('fa-check');
     // $this.append('<span>Deleted!</span>'); 
       
    }
  
  );
//}
});
});









////////////////////////////////////like proddoce//////////////////////////////////////////////////7


$(document).ready(function() {

$('.item').on ("click", "#btn-like",function (e) {
e.preventDefault();

 let $this = $(this);

 let imgId = $(this).attr('data-id');
console.log(imgId)
  $.ajax({
    url: '/likeproddoce/' + imgId,
    type: 'GET'
  }) 
    .done(function(result) {
      $this.removeClass('far fa-heart').addClass('fas fa-heart');

     // $this.find('i').removeClass('fa-times').addClass('fa-check');
     // $this.append('<span>Deleted!</span>'); 
       
    }
  
  );
//}
});
});









////////////////////////////////////like prodtrece//////////////////////////////////////////////////7


$(document).ready(function() {

$('.item').on ("click", "#btn-like",function (e) {
e.preventDefault();

 let $this = $(this);

 let imgId = $(this).attr('data-id');
console.log(imgId)
  $.ajax({
    url: '/likeprodtrece/' + imgId,
    type: 'GET'
  }) 
    .done(function(result) {
      $this.removeClass('far fa-heart').addClass('fas fa-heart');

     // $this.find('i').removeClass('fa-times').addClass('fa-check');
     // $this.append('<span>Deleted!</span>'); 
       
    }
  
  );
//}
});
});









////////////////////////////////////like prodtca//////////////////////////////////////////////////7


$(document).ready(function() {

$('.item').on ("click", "#btn-like",function (e) {
e.preventDefault();

 let $this = $(this);

 let imgId = $(this).attr('data-id');
console.log(imgId)
  $.ajax({
    url: '/likeprodcatorce/' + imgId,
    type: 'GET'
  }) 
    .done(function(result) {
      $this.removeClass('far fa-heart').addClass('fas fa-heart');

     // $this.find('i').removeClass('fa-times').addClass('fa-check');
     // $this.append('<span>Deleted!</span>'); 
       
    }
  
  );
//}
});
});






////////////////////////////////////like prodt15//////////////////////////////////////////////////7


$(document).ready(function() {

$('.item').on ("click", "#btn-like",function (e) {
e.preventDefault();

 let $this = $(this);

 let imgId = $(this).attr('data-id');
console.log(imgId)
  $.ajax({
    url: '/likeprodquince/' + imgId,
    type: 'GET'
  }) 
    .done(function(result) {
      $this.removeClass('far fa-heart').addClass('fas fa-heart');

     // $this.find('i').removeClass('fa-times').addClass('fa-check');
     // $this.append('<span>Deleted!</span>'); 
       
    }
  
  );
//}
});
});





////////////////////////////////////like prod16//////////////////////////////////////////////////7


$(document).ready(function() {

$('.item').on ("click", "#btn-like",function (e) {
e.preventDefault();

 let $this = $(this);

 let imgId = $(this).attr('data-id');
console.log(imgId)
  $.ajax({
    url: '/likeproddieciseis/' + imgId,
    type: 'GET'
  }) 
    .done(function(result) {
      $this.removeClass('far fa-heart').addClass('fas fa-heart');

     // $this.find('i').removeClass('fa-times').addClass('fa-check');
     // $this.append('<span>Deleted!</span>'); 
       
    }
  
  );
//}
});
});




////////////////////////////////////like prod17//////////////////////////////////////////////////7


$(document).ready(function() {

$('.item').on ("click", "#btn-like",function (e) {
e.preventDefault();

 let $this = $(this);

 let imgId = $(this).attr('data-id');
console.log(imgId)
  $.ajax({
    url: '/likeproddiecisiete/' + imgId,
    type: 'GET'
  }) 
    .done(function(result) {
      $this.removeClass('far fa-heart').addClass('fas fa-heart');

     // $this.find('i').removeClass('fa-times').addClass('fa-check');
     // $this.append('<span>Deleted!</span>'); 
       
    }
  
  );
//}
});
});




////////////////////////////////////like prodt18//////////////////////////////////////////////////7


$(document).ready(function() {

$('.item').on ("click", "#btn-like",function (e) {
e.preventDefault();

 let $this = $(this);

 let imgId = $(this).attr('data-id');
console.log(imgId)
  $.ajax({
    url: '/likeproddieciocho/' + imgId,
    type: 'GET'
  }) 
    .done(function(result) {
      $this.removeClass('far fa-heart').addClass('fas fa-heart');

     // $this.find('i').removeClass('fa-times').addClass('fa-check');
     // $this.append('<span>Deleted!</span>'); 
       
    }
  
  );
//}
});
});

















////////////////////////////////delete wishlist/////////////////////////////////////////7


$(document).ready(function() {

$('.p').on ("click", "#btn-unlike",function (e) {
e.preventDefault();

 let $this = $(this);

 let imgId = $(this).attr('data-id');
console.log(imgId)
  $.ajax({
    url: '/like/' + imgId,
    type: 'GET' 
  }) 
    .done(function(result) {
      $this.removeClass('btn-success').addClass('btn-success');

     // $this.find('i').removeClass('fa-times').addClass('fa-check');
      $this.append('<span>Eliminado!</span>'); 
       
    }
  
  );
//}
});
});
    






////////////////////////////////delete ofertauno/////////////////////////////////////////7


$(document).ready(function() {

$('.p').on ("click", "#unlike-uno",function (e) {
e.preventDefault();

 let $this = $(this);

 let imgId = $(this).attr('data-id');
console.log(imgId)
  $.ajax({
    url: '/like/' + imgId,
    type: 'GET' 
  }) 
    .done(function(result) {
      $this.removeClass('btn-success').addClass('btn-success');

     // $this.find('i').removeClass('fa-times').addClass('fa-check');
      $this.append('<span>Eliminado!</span>'); 
       
    }
  
  );
//}
});
});
    





////////////////////////////////delete ofertados/////////////////////////////////////////7


$(document).ready(function() {

$('.p').on ("click", "#btn-unlike",function (e) {
e.preventDefault();

 let $this = $(this);

 let imgId = $(this).attr('data-id');
console.log(imgId)
  $.ajax({
    url: '/likedos/' + imgId,
    type: 'GET' 
  }) 
    .done(function(result) {
      $this.removeClass('btn-success').addClass('btn-success');

     // $this.find('i').removeClass('fa-times').addClass('fa-check');
      $this.append('<span>Eliminado!</span>'); 
       
    }
  
  );
//}
});
});
    




////////////////////////////////delete ofertatres/////////////////////////////////////////7


$(document).ready(function() {

$('.p').on ("click", "#btn-unlike",function (e) {
e.preventDefault();

 let $this = $(this);

 let imgId = $(this).attr('data-id');
console.log(imgId)
  $.ajax({
    url: '/liketres/' + imgId,
    type: 'GET' 
  }) 
    .done(function(result) {
      $this.removeClass('btn-success').addClass('btn-success');

     // $this.find('i').removeClass('fa-times').addClass('fa-check');
      $this.append('<span>Eliminado!</span>'); 
       
    }
  
  );
//}
});
});
    





////////////////////////////////delete produno/////////////////////////////////////////7


$(document).ready(function() {

$('.p').on ("click", "#btn-unlikeproduno",function (e) {
e.preventDefault();

 let $this = $(this);

 let imgId = $(this).attr('data-id');
console.log(imgId)
  $.ajax({
    url: '/likeproduno/' + imgId,
    type: 'GET' 
  }) 
    .done(function(result) {
      $this.removeClass('btn-success').addClass('btn-success');

     // $this.find('i').removeClass('fa-times').addClass('fa-check');
      $this.append('<span>Eliminado!</span>'); 
       
    }
  
  );
//}
});
});








////////////////////////////////delete prod2/////////////////////////////////////////7


$(document).ready(function() {

$('.p').on ("click", "#btn-unlikeproddos",function (e) {
e.preventDefault();

 let $this = $(this);

 let imgId = $(this).attr('data-id');
console.log(imgId)
  $.ajax({
    url: '/likeproddos/' + imgId,
    type: 'GET' 
  }) 
    .done(function(result) {
      $this.removeClass('btn-success').addClass('btn-success');

     // $this.find('i').removeClass('fa-times').addClass('fa-check');
      $this.append('<span>Eliminado!</span>'); 
       
    }
  
  );
//}
});
});








////////////////////////////////delete prod3/////////////////////////////////////////7


$(document).ready(function() {

$('.p').on ("click", "#btn-unlikeprodtres",function (e) {
e.preventDefault();

 let $this = $(this);

 let imgId = $(this).attr('data-id');
console.log(imgId)
  $.ajax({
    url: '/likeprodtres/' + imgId,
    type: 'GET' 
  }) 
    .done(function(result) {
      $this.removeClass('btn-success').addClass('btn-success');

     // $this.find('i').removeClass('fa-times').addClass('fa-check');
      $this.append('<span>Eliminado!</span>'); 
       
    }
  
  );
//}
});
});
    
    





////////////////////////////////delete 4/////////////////////////////////////////7


$(document).ready(function() {

$('.p').on ("click", "#btn-unlikeprodcuatro",function (e) {
e.preventDefault();

 let $this = $(this);

 let imgId = $(this).attr('data-id');
console.log(imgId)
  $.ajax({
    url: '/likeprodcuatro/' + imgId,
    type: 'GET' 
  }) 
    .done(function(result) {
      $this.removeClass('btn-success').addClass('btn-success');

     // $this.find('i').removeClass('fa-times').addClass('fa-check');
      $this.append('<span>Eliminado!</span>'); 
       
    }
  
  );
//}
});
});
    






////////////////////////////////delete prod5/////////////////////////////////////////7


$(document).ready(function() {

$('.p').on ("click", "#btn-unlikeprodcinco",function (e) {
e.preventDefault();

 let $this = $(this);

 let imgId = $(this).attr('data-id');
console.log(imgId)
  $.ajax({
    url: '/likeprodcinco/' + imgId,
    type: 'GET' 
  }) 
    .done(function(result) {
      $this.removeClass('btn-success').addClass('btn-success');

     // $this.find('i').removeClass('fa-times').addClass('fa-check');
      $this.append('<span>Eliminado!</span>'); 
       
    }
  
  );
//}
});
});










////////////////////////////////delete prod3/////////////////////////////////////////7


$(document).ready(function() {

$('.p').on ("click", "#btn-unlike",function (e) {
e.preventDefault();

 let $this = $(this);

 let imgId = $(this).attr('data-id');
console.log(imgId)
  $.ajax({
    url: '/likeprodseis/' + imgId,
    type: 'GET' 
  }) 
    .done(function(result) {
      $this.removeClass('btn-success').addClass('btn-success');

     // $this.find('i').removeClass('fa-times').addClass('fa-check');
      $this.append('<span>Eliminado!</span>'); 
       
    }
  
  );
//}
});
});








////////////////////////////////delete prod3/////////////////////////////////////////7


$(document).ready(function() {

$('.p').on ("click", "#btn-unlike",function (e) {
e.preventDefault();

 let $this = $(this);

 let imgId = $(this).attr('data-id');
console.log(imgId)
  $.ajax({
    url: '/likeprodsiete/' + imgId,
    type: 'GET' 
  }) 
    .done(function(result) {
      $this.removeClass('btn-success').addClass('btn-success');

     // $this.find('i').removeClass('fa-times').addClass('fa-check');
      $this.append('<span>Eliminado!</span>'); 
       
    }
  
  );
//}
});
});








////////////////////////////////delete prod3/////////////////////////////////////////7


$(document).ready(function() {

$('.p').on ("click", "#btn-unlike",function (e) {
e.preventDefault();

 let $this = $(this);

 let imgId = $(this).attr('data-id');
console.log(imgId)
  $.ajax({
    url: '/likeprodocho/' + imgId,
    type: 'GET' 
  }) 
    .done(function(result) {
      $this.removeClass('btn-success').addClass('btn-success');

     // $this.find('i').removeClass('fa-times').addClass('fa-check');
      $this.append('<span>Eliminado!</span>'); 
       
    }
  
  );
//}
});
});







////////////////////////////////delete prod3/////////////////////////////////////////7


$(document).ready(function() {

$('.p').on ("click", "#btn-unlike",function (e) {
e.preventDefault();

 let $this = $(this);

 let imgId = $(this).attr('data-id');
console.log(imgId)
  $.ajax({
    url: '/likeprodnueve/' + imgId,
    type: 'GET' 
  }) 
    .done(function(result) {
      $this.removeClass('btn-success').addClass('btn-success');

     // $this.find('i').removeClass('fa-times').addClass('fa-check');
      $this.append('<span>Eliminado!</span>'); 
       
    }
  
  );
//}
});
});






////////////////////////////////delete prod3/////////////////////////////////////////7


$(document).ready(function() {

$('.p').on ("click", "#btn-unlike",function (e) {
e.preventDefault();

 let $this = $(this);

 let imgId = $(this).attr('data-id');
console.log(imgId)
  $.ajax({
    url: '/likeproddiez/' + imgId,
    type: 'GET' 
  }) 
    .done(function(result) {
      $this.removeClass('btn-success').addClass('btn-success');

     // $this.find('i').removeClass('fa-times').addClass('fa-check');
      $this.append('<span>Eliminado!</span>'); 
       
    }
  
  );
//}
});
});








////////////////////////////////delete prod3/////////////////////////////////////////7


$(document).ready(function() {

$('.p').on ("click", "#btn-unlike",function (e) {
e.preventDefault();

 let $this = $(this);

 let imgId = $(this).attr('data-id');
console.log(imgId)
  $.ajax({
    url: '/likeprodonce/' + imgId,
    type: 'GET' 
  }) 
    .done(function(result) {
      $this.removeClass('btn-success').addClass('btn-success');

     // $this.find('i').removeClass('fa-times').addClass('fa-check');
      $this.append('<span>Eliminado!</span>'); 
       
    }
  
  );
//}
});
});







////////////////////////////////delete prod3/////////////////////////////////////////7


$(document).ready(function() {

$('.p').on ("click", "#btn-unlike",function (e) {
e.preventDefault();

 let $this = $(this);

 let imgId = $(this).attr('data-id');
console.log(imgId)
  $.ajax({
    url: '/likeproddoce/' + imgId,
    type: 'GET' 
  }) 
    .done(function(result) {
      $this.removeClass('btn-success').addClass('btn-success');

     // $this.find('i').removeClass('fa-times').addClass('fa-check');
      $this.append('<span>Eliminado!</span>'); 
       
    }
  
  );
//}
});
});









////////////////////////////////delete prod3/////////////////////////////////////////7


$(document).ready(function() {

$('.p').on ("click", "#btn-unlike",function (e) {
e.preventDefault();

 let $this = $(this);

 let imgId = $(this).attr('data-id');
console.log(imgId)
  $.ajax({
    url: '/likeprodtrece/' + imgId,
    type: 'GET' 
  }) 
    .done(function(result) {
      $this.removeClass('btn-success').addClass('btn-success');

     // $this.find('i').removeClass('fa-times').addClass('fa-check');
      $this.append('<span>Eliminado!</span>'); 
       
    }
  
  );
//}
});
});






////////////////////////////////delete prod3/////////////////////////////////////////7


$(document).ready(function() {

$('.p').on ("click", "#btn-unlike",function (e) {
e.preventDefault();

 let $this = $(this);

 let imgId = $(this).attr('data-id');
console.log(imgId)
  $.ajax({
    url: '/likeprodcatorce/' + imgId,
    type: 'GET' 
  }) 
    .done(function(result) {
      $this.removeClass('btn-success').addClass('btn-success');

     // $this.find('i').removeClass('fa-times').addClass('fa-check');
      $this.append('<span>Eliminado!</span>'); 
       
    }
  
  );
//}
});
});






////////////////////////////////delete prod3/////////////////////////////////////////7


$(document).ready(function() {

$('.p').on ("click", "#btn-unlike",function (e) {
e.preventDefault();

 let $this = $(this);

 let imgId = $(this).attr('data-id');
console.log(imgId)
  $.ajax({
    url: '/likeprodquince/' + imgId,
    type: 'GET' 
  }) 
    .done(function(result) {
      $this.removeClass('btn-success').addClass('btn-success');

     // $this.find('i').removeClass('fa-times').addClass('fa-check');
      $this.append('<span>Eliminado!</span>'); 
       
    }
  
  );
//}
});
});





////////////////////////////////delete prod3/////////////////////////////////////////7


$(document).ready(function() {

$('.p').on ("click", "#btn-unlike",function (e) {
e.preventDefault();

 let $this = $(this);

 let imgId = $(this).attr('data-id');
console.log(imgId)
  $.ajax({
    url: '/likeproddieciseis/' + imgId,
    type: 'GET' 
  }) 
    .done(function(result) {
      $this.removeClass('btn-success').addClass('btn-success');

     // $this.find('i').removeClass('fa-times').addClass('fa-check');
      $this.append('<span>Eliminado!</span>'); 
       
    }
  
  );
//}
});
});






////////////////////////////////delete prod3/////////////////////////////////////////7


$(document).ready(function() {

$('.p').on ("click", "#btn-unlike",function (e) {
e.preventDefault();

 let $this = $(this);

 let imgId = $(this).attr('data-id');
console.log(imgId)
  $.ajax({
    url: '/likeproddiecisiete/' + imgId,
    type: 'GET' 
  }) 
    .done(function(result) {
      $this.removeClass('btn-success').addClass('btn-success');

     // $this.find('i').removeClass('fa-times').addClass('fa-check');
      $this.append('<span>Eliminado!</span>'); 
       
    }
  
  );
//}
});
});







////////////////////////////////delete prod3/////////////////////////////////////////7


$(document).ready(function() {

$('.p').on ("click", "#btn-unlike",function (e) {
e.preventDefault();

 let $this = $(this);

 let imgId = $(this).attr('data-id');
console.log(imgId)
  $.ajax({
    url: '/likeproddieciocho/' + imgId,
    type: 'GET' 
  }) 
    .done(function(result) {
      $this.removeClass('btn-success').addClass('btn-success');

     // $this.find('i').removeClass('fa-times').addClass('fa-check');
      $this.append('<span>Eliminado!</span>'); 
       
    }
  
  );
//}
});
});