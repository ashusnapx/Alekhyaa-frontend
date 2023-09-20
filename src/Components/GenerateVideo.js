import React, { useState } from 'react';
import LoadingBar from './LoadingBar';
import VideoDisplay from './VideoDisplay';
import PermissionDialog from './PermissionDialog';
import "./GenerateVideo.css"


function GenerateVideo() {
  const [loading, setLoading] = useState(false);
  const [videoId, setVideoId] = useState(null);
  const [generatedVideoUrl, setGeneratedVideoUrl] = useState('setGeneratedVideoUrl={setGeneratedVideoUrl}');
  const [pressReleaseLink, setPressReleaseLink] = useState('');


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
      
      {!loading && <>
      <input
        className='input-field'
        type="text"
        placeholder="Paste Press Release Link Here"
        value={pressReleaseLink}
        onChange={(e) => setPressReleaseLink(e.target.value)}

        // Adding an event handler to capture the input value
      />
    
      <button className="generate-button" onClick={() => handleGenerateVideo(pressReleaseLink)}>Generate Video</button></>}
   
      {loading && <LoadingBar />}
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
