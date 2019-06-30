import * as React from 'react';
import { Fragment } from 'react'

const Introduce = () => {
  return (
    <Fragment>
      <div className="introduce-wrapper">
        <h1>H5-Video-React</h1>
        <h3>Video Player for React</h3>
      </div>
      <style jsx>
        {`
        .introduce-wrapper{
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: #666666;
        }
        h1{
          height: 40px;
          font-size: 40px;
          line-height: 40px;
          font-weight: 400;
          margin: 64px 0 20px 0;
        }
        h3{
          margin-bottom: 30px;
          color: #999999;
          font-weight: 400;
        }
        `}
      </style>
    </Fragment>
  )
};
export default Introduce