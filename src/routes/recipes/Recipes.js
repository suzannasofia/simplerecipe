import React, { Component } from 'react';
import Hero from '../../components/hero';
import Helmet from 'react-helmet';
import storedData from '../../data/data';
import { Link } from 'react-router-dom';
import './Recipes.css';

export default class Recipes extends Component {

  state = { loading: true }

  componentDidMount() {
    this.fetchRecipe();
  }

  async fetchRecipe() {
    const content = await storedData();
    if (content.recipes.length <=  0) this.setState({ error: 'No recipes'});
    this.setState({ loading: false, data: content});
  }

  render() {
    const { data, loading, error } = this.state;

    if (loading) {
      return (<div>Loading recipes...</div>);
    }

    if (error || !data) {
      return (<div>Error, could not load recipes</div>);
    }

    return (
      <section className="recipes">
        <Helmet title='Recipes' />
        <Hero
          title='Recipes'
          size='50'
          speed='0.1s'/>

        <h2 className="recipes__title">All recipes</h2>
        <div className="recipes__row">


            {data && data.recipes && data.recipes.map((recipe, i) => (
              <div className="recipes__recipe" key={recipe.id}>
                <div className="recipe">
                  <div className="recipe__image">
                    <Link to={`/recipes/${recipe.id}`}>
                      <img src={recipe.image} className="recipe__img" alt={recipe.title}/>
                    </Link>
                  </div>
                  <div className="recipe__content">
                    <h3 className="recipe__title">
                      <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
                    </h3>
                    <p className="recipe__description">{recipe.description}</p>
                    <p className="recipe__extra"></p>
                  </div>
                </div>
              </div>
            ))}

        </div>
      </section>

    );
  }
}
