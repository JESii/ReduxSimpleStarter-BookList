import React, { Component } from 'react';
// import ReactRedux, { Container } from 'react-redux';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';


class BookList extends Component {
  renderList() {
    console.log(this.props.books);
    return this.props.books.map( (book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
          </li>
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

// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, it should be passed
  // to all of our reducers.
  return bindActionCreators({ selectBook: selectBook }, dispatch );
}

// Promote BookList from a component to a container -- this method
// 'wires up' the functions to Redux.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
