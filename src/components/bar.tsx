import * as React from 'react'
import { useContext, useRef } from 'react'
import { GlobalStoreContext } from '../store'

interface IParams {
  type: string,
  payload: any
}

type IDispatch = (params: IParams) => void

const dragBar = (e: React.MouseEvent, out: HTMLDivElement | null, drag: boolean | undefined, duration: number, dispatch: IDispatch) => {
  const event: any = e || window.event;
  const scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
  const x = event.pageX || event.clientX + scrollX;
  if (out !== null) {
    const position = out.getBoundingClientRect()
    const width = position.width
    const left = x - position.left
    const currentTime = duration * (left / width)
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
}

export default function Bar() {
  const { state, dispatch } = useContext(GlobalStoreContext);
  const out = useRef<HTMLDivElement>(null)
  const { duration, drag, currentTime } = state
  if (!duration) return null
  return (
    <div className="progress-bar-out" ref={out}
      onClick={(e) => dragBar(e, out.current, drag, duration, dispatch)}
      onTouchStart={() => dispatch({ type: 'showControls', payload: true })}
    >
      <div className="progress-bar-in" />
      <style>
        {`
          .progress-bar-out{
            width: 100%;
            height: 10px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-item: flex-start;
          }
          .progress-bar-in{
            width: ${currentTime && duration && currentTime * 100 / duration || 0}%;
            height: 3px;
            border-radius: 2px;
            background-image: linear-gradient(-90deg,#fa1f41,#e31106);
            transition: all .2s linear;
          }
          .progress-bar-out:hover{
            cursor: pointer;
          }
        `}
      </style>
    </div>
  )
}