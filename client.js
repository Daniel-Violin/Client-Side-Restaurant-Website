let aragorn = {
	name: "Aragorn's Orc BBQ", //The name of the restaurant
	min_order: 20, //The minimum order amount required to place an order
	delivery_fee: 5, //The delivery charge for this restaurant
	//The menu
	menu: {
		//First category
		"Appetizers": {
			//First item of this category
			0: {
				name: "Orc feet",
				description: "Seasoned and grilled over an open flame.", //
				price: 5.50
			},
			1: {
				name: "Pickled Orc fingers",
				description: "Served with warm bread, 5 per order.",
				price: 4.00
			},
			2: { //Thank you Kiratchii
				name: "Sauron's Lava Soup",
				description: "It's just really spicy water.",
				price: 7.50
			},
			3: {
				name: "Eowyn's (In)Famous Stew",
				description: "Bet you can't eat it all.",
				price: 0.50
			},
			4: {
				name: "The 9 rings of men.",
				description: "The finest of onion rings served with 9 different dipping sauces.",
				price: 14.50
			}
		},
		"Combos": {
			5: {
				name: "Buying the Farm",
				description: "An arm and a leg, a side of cheek meat, and a buttered biscuit.",
				price: 15.99
			},
			6: {
				name: "The Black Gate Box",
				description: "Lots of unidentified pieces. Serves 50.",
				price: 65.00
			},
			7: {//Thanks to M_Sabeyon
				name: "Mount Doom Roast Special with Side of Precious Onion Rings.",
				description: "Smeagol's favorite.",
				price: 15.75
			},
			8: { //Thanks Shar[TA]
				name: "Morgoth's Scorched Burgers with Chips",
				description: "Blackened beyond recognition.",
				price: 13.33
				
			},
			9: {
				name: "Slab of Lurtz Meat with Greens.",
				description: "Get it while supplies last.",
				price: 17.50
			},
			10: {
				name: "Rangers Field Feast.",
				description: "Is it chicken? Is it rabbit? Or...",
				price: 5.99
			}
		},
		"Drinks": {
			11: {
				name: "Orc's Blood Mead",
				description: "It's actually raspberries - Orc's blood would be gross.",
				price: 5.99
			},
			12: {
				name: "Gondorian Grenache",
				description: "A fine rose wine.",
				price: 7.99
			},
			13: {
				name: "Mordor Mourvedre",
				description: "A less-fine rose wine.",
				price: 5.99
			}
		}	
	}
};

let legolas = {
	name: "Lembas by Legolas",
	min_order: 15,
	delivery_fee: 3.99,
	menu: {
		"Lembas": {
			0: {
				name: "Single",
				description: "One piece of lembas.",
				price: 3
			},
			1: {
				name: "Double",
				description: "Two pieces of lembas.",
				price: 5.50
			},
			2: { 
				name: "Triple",
				description: "Three pieces, which should be more than enough.",
				price: 8.00
			}
		},
		"Combos": {
			3: {
				name: "Second Breakfast",
				description: "Two pieces of lembas with honey.",
				price: 7.50
			},
			4: {
				name: "There and Back Again",
				description: "All you need for a long journey - 6 pieces of lembas, salted pork, and a flagon of wine.",
				price: 25.99
			},
			5: {
				name: "Best Friends Forever",
				description: "Lembas and a heavy stout.",
				price: 6.60
			}
		}
	}
};

