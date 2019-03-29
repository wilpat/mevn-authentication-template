let express = require('express');
let cors = require('cors');
let bodyParser = require('body-parser');
let app = express();
let mongoose = require('mongoose');
let port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

const mongoURI = 'mongodb://localhost:27017/mevnauth'

mongoose.connect(mongoURI, {useNewUrlParser: true})
		.then(() => console.log("MongoDB Connected."))
		.catch(err => console.log(err))

let Users = require("./routes/Users");

app.use("/users", Users);

app.listen(port, () =>{
	console.log("Server is running on port: "+ port);
})