import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getBookSelector } from "../../store/selectors/books";
import { ListHeader } from "../book-list/styles";
import Back from "../../icons/back";
import {
  BookContainer,
  Container, DetailsContainer,
  InfoContainer,
  Picture,
  Review,
  ReviewContainer,
  User
} from "./styles";

const BookDetail = () => {
  let { id } = useParams();
  const book = useSelector(getBookSelector(id));

  if (!book) {
    return <div>Book not found</div>;
  }

  const { picture, downloads, title, author, rating, description, reader_reviews } = book

  const reviews = reader_reviews.map((item, index) => {
    return (
      <ReviewContainer key={index}>
        <Review>{item.review}</Review>
        <User>{item.user}, {item.age} Years Old</User>
      </ReviewContainer>
    )
  })

  return (
    <DetailsContainer>
      <ListHeader>
        <Link to='/'>
          <Back />
        </Link>
      </ListHeader>
      <BookContainer>
        <Container>
          <Picture src={picture} alt="" />
          <InfoContainer>Downloads: {downloads}</InfoContainer>
        </Container>
        <Container>
          <InfoContainer>Title: {title}</InfoContainer>
          <InfoContainer>Author: {author}</InfoContainer>
          <InfoContainer>Raiting: {rating}</InfoContainer>
          <InfoContainer>Description: {description}</InfoContainer>
          <InfoContainer>
            <div>Reader reviews: </div>
            <div>{reviews}</div>
          </InfoContainer>
        </Container>
      </BookContainer>
    </DetailsContainer>
  );
}

export default BookDetail;