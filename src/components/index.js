import React from 'react';
import ReactDOM from 'react-dom';
import Layouts from './Layouts/index'
import Login from './login/index'
import 'reset-css';
import 'antd/dist/antd.css'
class Components extends React.Component {
    render(){
        return(
            <div><Layouts /></div>
        )
    }
}
export default Components