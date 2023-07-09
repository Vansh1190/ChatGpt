const express = require('express')
const router = express.Router();
const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config()

router.get('/', async(req, res)=>{
    console.log(req.headers)
    if(req.headers.auth != 'givemeaccess'){
        return res.status(400).send("Error you don't have access")
    }
    const configuration = new Configuration({
        organization: "org-5xfr53HrEy5yK3k2PgeruCRT",
        apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: (req.body.message),
        temperature:1,
      });
      console.log(req.body)
    //   console.log(completion.data)
      res.send(completion.data);
})

module.exports = router;