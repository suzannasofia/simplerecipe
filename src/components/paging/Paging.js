import React, { Component } from 'react';

import Button from '../button';

import './Paging.css';

export default class Books extends Component {

  render() {
    const { page, hasNextPage, hasPrevPage, onPrevPageClick, onNextPageClick } = this.props;

    if (!hasNextPage && !hasPrevPage) {
      return null;
    }

    return (
      <div className="paging">
        {hasPrevPage && (
          <Button className="paging__prev" onClick={onPrevPageClick}>&lt; Previous page</Button>
        )}

        {(hasPrevPage || hasNextPage) && (
          <span className="paging__page">Page {page}</span>
        )}

        {hasNextPage && (
          <Button className="paging__next" onClick={onNextPageClick}>Next page ></Button>
        )}
      </div>
    )
  }

}
