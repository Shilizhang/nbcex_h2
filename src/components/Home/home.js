import React from 'react';
import './home.scss'
import orderPending from './img/order-pending.png'

class Home extends React.Component {
    render(){
        return(
            <div className= "home">
                <div className = "right_title">当前位置: 系统首页</div>    
                <ul className= "home_title">
                    <li >
                        <p>待处理提现订单</p>
                        <div>
                            <img src= {orderPending} />
                        </div>
                        <span> 
                            <strong>10</strong> 
                            笔
                        </span>
                    </li>
                    <li >
                        <p>待处理提现订单</p>
                        <div>
                            <img src= {orderPending} />
                        </div>
                        <span> 
                            <strong>150</strong> 
                            笔
                        </span>
                    </li>
                    <li >
                        <p>待处理提现订单</p>
                        <div>
                            <img src= {orderPending} />
                        </div>
                        <span> 
                            <strong>2000</strong> 
                            笔
                        </span>
                    </li>
                </ul>
                <div className= "home_content">
                    <div className= "home_type">
                        <div>用户类型</div>
                    </div>   
                    <div className= "home_volume">
                        <div>总成交量</div>
                    </div>        
                </div>
            </div>
        )
    }
}
export default Home 