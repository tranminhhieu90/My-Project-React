import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';
import {
  DownOutlined
} from '@ant-design/icons';

function DropDown(props) {
  const { listOptions } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value.value);
    props.getValueFromDropDown(value)
    setIsOpen(false);
  };
  const renderIconDownArrow = () => {
    return(
      <div style={{position: 'relative'}}>
        <DownOutlined style={{color: 'black', fontSize: 14, position: 'absolute', right: 0, top: 3}}/>
      </div>
    )
  }
  return (
    <React.Fragment>
      <DropDownHeader onClick={toggling}>{selectedOption ||renderIconDownArrow()}</DropDownHeader>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList>
            {listOptions.map((option) => (
              <ListItem onClick={onOptionClicked(option)} key={option.key}>
                {option.value}
              </ListItem>
            ))}
          </DropDownList>
        </DropDownListContainer>
      )}
    </React.Fragment>
  );
}


const DropDownHeader = styled("div")`
  padding: 0.2em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1.1rem;
  color: black;
  background: #ffffff;
  width: 30%;
  min-height: 30px;
  border: 1px solid black;
  border-radius: 5px;
}
`;

const DropDownListContainer = styled("div")``;

const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: black;
  font-size: 1.1rem;
  font-weight: 500;
  width: 30%;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
`;

export default DropDown;
