import React, { useState, useEffect } from 'react';
import CMACLogo2 from '../../assets/images/CMAC-logo-2.png';

function HeaderComponent() {
  const [scrolled, setScrolled] = useState('');

  const listenToScroll = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = winScroll / height;

    if (scrollPercent > 0.05) {
      setScrolled('navbar-scrolled');
    } else {
      setScrolled('');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);
    return () => window.removeEventListener('scroll', listenToScroll);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse"
              data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02"
              aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">Disabled</a>
          </li>
        </ul>
      </div>
    </nav>
  );
  // return (
  //   <nav className={`navbar navbar-expand-lg navbar-light fixed-top py-3 ${scrolled}`} id="mainNav">
  //     <a className="navbar-brand js-scroll-trigger" href="/">
  //       <img
  //         src={CMACLogo2}
  //         height={50}
  //         width={50}
  //         alt="CMAC Logo"
  //         className="navbar-logo"
  //       />
  //       CMAC
  //     </a>
  //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
  //     <div className="collapse navbar-collapse" id="navbarResponsive">
  //       <ul className="navbar-nav ml-auto my-2 my-lg-0">
  //         <li className="nav-item">
  //           <a className="nav-link js-scroll-trigger" href="/">Home</a>
  //         </li>
  //         <li className="nav-item">
  //           <a className="nav-link js-scroll-trigger" href="/train">Train</a>
  //         </li>
  //         <li className="nav-item">
  //           <a className="nav-link js-scroll-trigger" href="/schedule">Schedule</a>
  //         </li>
  //         <li className="nav-item">
  //           <a className="nav-link js-scroll-trigger" href="/contact_us">Contact us</a>
  //         </li>
  //         <li className="nav-item">
  //           <a className="nav-link js-scroll-trigger" href="/profile">
  //             <i className="fas fa-user" />
  //           </a>
  //         </li>
  //       </ul>
  //     </div>
  //   </nav>
  // );
}

export default HeaderComponent;
