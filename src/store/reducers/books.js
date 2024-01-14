import {
  GET_MORE_BOOKS,
  MARK_BOOK_AS_CHECKED,
  SET_BOOK_LOADING,
  SET_SORT_CRITERIA
} from "../constants/books";
import { PER_PAGE, SORT_CRITERIA } from "../../constants";
import booksData from "../../books.json";

const initialState = {
  books: booksData.books.slice(0, 15),
  page: 1,
  loading: false,
  hasMore: true,
  sortCriteria: SORT_CRITERIA.TITLE,
  checkedIdsMap: localStorage.getItem('checkedIdsMap') ? JSON.parse(localStorage.getItem('checkedIdsMap')) : {}
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MORE_BOOKS: {
      const expectedTotal = state.page * PER_PAGE + PER_PAGE
      const nextPageBooks = booksData.books.slice(state.page * PER_PAGE, expectedTotal)
      const nextPageBooksData = [...state.books, ...nextPageBooks]

      return {
        ...state,
        books: nextPageBooksData,
        page: state.page + 1,
        loading: false,
        hasMore: nextPageBooksData.length < booksData.books.length
      };
    }
    case SET_BOOK_LOADING:
      return {
        ...state,
        loading: true
      };
    case SET_SORT_CRITERIA:
      return { ...state, sortCriteria: action.payload };
    case MARK_BOOK_AS_CHECKED:
      return {
        ...state,
        checkedIdsMap: {
          ...state.checkedIdsMap,
          [action.payload]: true
        }
      };
    default:
      return state;
  }
};

export default booksReducer;