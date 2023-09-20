import React from 'react';
import './Home.css'; // Import your CSS file for styling
import img from "../images/Modiji.jpg"
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Home() {
  return (
    <div className="App">
      <div className="homepage-container">
        {/* Left Column */}
        <div className="left-column">
          <h1 className='head'>We generate video form of press releases</h1>
          <p style={{fontSize:"18px"}}>Enhanced engagement and public outreach through video press releases and multilingual communication.</p>
          <button className="generate-button"><Link style={{textDecoration:"none",color:"white"}} to="/GenerateVideo">Start Free</Link></button>
        </div>

        {/* Right Column */}
        <div className="right-column">
          <img src={img} alt="Images" />
        </div>
      </div>
    </div>
  );
}

export default Home;
