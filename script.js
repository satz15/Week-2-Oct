// 11.Write a JavaScript function removeDuplicates(arr) that removes duplicate elements from an
// array arr and returns a new array with unique elements.

function removeDuplicates(arr) {
    const uniqueSet = new Set(arr);
    const uniqueArray = Array.from(uniqueSet);
    return uniqueArray;
}

console.log(removeDuplicates([7,7,7,7,7]));
// console.log(removeDuplicates([]));

// 12.Write a JavaScript function isAnagram(str1, str2) that checks if two given strings str1 and str2

function isAnagram(str1,str2) {
    function cleanAndSortString(str) {
        return str
        
        .replace(/[^a-zA-Z0-9]/g, "")
        .toLowerCase()
        .split('')
        .sort()
        .join('');
    }
    const cleanedStr1 = cleanAndSortString(str1);
    const cleanedStr2 = cleanAndSortString(str2);
    return cleanedStr1 === cleanedStr2;  
}

console.log(isAnagram('hi' ,'hey'));
console.log(isAnagram('a gentleman' , 'elegant man'));

// 13.Write a JavaScript function isPerfectNumber(n) that checks if a positive integer n is a perfect
// number

function isPerfectNumber(n) {
    if (n <= 0) {
        return false;
    }
    let sum = 0;
    for (let i = 1; i < n; i++) {
        if (n % i === 0) {
            sum += i;
        }
    }
    return sum === n;
}

console.log(isPerfectNumber(28)); 
console.log(isPerfectNumber(12));

// 15.Write a JavaScript function capitalizeWords(str) that capitalizes the first letter of each word in a
// given string str

function capitalizeWords(str) {
    const words = str.split('');
    const capitalizedWords = words.map(word => {
        if (word.length > 0) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        } else {
            return word;
        }
});
    return capitalizedWords.join(' ');
}

console.log(capitalizeWords('full stack devoleper'))

// 17.Write a JavaScript function findCommonElements(arr1, arr2) that finds and returns an array
// containing the common elements between two arrays arr1 and arr2

function findCommonElements(arr1,arr2) {
    const commonElements = arr1.filter(element => arr2.includes(element));
    return commonElements; 
}

console.log(findCommonElements([1, 2, 3, 4], [3, 4, 5, 6])); 
console.log(findCommonElements([1, 2, 3], [4, 5, 6]));

// 18.Write a JavaScript function generateRandomNumber(min, max) that generates a random
// integer between min (inclusive) and max (inclusive)

function generateRandomNumber(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(generateRandomNumber(0, 100)); 
console.log(generateRandomNumber(-50, 50));