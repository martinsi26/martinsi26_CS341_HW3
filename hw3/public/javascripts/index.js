// Simon Martin

// function for when you click order
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

// caller for order function
$(function() {
	$("#orderButton").click(orderEvent);
});

// function for changing the months
function monthFunction(clicked_id) {
	// change the month to whatever the user clicked
	$("#month").text(clicked_id);

	// Issue a POST request to the server
	$.post("/orders", function(data, status) {
		const obj = JSON.parse(data);
		document.getElementById("list1").innerHTML = obj[0].quantity + " " + obj[0].topping 
		document.getElementById("list2").innerHTML = obj[1].quantity + " " + obj[1].topping 
		document.getElementById("list3").innerHTML = obj[2].quantity + " " + obj[2].topping 
	});
}