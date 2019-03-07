jQuery(document).ready(function($){

	$(function() {

	  $('.contact-form').validate({

	    errorElement: "label",
	  	wrapper: "div",
	  	errorPlacement: function(error, element) {
	  		error.insertAfter( element.next().next() );
	  		error.wrap("<span class='error-message'></span>");
	  	},

	  	rules: {
	  		fullName: {
	  			required: true
	  		},
	  		email: {
	  			required: true,
	  			email: true
	  		},
	  		message: {
	  			required: true
	  		}
	  	},

	  	messages: {
	  		fullName: {
	  			required: "Please enter your full name."
	  		},
	  		email: {
	  			required: "Please enter your email address.",
	  			email: "Please enter a valid email address."
	  		},
	  		message: {
	  			required: "Please enter your message."
	  		}
	  	},

	  });
	});

});
