const data = [
    2, 3, 5, 12, 54, 5, 
    -1, 0, 4, 23, 66, 7
];

const results = [];

for (let i = 0; i < data.length; i++) {

    console.log(typeof data[i-1]);

    const anterior = !data[i-1] ? 0 : data[i-1];
    const siguiente = !data[i+1] ? 0 : data[i+1];

    // console.log(anterior, siguiente);

    results[i] = data[i] * (anterior - siguiente);

}

console.log(results);