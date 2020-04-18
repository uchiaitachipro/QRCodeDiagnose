import { Component, MouseEventHandler } from "react";
import React from "react";
import Button from "antd/es/button";
import Layout from "antd/es/layout";
import Row from "antd/es/row";
import "../../../resources/App.css";
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

  handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    this.setState((prevState, prop) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <div className="Box">
        <div className="BoxSon">
          <div>
            <Row justify="space-around" align="middle">
              <p>
                <label>你点击了{this.state.count}次</label>
              </p>
            </Row>
            <Row justify="space-around" align="middle">
              <Button onClick={this.handleClick}>
                你好 {this.props.content}
              </Button>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default Guide;
