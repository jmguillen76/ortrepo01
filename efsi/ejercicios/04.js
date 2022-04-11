const data = [
    2, 3, 5, 12, 54, 5, 
    -1, 0, 4, 23, 66, 7
];

const results = [];

for (let i = 0; i < data.length; i++) {

    const anterior = data[i-1];

    const siguiente = data[i+1];

    results[i] = data[i] * (anterior - siguiente);

}

console.log(results);