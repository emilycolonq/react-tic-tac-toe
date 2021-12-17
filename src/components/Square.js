import React from 'react';
import PropTypes from 'prop-types';

import './Square.css';

const Square = (props) => {
  // For Wave 1 enable this 
  //  Component to alert a parent 
  //  component when it's clicked on.
  const clickSquare = () =>{
    props.onClickCallback(props.id);
  };
  

  return <button className='square' onClick = {clickSquare}>{props.value}</button>;
};
// console.log(onSquareButtonClick)

Square.propTypes = {
  value: PropTypes.string.isRequired,
  onClickCallback: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Square;
