// Direction : For each value inside the array, get the next smallest prime number value greater than the input number, if input number is already prime return that input
// For example: Input: 4, Expected: 5, Input: 14, Expected: 17, Input: 2, Expected: 2
// Expected: [2, 5, 19, 23, 37, 89]
const number = [2, 4, 18, 20, 35, 84];
const answer = [];

function result(num) {
    let result = []

    function checkNumber(val) {
        if (isPrimeNumber(val)) {
            result.push(val)
            return
        } else {
            checkNumber(val + 1)
        }
    }

    for (const n of num) {
        checkNumber(n + 1)
    }

    return result
}

function isPrimeNumber(number) {
    let isPrime = true;

    if (number > 1) {
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }
    }

    return isPrime
}

console.log(result(number));