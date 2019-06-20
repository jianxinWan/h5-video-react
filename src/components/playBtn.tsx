import * as React from 'react'
import { useContext } from 'react'
import { GlobalStoreContext } from '../store/index'

interface IParams {
  type: string,
  payload: boolean
}

type IDispatch = (params: IParams) => void

const startPlay = (dispatch: IDispatch) => {
  dispatch({
    type: 'playStatus',
    payload: true
  })
  dispatch({
    type: 'showPoster',
    payload: false
  })
}

export default function PlayBtn() {
  const { state, dispatch } = useContext(GlobalStoreContext)
  const { isPlay } = state
  if (isPlay) return null
  return (
    <div className="play-btn-wrapper" onClick={() => startPlay(dispatch)}>
      <i className="iconfont icon-play center-logo"></i>
      <style jsx>
        {`
          .play-btn-wrapper{
            width: 70px;
            height: 70px;
            position: absolute;
            top: 50%;
            left: 50%;
            border-radius: 50%;
            transform: translate(-50%, -50%);
            background-color: rgba(0,0,0,0.38);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 99;
          }
          .play-btn-wrapper:hover{
            cursor: pointer;
          }
          .play-btn-wrapper .center-logo {
            color: #ffffff;
            font-size: 28px;
            margin-left: 5px;
          }
        `}
      </style>
    </div>
  )
}