import React from 'react';
import './index.scss'
import uesrImg from './img/yonghu.png'
import pwdImg from './img/mima.png'
import vcodeImg from './img/yanzhengma.png'
import Cookies from 'js-cookie'

class Login extends React.Component {
    constructor(){
        super()
    }
    onSubmit = ()=> {
        Cookies.set("token","12123123")
        this.props.history.push('/home')
    }
    render(){
        return(
            <div className= "login">
                <div className= "logo">logo</div>
                <div className= "title">—交易所系统后台—</div>
                <div className= "content">
                    <div>
                        <img src= {uesrImg} />
                        <input className= "login_user" type= "text" placeholder = "用户名"/>
                    </div>
                    <div>
                        <img src= {pwdImg} />
                        <input className= "login_pwd" type= "password" placeholder = "密码" />
                    </div>
                    {/* <div>
                        <img src= {vcodeImg} />
                        <input className= "login_code" type= "text" placeholder = "验证码" />
                        <span className= "login_codeImg">1234</span>
                        <u className= "login_change">看不清楚换一张</u>
                    </div> */}
                    <button className= "login_submit" onClick= {this.onSubmit}>登录</button>
                </div>
                <div className= "login_bottom">@1995-2004</div>
            </div>
        )
    }
}
export default Login 