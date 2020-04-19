import {History} from 'history'
import { SelectParam } from "antd/lib/menu";
import { Menu } from "antd";
import Icon from "@ant-design/icons";
import React from 'react';

const SubMenu = Menu.SubMenu;

interface Props {
    history : History
} 

interface State{

}

class SideBar extends React.Component<Props,State>{

    selectKey = (selectParams : SelectParam)=>{
        console.log(selectParams)
        if (selectParams.key == "1"){
            this.props.history.push("/home/news")
        } else if (selectParams.key == "3"){
            this.props.history.push("/home/about")
        }
      }
    

      render(){
          return(
            <Menu
            mode="inline"
            theme="dark"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            onSelect = {this.selectKey}
          >
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  内容
                </span>
              }
            >
              <Menu.Item key="1">新闻</Menu.Item>
              <Menu.Item key="2">选项2</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="laptop" />
                  其他
                </span>
              }
            >
              <Menu.Item key="3">关于</Menu.Item>
            </SubMenu>
          </Menu>
          )
      }
}

export default SideBar