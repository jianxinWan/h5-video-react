import * as React from 'react'

export default function Bar() {
  return (
    <div className="progress-bar-out">
      <div className="progress-bar-in" />
      <style>
        {`
          .progress-bar-out{
            width: 100%;
            height: 10px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-item: center;
          }
          .progress-bar-in{
            width: 20%;
            height: 3px;
            background-image: linear-gradient(-90deg,#fa1f41,#e31106);
          }
        `}
      </style>
    </div>
  )
}