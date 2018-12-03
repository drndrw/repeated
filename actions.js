const welcome = {
  "payload": {
    "google": {
      "expectUserResponse": true,
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
}

module.exports = {
  welcome
}
