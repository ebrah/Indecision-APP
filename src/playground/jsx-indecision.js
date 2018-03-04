
const getFirstName = fullName => fullName.split(' ')[1];

const fullname = 'Ebrah jamee';

console.log(getFirstName(fullname));

const multiplication = {
    numbers: [5, 10, 40, 30, 20, 10, 90 ],
    multipler() {
        return this.numbers.map(n => n * n);
    }
}

console.log(multiplication.multipler());

const removeOne = () => {
    console.log('Remove One ');
 };
 
 const addOne = () => console.log('Add One ');

const buttons = (
<div>
  <button onClick={removeOne}> -1 </button> <br/> <br/>
  <button onClick={addOne} > +1 </button>
</div>
);

//ReactDOM.render(buttons, document.getElementById('app'));


//form
let list_items = [];
const formSubmit = (e) => {
     e.preventDefault();
     list_items.push(e.target.elements.options.value);
     e.target.elements.options.value = '';
     console.log(list_items);
     renderBlock();
};
const removeItems = () =>{
    list_items = [];
    console.log(list_items.length);
    renderBlock();
};

const toDo = ()=>{
  const rand = Math.floor( Math.random() * list_items.length );
  alert(list_items[rand]);
};
const renderBlock = () => {
const form = (
  <div>
    <button disabled={list_items.length == 0} onClick={toDo}>What should I do ?</button> <button onClick={removeItems}> Delete All </button>
    <ol>
      {list_items.length > 0 && list_items.map(items => <li key={items}> {items} </li> )}
    </ol>
    <form onSubmit={formSubmit}>
        <input type="text" name='options'/>
        <button> Add Item </button>
    </form>
 </div>);

 ReactDOM.render(form, document.getElementById('app'));

}

renderBlock();