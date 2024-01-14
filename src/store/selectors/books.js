import { SORT_CRITERIA } from "../../constants";

export const getBooksSelector = state => {
  return state?.books
}

export const getBookSelector = (id) => (state) => {
  return getBooksSelector(state).find((book) => book.id.toString() === id)
}

export const getBooksCriteriaSelector = state => state?.sortCriteria

export const getCheckedIdsMapSelector = state => state?.checkedIdsMap

export const getLoadingSelector = state => state?.loading

export const getHasMoreSelector = state => state?.hasMore

export const getSortedBooksSelector = (sortBy = SORT_CRITERIA.TITLE) => state => {
  const booksCopy = [...getBooksSelector(state)]

  if (!booksCopy.length) {
    return booksCopy
  }

  if (typeof booksCopy?.[0][sortBy] === "string") {
    return [...getBooksSelector(state)].sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
  }

  return [...getBooksSelector(state)].sort((a, b) => b[sortBy] - a[sortBy]);
}