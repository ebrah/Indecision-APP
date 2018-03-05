
import React from 'react';

const Action = (props) => (
  <div>
    <button 
       className="big-button"
       onClick={props.WhatToDo}
       disabled={props.isEnabled}
     > 
     What should I do ?  
    </button>
  </div>
 );

export default Action;