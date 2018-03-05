import React from 'react';
import Option from './Option';

const Options = (props) => (
  <div>
   <div className="widget-header">
   <h3 className="widget-header__title"> Your options </h3>
    <button 
      className="button button--link" 
      onClick={props.RemoveToDo}
      > 
      Remove all 
    </button>
   </div>

   {props.options.length === 0 && <p className="widget__message"> Please add the options to get started! </p> }
   <ul className="clear-padding">
     {props.options.map((value, key) => (
        <Option 
         option={value} 
         key={key}
         counter={key+1}
         remove={props.Remove}
        />
      ))}
  </ul>
 </div>
 );

export default Options;