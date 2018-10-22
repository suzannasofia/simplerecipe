import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Hero from '../../components/hero';
import Heading from '../../components/heading';
// import { Link } from 'react-router-dom'
import './Recipe.css';

class Recipe extends Component {

  render() {
    const { auth } = this.props;
    const { title, description, ingredients, instructions, image } = this.props;

    return (
      <section className="recipeC">
        <Hero
          title='Recipes'
          size='50'
          speed='0.1s'
          />

        <Heading>{title}</Heading>

        {/*<h2 className="recipeC__title">{title}</h2>*/}

        <div className="recipeC__row">
          <ul className="recipeC__list">
            <li className="recipeC__item">
              <h3>{description}</h3>
            </li>
            <li className="recipeC__item">
              <h3>Ingredients</h3>
              <p>{ingredients}</p>
            </li>
            <li className="recipeC__item">
              <h3>Instructions</h3>
              <p>{instructions}</p>
            </li>
          </ul>
          <div className="recipeC__image">
            <img className="recipeC__img" src={image} alt={title}/>
          </div>
        </div>

        {auth.isAuthenticated && (
          <div className="recipeC__buttons">
              <Link to={`/recipes/${this.props.id}/edit`}>Edit recipe</Link>
          </div>
        )}
      </section>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  }
}

export default connect(mapStateToProps)(Recipe);
