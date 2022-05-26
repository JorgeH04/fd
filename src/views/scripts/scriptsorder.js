$(document).ready(function() {
    //$(function() {
    
        //$('#btn-order').click(function (e) {
          $('.table-bordered ').on ("click", "#btn-order",function (e) {
          e.preventDefault();
    
           // let imgId = $(this).data('order.id') 
           let $this = $(this);
    
           let imgId = $(this).attr('data-id');
           //let imgId = $target.attr('order.id')
          console.log(imgId)
          //  console.log(imgId)
            $.ajax({
              url: '/order/turn/' + imgId,
              type: 'GET'
            })
              .done(function(result) {
                $this.removeClass('btn-danger').addClass('btn-success');
                //$this.removeClass('btn-success').addClass('btn-danger');
               // $this.find('i').removeClass('fa-times').addClass('fa-check');
               // $this.append('<span>Deleted!</span>'); 
              });
          //}
       
        //}
        });
      });
      
    
    
    
    
    
      $(document).ready(function() {
        //$(function() {
        
            //$('#btn-order').click(function (e) {
              $('.table-bordered ').on ("click", "#btn-delete",function (e) {
              e.preventDefault();
        
               // let imgId = $(this).data('order.id') 
               let $this = $(this);
        
               let imgId = $(this).attr('data-id');
               //let imgId = $target.attr('order.id')
              console.log(imgId)
              //  console.log(imgId)
                $.ajax({
                  url: '/order/delete/' + imgId,
                  type: 'GET' 
                })
                  .done(function(result) {
                    $this.removeClass('btn-danger').addClass('btn-success');
                   // $this.find('i').removeClass('fa-times').addClass('fa-check');
                    $this.append('<span>Eliminado!</span>'); 
                  });
              //}
            });
          });
          
    
     
    
    
    
              $(document).ready(function() {
                //$(function() {
                
                    //$('#btn-order').click(function (e) {
                      $('.pro-quantity ').on ("click", "#btn-up",function (e) {
                      e.preventDefault();
                
                       // let imgId = $(this).data('order.id') 
                       let $this = $(this);
                
                       let imgId = $(this).attr('data-id');
                       //let imgId = $target.attr('order.id')
                      console.log(imgId)
                      //  console.log(imgId)
                        $.ajax({  
                          url: '/sumar/' + imgId,
                          type: 'GET'
                        })
                          .done(function(result) {
                            $this.removeClass('btn-danger').addClass('btn-success');
                           // $this.find('i').removeClass('fa-times').addClass('fa-check');
                            //$this.append('<span>Eliminado!</span>'); 
                          });
                      //}
                    });
                  });
                  