let frodo = {
	name: "Frodo's Flapjacks",
	min_order: 35,
	delivery_fee: 6,
	menu: {
		"Breakfast": {
			0: {
				name: "Hobbit Hash",
				description: "Five flapjacks, potatoes, leeks, garlic, cheese.",
				price: 9.00
			},
			1: {
				name: "The Full Flapjack Breakfast",
				description: "Eight flapjacks, two sausages, 3 eggs, 4 slices of bacon, beans, and a coffee.",
				price: 14.00
			},
			2: { 
				name: "Southfarthing Slammer",
				description: "15 flapjacks and 2 pints of syrup.",
				price: 12.00
			}
			
		},
		"Second Breakfast": {
			3: {
				name: "Beorning Breakfast",
				description: "6 flapjacks smothers in honey.",
				price: 7.50
			},
			4: {
				name: "Shire Strawberry Special",
				description: "6 flapjacks and a hearty serving of strawberry jam.",
				price: 8
			},
			5: {
				name: "Buckland Blackberry Breakfast",
				description: "6 flapjacks covered in fresh blackberries. Served with a large side of sausage.",
				price: 14.99
			}
		},
		"Elevenses": {
			6: {
				name: "Lembas",
				description: "Three pieces of traditional Elvish Waybread",
				price: 7.70
			},
			7: {
				name: "Muffins of the Marish",
				description: "A variety of 8 different types of muffins, served with tea.",
				price: 9.00
			},
			8: {
				name: "Hasty Hobbit Hash",
				description: "Potatoes with onions and cheese. Served with coffee.",
				price: 5.00
			}
		},
		"Luncheon": {
			9: {
				name: "Shepherd's Pie",
				description: "A classic. Includes 3 pies.",
				price: 15.99
			},
			10: {
				name: "Roast Pork",
				description: "An entire pig slow-roasted over a fire.",
				price: 27.99
			},
			11: {
				name: "Fish and Chips",
				description: "Fish - fried. Chips - nice and crispy.",
				price: 5.99
			}
		},
		"Afternoon Tea": {
			12: {
				name: "Tea",
				description: "Served with sugar and cream.",
				price: 3
			},
			13: {
				name: "Coffee",
				description: "Served with sugar and cream.",
				price: 3.50
			},
			14: {
				name: "Cookies and Cream",
				description: "A dozen cookies served with a vat of cream.",
				price: 15.99
			},
			15: {
				name: "Mixed Berry Pie",
				description: "Fresh baked daily.",
				price: 7.00
			}
		},
		"Dinner": {
			16: {
				name: "Po-ta-to Platter",
				description: "Boiled. Mashed. Stuck in a stew.",
				price: 6
			},
			17: {
				name: "Bree and Apple",
				description: "One wheel of brie with slices of apple.",
				price: 7.99
			},
			18: {
				name: "Maggot's Mushroom Mashup",
				description: "It sounds disgusting, but its pretty good",
				price: 6.50
			},
			19: {
				name: "Fresh Baked Bread",
				description: "A whole loaf of the finest bread the Shire has to offer.",
				price: 6
			},
			20: {
				name: "Pint of Ale",
				description: "Yes, it comes in pints.",
				price: 5
			}
		},
		"Supper": {
			21: {
				name: "Sausage Sandwich",
				description: "Six whole sausages served on a loaf of bread. Covered in onions, mushrooms and gravy.",
				price: 15.99
			},
			22: {
				name: "Shire Supper",
				description: "End the day as you started it, with a dozen flapjacks, 5 eggs, 3 sausages, 7 pieces of bacon, and a pint of ale.",
				price: 37.99
			}
		}
	}
};

let restaurants = [aragorn, legolas, frodo];
var dropdownmenu = document.getElementById("dropdown-menu");
let order = []
let curr;
let index = '';
//init function
function init(){
//creates dropdown dynamically
for(var i = 0; i < restaurants.length; i++){
	let res = restaurants[i].name;
    var option = document.createElement("OPTION");
	option.textContent = res;
	option.value = res;
    dropdownmenu.appendChild(option);     
	}
//call to print all the initial data for the currently selected restaurant
change();
}

//handles the different types of dropdown changes
function ddChange(){
	//prompt only shows up if an order exists
	if (order.length > 0){
		let decision  = confirm("Press \"Ok\" to change restaurants, doing so will clear your current order");
		//if confirm, change and delete order
		if (decision) {
			index = document.getElementById("dropdown-menu").selectedIndex;
			change();
		//stay
		} else {
			document.getElementById("dropdown-menu").selectedIndex = index;
		}
	//otherwise change normally
	}else{
		change();
	}
}
//handles initial restaurant and later dropdown changes
function change(){
	
	let currentRes = dropdownmenu.options[dropdownmenu.selectedIndex].text;
	for (let i = 0; i < restaurants.length; i++){
		if(restaurants[i].name == currentRes){
			curr = restaurants[i];
			print(restaurants[i]);
			clearOrder();
		}
	}
	
}

