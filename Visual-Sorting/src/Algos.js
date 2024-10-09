function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export default function randomize(arr) { // shuffle the array
    let x = arr
    let result = [];

    while(x.length != 0) {
        let i = getRandomInt(x.length);
        result.push(x[i]);
        x.splice(i, 1)
    }

    return result;
}

function bubbleSort(arr) {
    
}