import express from "express";
import dotenv from 'dotenv'
dotenv.config();
import path from "path";
import { fileURLToPath } from 'url';
import bodyParser from "body-parser";
import OpenAI from 'OpenAI';



const app = express();
const port = 4000;
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const openai = new OpenAI({
    apiKey: process.env.OPENAI_API,
  });



app.post("/askQuestion", async (req, res) => {
    const sendMessage = req.body.message;
  
  const stream = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [{ role: 'user', content: `${sendMessage}` }],
    stream: true,
  });

  let respondMessage  = '';

  for await (const chunk of stream) {
    respondMessage += chunk.choices[0]?.delta?.content || '';
     //respondMessage = process.stdout.write(chunk.choices[0]?.delta?.content || '');
    
  }
  const data = {respondMessage: respondMessage}
  res.send(data);


    
   
});



app.listen(port, ()=>{
    console.log(`Server Running On Port: ${port}`);
})