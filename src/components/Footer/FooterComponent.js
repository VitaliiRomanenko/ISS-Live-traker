import React from 'react';
import {Footer} from "react-materialize";
import {NavLink} from "react-router-dom";
import {CONTACT_PAGE} from "../../utils/routsPath";

const FooterComponent = () => {
  return (
    <Footer
      className="black"
      copyrights={`© ${new Date().getFullYear()} Vitalii Romanenko All Rights Reserved`}
      links={<ul>
        <li><a className="grey-text text-lighten-3" href="https://t.me/VitaliiRomanenko">
          <i className="fab fa-telegram-plane"/>
          <span> Telegram</span>
        </a></li>
        <li><a className="grey-text text-lighten-3" href="https://www.linkedin.com/in/vitalii-romanenko-29843821b">
          <i className="fab fa-linkedin"/>
          <span> LinkedIn</span>
        </a></li>
        <li><a className="grey-text text-lighten-3" href="https://twitter.com/4arlz">
          <i className="fab fa-twitter"/>
          <span> Twitter</span>
        </a></li>
        <li><a className="grey-text text-lighten-3" href="https://www.instagram.com/vitaliy4romanenko/">
          <i className="fab fa-instagram"/>
          <span> Instagram</span>
        </a></li>
        <li><a className="grey-text text-lighten-3" href="https://github.com/VitaliiRomanenko/ISS-Live-traker">
          <i className="fab fa-github"/>
          <span> GitHub</span>
        </a></li>
      </ul>}
      moreLinks={<NavLink to={CONTACT_PAGE} className="grey-text text-lighten-4 right"> <i className="far fa-envelope"/><span> Contact me</span></NavLink>}
      style={{borderTop: "1px solid white"}}
    >
      <h5 className="white-text" style={{textTransform: "uppercase"}}>
        ISS live tracker
      </h5>
      <p className="grey-text text-lighten-4">
        If you have any question, you can find me in social media, or send me email on <NavLink to={CONTACT_PAGE}>contact
        page</NavLink>.
      </p>
    </Footer>
  );
};

export default FooterComponent;