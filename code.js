function flip(array, n) {
    if (n <= 1) 
        return array;
    const flipped = array.slice(0, n).reverse();
    for (let i = 0; i < n; i++){
        array[i] = flipped[i];
    }

    return array;
}

// Use only flip() here to manipulate the array
function pancakeSort(array) {
    for (let size = array.length; size > 1; size--) {
        let maxIndex = 0;
        for (let i = 1; i < size; i++) {
            if (array[i] > array[maxIndex]) {
                maxIndex = i;
            }
        }

        if (maxIndex !== size -1) {
            if (maxIndex !== 0) {
                flip(array, maxIndex +1);
            }
            flip(array, size);
        }
    }
    return array;
}
