import React from "react";
import { useNavigate } from "react-router-dom";
import Auth from "../utils/auth"
import Container from "react-bootstrap/Container";
import Header from "../components/Header";

export default function Home() {
  const navigate = useNavigate();
  const loggedIn = Auth.loggedIn()

  return (
    <div className="homepage">
      <Header />
      <Container className="home d-flex flex-column align-items-center justify-content-center flex-wrap text-center">
        <h1 className="home-title" style={{ color: '#90ee90', textShadow: '0 0 5px black' }}>Your Daily Workout Partner</h1>
        <p className="home-text" style={{ color: 'darkblue', textShadow: '0 0 5px white' }}>
        "FitPro: Your Personal Fitness Journal for Cardio and Resistance Exercises"
        </p>
        {loggedIn ?
          (<button className="home-btn" onClick={() => navigate("/exercise")}>Add Exercise</button>) :
          (<button className="home-btn" onClick={() => navigate("/signup")}>Get Started</button>)}
      </Container>
    </div>
  );
}
