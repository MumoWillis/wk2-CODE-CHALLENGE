//Creation of a function that identifies prime numbers;
function primeNumbers(num){
    if(num < 2)
    return '${num} is not a prime number'
for( let i = 2; i < num; i++) {
    if (num % i === 0) {
        return '${num}is not a prime number'
    }

}
return '${num} is a prime number'
}
console.log(primeNumbers(2))//expected output 'is a prime number'

//creation of a function that selects prime numbers from an array of numbers

