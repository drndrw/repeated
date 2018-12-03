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
                "textToSpeech": "hey dude",
                "displayText": "Hello there! How's it hanging"
              }
            }
          ]
        }
      }
    }
  })
});

app.listen(3000, () => {})
