// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

// describe('arrayShuffler', () => {
//     const colors1 = ["purple", "blue", "green", "yellow", "pink"]
//     const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
//     it('takes in an array, removes the first item from the array and shuffles the remaining content.', () => {
//         expect(arrayShuffler(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]));
//         expect(arrayShuffler(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]));
//     })
// })

// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

        // FAIL./ code - challenges.test.js
        // arrayShuffler
        //     ✕ takes in an array, removes the first item from the array and shuffles the remaining content.

        //   ● arrayShuffler › takes in an array, removes the first item from the array and shuffles the remaining content.

        //     ReferenceError: arrayShuffler is not defined



// b) Create the function that makes the test pass.

// --> Pseudo Code <--
// Create function called arrayShuffler
// Takes in array
// First .shift to remove 1st item in array
// Iterate the rest of array and randomize with math.floor & random
// Return the array at the end

const arrayShuffler = (array) => {
    array.shift()
    for (i = 0; i < array.length; i++) {
        let randomize = Math.floor(Math.random() * array.length)
        let newArray = array[i]
        array[i] = array[randomize]
        array[randomize] = newArray
    }
    return array
}

        // PASS./ code - challenges.test.js
        // arrayShuffler
        //     ✓ takes in an array, removes the first item from the array and shuffles the remaining content. (1 ms)

// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

describe('minMax', () => {
    const nums1 = [3, 56, 90, -8, 0, 23, 6]
    const nums2 = [109, 5, 9, 67, 8, 24]
    it('takes an array of numbers and returns an array of the minimum and maximum numbers in that order.', () => {
        expect(minMax(nums1)).toEqual(expect.arrayContaining([-8, 90]));
        expect(minMax(nums2)).toEqual(expect.arrayContaining([5, 109]));
    })
})

// Expected output: [-8, 90]
// Expected output: [5, 109]

        // FAIL./ code - challenges.test.js
        // minMax
        //     ✕ takes an array of numbers and returns an array of the minimum and maximum numbers in that order. (1 ms)

        //   ● minMax › takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

        //     ReferenceError: minMax is not defined

// b) Create the function that makes the test pass.

// --> Pseudo Code <--
// Create function called minMax
// Set variable with the min value in array with math.min
// Set variable with max value with math.max
// return a result that is a combo of values

const minMax = (array) => {
    let minimum = Math.min(...array)
    let maximum = Math.max(...array)
    let result = ([minimum, maximum])
    return result
}

        // PASS./ code - challenges.test.js
        // minMax
        //     ✓ takes an array of numbers and returns an array of the minimum and maximum numbers in that order. (3 ms)


// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

const testArray1 = [3, 7, 10, 5, 4, 3, 3]
const testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]


// b) Create the function that makes the test pass.
