import React from 'react';

export default function ContactDetails() {
  return (
    <div className="contact-us-details">
      <ul id="details-list">
        <li className="sub-heading">
          <i className="fas fa-map-marker-alt" />
          Address
        </li>
        <li className="info">
          <a className="cmac-link" href="https://goo.gl/maps/NepoUGog8jigAcfh6">
            <ul>
              <li>300-6 Gage Avenue</li>
              <li>N2M 2C8, Kitchener</li>
              <li>Ontario, Canada</li>
            </ul>
          </a>
        </li>
        <li className="sub-heading">
          <i className="fas fa-phone-alt" />
          Phone Number
        </li>
        <li className="info">
          <a className="cmac-link" href="tel:1 519-888-6624">519-888-6624</a>
        </li>
        <li className="sub-heading">
          <i className="fas fa-clock" />
          Hours
        </li>
        <div className="info hours">
          <div className="hours-sub-heading">
            Mornings
          </div>
          <div className="hours-date">
            Tuesday - Thursday
          </div>
          <div className="hours-time">
            11:30 - 1:30
          </div>
          <div className="hours-date">
            Saturday
          </div>
          <div className="hours-time">
            9:30 - 12:30
          </div>
          <div className="hours-sub-heading">
            Evenings
          </div>
          <div className="hours-date">
            Monday - Thursday
          </div>
          <div className="hours-time">
            4:00 - 8:00
          </div>
        </div>
      </ul>
    </div>
  );
}
