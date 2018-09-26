import React, { Component } from 'react';
import Helmet from 'react-helmet';
// import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import Recipe from '../../components/recipe';

// import query from '../../scripts/db';
import storedData from '../../data/data';

var content = require('../../scripts/recipes.txt')

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
    this.fetchRecipe();
  }

  //fetch recipe from postgres database. Will be used later.
  /*async fetchRecipe() {

    const { id } = this.props.match.params;

    let q = `
      SELECT *
      FROM recipes
      WHERE id = $1
      `;

    const values = id;

    try {
      const recipe = await query(q, id);
      this.setState({ loading: false, data: recipe });
      console.log("tókst að ná í gögn?, þau eru ", recipe);
    } catch (error) {
      console.error('Error fetching data', error);
      this.setState({ error: true, loading: false });
    }

  }*/

  async fetchRecipe() {
    const { id } = this.props.match.params;
    const content = await storedData();
    if (content.recipes.length <=  id) this.setState({ error: 'Recipe does not exist'});
    this.setState({ loading: false, data: content.recipes[id]});
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
      </div>
    );
  }
}
