let group=['Keng' , 'Saphira' , 'Sierra' , 'Mahi' , 'Faven'];
console.log("" + group); //reading as a string

let food=['pizza' , 'eggroll' , 'chicken nuggets' , 'chicken strips' , 'pho' , 'cookies' , 'pad thai' , 'roast pork', 'hotdog' , 'hamburger'];
console.log("" + food); //reading as a string

let state=[['North Carolina' , 'Raleigh' , 'cardinal'],
    ['Alaska' , 'Juneau' , 'Willow Ptarmigan' ],
    ['Alabama' , 'Montegomery' , 'Yellowhammer'],
    ['Arizona' , 'Phoenix' , 'Cactus Wren'],
    ['Arkansas' , 'Little Rock' , 'Mockingbird'],
    ['California' , 'Sacremento' , 'California Valley Quail'],
    ['Colorado' , 'Denver' , 'Lark Bunting']];
    console.log(state.join("&")); //reading as a string


// .slice() and .splice() Example
let array = ['coconut', 'soursop', 'mango', 'pineapple', 'guava'];

// doesnt mutate the array. Parameters for slice(start index, end index)
let newArray = array.slice(1,4); // end is exclusive
console.log(array);

// does mutate, Patameters for splice(start, end, items to add...)
array.splice(1,3, 2,3,4); // end is inclusive
console.log(array);
