import React, { Component } from 'react';

export class ClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      name: '',
    };
  }

  componentDidMount() {
    document.title = `Clicked  ${this.state.count} times`;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log('Updating doc title');
      document.title = `Clicked  ${this.state.count} times`;
    }
  }

  // incrementCount = () => {
  //   this.setState({
  //     count: this.state.count + 1,
  //   });
  // };

  render() {
    return (
      <div>
        <input
          type='text'
          value={this.state.name}
          onChange={(event) => {
            this.setState({ name: event.target.value });
          }}
        />
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Count {this.state.count} times
        </button>
      </div>
    );
  }
}

export default ClassCounter;
