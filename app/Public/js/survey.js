console.log('server.js');
// var config = {
// 	".chosen-select": {},
// 	".chosen-select-deselect": {
// 		allow_single_deselect: true
// 	},
// 	".chosen-select-no-single": {
// 		disable_search_threshold: 10
// 	},
// 	".chosen-select-no-results": {
// 		no_results_text: "Error."
// 	},
// 	".chosen-select-width": {
// 		width: "80%"
// 	}
// };

// for (var selector in config) {
// 	$(selector).chosen(config[selector]);
// }

// $("#submit").on("click", function (event) {
// 	event.preventDefault();

// 	function validateForm() {
// 		var isValid = true;
// 		$(".form-control").each(function () {
// 			if ($(this).val() === "") {
// 				isValid = false;
// 			}
// 		});

// 		$(".chosen-select").each(function () {

// 			if ($(this).val() === "") {
// 				isValid = false;
// 			}
// 		});
// 		return isValid;
// 	}

// 	if (validateForm()) {
// 		var uD = {
// 			name: $("#name").val(),
// 			photo: $("#photo").val(),
// 			scores: [
// 				$("#q1").val(),
// 				$("#q2").val(),
// 				$("#q3").val(),
// 				$("#q4").val(),
// 				$("#q5").val(),
// 				$("#q6").val(),
// 				$("#q7").val(),
// 				$("#q8").val(),
// 				$("#q9").val(),
// 				$("#q10").val()
// 			]
// 		};

// 		// AJAX postfriends API.
// 		$.post("/api/friends", uD, function (data) {

// 			$("#match-name").text(data.name);
// 			$("#match-img").attr("src", data.photo);
// 			$("#results-modal").modal("toggle");

// 		});
// 	} else {
// 		alert("Please fill out all fields.");
// 	}
// });
