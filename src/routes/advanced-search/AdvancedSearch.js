import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Button from '../../components/button';
import Input from '../../components/input';
import Heading from '../../components/heading';

// import classnames from '../../utils/classnames';

import './AdvancedSearch.css';

class AdvancedSearch extends Component {
  state = {
    value: '',
    inputArray: [''],
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  onChange = (e) => {
    const { inputArray } = this.state;
    const { value } = e.target
    const key = (e.target.getAttribute('data-key'));
    if (key) inputArray[key] = value;
    this.setState({ inputArray })
  }

  addInput = (e) => {
    // const { id } = e.target;
    const { inputArray } = this.state;
    inputArray.push('');
    this.setState({ inputArray });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { history } = this.props;
    const { inputArray } = this.state;
    var search = inputArray.filter(Boolean);
    history.push(`/recipes?query=${search}&type=ingr`);
    this.setState({ value: '' });
  }

  render() {
    const { /*value, */inputArray } = this.state;

    return (
      <div className="advanced">
        <Heading className="advanced__heading">Advanced Search</Heading>
        <form className="advanced__form" onSubmit={this.onSubmit}>
          <p>Search by ingredient:</p>
          {inputArray && inputArray.map((input, i) =>
            <Input
              key={i}
              placeholder="Ingredient"
              type="text"
              name="query"
              data-key={i}
              onChange={this.onChange}
              value={inputArray[i]}
              className="advanced__input"
            />
          )}
          <div className="advanced__add" onClick={this.addInput}><p>Add ingredient</p></div>
          <Button className="advanced__button" small>Search</Button>

        </form>
      </div>
    );
  }
}

export default withRouter(AdvancedSearch);
