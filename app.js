const express = require(`express`);
const { corsHeaders } = require("./middlewares/headers");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(`public`));

app.use(express.static(`client-side/build`));

app.use(corsHeaders);

app.get(`/`, (req, res) => {
  res.json({
    results: [
      {
        name: {
          title: `Mr`,
          first: `bebo`,
          last: `thank you bro ♥`
        },
        picture: {
          large: 'http://localhost:5000/bebo.jpg'
        }
      }
    ]
  });
});

app.listen(port, () => {
  console.log(`server listening to port ${port} ...`);
});