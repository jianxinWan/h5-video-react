import * as React from 'react'
import { useContext, useEffect, Fragment, useRef } from 'react'
import { GlobalStoreContext } from './store'

interface Iinfo {
  src?: string
  autoPlay?: boolean
}

interface IParams {
  type: string
  payload: boolean
}

type IDispatch = (params: IParams) => void

let flag: boolean = true //函数节流
const mouseMoveShowControl = (dispatch: IDispatch) => {
  if (flag) {
    flag = false
    setTimeout(() => {
      flag = true
      dispatch({
        type: 'showControls',
        payload: true
      })
    }, 1000)
  }
}

export default function Player(info: Iinfo) {
  const { src, autoPlay } = info
  const videoEl = useRef<HTMLVideoElement>(null)
  const { state, dispatch } = useContext(GlobalStoreContext)
  const { isPlay, currentTime, drag } = state
  useEffect(() => {
    const video = videoEl.current
    if (video !== null) {
      if (isPlay) {
        video.play()
      } else {
        //播放状态下   
        video.pause()
      }
    }
  }, [isPlay])
  // 不使用currentTime的原因是正常播放会触发currentTime
  useEffect(() => {
    const video = videoEl.current
    if (video !== null) {
      if (currentTime) {
        video.currentTime = currentTime
      }
    }
  }, [drag])
  return (
    <Fragment>
      <video
        autoPlay={autoPlay}
        ref={videoEl}
        muted
        onMouseEnter={() => dispatch({ type: 'showControls', payload: true })}
        onMouseMove={() => mouseMoveShowControl(dispatch)}
        onTouchStart={() => dispatch({ type: 'showControls', payload: true })}
        onCanPlay={(e) => dispatch({ type: 'duration', payload: e.currentTarget.duration })}
        onPause={() => dispatch({ type: 'playStatus', payload: false })}
        onPlay={() => dispatch({ type: 'playStatus', payload: true })}
        onTimeUpdate={(e) => dispatch({ type: 'currentTime', payload: e.currentTarget.currentTime })}
        onEnded={() => dispatch({ type: 'playStatus', payload: false })}
      >
        <source src={src} type="video/mp4" />
      </video>
    </Fragment>
  )
}