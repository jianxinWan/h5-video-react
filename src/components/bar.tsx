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

const progressClick = (e: React.MouseEvent, out: HTMLDivElement | null, drag: boolean | undefined, duration: number, dispatch: IDispatch) => {
  const currentTime = duration * getMouseXY(e, out)
  if (drag !== undefined) {
    dispatch({
      type: 'drag',
      payload: !drag
    })
  }
  dispatch({
    type: 'currentTime',
    payload: currentTime
  })
}

const dragBar = (e: any, out: HTMLDivElement | null, draging: boolean, drag: boolean, duration: number, dispatch: IDispatch) => {
  let flag: boolean = true
  if (draging) {
    const currentTime = duration * getMouseXY(e, out)
    if (flag && currentTime) {
      flag = false
      requestAnimationFrame(() => {
        if (drag !== undefined) {
          dispatch({
            type: 'drag',
            payload: !drag
          })
        }
        dispatch({
          type: 'currentTime',
          payload: currentTime
        })
      })
    }
  }
}
//是否正在拖动
let draging = false
// isPc
const pc = isPc()

export default function Bar() {
  const { state, dispatch } = useContext(GlobalStoreContext);
  const out = useRef<HTMLDivElement>(null)
  const { duration, drag, currentTime } = state
  useEffect(() => {
    if (pc) {
      document.addEventListener('mousemove', (e) => dragBar(e, out.current, draging, drag, duration, dispatch), false)
      document.addEventListener('mouseup', () => draging = false, false)
    } else {
      document.addEventListener('touchmove', (e) => dragBar(e, out.current, draging, drag, duration, dispatch), false)
      document.addEventListener('touchend', () => draging = false, false)
    }
  }, [draging])
  if (!duration) return null
  return (
    <div className="progress-bar-out" ref={out}
      onClick={(e) => progressClick(e, out.current, drag, duration, dispatch)}
      onTouchStart={() => dispatch({ type: 'showControls', payload: true })}
      onMouseMove={(e) => dragBar(e, out.current, draging, drag, duration, dispatch)}
    >
      <div className="progress-bar-in" />
      <div className="progress-bar-ball"
        onMouseDown={() => draging = true}
        onTouchStart={() => draging = true}
      ></div>
      <style jsx>
        {`
          .progress-bar-out{
            width: 100%;
            height: 8px;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            margin-top: 15px;
            background-color: rgba(255,255,255,.4);
          }
          .progress-bar-in{
            width: ${currentTime && duration && currentTime * 100 / duration || 0}%;
            height: 100%;
            border-radius: 2px;
            background-image: linear-gradient(-90deg,#fa1f41,#e31106);
          }
          .progress-bar-ball{
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background-color: #ffffff;
          }
          .progress-bar-ball:hover{
            cursor: pointer;
            width: 12px;
            height: 12px;
          }
          .progress-bar-out:hover{
            cursor: pointer;
          }
        `}
      </style>
    </div>
  )
}