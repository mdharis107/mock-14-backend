const { Router } = require("express");
const https = require("https");
const axios = require("axios")

const quizRouter = Router();

quizRouter.post("/", (req, res) => {
  const { category, difficulty, amount } = req.body;
  axios
    .get(
      `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`)
      .then((resp)=>{
        console.log(resp.data.results)
        res.send(res.data)
      })

});

module.exports = { quizRouter };
