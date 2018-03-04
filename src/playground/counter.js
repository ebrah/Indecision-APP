
class Counter extends React.Component{
    constructor(props){
        super(props);

        this.handleAdd = this.handleAdd.bind(this);
        this.handleMinus = this.handleMinus.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }

    handleAdd(){
      this.setState(() => ({ count: this.state.count + 1 }));
    }
    handleMinus(){
        this.setState(() => ({ count: this.state.count- 1 }));
    }
    handleReset(){
        this.setState(() => ({count: 0}));
    }

    componentDidMount(){
       const stringCount = localStorage.getItem('count');
       const count = parseInt(stringCount, 10);
       if(!isNaN(count)){
          this.setState(()=>({count}));
       }
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.count !== this.state.count){
           localStorage.setItem('count', this.state.count);
        }
    } 


  render(){
      return(
       <div>
         <h2> Count : {this.state.count} </h2>
         <hr/>
         <Actionbtn 
          Add={this.handleAdd} 
          Minus={this.handleMinus} 
          Reset={this.handleReset}
          />
       </div>
      );
  }
}

const Actionbtn = (props) => {
       return(
         <div>
           <button onClick={props.Add}> +1 </button>
           <button onClick={props.Minus}> -1 </button>
           <button onClick={props.Reset}> reset </button>
         </div>
       );
}

ReactDOM.render(<Counter/>, document.getElementById('app'));