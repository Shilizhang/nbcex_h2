import React from 'react';
import ReactDOM from 'react-dom';
import {Link, Route, Switch, Redirect} from 'react-router-dom'
import './index.scss'
import '../css/search.scss'
import { Layout, Menu, Icon, Dropdown } from 'antd';
import routes from '../../router/routes'
const { Header, Sider, Content } = Layout;


class Sidenav extends React.Component {
    state = {
        collapsed: false,
        userinfo:false,
    };
    
      ;
    render(){
        const menu = (
            <Menu>
              <Menu.Item>
                <a target="_blank" rel="noopener noreferrer">
                    个人信息
                </a>
              </Menu.Item>
              <Menu.Item>
                {/* <a target="_blank" rel="noopener noreferrer">
                    修改密码
                </a> */}
                <Link to={{ pathname: '/changepassword' }}>修改密码</Link>

              </Menu.Item>
              <Menu.Item>
                {/* <a target="_blank" rel="noopener noreferrer">
                    退出登录
                </a> */}
                <Link to= {{pathname: '/login'}} >退出登录</Link>

              </Menu.Item>
            </Menu>)
        return(
            <div className= "nav">
                <div className= "nav_header">
                    <div className= "nav_logo">logo</div>
                    <div className= "nav_header_right">
                        <div className= "nav_more">更多应用</div>
                        <div className= "nav_user" onClick = {this.openuserinfo}>
                            {/* <img /> */}
                            <div className= "nav_user_img"></div>
                            {/* <span className= "nav_user_name">admin <Icon style={{ fontSize: '8px', color: '#fff' }} type= "down" /></span> */}
                            <Dropdown overlay={menu}>
                                <span className="ant-dropdown-link nav_user_name" >
                                    admin <Icon style={{ fontSize: '8px', color: '#fff' }} type= "down" />
                                </span>
                            </Dropdown>
                        </div>
                    </div>
                </div>
                <div className= "nav_content">
                    <div className= "nav_left">
                        <Layout width= "260px">
                            <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                                <div className="logo" />
                                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                                    <Menu.Item key="1">
                                        <Link to= {{pathname: '/home'}} >系统首页</Link>
                                        <Icon type= "down" />
                                    </Menu.Item>
                                    <Menu.Item key="2">
                                        <Link to= {{pathname: '/userinfo'}} >用户管理</Link>
                                        <Icon type= "down" />
                                    </Menu.Item>
                                    <Menu.Item key="3">
                                        <Link to= {{pathname: '/topup'}} >充值管理</Link>                                    
                                        <Icon type= "down" />
                                    </Menu.Item>
                                    <Menu.Item key="4">
                                        {/* <span>提币管理</span> */}
                                        <Link to= {{pathname: '/MentionMoney'}} >提币管理</Link>                                    
                                        <Icon type= "down" />
                                    </Menu.Item>
                                    <Menu.Item key="5">
                                        {/* <span>币种交易参数设置</span> */}
                                        <Link to= {{pathname: '/currency'}} >币种交易参数设置</Link>                                    
                                        <Icon type= "down" />
                                    </Menu.Item>
                                    <Menu.Item key="6">
                                        {/* <span>资讯管理</span> */}
                                        <Link to= {{pathname: '/information'}} >资讯管理</Link>
                                        <Icon type= "down" />
                                    </Menu.Item>
                                    <Menu.Item key="7">
                                        {/* <span>超级用户管理</span> */}
                                        <Link to= {{pathname: '/superuser'}} >超级用户管理</Link>
                                        <Icon type= "down" />
                                    </Menu.Item>
                                </Menu>
                            </Sider>
                        </Layout>
                    </div>
                    <div className= "nav_right">
                        {routes.map((item,i)=>
                            <Route key={i} path={item.path} component={item.component} exact/>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}
export default Sidenav 