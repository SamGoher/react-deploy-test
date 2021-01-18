const express = require(`express`);
const { corsHeaders } = require("./middlewares/headers");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(`public`));

if(process.env.NODE_ENV === `production`){
  app.use(express.static(`client-side/build`));
}

app.use(corsHeaders);

app.get(`/api`, (req, res) => {
  res.json({
    results: [
      {
        name: {
          title: `Mr`,
          first: `bebo`,
          last: `thank you bro ♥`
        },
        picture: {
          large: 'http://react-deploy-test-2.herokuapp.com/bebo.jpg'
        }
      }
    ]
  });
});
console.log(process.env.PORT)
app.listen(port, () => {
  console.log(`server listening to port ${port} ...`);
});