const express = require("express");
const colors = require("colors");

const app = express();

app.get("/", (req, res) => res.send("Bravo my life!"));

const port = 5000;

app.listen(port, () =>
	console.log(`server started on port ${port}`.yellow.bold)
);
