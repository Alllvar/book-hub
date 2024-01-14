import styled from "styled-components";

export const DropDownContainer = styled.div`

`;

export const DropDownHeader = styled.div`
  width: 100px;
  height: 36px;
  border: 0.5px solid #FFFFFF;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  border-radius: 6px;
  margin-left: 20px;
  font-size: 14px;
  cursor: pointer;
`;

export const DropDownListContainer = styled.div`
  position: absolute;
  z-index: 100;
  width: 123px;
  margin-left: 20px;
  margin-top: 10px;
  border-radius: 8px;
  background: #1F1F1F;
`;

export const DropDownList = styled.ul`
  padding-left: 10px;
  margin: 0;
  box-sizing: border-box;
  font-size: 14px;
  color: #FFFFFF;
  
  &:first-child {
    padding-top: 0.8em;
  }
`;

export const ListItem = styled.li`
  list-style: none;
  margin-bottom: 0.8em;
  
  &:hover {
    color: #fd9e46;
    cursor: pointer;
  }
`;
