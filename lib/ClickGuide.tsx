import { Component,MouseEventHandler } from "react";
import React from "react";

interface IName {
  content: string;
}

interface IState {
  count: number;
}

class Guide extends Component<IName, IState> {
  state = {
    count: 0,
  };


  handleClick : MouseEventHandler<HTMLButtonElement> = (e)=>{
    this.setState((prevState, prop) => ({
            count: prevState.count + 1,
    }));
  }

  render() {
    return (
      <div>
        <p>你点击了{this.state.count}次</p>
        <button onClick={this.handleClick}>你好 {this.props.content}</button>
        {}
      </div>
    );
  }
}

export default Guide;
