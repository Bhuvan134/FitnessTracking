import React, { useState,useEffect } from 'react';

import Header from "../components/Header";
import runningIcon from "../assets/images/runing.jpg";
import cyclingIcon from "../assets/images/cycling.jpg";
import jumpingRopeIcon from "../assets/images/jumping-rope.jpg";
import swimmingIcon from "../assets/images/swimming.jpg";
import pushupsIcon from "../assets/images/pushups.jpg";
import squatsIcon from "../assets/images/squats.jpg";
import pullupsIcon from "../assets/images/pullups.jpg";
import deadliftsIcon from "../assets/images/deadlifts.jpg";


export default function Practice() {
    const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div>
      <Header />
      <div className="practice-container">
      <h2 className="definition-title">What are Cardiovascular Exercises?</h2>
        <p className="definition">
          Cardiovascular exercises, also known as aerobic exercises, are activities that elevate the heart rate and increase blood circulation, resulting in improved cardiovascular health and endurance. These exercises primarily target the heart and lungs, enhancing their efficiency over time. Examples of some cardiovascular exercises include running, cycling, jumping rope, and swimming.
        </p>

        <h2 className="definition-title">What are Resistance Exercises?</h2>
        <p className="definition">
          Resistance exercises, also referred to as strength training or weight training, involve using resistance to improve muscle strength, endurance, and size. These exercises work by causing the muscles to contract against an external resistance, such as body weight, dumbbells, or resistance bands. Resistance exercises help build and tone muscles, increase bone density, and enhance overall strength and stability. Common examples of resistance exercises include pushups, squats, pull-ups, and deadlifts.
        </p>
        <h2 className="practice-title">Top 4 Cardiovascular Exercises</h2>
        <div className="exercise-info">
          <h3 className="exercise-name">Running</h3>
          <img src={runningIcon} alt="Running" className="exercise-icon" style={{ display: 'block', margin: '0 auto' }} />
          <h3 className="advantages-title">Steps to Practice:</h3>
          <ol className="steps">
            <li>Warm up properly before starting.</li>
            <li>Start with a slow pace and gradually increase speed.</li>
            <li>Maintain proper form and posture throughout.</li>
            <li>Cool down with a slow jog or walk.</li>
          </ol>
          <h3 className="advantages-title">Advantages:</h3>
          <ul className="advantages">
            <li>Improves cardiovascular health.</li>
            <li>Burns calories effectively.</li>
            <li>Boosts mood and reduces stress.</li>
          </ul>
        </div>
        
        <div className="exercise-info">
          <h3 className="exercise-name">Cycling</h3>
          <img src={cyclingIcon} alt="Cycling" className="exercise-icon" style={{ display: 'block', margin: '0 auto' }}/>
          <h3 className="advantages-title">Steps to Practice:</h3>
          <ol className="steps">
            <li>Adjust the bicycle seat and handlebars to a comfortable position.</li>
            <li>Start pedaling at a moderate pace.</li>
            <li>Gradually increase speed and resistance as needed.</li>
            <li>Cool down with light pedaling and stretching.</li>
          </ol>
          <h3 className="advantages-title">Advantages:</h3>
          <ul className="advantages">
            <li>Strengthens leg muscles.</li>
            <li>Improves joint mobility.</li>
            <li>Enhances cardiovascular fitness.</li>
          </ul>
        </div>

        <div className="exercise-info">
          <h3 className="exercise-name">Jumping Rope</h3>
          <img src={jumpingRopeIcon} alt="JumpingRope" className="exercise-icon" style={{ display: 'block', margin: '0 auto' }} />
          <h3 className="advantages-title">Steps to Practice:</h3>
          <ol className="steps">
            <li>Hold the handles of the jump rope with both hands.</li>
            <li>Swing the rope over your head and jump over it as it comes down.</li>
            <li>Land softly on the balls of your feet and keep a steady rhythm.</li>
            <li>Continue jumping for desired duration.</li>
          </ol>
          <h3 className="advantages-title">Advantages:</h3>
          <ul className="advantages">
            <li>Improves coordination and agility.</li>
            <li>Burns a high number of calories in a short time.</li>
            <li>Enhances cardiovascular endurance.</li>
          </ul>
        </div>

        <div className="exercise-info">
          <h3 className="exercise-name">Swimming</h3>
          <img src={swimmingIcon} alt="Swimming" className="exercise-icon" style={{ display: 'block', margin: '0 auto' }}/>
          <h3 className="advantages-title">Steps to Practice:</h3>
          <ol className="steps">
            <li>Warm up with a few laps of easy swimming.</li>
            <li>Choose a stroke and start swimming at a moderate pace.</li>
            <li>Focus on proper breathing technique.</li>
            <li>Cool down with easy strokes and stretches.</li>
          </ol>
          <h3 className="advantages-title">Advantages:</h3>
          <ul className="advantages">
            <li>Works all major muscle groups with minimal impact on joints.</li>
            <li>Improves cardiovascular fitness and lung capacity.</li>
            <li>Helps in weight management and stress reduction.</li>
          </ul>
        </div>

        <h2 className="practice-title">Top 4 Resistance Exercises</h2>
        <div className="exercise-info">
          <h3 className="exercise-name">Pushups</h3>
          <img src={pushupsIcon} alt="Push-ups" className="exercise-icon" style={{ display: 'block', margin: '0 auto' }}/>
          <h3 className="advantages-title">Steps to Practice:</h3>
          <ol className="steps">
            <li>Start in a plank position with hands shoulder-width apart.</li>
            <li>Lower your body until your chest nearly touches the floor.</li>
            <li>Push back up to the starting position.</li>
            <li>Repeat for desired repetitions.</li>
          </ol>
          <h3 className="advantages-title">Advantages:</h3>
          <ul className="advantages">
            <li>Strengthens chest, arms, and core muscles.</li>
            <li>Requires no equipment.</li>
            <li>Can be easily modified for different fitness levels.</li>
          </ul>
        </div>

        <div className="exercise-info">
          <h3 className="exercise-name">Squats</h3>
          <img src={squatsIcon} alt="Squats" className="exercise-icon" style={{ display: 'block', margin: '0 auto' }}/>
          <h3 className="advantages-title">Steps to Practice:</h3>
          <ol className="steps">
            <li>Stand with feet shoulder-width apart.</li>
            <li>Bend your knees and lower your hips as if sitting back into a chair.</li>
            <li>Keep your chest up and back straight.</li>
            <li>Push through your heels to return to the starting position.</li>
          </ol>
          <h3 className="advantages-title">Advantages:</h3>
          <ul className="advantages">
            <li>Strengthens leg muscles, including quadriceps, hamstrings, and glutes.</li>
            <li>Improves lower body mobility and balance.</li>
            <li>Can be done with or without weights for added resistance.</li>
          </ul>
        </div>

        <div className="exercise-info">
          <h3 className="exercise-name">Pull-ups</h3>
          <img src={pullupsIcon} alt="Pull-ups" className="exercise-icon" style={{ display: 'block', margin: '0 auto' }}/>
          <h3 className="advantages-title">Steps to Practice:</h3>
          <ol className="steps">
            <li>Grip the pull-up bar with palms facing away from you.</li>
            <li>Hang with arms fully extended.</li>
            <li>Engage your back muscles and pull your body up until your chin reaches the bar.</li>
            <li>Lower yourself down with control.</li>
          </ol>
          <h3 className="advantages-title">Advantages:</h3>
          <ul className="advantages">
            <li>Strengthens upper body muscles, including back, shoulders, and arms.</li>
            <li>Improves grip strength and overall upper body endurance.</li>
            <li>Can be done with various grip variations for targeting different muscle groups.</li>
          </ul>
        </div>

        <div className="exercise-info">
          <h3 className="exercise-name">Deadlifts</h3>
          <img src={deadliftsIcon} alt="Deadlifts" className="exercise-icon" style={{ display: 'block', margin: '0 auto' }}/>
          <h3 className="advantages-title">Steps to Practice:</h3>
          <ol className="steps">
            <li>Stand with feet hip-width apart and a barbell in front of you.</li>
            <li>Bend at the hips and knees, keeping your back straight, to grip the barbell.</li>
            <li>Push through your heels and lift the barbell, keeping it close to your body.</li>
            <li>Stand up straight, then lower the barbell back down with control.</li>
          </ol>
          <h3 className="advantages-title">Advantages:</h3>
          <ul className="advantages">
            <li>Targets multiple muscle groups, including the back, glutes, and hamstrings.</li>
            <li>Improves overall strength and power.</li>
            <li>Helps in building core stability and proper lifting mechanics.</li>
          </ul>
        </div>
      </div>
       {/* Button to scroll to the top */}
       {showButton && (
        <button className="scroll-to-top-btn" onClick={scrollToTop}>
          Back to Top
        </button>
      )}
    </div>
  );
}