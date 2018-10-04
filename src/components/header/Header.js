import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/auth';

import './Header.css';
import Button from '../button';
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
            <Search className="header__search" />
            <nav className="header__nav">
              <ul className="header__list">
                <li className="header__item"><Link to="/recipes" className="header__link">Recipes A-Z</Link></li>

                <li className="header__item">
                  <div className="dropdown">

                    <div className="dropdown__header" onMouseOver={ () => this.toggleList()}>
                      <div className="dropdown__header__title"><p>{String.fromCharCode(9776)}</p></div>
                      {/*listOpen
                        ? <something/>
                        : <something else/>*/}
                    </div>
                    {listOpen && (
                      <ul className="dropdown__list">
                        <li className="dropdown__list__item"><Link to="/" className="dropdown__link">Home</Link></li>
                        <li className="dropdown__list__item"><Link to="/search" className="dropdown__link">Advanced Search</Link></li>
                        <li className="dropdown__list__item"><Link to="/about" className="dropdown__link">About Us</Link></li>
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
