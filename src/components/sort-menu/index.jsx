import React, { useState } from "react";
import ArrowUp from "../../icons/arrow-up";
import ArrowDown from "../../icons/arrow-down";
import {
  DropDownContainer,
  DropDownHeader,
  DropDownList,
  DropDownListContainer,
  ListItem
} from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { setSortCriteria } from "../../store/actions/books";
import { SORT_OPTIONS } from "../../constants";
import { getBooksCriteriaSelector } from "../../store/selectors/books";

export default function SortMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const selectedOption = useSelector(getBooksCriteriaSelector);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = value => () => {
    setIsOpen(false);
    dispatch(setSortCriteria(value));
  };

  const currentArrow = isOpen ? <ArrowUp /> : <ArrowDown />

  return (
    <DropDownContainer>
      <DropDownHeader onClick={toggling}>
        <div>{selectedOption.charAt(0).toUpperCase() + selectedOption.slice(1)}</div>
        {currentArrow}
      </DropDownHeader>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList>
            {SORT_OPTIONS.map(option => (
              <ListItem onClick={onOptionClicked(option)} key={option}>
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </ListItem>
            ))}
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
  );
}