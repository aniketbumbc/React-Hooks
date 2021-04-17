import React, { Component } from 'react';

export default class IntervalCounter extends Component {
  constructor(props) {
    super();
    this.state = {
      counter: 0,
    };
  }
  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }
  componentDidUpdate() {
    console.log('update');
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  render() {
    return (
      <div>
        <h3>{this.state.counter}</h3>
      </div>
    );
  }
}
