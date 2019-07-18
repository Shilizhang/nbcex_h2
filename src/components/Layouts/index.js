import React from 'react';
import ReactDOM from 'react-dom';
import {Link, Route, Switch, Redirect, NavLink, withRouter} from 'react-router-dom'
import './index.scss'
import '../css/search.scss'
import { Layout, Menu, Icon, Dropdown } from 'antd';
import routes from '../../router/routes'
import Login from '../login/index'
import Cookies from 'js-cookie'

const { Header, Sider, Content } = Layout;
@withRouter
class Sidenav extends React.Component {
    state = {
        collapsed: false,
        userinfo:false,
        Islogin:false,
    };
    componentDidMount(){
        if(!Cookies.get('token')){
            this.props.history.push("/login")    
        }
    }
    logout = ()=> {
        Cookies.remove("token")
        this.props.history.push("/login")
    }
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
                <div onClick= {this.logout} >退出登录</div>

              </Menu.Item>
            </Menu>)
        return(
            <div className= "nav">
                {this.props.location.pathname !== "/login"?
                <div>
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
                                <ul>
                                    <li>
                                        <NavLink to= {{pathname: '/home'}}  activeClassName= 'actived' >系统首页</NavLink>
                                        <Icon type= "down" />
                                    </li>
                                    <li>
                                        <NavLink to= {{pathname: '/userinfo'}} activeClassName= 'actived' >用户管理</NavLink>
                                        <Icon type= "down" />
                                    </li>
                                    <li>
                                        <NavLink to= {{pathname: '/topup'}} activeClassName= 'actived' >充值管理</NavLink>                                    
                                        <Icon type= "down" />
                                    </li>
                                    <li>
                                        <NavLink to= {{pathname: '/MentionMoney'}} activeClassName= 'actived' >提币管理</NavLink>                                    
                                        <Icon type= "down" />
                                    </li>
                                    <li>
                                        <NavLink to= {{pathname: '/currency'}} activeClassName= 'actived' >币种交易参数设置</NavLink>                                    
                                        <Icon type= "down" />
                                    </li>
                                    <li>
                                        <NavLink to= {{pathname: '/information'}} activeClassName= 'actived' >资讯管理</NavLink>
                                        <Icon type= "down" />
                                    </li>
                                    <li>
                                        <NavLink to= {{pathname: '/superuser'}} activeClassName= 'actived' >超级用户管理</NavLink>
                                        <Icon type= "down" />
                                    </li>
                                </ul>
                            </Sider>
                        </Layout>
                    </div>
                    <div className= "nav_right">
                        {routes.map((item,i)=>
                            <Route key={i} path={item.path} component={item.component} exact/>
                        )}
                    </div>
                </div>
                </div>:<Route path="/login" component={Login} />}
            </div>
        )
    }
}
export default Sidenav 