let shoppingList=['pop tarts' , 'ramen noodles', 'chips' , 'salsa' , 'coffee'];
shoppingList.push('fruit loops');// adds apples to the list
shoppingList[4] = 'fair trade coffee';//updates coffee to fair trade coffee
shoppingList[2] = 'rice';
shoppingList[3] = 'beans';
shoppingList.pop();
shoppingList.shift();
console.log(shoppingList);
let shoppingCart = [];
shoppingCart.unshift('fruitloops');
shoppingCart.push('pop tarts');
console.log(shoppingCart);

// loops forever until condition is not true
// loop until shopping list is empty (ie. shoppingList.length = 0)
while (shoppingList.length > 0) {
    // push last item from shopping list into cart
    shoppingCart.push(shoppingList[shoppingList.length - 1]);
    // remove that item that we just insert into cart
    shoppingList.pop();
}
shoppingCart.sort();
console.log(shoppingCart);
shoppingCart.reverse();
console.log(shoppingCart);
var joinCart = shoppingCart.join(',');
console.log(joinCart);


