import * as React from 'react'
import { useContext, useEffect, Fragment, useRef } from 'react'
import { GlobalStoreContext } from './store/index'
import fullScreen from './Utils/fullscreen'
interface Iinfo {
  src?: string
  autoPlay?: boolean
}

interface IParams {
  type: string
  payload: boolean
}

type IDispatch = (params: IParams) => void

const mouseMoveShowControl = (dispatch: IDispatch) => {
  requestAnimationFrame(() => {
    dispatch({
      type: 'showControls',
      payload: true
    })
  })
}

export default function Player(info: Iinfo) {
  const { src, autoPlay } = info
  const videoEl = useRef<HTMLVideoElement>(null)
  const { state, dispatch } = useContext(GlobalStoreContext)
  const { isPlay, currentTime, drag, muted, isFullScreen } = state
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
  // 设置全屏
  useEffect(() => {
    const video = videoEl.current
    if (video !== null) {
      const canFullScreen = fullScreen(video)
      if (canFullScreen) {
        video[canFullScreen]()
      }
    }
  }, [isFullScreen])
  return (
    <Fragment>
      <video
        autoPlay={autoPlay}
        ref={videoEl}
        muted={muted}
        onMouseEnter={() => dispatch({ type: 'showControls', payload: true })}
        onMouseMove={() => mouseMoveShowControl(dispatch)}
        onTouchStart={() => dispatch({ type: 'showControls', payload: true })}
        onTouchMove={() => mouseMoveShowControl(dispatch)}
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