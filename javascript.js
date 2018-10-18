// Battle of the Band
const bandNumber = 1
const bandList= []
const takeNumber = function (bandName) {
	bandList.push(`${bandNumber}. ${bandName}`)

	/*
        Write your awesome code here. See comments
        below for what should be returned.
    */}

const scum = takeNumber("Galactic Scum")
console.log(scum)  // This should print "1. Galactic Scum" in the console

const under = takeNumber("Underdogs")
console.log(under)  // This should print "2. Underdogs" in the console
console.log(bandList)


// Chicken Monkey 
for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
    // Divide the current number by 2, and check if the remainder is 0
    if(currentNumber % 5 === 0 && currentNumber % 7 ===0){
        console.log("chickenmonkey")
    }
    else if (currentNumber % 5 === 0){
        console.log("chicken")
    } else if (currentNumber %7 === 0){
        console.log("monkey")
    }
    else  {
        console.log(currentNumber)
    }
    
}
// Cooked Food Function
// Objects
const hamburger = {
	name: 'Hamburger',
	type: 'beef',
	cooked: false,
}
const zucchini = {
	name: 'Zucchini',
	type: 'vegetable',
	cooked: false,
}
const chickenBreast = {
	name: 'Chicken Breast',
	type: 'chicken',
	cooked: false,
}
const corn = {
	name: 'Corn',
	type: 'vegetable',
	cooked: false,
}
const steak = {
	name: 'Steak',
	type: 'beef',
	cooked: false,
}

// An first array containing the objects to be cooked.
const uncookedFood = [hamburger, zucchini, chickenBreast, corn, steak];

// An empty array that will store the objects after the `grill()` function cooks the food.
const cookedFood = [];

// The Function
function grill (currentObject) {
	console.log(currentObject)

	for(i =0; i < currentObject.length; i++){ 
		if( currentObject[i].cooked === false){
		   
		// Modify the food so that it is cooked
		currentObject[i].cooked = true;
		}

    // Put the cooked food into the appropriate array
    cookedFood.push(currentObject[i]);}
};
grill(uncookedFood)
console.log(cookedFood)



// Build me Up challange

// the object
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];
let buildMeUp = ""

// The function
function addExcitement(theWordArray) {
	for (let i = 0; i < theWordArray.length; i++) {

		// Concatenate the new word onto buildMeUp and adding spaces
  		buildMeUp += `${theWordArray[i]} `
 	
		// Print buildMeUp to the console
 	 	console.log(buildMeUp)
		}
}
// Invoke the function and pass in the array
addExcitement(sentence)
