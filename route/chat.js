const express = require('express')
const router = express.Router();
const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config()

router.post('/', async(req, res)=>{
    console.log(req.headers)
      
      if(req.headers.origin != 'http://localhost:8100' &&  req.headers.origin != "https://chatuniverse.vercel.app")
      {
        return res.status(400).send("Error you don't have access")
      }
    const configuration = new Configuration({
        organization: "org-5xfr53HrEy5yK3k2PgeruCRT",
        apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo-16k",
        messages: [
          { role: "user", content: req.body.message } // Add user message to the messages array
      ],
        temperature:1,
      });
      console.log(req.body)
    //   console.log(completion.data)
    console.log(completion.data.choices[0], 'respjse')
      res.send(completion.data);
})

module.exports = router;