function print(obj){
	//call to function that prints the left column
	printMenuCategories(obj);
	//call to function that prints the middle column
	printMenu(obj);
	
	//print the restaurant name
	let name = document.getElementById("resName");
	name.textContent = curr["name"] + " Menu";
	
	//print the restaurant minimum order amount
	let min = document.getElementById("resMin");
	min.textContent = "Minimum order: $" + curr["min_order"].toFixed(2);
	
	//print the restauarant delivery charge
	let charge = document.getElementById("resCharge");
	charge.textContent = "Delivery Fee: $" + curr["delivery_fee"].toFixed(2);
	
	
	
}
//Prints the menu categories in the left column and creates the hyperlink shortcuts
function printMenuCategories(res){
	let obj = res["menu"];
	//clear old data
	let categories = document.getElementById("categories");
	categories.innerHTML = "";
	
	for (let type in obj){
		//create each category and print them to left column
		let category = document.createElement("li");
		let text = type;
		category.textContent = text;
		category.value = text;
		category.innerHTML = "<a href =\"#"+type+"\"><u>" +text.bold()+ "</u></a>";
		categories.appendChild(category);
		
	}
}
//prints the menu
function printMenu(res) {
	let obj = res["menu"];
	
    let menu = document.getElementById("menu");
	menu.innerHTML = "";
	
	let i = 1;
	for (let type in obj){
		
		//Creating the Menu Categories
		let category = document.createElement("li");
		let text = type+ ":";
		category.textContent = text;
		category.value = text;
		
		//Styling the Menu Categories
		category.style.color = "Maroon";
		category.innerHTML = "<u>" +text.bold()+ "</u>";
		category.id = type;
		
		menu.appendChild(category);

		//creating each menu item
		let item = document.createElement("dl");
		menu.appendChild(item);
		
		for (let menuItem in obj[type]){
			//Creating the title (name, price) for each menu item
			let itemInfo = document.createElement("dt");
			text1 = obj[type][menuItem].name +", $"+obj[type][menuItem].price.toFixed(2);
			itemInfo.textContent = text1;
			itemInfo.value = text1;
			item.appendChild(itemInfo);
			
			//Creating the + images and giving them an onClick event
			let imgAdd = document.createElement("img");
			imgAdd.src = "add.jpg";
			imgAdd.height = "20";
			imgAdd.width = "20";
			imgAdd.align = "right";
			imgAdd.id = i-1;
			imgAdd.addEventListener("click", function(){addToOrder(obj[type][menuItem].name, obj[type][menuItem].price.toFixed(2))});
			item.appendChild(imgAdd);
			
			itemInfo.innerHTML = text1.italics().bold();
			
			//Creating the description of each menu item
			let itemDesc = document.createElement("dd");
			text2 = obj[type][menuItem].description;
			itemDesc.textContent = text2;
			itemDesc.value = text2;
			item.appendChild(itemDesc);
			i++;
		}
	}
}	
//handles adding foodstuffs to order
function addToOrder(food, val){
	let isNew = true;
	for (let i = 0; i < order.length; i++){
		//if foodstuff is in the order already, incrememnt price and quantity
		if (order[i].name == food){
			order[i].qty += 1;
			order[i].total += order[i].price;
			isNew = false;
		}
	}
	//if foodstuff isnt already in the order, put it in
	if (isNew == true){
		//custom object holding below data makes adding and removing easier
		let item = {name: food, price: parseFloat(val), qty: 1, total: parseFloat(val)};
		order.push(item);
	}
	
	updateOrder();
}
//handles removing foodstuffs from order
function removeFromOrder(food){
	let elementToRemove = 0;
	let del = false;
	
	for (let i = 0; i < order.length; i++){
		//finds the food to change
		if(order[i].name == food){
			order[i].qty -= 1;
			order[i].total -= order[i].price;
			//if the food should no longer be on the menu, update our temporary variables
			if (order[i].qty < 1){
				del = true;
				elementToRemove = i;
			}
				
		}
	}
	//if we should remove the element entirely (quantity hit 0)
	if (del){
		//remove foodstuff object from order
		order.splice(elementToRemove, 1);
	}
	updateOrder();
	
}
//the confirm order button activates this function
function submitOrder(){
	alert("You're order has been confirmed and will be arriving shortly!\n Thank you for your patronage!");
	//clears current order after alert
	clearOrder()
}
//clears most of the data on the screen
function clearOrder(){
	order = [];
	document.getElementById("summary").innerHTML ="";
	document.getElementById("subTotal").textContent = "";
	document.getElementById("delivery").textContent = "";
	document.getElementById("tax").textContent = "";
	document.getElementById("totalprice").textContent = "";
	//call to ensure that the button and warning in the order summary are reset
	checkOrder(Total()[1]);

}

