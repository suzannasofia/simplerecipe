import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import api from '../../api';

import Heading from '../../components/heading';
import Button from '../../components/button';
import Input from '../../components/input';
import BackButton from '../../components/back-button';
import Hero from '../../components/hero';

import './EditRecipe.css';

export default class EditRecipe extends Component {
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

  state = {
    loading: true,
    success: false,
    errors: [],
    error: false,
    ingredientsArray: [],
    instructionsArray: [],
    data: {},
  }

  componentDidMount() {
    const { id = '' } = this.props.match.params;

    if (id) {
      this.fetchRecipe();
    }
  }

  async fetchRecipe() {
    const { id = '' } = this.props.match.params;

    const url = `/recipes/${id}`;

    try {
      const data = await api.get(url);
      this.setState({ loading: false, data: data.result });
      // this.setState({ numIngredients: data.result.ingredients.split("$").length});
      // this.setState({ numInstructions: data.result.instructions.split("$").length});
      this.setState({ ingredientsArray: data.result.ingredients.split("$") });
      this.setState({ instructionsArray: data.result.instructions.split("$") });
    } catch (error) {
      console.error('Error fetching recipe data', error);
      this.setState({ error: true, loading: false });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params !== prevProps.match.params) {
      this.setState({ loading: true });
      this.fetchRecipe();
    }
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    const { data } = this.state;

    if (name) {
      data[name] = value;
    }

    this.setState({ data });
  }

  handleInputArrayChange = (e) => {
    const { name, value } = e.target;
    const { ingredientsArray, instructionsArray } = this.state;

    const key = (e.target.getAttribute('data-key'));
    console.log(name);

    if (name === 'ingredients') ingredientsArray[key] = value;
    if (name === 'instructions') instructionsArray[key] = value;

    this.setState({ ingredientsArray, instructionsArray });
  }

  addElement = (e) => {
    const { id } = e.target;
    const { ingredientsArray, instructionsArray } = this.state;
    if (id == 'ingredients') ingredientsArray.push("");
    else instructionsArray.push("");
    this.setState({ ingredientsArray, instructionsArray });
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const { ingredientsArray, instructionsArray } = this.state;
    var ingredients = ingredientsArray.filter(Boolean);
    var instructions = instructionsArray.filter(Boolean);
    // console.log(ingredients);

    const { id = '' } = this.props.match.params;
    this.setState({ loading: true });

    const { data } = this.state;

    data['ingredients'] = ingredients.join('$');
    data['instructions'] = instructions.join('$');

    let result;

    if (id) {
      result = await api.patch(`/recipes/${id}`, data);
    } else {
      result = await api.post(`/recipes/`, data);
    }

    if (result.status >= 400) {
      const errors = result.result.errors || [];
      this.setState({ loading: false, errors });
    }

    if (result.status === 200 || result.status === 201) {
      data.id = result.result.id;
      this.setState({ loading: false, success: true });
    }
  }

  render() {
    const { data = {}, loading, error, errors, success } = this.state;
    const { ingredientsArray, instructionsArray } = this.state;

    if (this.props.match.params.id && loading) {
      return (<div>Loading recipe...</div>);
    }

    if (this.props.match.params.id && (error || !data)) {
      return (<div>Error loading recipe</div>);
    }

    const title = this.props.match.params.id ? 'Edit Recipe' : 'New Recipe';
    const successMessage = this.props.match.params.id ? 'Recipe succesfully edited' : 'Recipe successfully created';
    const isInvalid = (f) => errors.filter((e) => e.field === f).length > 0;

    if (success) {
      return (
        <div className="success">
          <p>{successMessage}</p>
          <p><Link to={`/recipes/${data.id}`}>View Recipe</Link></p>
        </div>
      )
    }

    return (
      <div>
        <Helmet title={title} />
          <Hero
            title='Recipes'
            size='50'
            speed='0.1s'
            />

        <Heading>{title}</Heading>

        {errors && errors.length > 0 && (
          <ul className="errors">
            {errors.map((e, i) => (
              <li key={i}><label htmlFor={e.field}>{e.message}</label></li>
            ))}
          </ul>
        )}

        <form method="post" onSubmit={this.handleSubmit}>
          <Input
            onChange={this.handleInputChange}
            name="title"
            className="edit__input"
            label="Title:"
            value={data.title || ''}
            invalid={isInvalid('title')}
          />

          <Input
            onChange={this.handleInputChange}
            name="description"
            className="edit__input"
            type="textarea"
            label="Description:"
            value={data.description || ''}
            invalid={isInvalid('description')}
          />

          <p>Ingredients:</p>
          {ingredientsArray && ingredientsArray.map((ingredient, i) =>
            <Input
              key={i}
              onChange={this.handleInputArrayChange}
              name='ingredients'
              data-key={i}
              className="edit__input"
              value={ingredient || ''}
              invalid={isInvalid('ingredients')}
            />
          )}
          <p id="ingredients" onClick={this.addElement}>Add ingredient</p>

          <p>Instructions:</p>
          {instructionsArray && instructionsArray.map((instruction, i) =>
            <Input
              key={i}
              onChange={this.handleInputArrayChange}
              name='instructions'
              data-key={i}
              className="edit__input"
              value={instruction || ''}
              invalid={isInvalid('instructions')}
            />
          )}
          <p id="instructions" onClick={this.addElement}>Add Instruction</p>

          <Input
            onChange={this.handleInputChange}
            name="course"
            className="edit__input"
            label="Course:"
            value={data.course || ''}
            invalid={isInvalid('course')}
          />

          <Input
            onChange={this.handleInputChange}
            name="cuisine"
            className="edit__input"
            label="Cuisine:"
            value={data.cuisine || ''}
            invalid={isInvalid('cuisine')}
          />

          <Input
            onChange={this.handleInputChange}
            name="type"
            className="edit__input"
            label="Type:"
            value={data.type || ''}
            invalid={isInvalid('type')}
          />

          <Input
            onChange={this.handleInputChange}
            name="image"
            className="edit__input"
            label="Image:"
            value={data.language || ''}
            invalid={isInvalid('image')}
          />

          <Button className="edit__submit">Save</Button>
        </form>

        <BackButton>Go Back</BackButton>

      </div>
    );
  }
}
