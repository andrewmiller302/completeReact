console.log('App.js is running!')

//JSX - JavaScript XML

var header = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
}

var template = (
    <div>
        <h1>{header.title}</h1>
        {header.subtitle && <p>{header.subtitle}</p>}
        <p>{header.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>    
    </div>
);

var user ={
    name: 'Andrew',
    age: 42,
    location: 'Oakland'
};

function getLocation(location){
    if (location){
        return <p>Location: {location}</p>;
    }
}

var templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p> }
        {getLocation(user.location)}
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);