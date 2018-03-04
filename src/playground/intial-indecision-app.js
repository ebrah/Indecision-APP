
console.log('app.js is running..');

var appProject = {
    title : 'Indecision App',
    description: 'very first learning react-cource',
    option: ['one', 'Two']
};

var  template = (
 <div>
    <h2> {appProject.title ? appProject.title : 'Anonymous Project'} </h2>
    <p>  {appProject.option.length > 0 && appProject.description } </p>
    <ol>
        <li> Item One </li>
        <li> Item two </li>
    </ol>
 </div>
);

var user = {
    name: 'Ebrah',
    age: 26,
    location: 'Dar es Salaam Tanzania'
};

var templateTwo = (
  <div>
   <h1> {user.name} </h1>
   <p> age: {user.age} </p>
   <p> location: {user.location} </p>   
 </div>
);

var contentroot = document.getElementById('app');

ReactDOM.render(template, contentroot);