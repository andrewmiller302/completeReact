console.log('App is running!');

let visibility = false;
const app = {
		title: "Visibility Toggle",
};

const toggleVisibility = () =>{
	visibility = !visibility; //setting to not will flip the visibility. no need to track. 
	render() 

};

const render = () => {
	const template = (
		<div>
		<h1>{app.title}</h1>
		<button onClick ={toggleVisibility}>
			{visibility ? 'Hide Details' : 'Show Details'}
		</button>
		{visibility && (
			<div>
			<p>Hey, these are some details you can see now!</p>
			</div>
		)}
			
		</div>
	);
	ReactDOM.render(template, appRoot);
};

const appRoot = document.getElementById('app');

render();