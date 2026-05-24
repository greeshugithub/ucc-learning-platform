from flask import Flask, jsonify
from pymongo import MongoClient
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
# MongoDB Connection

client = MongoClient("mongodb://localhost:27017/")

db = client["ucc_database"]

chatbot_collection = db["chatbot_answers"]
chatbot_collection.insert_one({
    "question": "What is Angular?",
    "answer": "Angular is a frontend framework."
})
chatbot_collection.insert_one({
    "question": "What is React?",
    "answer": "React is a JavaScript library for building user interfaces   ."
})

@app.route('/')

def home():
    return "UCC Backend Running"

@app.route('/courses')

def get_courses():

    courses = [
        {
            "title": "Frontend Development"
        },
        {
            "title": "DevOps"
        }
    ]

    return jsonify(courses)
@app.route('/chatbot/<question>')

def chatbot(question):

    # result = chatbot_collection.find_one({
    #     "question": question
    # })
    result = chatbot_collection.find_one({
    "question": {
        "$regex": question,
        "$options": "i"
    }
})

    if result:

        return jsonify({
            "answer": result["answer"]
        })

    return jsonify({
        "answer": "No answer found"
    })

if __name__ == '__main__':
    app.run(debug=True)