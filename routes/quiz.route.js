const { Router } = require("express");
// const https = require("https");
const axios = require("axios");

const quizRouter = Router();

quizRouter.get("/", (req, res) => {
  const params = req.query;
  console.log(params);
  let data = {};
  try {
    axios
      .get("https://opentdb.com/api.php", { params })
      .then((r) => res.send(r.data.results))
      .catch((e) => res.status(500).send("Internal error"));
  } catch (err) {
    res.status(500).send("Internal Error Occurs");
  }
});

module.exports = { quizRouter };
