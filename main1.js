//Question #:1   Create a function that reverses an array. Start small here and work your way up. Begin
// with an array of 5 numbers, and then try your program with a larger array to verify its
// success.

function reverseArray(array){
    let reverseArray = [];
    for(let i = array.length - 1;i >=0; i--) {
reverseArray.push (array[i])
    } 
    return reverseArray
}
let a = [1,2,3,4,5,6,7,8,9,10];
console.log(reverseArray(a));


//Question # :2 Create a function that filters out negative numbers. In this challenge, you’ll have a
// function that takes an array as an input and returns an array. But if all goes according
// to plan, it’ll remove the negative numbers. This is another example of a task that’ll be
// useful when combing through data and looking for clever ways to eliminate “bad
// data.”

function abc(arr) {
    return arr.filter(i => i >= 0);
 }
 
 
 let negative = [1, -2, 3, -4, 5, -6, 7, -8, 9, -10];
 console.log(abc(negative)); 
 
 
 
// Question #:3 Return the number of vowels in a string. Create a function that’ll return an integer of
// the number of vowels found in a string. This is a great way to practice determining the
// features of a dataset. If you use JavaScript later in your career, you’ll be well-prepared
// to determine what datasets (or just strings) consist of. 
function countVowels(string) {
    let vowels = 'aeiou';
    let count = 0;
    for (let char of string) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}


let string = "Hello Tooba Khan how are you?";
console.log(countVowels(string)); 



 //Q44. Check if a string is a palindrome. A palindrome is a word, phrase, number, or other
// sequences of characters that reads the same forward and backward (like the words
//     “kayak,” “mom,” “radar,” and “refer”). Create a function that takes a string as input
//     and returns a Boolean indicating whether the string is a palindrome. Test your
//     function with different strings to ensure it works correctly.
function isPalindrome(str) {
    
    var cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    var reversedStr = cleanedStr.split('').reverse().join('');

    return cleanedStr === reversedStr;
}


console.log(isPalindrome("kayak")); 
console.log(isPalindrome("mom"));
console.log(isPalindrome("radar")); 
console.log(isPalindrome("refer")); 
console.log(isPalindrome("hello")); 
console.log(isPalindrome("A man, a plan, a canal: Panama")); 
console.log(isPalindrome("No 'x' in Nixon")); 




//Q5Write a JavaScript program to check whether two given integer values are in the
// range 50 - 99 (inclusive). Return true if either of them falls within the range.

function isInRange(num1, num2) {
 
    var num1InRange = (num1 >= 50 && num1 <= 99);

    var num2InRange = (num2 >= 50 && num2 <= 99);

    return num1InRange || num2InRange;
}


console.log(isInRange(55, 100));
console.log(isInRange(45, 60)); 
console.log(isInRange(30, 40)); 
console.log(isInRange(75, 80)); 
console.log(isInRange(100, 105)); 
console.log(isInRange(50, 99));




//Q6Write a JavaScript program to get the minimum value of an array, after mapping each
// element to a value using the provided function.

function getMinValue(arr, mapFn) {
   
    const mappedArray = arr.map(mapFn);
    const minValue = Math.min(...mappedArray);
    return minValue;
}


function square(num) {
    return num * num;
}

const array = [1, 2, 3, 4, 5];
console.log(getMinValue(array, square)); 


function negate(num) {
    return -num;
}

console.log(getMinValue(array))

//Q7Write a JavaScript program to create an updated string of 4 copies of the last 3
//characters of a given original string. The string length must be 3 and above.

function createUpdatedString(str) {
   
    if (str.length < 3) {
        return "String length must be 3 or above";
    }
    

    const lastThreeChars = str.slice(-3);
    
    const updatedString = lastThreeChars.repeat(4);
    
    return updatedString;
}


console.log(createUpdatedString("JavaScript")); 
console.log(createUpdatedString("Hello")); 
console.log(createUpdatedString("abc")); 
console.log(createUpdatedString("Hi")); 


//Q8. Write a JavaScript program to find the types of a given angle.
// Acute angle: An angle between 0 and 90 degrees.
// Right angle: An 90 degree angle.
// Obtuse angle: An angle between 90 and 180 degrees.
// Straight angle: A 180 degree angle.

function getAngleType(angle) {
    if (angle > 0 && angle < 90) {
        return "Acute angle";
    } else if (angle === 90) {
        return "Right angle";
    } else if (angle > 90 && angle < 180) {
        return "Obtuse angle";
    } else if (angle === 180) {
        return "Straight angle";
    } else {
        return "Invalid angle";
    }
}


console.log(getAngleType(45));  
console.log(getAngleType(90));  
console.log(getAngleType(135));
console.log(getAngleType(180)); 
console.log(getAngleType(200)); 



// Q # : 9 Write a JavaScript program to find the smallest round number not less than a given
// value. Note: A round number is informally considered to be an integer that ends with
// one or more zeros. So, 590 is rounder than 592, but 590 is less round than 600.
function number(num) {
    return Math.ceil(num/10) * 10;
}
console.log(number(592)); 
console.log(number(590)); 
console.log(number(601)); 



//Q10Write a JavaScript program to find the index of an array item in a for loop.
function findIndexOfItem(arr, item) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            return i; 
        }
    }
    return -1; 
}


const ar = [10, 20, 30, 40, 50];

console.log(findIndexOfItem(ar, 30)); 
console.log(findIndexOfItem(ar, 40)); 
console.log(findIndexOfItem(ar, 60)); 
console.log(findIndexOfItem(ar, 10)); 
console.log(findIndexOfItem(ar, 50)); 

























