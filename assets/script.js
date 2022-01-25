// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Kathie Sarmiento" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle

/** get quantity 
 * if gb plus button is clicked, increment quantity
 * if gb negative button clicked subtract quantity and check that quantity is not less than zero
 */
 
// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb')
let positivegbBtn = document.getElementById('quantity-up');
gbPlusBtn.addEventListener('click', function() {
    quantity = quantity +1;
    quantityContainer.textContent = 'Quantity:${quantity}';
});

let negativegbBtn = document.addEventListener('quantity-down');
negativegbBtn.addEventListener('click', function(){
    if(quantity > 0) {
        quantity = quantity - 1;
    }
    quantityContainer.textContent = 'Quantity: ${quantity}';
});

const credit = document.querySelector('#credit')
const ccPlusBtn = document.querySelector('#add-cc')
let positiveccBtn = document.getElementById('quantity-up');
ccPlusBtn.addEventListener('click', function() {
    quantity = quantity +1;
}
let negativeccBtn.addEventListen('click', function (){
    if(quantity > 0 ) {
        quantity = quatity -1;
    }
    quantityContainer.textContent = 'Quantity; ${quantity}';
}) 

const credit = document.querySelector('#credit')
const sugarPlusBtn = document.querySelector(#add-sugar)
let positiveSugarBtn = document.getElementById('quantity-up');
sugarPlusBtn.addEventListener('click', function (){
    quantity = quantity +1;
    quantityContainer.textContent = 'Quantity; ${quantity}';
});

// Code to update name display
credit.textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener('click', function() {
// HINT: You can delete this console.log after you no longer need it!
console.log('Gingerbread + button was clicked!')

// TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
})

// TODO: Hook up event listeners for the rest of the buttons