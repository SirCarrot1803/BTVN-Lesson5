
function CheckBrowser() {
    if ('localStorage' in window && windowl [ 'localStorage'] !== null) {
        // We can use LocalStorage object to store data.
        return true;
    } else {
        return false;
    }
}
    

// Dynamically populate the table with shopping list items.
 //Step below can be done via PHP and AJAX, too.
 function doShowAll() {
    if (CheckBrowser()) {
       var key = "";
       var list = "<tr><th>Item</th><th>value</th></tr>/n";
       var i = 0;
       //For a more advanced feature, you can set a cap on max items in the cart.
        for (i = 0; i <= localStorage. length-1; i++) {
           key = localStorage. key(i);
            list += "<tr><td>" + key + "</td>\n<td>"
                    + localStorage.getItem(key) + "</td></tr>\n";
        }
       //If no item exists in the cart.
        if (list == "<tr><th>Item</th><th>Value</th></tr>/n") {
            list += "<tr><td><i>empty</i></td>\n<td><i>empty</i></td></tr>";
        }
       //Bind the data to HTML table.
       //You can use jQuery, too.
       document.getElementById( 'list').innerHTML = list;
    } else {
        alert( 'Cannot save shopping list as your browser does not support')
    }
}

localStorage.setItem('propertyName','value');
localStorage.getItem('propertyName');
localStorage.removeItem('propertyName');

function SaveItem() {
    var name = document.forms.ShoppingList.name.value;
    var name = document.forms.ShoppingList.name.value;
    localStorage.setItem(name, data);
    doShowAll()
}

function ModifyItem() {
    var name1 = document.forms.ShoppingList.name.value;
    var data1 = document.forms.ShoppingList.name.value;

    if (localStorage.getItem(name1) != null) {

        localStorage.setItem(name1, data1);
        document.forms.ShoppingList.data.value = localStorage.getItem(name1);
    }

    doShowAll();
}

function RemoveItem() { 
    var name = document.forms.ShoppingList.name.value;
    document.forms.ShoppingList.data.value=localStorage.removeItem(name); 
    doShowAll();
 }

 function ClearAll() {
    localStorage.clear();
    doShowAll();
 }
