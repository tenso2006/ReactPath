import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    this.props.handleButtonClick(this.props.counterValue);
  };

  render () {
    return (
      <button
        onClick={this.handleClick}>
        +{this.props.counterValue}
      </button>
    );
  }
}


const Result = (props) => {
  return (
    <div>{props.counter}</div>
  );
};


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {counter:0};
    this.incrementCounter = this.incrementCounter.bind(this);
  }

  incrementCounter (counterValue) {
    this.setState((prevState) => ({
      counter: prevState.counter + counterValue
    }));
  };

  render () {
    return (
      <div>
        <Button counterValue ={1} handleButtonClick = {this.incrementCounter} />
        <Button counterValue ={5} handleButtonClick = {this.incrementCounter} />
        <Button counterValue ={8} handleButtonClick = {this.incrementCounter} />
        <Button counterValue ={9} handleButtonClick = {this.incrementCounter} />
        <Result counter = {this.state.counter}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('module1'));

