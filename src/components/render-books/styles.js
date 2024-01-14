import styled from "styled-components";

export const ItemContainer = styled.div`

`;

export const Picture = styled.img`
  width: 215px;
  height: 310px;
  border-radius: 10px;
  transition: transform 0.3s ease-in-out;
  object-fit: cover;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

export const Author = styled.p`
  max-width: 215px;
  margin-bottom: 5px;
  margin-top: 10px;
`;

export const Title = styled.p`
  max-width: 190px;
  margin-bottom: 10px;
  margin-top: 0;
  font-weight: 200;
`;

export const Rating = styled.p`
  font-weight: 200;
`;