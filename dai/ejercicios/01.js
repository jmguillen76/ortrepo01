const express = require("express");
const app = express();
const PORT = 3000;

const process_data = () => {

  const data = [11, 9, 2, -1, 110, 99, 8];

  let odds = [];
  
  for (let i = 0; i < data.length; i++) {
      const element = data[i];
  
      if (element % 2 !== 0) {
          odds.push(element);
      }
      
  }
  
  const proc = odds.sort().reverse();
  
  console.log(proc[1]);

    return {
        resultado: proc[1]
    };
};

app.use(express.json());
	
app.post("/", function (req, res) {
	console.log(req.body)
	// res.end();
    res.send(process_data(req.body));
});

app.listen(PORT, function(err){
	if (err) console.log(err);
	console.log("Server listening on PORT", PORT);
});
