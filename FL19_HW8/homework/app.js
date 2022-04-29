// #1
function extractCurrencyValue(param) {
    let result = parseInt(param);
    if (result.toString().length >= 16){
        return BigInt(result);
    }
    return result;
}

console.log(extractCurrencyValue('120 USD')); // 120
console.log(extractCurrencyValue('1283948234720742 EUR')); // 1283948234720742n


// #2

let object = {
    name: 'Ann',
    age: 16,
    hobbies: undefined,
    degree: null,
    isChild: false,
    isTeen: true,
    isAdult: false
}

function clearObject(obj) {
    for (let key in obj){
        if (!obj[key]) {
            delete obj[key];
        }
    }
    return obj;
}

console.log(clearObject(object)); // { name: 'Ann', age: 16, isTeen: true }


// #3

function getUnique(param) {
    return Symbol(param)
} 

console.log(getUnique('Test')) // Symbol('Test')


// #4

function countBetweenTwoDays(startDate, endDate) {
    let dayOne = new Date(startDate).getTime();
    let dayTwo = new Date(endDate).getTime();
    let diffDays = Math.round((dayTwo - dayOne)/(24*3600*1000));
    let diffWeeks = Math.round((dayTwo - dayOne)/(24*3600*1000*7));
    let diffMonth = Math.round((dayTwo - dayOne)/(24*3600*1000*30));
   return `The difference between dates is: ${diffDays} day(-s), ${diffWeeks} week(-s), ${diffMonth} month(-s)`
}

console.log(countBetweenTwoDays('03/22/22', '05/25/22')); // The difference between dates is: 64 day(-s), 9 week(-s), 2 month(-s)


// #5

function filterArray(arr) {
    return Array.from(new Set(arr));
}
function filterArrayTwo(arr) {
    let filtered = [];
     arr.forEach((item) => {
         if (!filtered.includes(item)) {
             filtered.push(item);
         }
     })
    return filtered;
}
// eslint-disable-next-line no-magic-numbers
console.log(filterArray([1, 2, 2, 4, 5, 5, 5, 6, 6, 7, 7, 8, 8, 8, 9])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
// eslint-disable-next-line no-magic-numbers
console.log(filterArrayTwo([1, 2, 2, 4, 5, 5, 5, 6, 6, 7, 7, 8, 8, 8, 9]));