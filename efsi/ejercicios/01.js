// De la lista 11, 9, 2, -1, 110, 99, 8 obtener 
// el segundo mayor impar.

const data = [11, 9, 2, -1, 110, 99, 8];

let odds = [];

for (let i = 0; i < data.length; i++) {
    const element = data[i];

    if (element % 2 !== 0) {
        odds.push(element);
    }
    
}

// TODO esto no funciona porque sort() ordena alfabeticamente
// console.log(odds.sort());

const proc = odds.sort().reverse();

console.log(proc[1]);