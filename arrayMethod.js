function getFirstValue(numbers)
{
    var result = null;

    if(numbers != null && numbers.length > 0)
    {
        result = numbers[0];
    }

    return result;
}


var result1 = getFirstValue([]) // ➞ return nothing
console.log(result1);
var result2 = getFirstValue([1, 2, 3]) // ➞ 1
console.log(result2);
var result3 = getFirstValue([80, 5, 100]) // ➞ 80
console.log(result3);
var result4 = getFirstValue([-500, 0, 50])  // ➞ -500
console.log(result4);


function incrementItems(numbers) {
    //loops four times and adds 1 everytime
    //for loop loops var.length amount of times
    for(let i = 0; i < numbers.length; i++) {
        // numbers[i] = numbers[i] + 1; //same solution
        numbers[i]++; // adds 1 to every element
    }
    return numbers; //returns the numbers plus 1
}
var result5 = incrementItems([0, 1, 2, 3]) //➞ [1, 2, 3, 4]
console.log(result5);
var result6 = incrementItems([2, 4, 6, 8]) //➞ [3, 5, 7, 9]
console.log(result6);
var result7 = incrementItems([-1, -2, -3, -4])// ➞ [0, -1, -2, -3]
console.log(result7);


function rotate(letters) {
    var results = [3];
    // results[0] = letters[1];
    // results[1] = letters[2];
    // results[2] = letters[0];
    for(let i = 0; i < letters.length; i++) {
        if(i < letters.length - 1)
        {
            results[i] = letters[i+1];
        }
        else
        {
            results[i] = letters[0];
        }
    }

    return results;
}

var result8 = rotate(['a', 'b', 'c']);
console.log(result8);
