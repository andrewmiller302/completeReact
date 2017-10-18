//set up parent compenent 
class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption =this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state ={
      options: props.options
    };
  }
  componentDidMount(){
    console.log('componentDidMount!')
  }
  componentDidUpdate(prevProps, prevState){
    console.log('componentDidUpdate!')
  }
  componentWillUnmount(){
    console.log('componentWillUnmount')
  }

  handleDeleteOptions() {
    /*this.setState(() =>{
      return {
        options: []
      };
    });*/
    //this is the same as the above.
    //return an obj by wraping the {} within ()
    this.setState(() => ({options: []}));
  }

  handleDeleteOption(optionToRemove){
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  }

  handlePick(){   
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }
  handleAddOption(option){
    if(!option){
      return 'Enter valid value to add item';
    }else if (this.state.options.indexOf(option) > -1){
      return 'This option already exists';
    }
    this.setState((prevState) =>({options: prevState.options.concat(option)}));
      
  }
  render(){
    const subtitle = 'Put your life in the hands of a computer'
    
    return (
      <div>
        <Header subtitle={subtitle}/>
        <Action 
          handlePick={this.handlePick}
          hasOptions={this.state.options.length > 0} 
          />
        <Options 
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
          
        />
        <AddOption 
          handleAddOption ={this.handleAddOption}
        />
        
      </div>

    );
  }
}

IndecisionApp.defaultProps ={
  options: []
}

const Header = (props) =>{
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );

};

Header.defaultProps = {
  title: 'Indecision'
}

const Action = (props) =>{
  return (
    <div>
      <button 
      onClick={props.handlePick}
      disabled={!props.hasOptions}
      >
      What should I do?
      </button>
    </div>
  );
};
 
const Options = (props) => {
  return(
    <div>
    <button onClick={props.handleDeleteOptions}>Remove all</button>
      {
        props.options.map((option)=> (
          <Option 
            key={option} 
            optionText={option}
            handleDeleteOption={props.handleDeleteOption}
          />
        ))
      }
    
    </div>
  );
}

// class Options  extends React.Component {
//   render(){
//     return(
//       <div>
//       <button onClick={this.props.handleDeleteOptions}>Remove all</button>
//         {
//           this.props.options.map((option)=> <Option key={option} optionText={option}/>)
//         }
//       <Option />
//       </div>
//     );
//   }
// }
const Option = (props) => {
  return(
    <div>
      {props.optionText}
      <button 
        onClick={(e) =>{
          props.handleDeleteOption(props.optionText);
        }}
        >
        remove
      </button>
    </div>
  );
}

// class Option extends React.Component {
//   render(){
//     return(
//       <div>
//         {this.props.optionText}
//       </div>
//     );
//   }
// }

class AddOption extends React.Component {
  constructor(props){
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    
    this.setState(() =>({ error: error}));
  }
  render() {
    return (
      <div> 
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
        <input type="text" name="option"/>
        <button>Add Option</button>
        </form>
      </div>
    );
  }
}

//to render add react expresion of parent compnent as first argument
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));