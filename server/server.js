import express from "express";
import bodyParser from "body-parser";
import OpenAI from "openai";

const app = express();
const port = 4000;
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const openai = new OpenAI({
    apiKey:"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"
})

app.post("/askQuestion", async (req, res) => {
    const data = req.body;
    const modifiedData = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        message: [{"role": "user", "content":"hello who are you"}],
        max_tokens: 10
    });
    res.status(200).json(modifiedData.data.choices[0].text);
});



app.listen(port, ()=>{
    console.log(`Server Running On Port: ${port}`);
})