
import React from 'react';

export default class AddOption extends React.Component{
    state = {
      error: ''
    }
  
    handleAddOption = (e) => {
      e.preventDefault();
      const option = e.target.elements.option.value;
      const error = this.props.AddToDo(option);
      if(!error){
        e.target.elements.option.value ='';
      }
      this.setState(()=>({error}));
    
    }
      render(){
          return (
            <div>
              <p className="add-option-error"> {this.state.error && this.state.error} </p>
              <form  className="add-option" onSubmit={this.handleAddOption}>
               <input type='text' name="option" className="add-option__input"/>
               <button className="button"> Add option </button>
              </form>
            </div>
          );
      }
  }