import { getResults } from "./app";

var appRouter = function(app) {
  app.get("/keyword/:word", function(req, res) {
    console.log(req.params);
    let string = req.params.word.replace(/\+/g, " ");
    console.log(string);
    getResults(string).then(result => {
      console.log(result);
      res.status(200).send({
        density: result.density.toString(),
        words: result.words.toString()
      });
    });
  });
};

module.exports = appRouter;
