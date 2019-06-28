import * as React from 'react'
import { useContext, useRef, useState, useEffect } from 'react'
import { GlobalStoreContext } from '../store/index'

import getMouseXY from '../Utils/getMouseXY'
import isPc from '../Utils/isPc'
interface IParams {
  type: string,
  payload: any
}

type IDispatch = (params: IParams) => void

//是否正在拖动
let draging = false
// isPc
const pc = isPc()

const progressClick = (e: React.MouseEvent, out: HTMLDivElement | null, dispatch: IDispatch) => {
  const volume = parseFloat(getMouseXY(e, out).topPercent.toFixed(2))
  dispatch({
    type: 'volume',
    payload: volume
  })
}

const dragBar = (e: any, out: HTMLDivElement | null, draging: boolean, dispatch: IDispatch) => {
  let flag: boolean = true
  if (draging) {
    const volume = parseFloat(getMouseXY(e, out).topPercent.toFixed(2))
    if (flag && volume) {
      flag = false
      requestAnimationFrame(() => {
        dispatch({
          type: 'volume',
          payload: volume
        })
      })
    }
  }
}

export default function Volume() {
  const { state, dispatch } = useContext(GlobalStoreContext);
  const out = useRef<HTMLDivElement>(null)
  const { volume, showVolume } = state
  useEffect(() => {
    if (pc) {
      document.addEventListener('mousemove', (e) => dragBar(e, out.current, draging, dispatch), false)
      document.addEventListener('mouseup', () => draging = false, false)
    } else {
      document.addEventListener('touchmove', (e) => dragBar(e, out.current, draging, dispatch), false)
      document.addEventListener('touchend', () => draging = false, false)
    }
  }, [draging])
  if (!showVolume && draging === false) return null
  return (
    <div className="volume-wrapper" onMouseMove={() => {

    }}>
      <div className="volume-bar-out" ref={out}
        onClick={(e) => progressClick(e, out.current, dispatch)}
        onTouchStart={() => dispatch({ type: 'showControls', payload: true })}
        onMouseMove={(e) => dragBar(e, out.current, draging, dispatch)}
      >
        <div className="volume-bar-ball"
          onMouseDown={() => draging = true}
          onTouchStart={() => draging = true}
        ></div>
        <div className="volume-bar-in" />
      </div>
      <style jsx>
        {`
          .volume-wrapper{
            position: absolute;
            bottom: 50px;
            width: 30px;
            height: 90px;
            background-color: rgba(43,51,63,.7);
            display: flex;
            justify-content: center;
          }
          .volume-bar-out{
            width: 5px;
            height: 80px;
            margin: 5px 0;
            background-color: rgba(255,255,255,.4);
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: center;
          }
          .volume-bar-in{
            width: 100%;
            height: ${volume * 100}%;
            background-image: linear-gradient(-90deg, rgb(250, 31, 65), rgb(227, 17, 6));
          }
          .volume-bar-ball{
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background-color: #ffffff;
          }
        `}
      </style>
    </div>
  )
}