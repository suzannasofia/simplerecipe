import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';

import './Home.css';

import Heading from '../../components/heading';
import Hero from '../../components/hero';
import api from '../../api';

export default class Home extends Component {
  state = { loading: true }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.fetchRecipes();
  }

  async fetchRecipes() {

    const limit = 15;
    let url = `/recipes?&limit=${limit}`;

    try {
      const data = await api.get(url);
      this.setState({ loading: false, data: data.result });
    } catch (error) {
      console.log('Error fetching recipe data', error);
      this.setState({ error: true, loading: false });
    }

  }

  render() {
    const { data, loading, error } = this.state;

    if (loading) {
      return (
        <div>

      <Hero
        title='Simple Recipe'
        subTitle='Cooking made easy'
        size='100'
        speed='1.9s'
        />
        <div>Loading recipes...</div></div>);
    }

    if (error || !data) {
      return (<div>Error, could not load recipes</div>);
    }

    return (
      <section className="recipes">
        <Helmet title="Simple Recipe" />

        <Hero
          title='Simple Recipe'
          subTitle='Cooking made easy'
          size='100'
          speed='1.9s'
          />

          <Heading>Latest Recipes</Heading>

          {/*<h2 className="recipes__title">Latest recipes</h2>*/}
          <div className="recipes__row">


              {data && data.items && data.items.map((recipe, i) => (
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
