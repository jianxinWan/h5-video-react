import * as React from 'react';
import { Fragment } from 'react'

const Header = () => {
  return (
    <Fragment>
      <header className="header-wrapper">
        <div className="center">
          <div>ABOUT-ME</div>
        </div>
      </header>
      <style jsx>
        {`
        .header-wrapper{
          width: 100%;
          height: 64px;
          background-color: #2196f3;
          color: rgba(255, 255, 255, .87);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .center{
          width: 300px;
          
          display: flex;
          justify-content: flex-start;
          align-items: center;
        }
        @media (min-width: 600px){
          .center{
            width: 1020px;
          }
        }
        `}
      </style>
    </Fragment>
  )
};
export default Header