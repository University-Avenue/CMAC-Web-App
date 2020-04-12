import React, { useEffect, useState } from 'react';

function MobileNav() {
  const [body, setBody] = useState(null);
  const [content, setContent] = useState(null);

  useEffect(() => {
    setBody(document.getElementById('page-body'));
    setContent(document.getElementById('page-content'));
  }, []);

  const toggleNav = () => {
    body.classList.toggle('navigation');
    content.classList.toggle('transition');
  };

  return (
    <div className="mobile-container">
      <div className="banner">
        <div id="burgerBtn" onClick={toggleNav} />
      </div>
      <ul id="nav">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Train</a>
        </li>
        <li>
          <a href="/">Schedule</a>
        </li>
        <li>
          <a href="/">Contact Us</a>
        </li>
      </ul>
    </div>
  );
}

export default MobileNav;
