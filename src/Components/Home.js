import React from 'react';
import './Home.css'; // Import your CSS file for styling
import img from "../images/Modiji.jpg"
function Home() {
  return (
    <div className="App">
      <div className="homepage-container">
        {/* Left Column */}
        <div className="left-column">
          <h1 className='head'>We generate video form of press releases</h1>
          <p style={{fontSize:"18px"}}>Enhanced engagement and public outreach through video press releases and multilingual communication.</p>
         
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
