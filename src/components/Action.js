
import React from 'react';

const Action = (props) => (
  <div>
   <button 
    onClick={props.handleToDo}
    disabled = {!props.HasOptions}
   > 
    What should I do ? 
   </button>
   <button onClick={props.handleRemove}> Remove all </button>
   </div>
 );

  export default Action;