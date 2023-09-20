import React, { useState} from 'react';
import LoadingBar from './LoadingBar';
import VideoDisplay from './VideoDisplay';
import PermissionDialog from './PermissionDialog';
import "./GenerateVideo.css"


function GenerateVideo() {
  const [loading, setLoading] = useState(false);
  const [videoId, setVideoId] = useState(null);
  const [generatedVideoUrl, setGeneratedVideoUrl] = useState('');
  const [pressReleaseLink, setPressReleaseLink] = useState('');

  const [loadingProgress, setLoadingProgress] = useState(0);

  // Function to calculate loading progress based on status
  const calculateLoadingProgress = (status) => {
    if (status === 'In Progress') {
      return 50; // For example, you can set a specific value for 'In Progress' status.
    } else if (status === 'Completed') {
      return 100; // For example, you can set a specific value for 'Completed' status.
    } else {
      return 0; // Default progress value
    }
  };
  


  const handleGenerateVideo = async (pressReleaseLink) => {
    // Validating pressReleaseLink here (e.g., check if it's a valid URL).
    
    // Displaying loading bar
    setLoading(true);
  
    // Sending a POST request to your backend
    try {
      const response = await fetch('/generate_video', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ pressReleaseLink }),
      });
      const data = await response.json();
      
      // Updating state with the response
      setVideoId(data.video_id);
      setGeneratedVideoUrl(data.generated_video_url);
  
      // Calculate loading progress based on the received status
      const progress = calculateLoadingProgress(data.status);
      setLoadingProgress(progress);
    } catch (error) {
      console.error('Error:', error);
    }
  
    // Hiding loading bar
    setLoading(false);
  };
  
  const handleUploadVideo = async () => {
    if (videoId) {
      // Sending a POST request to upload the video
      try {
        const response = await fetch('/upload_video', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            upload_video: 1,
            video_id: videoId,
          }),
        });
        const data = await response.json();

        // Handling the upload status here
        console.log('Video Upload Status:', data.video_upload_status);
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  return (
   
    <div className='text-center'>
      
      {!loading && !generatedVideoUrl && <>
      <input
        className='input-field'
        type="text"
        placeholder="Paste Press Release Link Here"
        value={pressReleaseLink}
        onChange={(e) => setPressReleaseLink(e.target.value)}

        // Adding an event handler to capture the input value
      />
    
      <button className="generate-button" onClick={() => handleGenerateVideo(pressReleaseLink)}>Generate Video</button></>}
   
      {loading && <h1 style={{fontSize:"15px", fontWeight:"bold",marginTop:"25px"}}>Generating Video...</h1> }
      {loading && <LoadingBar progress={loadingProgress} />}
      {/* <VideoDisplay url={generatedVideoUrl} />
      <PermissionDialog onPermissionGranted={handleUploadVideo} /> */}
      {generatedVideoUrl && (
        <VideoDisplay url={generatedVideoUrl} />
      )}

      {generatedVideoUrl && (
        <PermissionDialog onPermissionGranted={handleUploadVideo} setGeneratedVideoUrl={setGeneratedVideoUrl}/>
      )}
    </div>
   
  );
}

export default GenerateVideo;
