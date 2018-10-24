import React, { Component } from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import api from '../../api';

import Heading from '../../components/heading';
import Hero from '../../components/hero';
// import ReadBooks from '../../components/posts';

import DefaultImage from '../../data/profile.jpg';
import './User.css';

export default class User extends Component {
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
    this.fetchUser();
  }

  async fetchUser() {
    const { id } = this.props.match.params;

    const url = `/users/${id}`;

    try {
      const data = await api.get(url);
      this.setState({ loading: false, data: data.result });
    } catch (error) {
      console.error('Error fetching recipe data', error);
      this.setState({ error: true, loading: false });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params !== prevProps.match.params) {
      this.setState({ loading: true });
      this.fetchBook();
    }
  }

  render() {
    const { data, loading, error } = this.state;
    // const { id } = this.props.match.params;

    if (loading) {
      return (<div>Loading user...</div>);
    }

    if (error || !data) {
      return (<div>Error loading user</div>);
    }

    return (
      <div className="user">
        <Helmet title={data.name} />
        <Hero
          title='Simple Recipe'
          size='50'
          speed='0.1s'
          />

        <div className="user__image">
          <Link to="/profile"><img className="user__img" alt="" src={data.image || DefaultImage} /></Link>
        </div>

        <Heading>{data.name}</Heading>
        {/*<div class="user__read">
          <ReadBooks userId={id} url="/users" />
        </div>*/}
      </div>
    );
  }
}
