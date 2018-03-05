import React from 'react';

const Option = (props) => (
  <li className="option">
    <p className="option__text">{props.counter}. {props.option} </p>
    <button 
      className="button button--link"
     onClick={(e)=> {
       props.remove(props.option);
     }}
     >
     Remove 
    </button>
  </li>
 ); 
  
  export default Option;