import * as React from 'react'
import { useContext, useEffect } from 'react'
import { GlobalStoreContext } from './store/index'

import Bar from './components/bar'
import Time from './components/time'
import Volume from './components/volume'
interface IParams {
  type: string,
  payload: boolean
}

type IDispatch = (params: IParams) => void

const playBtnClick = (isPlay: boolean | undefined, dispatch: IDispatch) => {
  if (isPlay !== undefined) {
    dispatch({
      type: 'playStatus',
      payload: !isPlay
    })
    dispatch({
      type: 'showPoster',
      payload: false
    })
  }
}

const mouseMoveShowControl = (dispatch: IDispatch) => {
  requestAnimationFrame(() => {
    dispatch({
      type: 'showControls',
      payload: true
    })
  })
}

const setMuted = (muted: boolean, dispatch: IDispatch) => {
  dispatch({
    type: 'muted',
    payload: !muted
  })
}

const setFullScreen = (isFullScreen: boolean, dispatch: IDispatch) => {
  dispatch({
    type: 'isFullScreen',
    payload: !isFullScreen
  })
}

let showControlsFlag = true

export default function Controls() {
  const { state, dispatch } = useContext(GlobalStoreContext)
  const { isPlay, showControls, muted, isFullScreen } = state
  useEffect(() => {
    if (showControlsFlag) {
      if (isPlay) {
        showControlsFlag = false
        setTimeout(() => {
          showControlsFlag = true
          dispatch({
            type: 'showControls',
            payload: false
          })
        }, 3500)
      }
    }
  }, [showControls, isPlay])
  return (
    <div className="controls-wrapper"
      onMouseMove={() => mouseMoveShowControl(dispatch)}
      onTouchMove={() => mouseMoveShowControl(dispatch)}
    >
      <Bar />
      <div className="bottom-wrapper">
        <div className="left">
          <div className="play-btn-wrapper" onClick={() => playBtnClick(isPlay, dispatch)}>
            <i
              className={[
                'iconfont',
                'play-btn',
                isPlay ? 'icon-pause' : 'icon-play'].join(' ')
              }>
            </i>
          </div>
          <Time />
        </div>
        <div className="right">
          <div className="volume-wrapper" onClick={() => setMuted(muted, dispatch)}>
            <i className={['iconfont', muted ? 'icon-jingyin' : 'icon-md-volume-high'].join(' ')}></i>
            <Volume />
          </div>
          <div className="fullscreen-wrapper" onClick={() => setFullScreen(isFullScreen, dispatch)}>
            <i className="iconfont icon-quanping"></i>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .controls-wrapper{
            position: absolute;
            bottom: 5px;
            left: 0;
            opacity: ${showControls || !isPlay ? '1' : '0'};
            width: 100%;
            height: 45px;
            background-color: rgba(43,51,63,.7);
            transition: all .5s linear;
            color: #ffffff;
          }
          .bottom-wrapper{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 5px 10px 0;
          }
          .pause-state-btn{
            width: 0;
            height: 0;
            border: 10px solid #ffffff;
            border-right: 10px solid transparent;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
          }
          .play-btn{
            color: #ffffff;
          }
          .play-btn-wrapper{
            width: 30px;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .icon-pause{
            font-size: 20px;
          }
          .icon-play{
            margin-top: 3px;
          }
          .left,.right{
            display: flex;
            justify-content: flex-start;
          }
          .volume-wrapper{
            margin-right: 20px;
          }
          .fullscreen-wrapper{
            margin-right: 10px;
          }
          .volume-wrapper i{
            font-size: 22px;
          }
          .volume-wrapper,.fullscreen-wrapper{
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}
      </style>
    </div>
  )
}