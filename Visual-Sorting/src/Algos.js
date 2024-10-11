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

export function selectionSort(arr) {
    let n = arr.length;
    let history = [arr]
    for (let i = 0; i < n - 1; i++) {
    
        // Assume the current position holds
        // the minimum element
        let min_idx = i;
        
        // Iterate through the unsorted portion
        // to find the actual minimum
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[min_idx]) {
            
                // Update min_idx if a smaller element is found
                min_idx = j;
            }
        }
        
        // Move minimum element to its
        // correct position
        let temp = arr[i];
        arr[i] = arr[min_idx];
        arr[min_idx] = temp;

        history.push(arr)
    }

    return [arr, history]
}