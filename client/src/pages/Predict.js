import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import Auth from "../utils/auth";
import Header from "../components/Header";
import predictIcon from "../assets/images/predict.jpg"


export default function Exercise() {
  const loggedIn = Auth.loggedIn();
  const navigate = useNavigate()


  // If the user is not logged in, redirect to the login page
  if (!loggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <Header />
      <div className="exercise d-flex flex-column align-items-center">
        <h2 className='title'>Know your fitness rate</h2>
        <div>
          <button className='cardio-btn d-flex flex-column  align-items-center justify-content-center' onClick={() => navigate("/predict")}>
            <img alt="predict" src={predictIcon} className="exercise-icon" />
            Predict
          </button>
        </div>
      </div>
    </div>
  );
}