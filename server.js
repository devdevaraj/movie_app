import express from "express";

const app = express();
const port = 3000;

app.use(express.static("./dist"));

app.listen(port, error => {
 if(error) return console.log(error);
 console.log("Server started!");
})