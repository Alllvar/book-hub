import styled, {keyframes} from "styled-components";

export const ListContainer = styled.div`
  border: 1px solid #555555;
  border-radius: 10px;
  width: 70%;
  margin: 15px 0;
  display: flex;
  flex-direction: column;
`;

export const ListHeader = styled.div`
  padding: 24px;
  border-bottom: 1px solid #555555;;
`;

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  padding: 20px 32px 0 32px;
  justify-content: center;
`;

export const SortingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 32px;
`;

export const SortByContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SortByText = styled.p`
  margin: 0 0 0 8px;
`;

export const PictureContainer = styled.div`
  position: relative;
`;

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoaderConatiner = styled.div`
  position: relative;
  margin: 25px;
  width: 40px;
  animation: ${rotateAnimation} 2s linear infinite;
  align-self: center;
`;

