$(document).ready(function() {
	//Additional methods for registration-box
	$.validator.addMethod('fullName', function(value, elem) {
		return /([A-Z]?[a-z]){3,15}\s([A-Z]?[a-z]){3,15}\b/.test(value);
	}, 'Enter your name and surname');
	
	$.validator.addMethod('phone', function(value, elem) {
		return /\+(\d){10,12}\b/.test(value);
	}, 'Enter phone in international format');
	
	$.validator.addMethod('username', function(value, elem) {
		return /[a-z]\b/.test(value);
	}, 'Allowed only lowercase letters');
	

	$('#regBox').validate({
		rules: {
			fullName: {
				required: true,
				fullName: true
			},

			email: {
				required: true,
				email: true
			},

			phone: {
				required: true,
				phone: true
			},

			username: {
				required: true,
				username: true,
				minlength: 5,
				maxlength: 20
			}
		},

		messages: {
			fullName: {
				required: 'You didn\'t entered your name and surname',
			},

			email: {
				required: 'E-mail is required',
				email: 'Please enter your e-mail in correct format'
			},

			phone: {
				required: 'Enter your phone',
			},
	
			username: {
				required: 'Enter your username',
				minlength: 'Please, enter at least 5 characters',
				maxlength: 'Value is too long'
			}
		},

		errorPlacement: function (err, elem) {
			err.appendTo(elem.parent().find('.err-msg'));
		}
	});

	$('#feedback').validate({
		rules: {
			email: {
				required: true,
				email: true
			},
			comment: {
				required: true,
				minlength: 10
			}
		},

		messages: {
			email: {
				required: 'Please, enter e-mail',
				email: 'Enter e-mail in valid format'
			},
			comment: {
				required: 'Type your comment here',
				minlength: 'Please, enter at least 10 characters'
			}
		},

		errorPlacement: function (err, elem) {
			err.appendTo(elem.parent().find('.err-msg'));
		}
	});
})
