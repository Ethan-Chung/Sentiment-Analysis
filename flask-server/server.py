from flask import Flask, request
import nltk
from nltk.sentiment.vader import SentimentIntensityAnalyzer

nltk.download('vader_lexicon')

app = Flask(__name__)

#Members API route
@app.route("/members")
def members():
    return {"members": ["Member1", "Member2", "Member3"]}

#Home Api
@app.route("/sentiment")
def sentiment():
    userInput = request.args.get('message')
    
    sen = SentimentIntensityAnalyzer()
    return sen.polarity_scores(userInput)

if __name__ == "__main__":
    app.run(debug=True)