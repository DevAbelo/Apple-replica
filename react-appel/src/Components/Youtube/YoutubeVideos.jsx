/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, {useState,useEffect} from 'react'
import "./YoutubeVideos.css"

function YoutubeVideos() {
  // Initializes the state
  const [YtVideos, SetYtVideos]=useState([])

  useEffect(() => {
    fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=9&order=date&key=AIzaSyDMPI4iRjK-GZdQKY8mZbgSNiDlAAd15jI")
        .then((response) => response.json())

        .then((data) => {
            const YtVideos = data.items;
            SetYtVideos(YtVideos);
        })
        .catch((error) => console.error('Error fetching data:', error));
}, []);
// console if the data fetched or not
useEffect(() => {
    console.log(YtVideos);
}, [YtVideos]);
// Rendering the Component
  return (
    <>
    
    <div className="container">
        <div className="row justify-content-center text-center">
            <div className="col-12">
                <div className="title-w">
                    Latest Videos 
                    <hr/>
                </div> 
                <br />
            </div>
          {/* iterates over the YtVideos array */}
            {YtVideos?.map((videos,)=>{
        let vidId = videos.id.videoId; // Extracts the video ID from the video project
        
        let vidLink = `https://www.youtube.com/watch?v=${vidId}`; //Constructs the full YouTube URL using the video ID. 

        // structure for displaying a single video
        let videowrapper =(
          <div key={vidId} className="col-sm-12 col-md-6 col-lg-4">
        <div className="singleVideoWrapper">
          <div className="videoThumbnail">
            <a href={vidLink} target="_blank">
              <img src={videos.snippet.thumbnails.high.url} />
            </a>
          </div>
          <div className="videoInfoWrapper">
            <div className="videoTitle">
              <a href={vidLink} target="_blank">
                {videos.snippet.title}
        </a>
      </div>
      <div className="videoDesc">
        {videos.snippet.description}
      </div>
    </div>
  </div>
</div>
    )
    return videowrapper
})}
        </div>
    </div>


    </>
  )
}

export default YoutubeVideos