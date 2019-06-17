
import * as React from 'react'
import Bar from './components/bar'
export default function Controls() {
  return (
    <div className="controls-wrapper">
      <Bar />
      <style>
        {`
          .controls-wrapper{
            width: 100%;
            height: 40px;
            background-image: linear-gradient(180deg,transparent,rgba(0,0,0,.37),rgba(0,0,0,.57),rgba(0,0,0,.75));
          }
        `}
      </style>
    </div>
  )
}