let arr = [1, 2, 3, 4, 5];


for (let i = 0; i < arr.length / 2; i++) {

    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
}

alert("Array invertido: " + arr);
