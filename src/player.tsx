import * as React from 'react'
import { useContext, useEffect, Fragment, useRef } from 'react'
import { GlobalStoreContext } from './store'

interface Iinfo {
  src?: string
  autoPlay?: boolean
}

export default function Player(info: Iinfo) {
  const { src, autoPlay } = info
  const videoEl = useRef<HTMLVideoElement>(null)
  const { state, dispatch } = useContext(GlobalStoreContext)
  const { isPlay } = state
  useEffect(() => {
    const video = videoEl.current
    if (video !== null) {
      if (isPlay) {
        video.play()
      } else {
        video.pause()
      }
    }
  })
  return (
    <Fragment>
      <video controls autoPlay={autoPlay} ref={videoEl}>
        <source src={src} type="video/mp4" />
      </video>
      <style>
        {`
        `}
      </style>
    </Fragment>
  )
}