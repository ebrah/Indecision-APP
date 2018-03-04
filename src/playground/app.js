
class IndecisionApp extends React.Component{
  constructor(props){
   super(props);
   this.WhatToDo = this.WhatToDo.bind(this);
   this.RemoveToDo = this.RemoveToDo.bind(this);
   this.AddToDo = this.AddToDo.bind(this);
   this.RemoveSingleOption = this.RemoveSingleOption.bind(this);
   this.state = {
     options: []
   }
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
  WhatToDo(){
    const rand = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[rand]);
  }
  RemoveToDo(){
    this.setState(() => {
      return {
        options : []
      };
    });
  }
  AddToDo(option){
    if(!option){
      return 'Enter an option';
    }else if(this.state.options.indexOf(option) > -1){
      return 'The option you want to Enter is Exists';
    }
    
    this.setState((prevState) => ({options: prevState.options.concat(option)}) );
  }
  RemoveSingleOption(option){
     this.setState((prevState) => ({
         options:prevState.options.filter(opt => option !== opt)
     }));
  }
  render(){
      
      const subTitle = "Put your life hands on a computer";
      return (
        <div>
          <Header  subTitle={subTitle}/>
          <Action 
            HasOptions ={this.state.options.length > 0}
            handleToDo ={this.WhatToDo}
            handleRemove={this.RemoveToDo}
           />
          <Options
           options={this.state.options}
           Remove={this.RemoveSingleOption}
           />
          <AddOption AddToDo={this.AddToDo}/>
        </div>
      );
  }
}

const Header = (props) => {
  return (
    <div>
      <h2> {props.title} </h2>
       {props.subTitle && <h3> {props.subTitle}</h3> }
    </div>
   );
}

Header.defaultProps = {
  title : 'Indecision App'
}

const Action = (props) => {
  
  return (
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
}


const Option = (props) => {
  return(
    <li>
      {props.option}
      <button 
       onClick={(e)=> {
         props.remove(props.option);
       }}
       >
       Remove 
      </button>
    </li>
   ); 
}


const Options = (props) => {
  return(
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
}

class AddOption extends React.Component{
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
             <button> Add Item </button>
            </form>
          </div>
        );
    }
}



ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));