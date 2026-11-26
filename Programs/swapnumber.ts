let a: number = 10;
let b: number = 20;

a = a + b;//30
b = a - b;//10
a = a - b;

console.log(a)
console.log(b)

//--------duplicate numbers----------//

let arry = [12, 13, 14, 15, 15, 12, 13, 16]
let arr: number[] = [];
for (let i = 0; i < arry.length; i++) {

    if (!arr.includes(arry[i])) {
        arr.push(arry[i]);
    }


}
//remove the duplicate number//


let arry2 = [12, 13, 14, 15, 15, 12, 13, 16]
let arr1: number[] = [];
for (let i = 0; i < arry2.length; i++) {
    for (let j = i + 1; j < arry2.length; j++) {

        if (arr1[i] == arr1[j]) {

            if (!arr1.includes(arry[i])) {
                arr1.push(arry[i]);

            }
            break;
        }
    }

}
console.log(arr1)


console.log(arr)
//------------------------------palindrome--------------------------------------------------------
let palindrome: string = "madam";
let pali: string = palindrome.toLocaleLowerCase()
let reverse: string = '';
for (let i = pali.length - 1; i >= 0; i--) {

    reverse = reverse + pali[i]

}

if (palindrome == reverse) {

    console.log(" the given string is palindrome")
} else {

    console.log(" the given string is not palindrome")
}


//remove duplicates in string//

let stry: string = "tejuenfhwasdywwgewyewieweqoeowqeeweweqwknewie";
let stryw: string = '';

for (let i = 0; i < stry.length; i++) {

    if (!stryw.includes(stry[i])) {
        stryw = stryw + stry[i]


    }

}

console.log(stryw)

//remove duplicates in string//


let stry1: string = "tejuenfhwasdywwgewyewieweqoeowqeeweweqwknewie";
let stryw1: string = '';

for (let i = 0; i < stry1.length; i++) {

    for (let j = i + 1; j < stry1.length; j++) {

        if (stry1[i] === stry1[j]) {

            if (!stryw1.includes(stry1[i])) {
                stryw1 = stryw1 + stry1[i]

            }
            break;
        }

    }

}

console.log(stryw1)

let n: number = 5;

let sum: number = 0;

for (let i = 1; i <= n; i++) {

    sum = sum + i
}
console.log(sum)