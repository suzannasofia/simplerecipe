import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import querystring from 'querystring';

import Hero from '../../components/hero';
import Heading from '../../components/heading';
import Paging from '../../components/paging';
import api from '../../api';
import './Recipes.css';

class Recipes extends Component {

  state = { loading: true }

  componentDidMount() {
    this.fetchRecipes();
  }

  parseQueryString() {
    const { search = '' } = this.props.location;

    let query = '';
    let page = 1;

    if (search) {
      const q = querystring.parse(search.startsWith('?') ? search.substr(1) : search);
      query = q.query;
      page = Number(q.page) || 1;
    }

    return { query, page };
  }

  async fetchRecipes() {
    const { query, page = 1 } = this.parseQueryString();

    const limit = 6;
    const offset = (page - 1) * limit;

    let url = `/recipes?&limit=${limit}&offset=${offset}`;

    if (query) {
      url = `${url}&search=${query}`;
    }

    try {
      const data = await api.get(url);
      this.setState({ loading: false, data: data.result });
    } catch (error) {
      console.log('Error fetching recipe data', error);
      this.setState({ error: true, loading: false });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.location.search !== prevProps.location.search) {
      this.setState({ loading: true });
      this.fetchRecipes();
    }
  }

  nextPage = (e) => {
    const { history } = this.props;
    const { query, page } = this.parseQueryString();

    history.push(`/recipes?query=${query}&page=${page + 1}`);
  }

  prevPage = (e) => {
    const { history } = this.props;
    const { query, page } = this.parseQueryString();

    history.push(`/recipes?query=${query}&page=${page - 1}`);
  }

  render() {
    const { auth } = this.props;
    const { data, loading, error } = this.state;
    const { query, page } = this.parseQueryString();

    let heading = 'All recipes';

    if (query) {
      heading = `Searching recipes: ${query}`;
    }

    if (loading) {
      return (<div>Loading recipes...</div>);
    }

    if (error || !data) {
      return (<div>Error, could not load recipes</div>);
    }

    const title = page > 1 ? `Recipes, page ${page}` : 'Recipes';

    return (
      <section className="recipes">
        <Helmet title={title} />
        <Hero
          title='Recipes'
          size='50'
          speed='0.1s'/>

        <Heading>{heading}</Heading>

        {/*<h2 className="recipes__title">All recipes</h2>*/}
        {auth.isAuthenticated && (
          <div className="recipes__new">
            <Link to="/recipes/new">+ New Recipe</Link>
          </div>
        )}
        <div className="recipes__row">


            {data && data.items && data.items.map((recipe) => (
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

        <Paging
        page={page}
        hasPrevPage={page > 1}
        hasNextPage={data.items && data.items.length >= 6}
        onPrevPageClick={this.prevPage}
        onNextPageClick={this.nextPage}
      />
      </section>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  }
}

export default connect(mapStateToProps)(Recipes);
