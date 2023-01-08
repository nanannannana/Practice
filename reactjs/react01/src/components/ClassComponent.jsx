import React, { Component } from 'react';

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'hello',
    };
    this.Click = this.Click.bind(this);
  }
  Click() {
    this.setState({ text: 'click!' });
  }
  render() {
    const { text } = this.state;
    return (
      <div>
        <h2>클래스형 컴포넌트</h2>
        <p>{text}</p>
        <button onClick={this.Click}>클릭</button>
      </div>
    );
  }
}
