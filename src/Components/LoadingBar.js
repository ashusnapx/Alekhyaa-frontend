import React from 'react';
import "./LoadingBar.css";

const LoadingBar = ({ progress }) => {
  return (
    <div className="loading-bar" style={{width:"70%",height:"50px" ,margin:"0px auto",backgroundColor:"white"}}>
      <div className="bar" style={{ width: progress + '%'}}>
      <span className="progress-text" style={{color:"black", marginLeft:"30px"}}>{progress}%</span>
      </div>
    </div>
  );
};

export default LoadingBar;