import {
  GET_MORE_BOOKS,
  MARK_BOOK_AS_CHECKED,
  SET_BOOK_LOADING,
  SET_SORT_CRITERIA
} from "../constants/books";

export const getMoreBooks = () => {
  return {
    type: GET_MORE_BOOKS,
  };
};

export const setBookLoading = () => ({
  type: SET_BOOK_LOADING,
});

export const setSortCriteria = (criteria) => ({
  type: SET_SORT_CRITERIA,
  payload: criteria
});

export const markBookAsChecked = (id) => ({
  type: MARK_BOOK_AS_CHECKED,
  payload: id,
});