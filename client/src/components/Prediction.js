import React, { useState } from 'react';
import Header from "./Header";
import predictIcon from "../assets/images/predict.jpg";
import axios from 'axios';
import "../index.css";

export default function Predict() {
    const [predictionData, setPredictionData] = useState({
        step_count: "",
        mood: "",
        calories_burned: "",
        hours_of_sleep: "",
        bool_of_active: "",
        weight_kg: ""
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [predictionResult, setPredictionResult] = useState(null);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setPredictionData({ ...predictionData, [name]: value });
    };

    const handlePredictSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        setError(null);
        setPredictionResult(null);

        try {
            // Send form data to backend for prediction
            const response = await axios.post('http://localhost:5000/predict', predictionData);

            // Set prediction result received from the backend
            const prediction = response.data.prediction;
            setPredictionResult(prediction === 1 ? 'Fit' : 'Not Fit');
        } catch (error) {
            console.error('Prediction error:', error);
            setError('Failed to get prediction');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <Header />
            <div className="predict-container">
                <div className="predict-background" style={{ backgroundImage: `url(${predictIcon})` }}></div>
                <div className="predict-content">
                    <h2 className="title text-center" style={{ color: '#7FFF00' }}>Know how fit you are...</h2>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-6">
                                <form className="prediction-form" onSubmit={handlePredictSubmit}>
                                    <label>Step Count:</label>
                                    <input type="number" name="step_count" value={predictionData.step_count} onChange={handleInputChange} className="form-control" placeholder="Enter step count" />
                                    <label>Mood (100 - sad, 200 - neutral, 300 - happy):</label>
                                    <input type="number" name="mood" value={predictionData.mood} onChange={handleInputChange} className="form-control" placeholder="Enter mood" />
                                    <label>Calories Burned:</label>
                                    <input type="number" name="calories_burned" value={predictionData.calories_burned} onChange={handleInputChange} className="form-control" placeholder="Enter calories burned" />
                                    <label>Hours of Sleep:</label>
                                    <input type="number" name="hours_of_sleep" value={predictionData.hours_of_sleep} onChange={handleInputChange} className="form-control" placeholder="Enter hours of sleep" />
                                    <label>Active (0 - inactive, 500 - active):</label>
                                    <input type="number" name="bool_of_active" value={predictionData.bool_of_active} onChange={handleInputChange} className="form-control" placeholder="Enter active value" />
                                    <label>Weight (in kg):</label>
                                    <input type="number" name="weight_kg" value={predictionData.weight_kg} onChange={handleInputChange} className="form-control" placeholder="Enter weight in kg" />
                                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <button className="btn btn-primary mt-3" type="submit" style={{ backgroundColor: '#7FFF00' }} disabled={isLoading}>
                                            {isLoading ? 'Predicting...' : 'Predict'}
                                        </button>
                                    </div>
                                    {error && <p className="text-danger" style={{ textAlign: 'center' }}>{error}</p>}
                                    {predictionResult && <p className="prediction-result">Fitness Level: {predictionResult}</p>}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
