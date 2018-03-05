import React from 'react';

const Header = (props) => (
  <div className="header">
    <div className="container">
      <h2 className="header__title"> {props.title} </h2>
      {props.subTitle && <h3 className="header__subtitle"> {props.subTitle}</h3> }
    </div>
  </div>
 );
  
  Header.defaultProps = {
    title : 'Indecision App'
  }

  export default Header;