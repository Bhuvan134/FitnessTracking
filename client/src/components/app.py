from flask import Flask, request, jsonify
import numpy as np
from model import FitnessPredictor
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

predictor = FitnessPredictor()

@app.route('/')
def home():
    return "Fitness Prediction App"

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get the prediction data from the request
        prediction_data = request.get_json()
        
        # Extract the input features from the prediction data
        step_count = prediction_data['step_count']
        weight_kg = prediction_data['weight_kg']
        
        # Check the conditions
        if int(step_count) > 5500 and int(weight_kg) < 70:
            # If conditions are met, return 'Fit' directly
            return jsonify({'prediction': 1})
        else:
            # If conditions are not met, proceed with ML model prediction
            mood = prediction_data['mood']
            calories_burned = prediction_data['calories_burned']
            hours_of_sleep = prediction_data['hours_of_sleep']
            bool_of_active = prediction_data['bool_of_active']
            
            # Create a NumPy array with the input data
            input_data = np.array([[step_count, mood, calories_burned, hours_of_sleep, bool_of_active, weight_kg]])
            
            # Perform prediction
            prediction = predictor.predict_fitness(input_data)
            
            # Return the prediction result as JSON response
            return jsonify({'prediction': int(prediction[0])})
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)
