from flask import Flask, request, jsonify
import numpy as np
import pickle

app = Flask(__name__)

# Load the trained model
model = pickle.load(open('gbmodel.pkl', 'rb'))

@app.route('/predict', methods=['POST'])
def predict():
    # Receive the form data from the frontend
    data = request.get_json()

    try:
        # Perform prediction using the model
        prediction = model.predict([list(data.values())])
        
        # Map the prediction result to the corresponding label
        result = 'Fit' if prediction[0] == 1 else 'Not Fit'
        
        # Return the prediction result to the frontend
        return jsonify({'prediction': result})
    except Exception as e:
        print("Prediction error:", e)
        return jsonify({'prediction': 'Failed to get prediction'}), 500

if __name__ == '__main__':
    app.run(debug=True)
