import React from 'react';
import {Link} from 'react-router-dom'
function PermissionDialog({ onPermissionGranted ,setGeneratedVideoUrl}) {
  const handlePermissionGranted = () => {
    // You can add more logic here to handle PIB officer permission
    onPermissionGranted();
  };

  return (
    <div style={{display:"flex",marginTop:"32px", flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
    <div style={{width:"553px",
   
height:"75px",
radius:"4px", 
borderRadius:"1px",backgroundColor:
"#0085FF",color:"white",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:'center'}} 
onClick={handlePermissionGranted}>
  Approve and Post</div>
  
  <div style={{width:"553px",
height:"75px", margin:"16px",
radius:"4px", 
borderRadius:"1px",backgroundColor:
"#060640",cursor:"pointer",color:"white",display:"flex",alignItems:"center",justifyContent:'center'}}>
 <Link style={{textDecoration:"none",color:"white"}} to="/GenerateVideo" onClick={()=>{setGeneratedVideoUrl("")}}>Generate Another Video</Link></div>
  </div>

  );
}

export default PermissionDialog;
