// $(document).ready(function() {
  
//   $('.item').on ("click", "#btn-like",function (e) {
//   e.preventDefault();

//    let $this = $(this);
  
//    let imgId = $(this).attr('data-id');
//   console.log(imgId)
//     $.ajax({
//       url: '/sumar/' + imgId,
//       type: 'GET'
//     }) 
//       .done(function(result) {
//        $this.removeClass('button button-outline-secondary').addClass('btn-danger');
//         $this.removeClass('far fa-heart').addClass('fas fa-heart');
//        $this.find('i').removeClass('fa-times').addClass('fa-check');
//        $this.append('<span>Deleted!</span>'); 
           
//       }
    
//     );
//   }
// });
// });


   
$(function() {
  
  // Delete Button Request
  $('#btn-like').click(function (e) {
    e.preventDefault();
    let $this = $(this);
    //const response = confirm('Are you sure you want to delete this image?');
    //if (response) {
      let imgId = $(this).data('id');
      $.ajax({
        url: '/sumar/' + imgId,
        type: 'GET' 
      })
        .done(function(result) {
          $('input-counter__plus').text(data.qty);
      
        });
   // }
  });
});
 




$(function() {
  
    // Delete Button Request
    $('#btn-delete').click(function (e) {
      e.preventDefault();
      let $this = $(this);
      const response = confirm('Are you sure you want to delete this image?');
      if (response) {
        let imgId = $(this).data('id');
        $.ajax({
          url: '/images/' + imgId,
          type: 'DELETE'
        })
          .done(function(result) {
            $this.removeClass('btn-danger').addClass('btn-success');
            $this.find('i').removeClass('fa-times').addClass('fa-check');
            $this.append('<span>Deleted!</span>');
          });
      }
    });
  });







  
 ///////////////////////////ofertauno///////////////////////////////////
$(document).ready(function() {

    $('.quick').on ("click", "#btn-like",function (e) {
    e.preventDefault();

     let $this = $(this);

     let imgId = $(this).attr('data-id');
    console.log(imgId)
      $.ajax({
        url: '/like/' + imgId,
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





 //////////////////////////////ofertados////////////////////////////////



$(document).ready(function() {

  $('.quick').on ("click", "#btn-like",function (e) {
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





 ///////////////////////////ofertatres///////////////////////////////////


 $(document).ready(function() {

  $('.quick').on ("click", "#btn-likedestacados",function (e) {
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




 ///////////////////////////produno///////////////////////////////////


 $(document).ready(function() {

  $('.quick').on ("click", "#btn-likepuno",function (e) {
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






 ///////////////////////////proddos///////////////////////////////////


 $(document).ready(function() {

  $('.quick').on ("click", "#btn-likepdos",function (e) {
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






 ///////////////////////////prodtres///////////////////////////////////


 $(document).ready(function() {

  $('.quick').on ("click", "#btn-likeptres",function (e) {
  e.preventDefault();

   let $this = $(this);

   let imgId = $(this).attr('data-id');
  console.log(imgId)
    $.ajax({
      url: '/likeprodtres/' + imgId,
      type: 'GET'
    }) 
      .done(function(result) {
        $this.removeClass('far fa-heart').addClass('fas fa-heart');;
 
       // $this.find('i').removeClass('fa-times').addClass('fa-check');
       // $this.append('<span>Deleted!</span>'); 
        
      }
    
    );
  //}
});
});




 ///////////////////////////prodcuatro///////////////////////////////////


 $(document).ready(function() {

  $('.quick').on ("click", "#btn-likepcuatro",function (e) {
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






 ///////////////////////////prodcinco///////////////////////////////////


 $(document).ready(function() {

  $('.quick').on ("click", "#btn-like",function (e) {
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





 ///////////////////////////prod6///////////////////////////////////


 $(document).ready(function() {

  $('.quick').on ("click", "#btn-like",function (e) {
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





 ///////////////////////////prodc7///////////////////////////////////


 $(document).ready(function() {

  $('.quick').on ("click", "#btn-like",function (e) {
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






 ///////////////////////////prodc8o///////////////////////////////////


 $(document).ready(function() {

  $('.quick').on ("click", "#btn-like",function (e) {
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





 ///////////////////////////prodc9///////////////////////////////////


 $(document).ready(function() {

  $('.quick').on ("click", "#btn-like",function (e) {
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




 ///////////////////////////prodcinco///////////////////////////////////


 $(document).ready(function() {

  $('.quick').on ("click", "#btn-like",function (e) {
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





 ///////////////////////////prodcinco///////////////////////////////////


 $(document).ready(function() {

  $('.quick').on ("click", "#btn-like",function (e) {
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



 ///////////////////////////prodcinco///////////////////////////////////


 $(document).ready(function() {

  $('.quick').on ("click", "#btn-like",function (e) {
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




 ///////////////////////////prodcinco///////////////////////////////////


 $(document).ready(function() {

  $('.quick').on ("click", "#btn-like",function (e) {
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



 ///////////////////////////prodcinco///////////////////////////////////


 $(document).ready(function() {

  $('.quick').on ("click", "#btn-like",function (e) {
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



 ///////////////////////////prodcinco///////////////////////////////////


 $(document).ready(function() {

  $('.quick').on ("click", "#btn-like",function (e) {
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



 ///////////////////////////prodcinco///////////////////////////////////


 $(document).ready(function() {

  $('.quick').on ("click", "#btn-like",function (e) {
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




 ///////////////////////////prodcinco///////////////////////////////////


 $(document).ready(function() {

  $('.quick').on ("click", "#btn-like",function (e) {
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




 ///////////////////////////prodcinco///////////////////////////////////


 $(document).ready(function() {

  $('.quick').on ("click", "#btn-like",function (e) {
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
