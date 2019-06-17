import * as React from 'react';
import './index.less'

import Controls from './controls'

interface Iinfo {
  src?: string
  autoPlay?: boolean,
  poster?: string
}


const Video = (info: Iinfo) => {
  const { src, autoPlay, poster } = info
  return (
    <div className="video-wrapper">
      {poster && <div className="video-poster" />}
      <video controls autoPlay={autoPlay}>
        <source src={src} type="video/mp4" />
      </video>
      <Controls />
      <style>
        {`
          .video-poster{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url(${poster});
            background-size: 100% 100%;
            background-repeat: no-repeat;
          }
        `}
      </style>
    </div>
  )
};
export default Video;