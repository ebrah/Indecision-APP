import React from 'react';
import Option from './Option';

const Options = (props) => (
  <div>
   {props.options.length === 0 && <p> Please add the options to get started! </p> }
   <ul>
     {props.options.map((value, key) => (
        <Option 
         option={value} 
         key={key}
         remove={props.Remove}
        />
      ))}
  </ul>
 </div>
 );

  export default Options;