let arry1: number[] = [12, 23, 45, 12, 45, 67, 89, 89]
let duplicate: number[] = [];

for (let i = 0; i < arry1.length; i++) {

    for (let j = i + 1; j < arry1.length; j++) {

        if (arry1[i] === arry1[j]) {

            if (!duplicate.includes(arry1[i])) {
                duplicate.push(arry1[i])
            }
            break;

        }
    }

}
console.log(duplicate)