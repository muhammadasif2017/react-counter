import React from "react";
import ReactDOM from 'react-dom';

function Child({ onAction }) { 
  return (
    <button onClick={onAction}> 
      Click Me!
    </button>
  ); 
}

class CountingParent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { actionCount: 0 };
    // Bind the event handler function, so that its // `this` binding isn't lost when it gets passed // to the button
    this.handleAction = this.handleAction.bind(this);
  }
  handleAction(action) {
    console.log('Child says', action);
    this.setState({ actionCount: this.state.actionCount + 1 });
  }
  render() { 
    return (
      <div>
        <Child onAction={this.handleAction}/> <p>Clicked {this.state.actionCount} times</p>
      </div>
    ); 
  }
}

const Page = () => ( <div>
  <CountingParent/>
  <CountingParent/>
  <CountingParent/>
  </div>
);

ReactDOM.render(<Page />, document.querySelector('#root'));