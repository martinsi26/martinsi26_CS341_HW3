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
function monthFunction(month) {
	// change the month to whatever the user clicked
	$("#month").text(month);

	// Issue a POST request to the server
	$.post("/orders", {month}, function(data) {
		$("#orderList").empty()

		if(Object.keys(data).length == 0) {
			const blankOrdersText = document.createElement("li")
			blankOrdersText.innerHTML = "No orders :("
			$("#orderList").append(blankOrdersText)
			return
		}

		// update the list of orders
		Object.keys(data).forEach(topping => {
			const listItem = document.createElement("li")
			listItem.innerHTML = data[topping] + " " + topping
			$("#orderList").append(listItem)
		})
	});

	$.post("./neworder", {quantity: quantity, toppings: toppings, notes: notes}, function(data, status) {
		$("#orderList").empty()

		if(Object.keys(data).length == 0) {
			const blankOrdersText = document.createElement("li")
			blankOrdersText.innerHTML = "No orders"
			$("#orderList").append(blankOrdersText)
			return
		}

		// update the list of orders
		Object.keys(data).forEach(topping => {
			const listItem = document.createElement("li")
			listItem.innerHTML = data[topping] + " " + topping
			$("#orderList").append(listItem)
		})
	});
}