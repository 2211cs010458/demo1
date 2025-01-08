// write a javascript program to print the factors of a number

function primeFactors() {
    let num = 50;
    let factors = [];
    for (let i = 2; i <= num; i++) {
        while (num % i === 0) {
            factors.push(i);
            num = num / i;
        }
    }
    console.log(factors);
    return factors;
}
primeFactors();
