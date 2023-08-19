const number = prompt(" enter a number:");

let num = 0;
let result = 0;
while (num < number) {
    if (num % 2 == 0) {
        result++;

    }
    num++;

}
console.log(result);
