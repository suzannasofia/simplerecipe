import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Button from '../button';
import Input from '../input';

import classnames from '../../utils/classnames';

import './Search.css';

class SearchIngredients extends Component {
  state = { value: '' }

  onChange = (e) => {
    const { value } = e.target
    this.setState({ value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { history } = this.props;

    history.push(`/recipes?query=${this.state.value}&type=ingr`);
    this.setState({ value: '' });
  }

  render() {
    const { value } = this.state;

    return (
      <form className={classnames('search', this.props.className)} onSubmit={this.onSubmit}>
        <Input
          placeholder="Search recipes..."
          type="text"
          name="query"
          onChange={this.onChange}
          value={value}
          className="search__input"
        />
        <Button className="search__button" small>Search</Button>

      </form>
    );
  }
}

export default withRouter(Search);
