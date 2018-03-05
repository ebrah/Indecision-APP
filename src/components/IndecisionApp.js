import React from 'react';
import AddOption from './AddOption';
import Options  from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component{
     state = {
       options: [],
       selectedOption: undefined
     }
   CloseModal = () => {
     this.setState(()=> ({selectedOption:undefined}));
   } 
    WhatToDo = () => {
      const rand = Math.floor(Math.random() * this.state.options.length);
      this.setState((prevState) => ({selectedOption:prevState.options[rand]}));
    }
    RemoveToDo = () => {
      this.setState(() => {
        return {
          options : []
        };
      });
    }
    AddToDo = (option) => {
      if(!option){
        return 'Enter an option';
      }else if(this.state.options.indexOf(option) > -1){
        return 'The option you want to Enter is Exists';
      }
      this.setState((prevState) => ({options: prevState.options.concat(option)}) );
    }
    RemoveSingleOption = (option) => {
       this.setState((prevState) => ({
           options:prevState.options.filter(opt => option !== opt)
       }));
    }

    componentDidMount(){
      try{
        const json = localStorage.getItem('options');
        const options = JSON.parse(json);
        if(options){
          this.setState(()=>({options}));
        }
  
      } catch(e){
        //do Nothing at all..
      }
    }
    componentDidUpdate(prevProps, prevState){
      if(prevState.options.length !== this.state.options.length){
        const json = JSON.stringify(this.state.options);
        localStorage.setItem('options', json);
      }
    }
    componentWillUnmount(){
      console.log('componentWillUnmount');
    }
    
    render(){
        const subTitle = "Put your life in hands of a computer";
        return (
          <div>
            <Header subTitle={subTitle}/>
            <div className="container">
               <Action 
                 isEnabled={!this.state.options.length > 0}
                 WhatToDo={this.WhatToDo}
                />
              <div className="widget">
                <Options
                  options={this.state.options}
                  RemoveToDo={this.RemoveToDo}
                  Remove={this.RemoveSingleOption}
                />
                <AddOption AddToDo={this.AddToDo}/>
              </div>
             </div>
             <OptionModal 
               selectedOption={this.state.selectedOption}
               CloseModal={this.CloseModal}
              />
          </div>
        );
    }
  }  