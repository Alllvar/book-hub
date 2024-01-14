import {
  Author,
  ItemContainer,
  Picture,
  Rating,
  Title
} from "./styles";
import { Link } from "react-router-dom";
import { PictureContainer } from "../book-list/styles";
import Checked from "../../icons/checked";
import Unchecked from "../../icons/unchecked";
import { markBookAsChecked } from "../../store/actions/books";
import { useDispatch, useSelector } from "react-redux";
import { getCheckedIdsMapSelector } from "../../store/selectors/books";

export const RenderBooks = ({ books }) => {
  const dispatch = useDispatch();

  const checkedIdsMap = useSelector(getCheckedIdsMapSelector);

  const handleBookClick = (id) => {
    dispatch(markBookAsChecked(id));

    localStorage.setItem('checkedIdsMap', JSON.stringify({ ...checkedIdsMap, [id]: true }))
  };

  return books.map((item) => {
    const { picture, author, title, rating, id } = item;

    return (
      <ItemContainer key={id} onClick={() => handleBookClick(id)}>
        <Link to={`/book/${id}`}>
          <PictureContainer>
            <Picture src={picture} alt={title} />
            {checkedIdsMap[id]
              ? <Checked top="10px" right="15px" width="24px" height="24px" />
              : <Unchecked top="10px" right="15px" width="24px" height="24px" />}
          </PictureContainer>
        </Link>
        <Author>{author}</Author>
        <Title>{title}</Title>
        <Rating>{rating}</Rating>
      </ItemContainer>
    );
  });
};