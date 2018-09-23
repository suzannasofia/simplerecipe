import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';

// import './Header.css';

export default class Header extends Component { //ath breyta þessu seinna

  render() {
    // const { auth } = this.props;

    return (
      <header className="header">
        <div className="header__content">
          <div className="header__row">
            <h1 className="header__title"><Link to="/">Simple Recipe</Link></h1>
            <nav className="header__nav">
              <ul className="header__list">
                <li className="header__item"><Link to="/recipes" className="header__link">Recipes</Link></li>
                <li className="header__item header__item--button"><a href="kaupa.html" className="button button--small"></a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      // <header className="header">
      //   <h1 className="header_heading"><Link to='/'>Simple Recipe</Link></h1>
      //   <h2>Veri nice recipes</h2>
      // </header>


    )
  }
}

// const mapStateToProps = (state) => {
//   return {
//     auth: state.auth,
//   }
// }
//
// export default connect(mapStateToProps)(Header);
