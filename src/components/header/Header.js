import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/auth';

import './Header.css';
// import Button from '../button';
import Search from '../search';

class Header extends Component {

  state = { listOpen: false }

  handleLogout = (e) => {
    const { dispatch } = this.props;

    dispatch(logoutUser());
  }

  handleClickOutside() {
    this.setState({
      listOpen: false
    })
  }

  toggleList() {
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }))
  }

  render() {
    const { auth } = this.props;
    const { listOpen } = this.state;

    return (
      <header className="header">
        <div className="header__content">
          <div className="header__row">
            <h1 className="header__title"><Link to="/">Simple Recipe</Link></h1>
            <div className="header__search"><Search className="header__search" /></div>
            <nav className="header__nav">
              <ul className="header__list">
                <li className="header__item header__hide"><Link to="/recipes" className="header__link">Recipes A-Z</Link></li>

                <li className="header__item">
                  <div className="dropdown">

                    <div className="dropdown__header" onClick={ () => this.toggleList()}>
                      <div className="dropdown__header__title"><p>{String.fromCharCode(9776)}</p></div>
                    </div>
                    {listOpen && (
                      <ul className="dropdown__list" onClick={ () => this.toggleList()}>
                        <Link to="/" className="dropdown__link"><li className="dropdown__list__item">Home</li></Link>
                        <Link to="/search" className="dropdown__link"><li className="dropdown__list__item">Advanced Search</li></Link>
                        <Link to="/about" className="dropdown__link"><li className="dropdown__list__item">About Us</li></Link>
                        <Link to="/recipes" className="dropdown__link"><li className="dropdown__list__item">Recipes A-Z</li></Link>
                        {auth.isAuthenticated && (
                          <li className="dropdown__list__item"><Link to="/users" className="dropdown__link">User</Link></li>
                        )}
                        {auth.isAuthenticated && (
                          <li className="dropdown__list__item" onClick={this.handleLogout}>Logout</li>
                        )}
                      </ul>
                    )}
                  </div>
                </li>
                {/*<li className="header__item header__item--button"><a href="kaupa.html" className="button button--small"></a></li>*/}
              </ul>
            </nav>
          </div>
        </div>
      </header>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  }
}

export default connect(mapStateToProps)(Header);
