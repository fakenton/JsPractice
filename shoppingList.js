function addItem(poop){
	itemList[itemList.length] = poop;
}

function showList() {
	var list = 'Shopping List: \n';

	for(var i = 0; i < itemList.length; i++) {
		list += itemList[i] + "\n";
	}

	alert(list);
}

var itemList = [];
var continueAdd = true;

do {
	var shoppingItem = prompt('add an item to the list');
	addItem(shoppingItem);

	var choice = confirm('do you want to add another item?');
	if(!choice)
		continueAdd = false;

}while(continueAdd);

showList();