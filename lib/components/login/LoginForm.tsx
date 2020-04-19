
import React from "react";
import {Dispatch,bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import { Card } from "antd";
import { Form, Input, Button, Checkbox, Radio, Row, Col, message } from "antd";

import { Store  } from "antd/lib/form/interface";
import { ILogin ,LoginFormInfo} from "../../interfaces/User";
import "../../../resources/App.css";
import {
    getLocalRecord,
    login
} from "../../redux/login/index"
import {History} from 'history'

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 12,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 6,
    span: 12,
  },
};

interface Props{
    getLocalInfo():void
    onLogin(loginFormInfo: LoginFormInfo,history : History) : void 
    loginInfo : ILogin
    history: History
}


class LoginFormBox extends React.Component<Props, ILogin> {

  onFinish = (values: Store) => {
    console.log(values);
    this.props.onLogin({
        name : values.username,
        password : values.password,
        isChecked : values.remember
    },this.props.history)
  };

  onFinishFailed = (errorInfo: any) => {
    console.log(errorInfo);
  };

  componentDidMount() {

  }

  render() {

    const {loginInfo} = this.props

    return (
      <div className="Box">
        <div className="BoxSon">
          <div className="site-card-border-less-wrapper">
            <Card title="登录" bordered={false} style={{ width: 480 }}>
              <div>
                <Form
                  {...layout}
                  name="basic"
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={this.onFinish}
                  onFinishFailed={this.onFinishFailed}
                >
                  <Form.Item
                    label="用户名"
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "请输入你的用户名!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    label="密码"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "请输入密码!",
                      },
                    ]}
                  >
                    <Input.Password />
                  </Form.Item>

                  <Form.Item
                    {...tailLayout}
                    name="remember"
                    valuePropName="checked"
                  >
                    <Checkbox checked={loginInfo.isChecked}>记住</Checkbox>
                  </Form.Item>

                  <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                      提交
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any)=>({
    loginInfo : state.login
})

const mapDispatchToProps = (dispatch : Dispatch) => bindActionCreators({
    onLogin : login,
    getLocalInfo : getLocalRecord
},dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(LoginFormBox);
