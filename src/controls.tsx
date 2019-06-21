import * as React from 'react'
import { useContext, useEffect } from 'react'
import { GlobalStoreContext } from './store/index'

import Bar from './components/bar'
import Time from './components/time'
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
let showControlsFlag = true

export default function Controls() {
  const { state, dispatch } = useContext(GlobalStoreContext)
  const { isPlay, showControls } = state
  useEffect(() => {
    console.log(showControls)
    if (showControlsFlag) {
      if (isPlay) {
        showControlsFlag = false
        setTimeout(() => {
          showControlsFlag = true
          dispatch({
            type: 'showControls',
            payload: false
          })
        }, 2500)
      }
    }
  }, [showControls, isPlay])
  return (
    <div className="controls-wrapper" onMouseMove={() => { }}>
      <Bar />
      <div className="bottom-wrapper">
        <i
          onClick={() => playBtnClick(isPlay, dispatch)}
          className={[
            'iconfont',
            'play-btn',
            isPlay ? 'icon-pause' : 'icon-play'].join(' ')
          }>
        </i>
        <Time />
      </div>
      <style jsx>
        {`
          .controls-wrapper{
            position: absolute;
            bottom: 5px;
            left: 0;
            opacity: ${showControls || !isPlay ? '1' : '0'};
            width: 100%;
            height: 55px;
            background-image: linear-gradient(180deg,transparent,rgba(0,0,0,.37),rgba(0,0,0,.57),rgba(0,0,0,.75));
            transition: all .5s linear;
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
          .icon-pause{
            font-size: 20px;
          }
        `}

      </style>
    </div>
  )
}