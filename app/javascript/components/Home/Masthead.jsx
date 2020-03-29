import React from 'react';

const Masthead = () => (
  <header className="masthead">
    <div className="container">
      <div className="row text-center justify-content-center" style={{ height: '100%' }}>
        <div className="col-md-12 col-lg-10 align-self-end">
          <h1 className="font-white font-bold text-uppercase">
            classical martial arts center waterloo
          </h1>
          <hr className="divider" />
        </div>
        {/* col */}
        <div className="col-8 align-self-baseline">
          <p className="font-white font-light">
            Serving the Kitchener-Waterloo community for 30 years
          </p>
        </div>
        {/* col */}
        <div className="col-8 align-self-stretch align-items-center">
          <button
            type="button"
            aria-label="scroll"
            className="styleless-button"
            style={{
              position: 'absolute', bottom: '80px', left: '50%', transform: 'translateX(-50%)',
            }}
          >
            Find out more
            <span className="scroll-indicator" />
          </button>
        </div>
        {/* col */}
      </div>
      {/* row */}
    </div>
    {/* container */}
  </header>
);

export default Masthead;
