import React, { Component } from 'react';
import Hero from '../../components/hero';
// import { Link } from 'react-router-dom'
import './Recipe.css';

export default class Recipe extends Component {

  render() {
    const { id, title, description, ingredients, instructions, image } = this.props;

    console.log(instructions);

    return (
      <section className="recipeC">
        <Hero
          title='Recipes'
          size='50'
          speed='0.1s'
          />

        <h2 className="recipeC__title">{title}</h2>

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
      </section>

    );
  }
}
