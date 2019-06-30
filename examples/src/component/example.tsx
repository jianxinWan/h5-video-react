import * as React from 'react';
import Video from '../../../src/index'


interface IvideoConfig {
  src?: string
  autoPlay?: boolean,
  poster?: string
}
const videoConfig: IvideoConfig = {
  src: '//vjs.zencdn.net/v/oceans.mp4',
  autoPlay: false,
  poster: '//vjs.zencdn.net/v/oceans.png',
}

const Example = () => {
  const { src, autoPlay, poster } = videoConfig
  return (
    <div className="example-wrapper">
      <div className="example-center">
        <Video
          src={src}
          autoPlay={autoPlay}
          poster={poster}
        />
      </div>
      <style jsx>
        {`
        .example-wrapper{
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .example-center{
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%;
        }
        @media (min-width:1020px){
          .example-center{
            width: 1020px;
          }
        }
        `}
      </style>
    </div>
  )
};
export default Example