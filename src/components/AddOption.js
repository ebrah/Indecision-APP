
import React from 'react';

export default class AddOption extends React.Component{
    constructor(props){
      super(props);
      this.handleAddOption = this.handleAddOption.bind(this);
      this.state = {
        error: ''
      }
    }
  
    handleAddOption(e){
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
              <p> {this.state.error && this.state.error} </p>
              <form onSubmit={this.handleAddOption}>
               <input type='text' name="option" />
               <button> Add option </button>
              </form>
            </div>
          );
      }
  }