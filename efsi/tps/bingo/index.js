const express = require("express");
const app = express();
const PORT = 3000;

const process_data = (data) => {

    return {
        resultado: data.clave
    };
};

app.use(express.json());
	
app.post("/", function (req, res) {
	console.log(req.body)
	// res.end();

    let limite = req.body.limite;
    res.send(process_data(req.body));
});

app.get("/numero_aleatorio", function (req, res) {
    res.send("respuesta");
});

app.listen(PORT, function(err){
	if (err) console.log(err);
	console.log("Server listening on PORT", PORT);
});