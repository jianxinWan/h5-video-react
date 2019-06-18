import * as React from 'react';
import { useEffect, useContext, useState } from 'react'
import { GlobalStoreProvider, GlobalStoreContext } from './store'


import Controls from './controls';
import Player from './player'
import './index.less';
interface Iinfo {
  src?: string
  autoPlay?: boolean,
  poster?: string
}

const Video = (info: Iinfo) => {
  const { src, autoPlay, poster } = info
  const { state } = useContext(GlobalStoreContext)
  return (
    <GlobalStoreProvider>
      <div className="video-wrapper">
        {poster && <div className="video-poster" />}
        <Player src={src} autoPlay={autoPlay} />
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
    </GlobalStoreProvider>
  )
};


export default Video;