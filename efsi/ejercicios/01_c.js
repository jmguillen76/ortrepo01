// De la lista 11, 33, 2, -1, 110, 99, 8 obtener 
// el segundo mayor impar.

const data = [11, 9, 2, -1, 110, 99, 8];

let odds = [];

for (let i = 0; i < data.length; i++) {
    const element = data[i];

    if (element % 2 !== 0) {
        odds.push(element);
    }

}

function sort1(a, b) {
    if (a < b) {
        return 1;
    }
    if (a > b) {
        return -1;
    }
    // a debe ser igual b
    return 0;
}

// const sort2 = (a, b) => b - a; 
function sort2(a, b) { return b - a; } 

odds.sort(sort2);

console.log(odds[1]);


