const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

app.get('/', (req, res) => {
  res.json({'test': 'payload'});
});

app.post('/google', jsonParser, (req, res) => {
  console.log('request hit');
  // console.log(req.body.queryResult.action);
  res.json({
    "payload": {
      "google": {
        "expectUserResponse": false,
        "richResponse": {
          "items": [
            {
              "simpleResponse": {
                "textToSpeech": "Welcome to Repeated. Tell us what you'd like to repeat, followed by the number of times.",
                "displayText": "Welcome to Repeated. Tell us what you'd like to repeat, followed by the number of times."
              }
            }
          ]
        }
      }
    }
  })
});

app.listen(3000, () => {})
