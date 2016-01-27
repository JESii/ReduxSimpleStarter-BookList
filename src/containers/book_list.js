import React, { Component } from 'react';
// import ReactRedux, { Container } from 'react-redux';
import { connect } from 'react-redux';

class BookList extends Component {
  renderList() {
    console.log(this.props.books);
    return this.props.books.map( (book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
        );
      });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
};

// mapStateToProps: (state) => {
function mapStateToProps(state) {
  // Whatever object is returned from here becomes available
  // as props in BookList
  return {
    books: state.books
  }
}

export default connect(mapStateToProps)(BookList);
