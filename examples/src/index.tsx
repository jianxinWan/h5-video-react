import * as React from 'react';
import { Fragment } from 'react'
import { render } from 'react-dom';
import Video from '../../src';
interface IvideoConfig {
  src?: string
  autoPlay?: boolean,
  poster?: string
}
const videoConfig: IvideoConfig = {
  src: 'http://h5player.bytedance.com/video/mp4/xgplayer-demo-360p.mp4',
  autoPlay: false,
  poster: '', //s2.pstatp.com/cdn/expire-1-M/byted-player-videos/1.0.0/poster.jpg
}
const App = () => {
  const { src, autoPlay, poster } = videoConfig
  return (
    <Fragment>
      <Video
        src={src}
        autoPlay={autoPlay}
        poster={poster}
      />
    </Fragment>
  )
};
render(<App />, document.getElementById("root"));