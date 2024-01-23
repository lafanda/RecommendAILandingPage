import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 4000;
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.post("/askQuestion",(req,res)=> {
    console.log(req.body);
});


app.listen(port, ()=>{
    console.log(`Server Running On Port: ${port}`);
})