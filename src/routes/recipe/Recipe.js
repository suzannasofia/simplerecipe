import React, { Component } from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import api from '../../api';
import Recipe from '../../components/recipe';
import BackButton from '../../components/back-button';

//ath import back button

export default class RecipeRoute extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.object,
    }),
  }

  static defaultProps = {
    match: {
      params: {}
    }
  }

  state = { loading: true }

  componentDidMount() {
    window.scrollTo(0, 0)
    this.fetchRecipe();
  }

  async fetchRecipe() {
    const { id } = this.props.match.params;

    const url = `/recipes/${id}`;

    try {
      const data = await api.get(url);
      this.setState({ loading: false, data: data.result });
    } catch (error) {
      console.error('Error fetching recipes data', error);
      this.setState({ error: true, loading: false });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params !== prevProps.match.params) {
      this.setState({ loading: true });
      this.fetchRecipe();
    }
  }

  render() {
    const { data, loading, error } = this.state;

    if (loading) {
      return (<div>Loading recipes...</div>);
    }

    if (error || !data) {
      return (<div>Recipe does not exist</div>);
    }

    return(
      <div>
        <Helmet title={data.title} />
        <Recipe
          id={data.id}
          title={data.title}
          description={data.description}
          ingredients={data.ingredients}
          instructions={data.instructions}
          image={data.image}
        />

        <BackButton>Go back</BackButton>
      </div>
    );
  }
}
