import React from 'react';

function VideoDisplay({ url }) {
  return (
    <div style={{display:"flex",marginTop:"90px", flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
      <p style={{fontSize:"28px",fontWeight:"bold"}}>Your video is here:</p>
      <div style={{width:"553px",height:"75px",radius:"4px", borderRadius:"1px",backgroundColor:"white",display:"flex",alignItems:"center",justifyContent:'center'}}>
  <a href={url} target='__blank'>Drive Link</a></div>

      
{/* 
      <div style={{width:"553px",
height:"75px", margin:"16px",
radius:"4px", 
borderRadius:"1px",backgroundColor:
"#060640",color:"white",display:"flex",alignItems:"center",justifyContent:'center'}}>
 Generate Another Video</div> */}
    </div>
  );
}

export default VideoDisplay;
