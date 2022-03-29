let billAmount = 500;
let calculateTipAmount = 0;
let totalAmount = 0;
function calculateTip (billAmount) {
    console.log("tipAmount: " + billAmount*.2); //to calculate the tip
    return billAmount * .2;
}
function getBillTotal(billAmount) {
    calculateTipAmount = calculateTip(billAmount);
    totalAmount = billAmount + calculateTipAmount;
    return totalAmount;
}
console.log("Total Amount: " +  getBillTotal(billAmount)); //the total amount equals to the amount plus the tip amount


let tree = ['oak', 'spruce', 'pine'];
for (let i = 0; i < tree.length; i++) {
    if (i == 0) {
    console.log("oak" + i);
    } 
    else if (i == 1){
    console.log("spruce" + i); 
    }
    else if (i == 2){
    console.log("pine" + i);
    } 
}