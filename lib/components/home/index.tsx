import React from "react";
import { Route, Switch } from "react-router";
import { History } from "history";
import { Menu, Breadcrumb } from "antd";
import Icon from "@ant-design/icons";
import "./../../../resources/Main.css";
import About from "../home/about/index";
import NewsFeed from "../home/news/index";
import SideBar from "../home/sidebar/index";
import { SelectParam } from "antd/lib/menu";

const SubMenu = Menu.SubMenu;

interface Props {
  history: History;
}

class HomePage extends React.Component<Props, {}> {
  render() {
    return (
      <div>
        <div className="ant-layout-aside">
          <aside className="ant-layout-sider">
            <div className="ant-layout-logo"></div>
            <SideBar history={this.props.history} />
          </aside>
          <div className="ant-layout-main">
            <div className="ant-layout-header"></div>
            <div className="ant-layout-breadcrumb">
              <Breadcrumb>
                <Breadcrumb.Item>首页</Breadcrumb.Item>
                <Breadcrumb.Item>应用列表</Breadcrumb.Item>
                <Breadcrumb.Item>某应用</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div className="ant-layout-container">
              <div className="ant-layout-content">
                <div style={{ height: 590 }}>
                  <Switch>
                    <Route exact path="/home/news" component={NewsFeed} />
                    <Route exact path="/home/about" component={About} />
                  </Switch>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
