import * as React from 'react';
import { GlobalStoreProvider } from './store/index'

import Controls from './controls';
import Player from './player';
import PlayBtn from './components/playBtn'
import Poster from './components/poster'
import './index.less';
interface IInfo {
  src?: string
  autoPlay?: boolean,
  poster?: string
}

const Video = (info: IInfo) => {
  const { src, autoPlay, poster } = info
  return (
    <GlobalStoreProvider>
      <div className="video-wrapper">
        {poster && <Poster poster={poster} />}
        <Player src={src} autoPlay={autoPlay} />
        <PlayBtn />
        <Controls />
        <style jsx>
          {`
          .video-wrapper{
            position: relative;
          }
        `}
        </style>
      </div>
    </GlobalStoreProvider>
  )
};


export default Video;