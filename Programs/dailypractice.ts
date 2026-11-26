//Sum of even numbers from 1 to N

let num: number = 10;
let Count: number = 0;
let sumodd: number = 0;

for (let i = 1; i <= num; i++) {

    if (i % 2 === 0) {

        console.log(i + "even")
        Count = Count + i;

    } else {
        console.log(i + "odd")
        sumodd = sumodd + i

    }
}

console.log("sum of even number" + Count)
console.log("sum of odd number" + sumodd)


//print n! factorial

var f: number = 1;


for (let i = 1; i <= 3; i++) {

    f = f * i;

}

console.log(f)
///print the divisible by 3 number in array

let arr: number[] = [3, 2, 6, 4, 9, 7, 12, 15, 14];
let div: number[] = []

for (let i = 0; i <= arr.length; i++) {

    if (arr[i] % 3 === 0) {

        console.log("3divisible numbers" + (arr[i] * 3))

    }


}
console.log(div)


//reverse number

let rev: number = 7867329432;
let reverse: number = 0;

for (let i = 1; i >= rev; i--) {
    reverse = reverse + i

}
console.log(reverse);