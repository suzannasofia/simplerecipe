import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import storedData from '../../data/data';
import './Home.css';

// import Heading from '../../components/heading';
import Hero from '../../components/hero';

export default class Home extends Component {

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
        <Helmet title="Simple Recipe" />
        {/*<Heading>Simple Recipe</Heading>*/}

        <Hero
          title='Simple Recipe'
          subTitle='Cooking made easy'
          size='100'
          speed='1.9s'
          />

          <h2 className="recipes__title">Latest recipes</h2>
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
