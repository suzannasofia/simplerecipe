import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {

  render() {
    return (
      <footer className="footer">
        <div className="footer__content">
          <div className="footer__row">
            <div className="footer__col">
              <p>Simple Recipe</p>
            </div>
            <div className="footer__col">
              <p>info@simplerecipe.com</p>
            </div>
          </div>
          <p className="footer__copyright">© Simple Recipe 2018</p>
        </div>
      </footer>
    );
  }
}
