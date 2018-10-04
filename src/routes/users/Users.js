import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import querystring from 'querystring';

import api from '../../api';

import Paging from '../../components/paging';
import Heading from '../../components/heading';
import Hero from '../../components/hero';

import './Users.css';

export default class Books extends Component {
  state = { loading: true }

  componentDidMount() {
    this.fetchBooks();
  }

  parseQueryString() {
    const { search = '' } = this.props.location;

    let page = 1;

    if (search) {
      const q = querystring.parse(search.startsWith('?') ? search.substr(1) : search);
      page = Number(q.page) || 1;
    }

    return { page };
  }

  async fetchBooks() {
    const { page = 1 } = this.parseQueryString();

    const limit = 10;
    const offset = (page - 1) * limit;

    let url = `/users?limit=${limit}&offset=${offset}`;

    try {
      const data = await api.get(url);
      this.setState({ loading: false, data: data.result });
    } catch (error) {
      console.error('Error fetching users', error);
      this.setState({ error: true, loading: false });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.location.search !== prevProps.location.search) {
      this.setState({ loading: true });
      this.fetchBooks();
    }
  }

  nextPage = (e) => {
    const { history } = this.props;
    const { page } = this.parseQueryString();

    history.push(`/users?page=${page + 1}`);
  }

  prevPage = (e) => {
    const { history } = this.props;
    const { page } = this.parseQueryString();

    history.push(`/users?page=${page - 1}`);
  }

  render() {
    const { data, loading, error } = this.state;
    const { page } = this.parseQueryString();

    let heading = 'Users';

    if (loading) {
      return (<div>Loading users...</div>);
    }

    if (error || !data) {
      return (<div>Error loading users</div>);
    }

    const title = page > 1 ? `Useres, page ${page}` : 'Users';

    return (
      <section className="users">
        <Helmet title={title} />
        <Hero
          title='Simple Recipe'
          size='50'
          speed='0.1s'
          />
        <Heading>{heading}</Heading>

        <ul className="users__list">
          {data && data.items && data.items.map((user, i) => (
            <li className="users__item" key={user.id}>
              <h3 className="users__item-title">
                <Link to={`/users/${user.id}`}>{user.name}</Link>
              </h3>
            </li>
          ))}
        </ul>

        <div className="users__register"><Link to={`/register`}>Add new user</Link></div>

        <Paging
          page={page}
          hasPrevPage={page > 1}
          hasNextPage={data.items && data.items.length >= 10}
          onPrevPageClick={this.prevPage}
          onNextPageClick={this.nextPage}
        />
      </section>
    );
  }
}
