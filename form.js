console.log("--------------------------------------------------------------------------")
function minMax(...numbers) {
    if (numbers.length === 0) {
        return "The Array is empty";
    }
    else {
        const minValue = Math.min(...numbers);
        const maxValue = Math.max(...numbers);
        return { minValue, maxValue }
    }
}


const numbersArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

const result = minMax(...numbersArray);

console.log(`Min Value: ${result.minValue}`);
console.log(`Max Value: ${result.maxValue}`);