//updates the order when something is added or removed, draws the remove buttons
function updateOrder(){
	let orderl = document.getElementById("summary");
	orderl.innerHTML = "";
	for (let i = 0; i < order.length; i++){
		//displays name and quantity of item
		let itemData = document.createElement("dt");
		let text = order[i].name +", Quantity: "+order[i].qty;
		itemData.textContent = text;
		itemData.value = text;
		orderl.appendChild(itemData);
		
		//draws remove image and appends to ul
		let imgRemove = document.createElement("img");
		imgRemove.src = "remove.jpg";
		imgRemove.align = "right";
		imgRemove.height = "20";
		imgRemove.width = "20";
		imgRemove.id = i;
		imgRemove.addEventListener("click", function(){removeFromOrder(order[i].name)});
		orderl.appendChild(imgRemove);
		
		//displays total price of item
		let itemPrice = document.createElement("dd");
		let text2 = "$"+ order[i].total.toFixed(2)
		itemPrice.textContent = text2;
		itemPrice.value = text2;
		
		itemData.appendChild(itemPrice);
		orderl.appendChild(itemData);
	
		
	}
	updateTotal();	
}

//handles the button and warning so that they become usable when the minimum is achieved 
function checkOrder(subtotal){
	let warn = document.getElementById("warning");
	let btn = document.getElementById("orderbtn");
	//if minimum is not achieved, show warning and disable button
	if (subtotal < curr["min_order"]){
		warn.textContent = "Minimum Amount of $"+curr["min_order"].toFixed(2)+ " is not met ($" + (curr["min_order"]-subtotal).toFixed(2) + " more)";
		btn.disabled = true;
		btn.style.display = "none";
	//else hide warning and enable button
	}else{
		warn.textContent = "";
		btn.disabled = false;
		btn.style.display = "block";
		
	}
}

//returns [tax, subtotal] of entire order
function Total(){
	let tax = 0;
	let totBeforeTax = 0;
	for (let i = 0; i < order.length; i++){
		totBeforeTax += order[i].total;
	}	
	tax = 0.1*totBeforeTax;
	return [tax, totBeforeTax]
}

//handles the data in the summary of the Order Summary Column
function updateTotal(){
	let info = Total()
	
	//writes the Sub-Total
	let sTotal = document.getElementById("subTotal");
	sTotal.textContent = "Sub-Total: $" + info[1].toFixed(2);
	//Writes the Delivery Fee
	let delivery = document.getElementById("delivery");
	delivery.textContent = "Delivery Fee: $" + curr["delivery_fee"].toFixed(2) 
	//Writes the Tax
	let tax = document.getElementById("tax");
	tax.textContent = "Tax (10%): $" + info[0].toFixed(2);
	//Writes the Total Price
	let total = document.getElementById("totalprice");
	total.textContent = "Total Price: $" + (info[0] + info[1] + curr["delivery_fee"]).toFixed(2);
	//Ensures all is well with the states of the current button and warning 
	checkOrder(info[1]);
	
}
