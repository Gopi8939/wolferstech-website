$(document).ready(function() {
    $('#email-form').submit(function(event) {
      
      event.preventDefault();
       var formData = {
        name: $('#name').val(),
        email: $('#email').val(),
        message: $('#message').val(),
        mobile: $('#phone').val(),
      };
      $.ajax({
        url: 'https://apis.selfmade.one/api/contact/send',
        type: 'POST',
        data: formData,
        success: function(response,data,textSuccess,xhr) {
            console.log(response);
          if(response['message']=="success"){
           console.log("success sent email");
           
           d =new Dialog("Thank you!"," Your form submission has been received.");
       
           d.show();
           setTimeout(function() {
            window.location.href = "/";
        }, 2500);
          }
        },
        error: function(xhr, status, error,response ) {
            d =new Dialog("Oops!","Something went wrong while sending your email.");
            d.show();
        }
      });
    
    //   event.submit;

    });});
