import * as React from 'react'
import { useContext } from 'react'
import { GlobalStoreContext } from '../store'

const timeTransform = (time: number) => {
  time = parseInt(time + '', 10)
  if (time === 0) {
    return '0:00'
  }
  let minute = parseInt(time / 60 + '', 10)
  let second = time % 60
  let hour = parseInt(time / 3600 + '', 10)
  return hour > 0 ?
    `${hour}:${minute < 10 ? `0${minute}` : minute}:${second < 10 ? `0${second}` : second}` :
    `${minute < 10 ? `0${minute}` : minute}:${second < 10 ? `0${second}` : second}`
}

export default function Time() {
  const { state } = useContext(GlobalStoreContext)
  const { duration, currentTime } = state
  return (
    <div className="time-wrapper">
      {currentTime && timeTransform(currentTime) || '0:00'}
      <span>/</span>
      {duration && timeTransform(duration) || '0:00'}
      <style>
        {`
          .time-wrapper{
            color: #ffffff;
          }
          span{
            margin: 0 3px;
          }
        `}
      </style>
    </div>
  )
}