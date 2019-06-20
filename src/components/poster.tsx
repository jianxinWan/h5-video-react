import * as React from 'react'
import { useContext, useEffect } from 'react'
import { GlobalStoreContext } from '../store/index'

interface IInfo {
  poster: string
}

export default function Poster(info: IInfo) {
  const { state } = useContext(GlobalStoreContext)
  const { poster } = info
  const { showPoster } = state
  if (!showPoster) return null
  return (
    <div className="video-poster">
      <style jsx>
        {`
          .video-poster{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 9;
            background-image: url(${poster});
            background-size: 100% 100%;
            background-repeat: no-repeat;
          }
        `}
      </style>
    </div>
  )
}