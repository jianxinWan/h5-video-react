import * as React from 'react'
import { useContext, useEffect } from 'react'
import { GlobalStoreContext } from './store'
import Bar from './components/bar'

export default function Controls() {
  const { state, dispatch } = useContext(GlobalStoreContext)
  const { isPlay } = state
  return (
    <div className="controls-wrapper">
      <Bar />
      <div className="bottom-wrapper">
        <i
          onClick={() => dispatch({
            type: 'playStatus',
            payload: {
              isPlay: !isPlay
            }
          })}
          className={[
            'iconfont',
            'play-btn',
            isPlay ? 'icon-pause' : 'icon-play'].join(' ')
          }></i>
      </div>
      <style>
        {`
          .controls-wrapper{
            width: 100%;
            height: 40px;
            background-image: linear-gradient(180deg,transparent,rgba(0,0,0,.37),rgba(0,0,0,.57),rgba(0,0,0,.75));
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
        `}

      </style>
    </div>
  )
}