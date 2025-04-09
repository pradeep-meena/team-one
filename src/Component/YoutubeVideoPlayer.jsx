import { useState } from 'react';
// import { Play } from 'lucide-react';

const YouTubeVideoPlayer = () => {
  const [playing, setPlaying] = useState(false);
  const videoId = 'EdOjCdbPG2c';
  
  // Handle click on the thumbnail to start playing
  const handlePlay = () => {
    setPlaying(true);
  };
  
  return (
    <div className="relative w-full rounded-lg overflow-hidden shadow-md border">
      {!playing ? (
        <>
          {/* Thumbnail with play button overlay */}
          <div 
            className="relative cursor-pointer w-full aspect-video bg-gray-100"
            onClick={handlePlay}
          >
            <img 
              src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`} 
              alt="Video thumbnail" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-red-600 bg-opacity-80 text-white rounded-full p-4 shadow-lg hover:bg-opacity-100 transition-all">
                {/* <Play size={32} /> */}
              </div>
            </div>
          </div>
        </>
      ) : (
        // Embedded YouTube player
        <div className="w-full aspect-video">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default YouTubeVideoPlayer;