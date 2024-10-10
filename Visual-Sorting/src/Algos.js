function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export function randomize(arr) { // shuffle the array
    let x = arr
    let result = [];

    while(x.length != 0) {
        let i = getRandomInt(x.length);
        result.push(x[i]);
        x.splice(i, 1)
    }

    return result;
}

export function bubbleSort(arr) { // totally not copy pasted from GFG
    var history = [arr]
    var n = arr.length

    for (var i = 0; i < n; i++) {

        // Last i elements are already in place  
        for (var j = 0; j < (n - i - 1); j++) {

            // Checking if the item at present iteration 
            // is greater than the next iteration
            if (arr[j] > arr[j + 1]) {

                // If the condition is true
                // then swap them
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp

                history.push([...arr])
            }
        }
    }

    return [arr, history]
}