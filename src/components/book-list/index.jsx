import {
  List,
  ListContainer,
  ListHeader,
  SortByContainer,
  SortingContainer,
  SortByText, LoaderConatiner,
} from "./styles";
import { RenderBooks } from "../render-books";
import Sort from "../../icons/sort";
import { useDispatch, useSelector } from "react-redux";
import {
  getBooksCriteriaSelector,
  getHasMoreSelector,
  getLoadingSelector,
  getSortedBooksSelector
} from "../../store/selectors/books";
import SortMenu from "../sort-menu";
import InfiniteScroll from "react-infinite-scroller";
import { getMoreBooks, setBookLoading } from "../../store/actions/books";
import Loader from "../../icons/loader";

const BookList = () => {
  const dispatch = useDispatch();
  const sortCriteria = useSelector(getBooksCriteriaSelector);
  const books = useSelector(getSortedBooksSelector(sortCriteria));
  const isLoading = useSelector(getLoadingSelector);
  const hasMore = useSelector(getHasMoreSelector);

  const booksCount = books.length === 1 ? `${books.length} Book` : `${books.length} Books`
   const loadMoreBooks = () => {
     dispatch(setBookLoading());

     setTimeout(() => {
       dispatch(getMoreBooks());
     }, 2000)
   };

  return (
    <ListContainer>
      <ListHeader>Books read this month</ListHeader>
      <SortingContainer>
        <div>{booksCount}</div>
        <SortByContainer>
          <Sort />
          <SortByText>Sort by</SortByText>
          <SortMenu />
        </SortByContainer>
      </SortingContainer>
      <InfiniteScroll
        pageStart={1}
        loadMore={loadMoreBooks}
        hasMore={hasMore && !isLoading}
        initialLoad={true}
      >
        <List>
          <RenderBooks books={books} />
        </List>
      </InfiniteScroll>
      {isLoading && hasMore && <LoaderConatiner><Loader/></LoaderConatiner>}
    </ListContainer>
  )
}

export default BookList;