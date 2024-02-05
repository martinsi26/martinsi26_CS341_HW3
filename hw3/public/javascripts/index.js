
orderEvent = function(event) {
	if($("#notesBox").val().toLowerCase() == "vegan") {
		alert("Warning! Cheesecake contains dairy!");
	} else {
		$("#toppings").text("Thank you! Your Order has been placed");
		$("#notes").hide();
		$("#orderButton").hide();
		$("#notesBox").hide();
		$("table").hide();
	}
}

$(function() {
	$("#orderButton").click(orderEvent);
});
			
function monthFunction(clicked_id) {
	$("#month").text(clicked_id);
}