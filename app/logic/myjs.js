$(document).ready(function() {

	$("#submit").click(function(){

		
		if ( $('#nameInput').val() == null || $('#imageInput').val() == null ) {
			alert("Please fill out all questions!");
			return false;
		};

		
		for (var i = 1; i <= 10; i++) {
			if ( $("input:radio[name=question"+i+"]:checked").val() == null ) {
				alert("Please fill out all questions!");
				return false;
			};
		};

	
		var scoreArray = [];

		
		for (var i = 1; i <= 10; i++) {
			scoreArray.push( $("input:radio[name=question"+i+"]:checked").val() );
		}

		
		var person = {
			name: $('#nameInput').val(),
			image: $('#imageInput').val(),
			scores: scoreArray
		};

		var currentURL = window.location.origin;

		
		$.post(currentURL + '/api/survey', person).done(function(data){

			// Opens our modal.
			$('#modal1').openModal();

			// Populate out modal with information about the match.
			$('#modalArea').empty()
			var picture = '<img class="circle" src="'+data.image+'"">';
			$('#modalArea').append("<h5>" + data.name + " !</h5>")
			$('#modalArea').append(picture)

		});

	});

});