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

export class bubbleSort {
    constructor(arr) {
        this.arr = arr;
        this.history = [arr];
    }

    sort() {
        for (var i = 0; i < this.arr.length; i++) {
            for (var j = 0; j < (this.arr.length - i - 1); j++) {
                if (this.arr[j] > this.arr[j + 1]) {
    
                    // If the condition is true
                    // then swap them
                    var temp = this.arr[j]
                    this.arr[j] = this.arr[j + 1]
                    this.arr[j + 1] = temp

                    this.history.push(this.arr)
                }
            }
        }
    }
}