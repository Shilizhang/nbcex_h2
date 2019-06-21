import React from 'react';
import './ChangePwd.scss'
import {Link} from 'react-router-dom'
import { Modal, Button } from 'antd';
class ChangePwd extends React.Component {
    success = ()=> {
        Modal.success({
          title: '密码修改成功',
        });
      }
    render(){
        return(
            <div className= "changepwd">
                <div className = "right_title">当前位置: 用户更改密码</div>
                <div className= "cp_content">
                    <div>
                        <div className= "cp_content_name">登录密码修改</div>
                        <ul>
                            <li>
                                <div>原密码</div>
                                <input type= "password" placeholder= "请输入原始账号登录密码" />
                            </li>
                            <li>
                                <div>新密码</div>
                                <input type= "password" placeholder= "请输入6~16位新密码" />
                            </li>
                            <li>
                                <div>再次输入新密码</div>
                                <input type= "password" placeholder= "请再次输入6~16位新密码" />
                            </li>
                        </ul>
                        <div  className= "cp_content_button">
                            <button>
                                <Link to= {{pathname: '/home'}} >取消</Link> 
                            </button>
                            <button onClick= {this.success}>确定</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ChangePwd 