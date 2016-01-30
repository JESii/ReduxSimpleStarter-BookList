export function selectBook(book) {
  // selectBook is an Action Creator, and as such must return
  // an object that has a type property.
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}
