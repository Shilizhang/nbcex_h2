import React from 'react';
import './Information.scss'
import { Table, Input, Button, Icon } from 'antd';
import Editor from './editor/editor'

const data = [
    {
      key: '1',
      id: '123123123123132',
      status: '已发布',
      time:"2019-1-1",
      option:"公告下架"
    //   phone:"12345678901",
    //   name: 'BTC',
    //   address:"BTC128658889857",
    //   num:"123456789",
    //   orderID:`123456789415`
    },
    {
      key: '2',
      id: '456456456456456',
      status: '已发布',
      time:"2019-1-1",
      option:""
    //   phone:"12345678902",
    //   name: 'BTC',
    //   address:"BTC128658889857",
    //   num:"123456789",
    //   orderID:`123456789415`
    },
    {
      key: '3',
      id: '789789789789789',
      status: '已发布',
      time:"2019-1-1",
      option:"公告下架"
      //   phone:"12345678903",
    //   name: 'BTC',
    //   address:"BTC128658889857",
    //   num:"123456789",
    //   orderID:`123456789415`
    },
    {
      key: '4',
      id: '156156156156156',
      status: '未发布',
      time:"2019-1-1",
      option:""
      //   phone:"12345678904",
    //   name: 'BTC',
    //   address:"BTC128658889857",
    //   num:"123456789",
    //   orderID:`123456789415`
    },
  ];
  //序号
  const rowSelection = {
      
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
    }),
  };
class Information extends React.Component {
    state = {
        searchText: '',
        add:false,
      };   
    
    
    add = (data)=>{
      this.setState({
        add:data
      },() =>{
        console.log(this.state.add);//setState是异步操作，但是我们可以在它的回调函数里面进行操作
     })
    }
    render(){
        const columns = [
            {
                title: '序号',
                dataIndex: 'key',
                key: 'key',
            },
            // {
            //   title: '身份证',
            //   dataIndex: 'id',
            //   key: 'id',
            // },
            {
              title: '标题',
              dataIndex: 'id',
              key: 'id',
            },
            {
              title: '公告状态',
              dataIndex: 'status',
              key: 'status',
            },
            {
              title: '更新时间',
              dataIndex: 'time',
              key: 'time',
            },
            {
                title: '操作',
                dataIndex: 'option',
                key: 'option',
            }
          ];
          const paginationProps = {
            // showSizeChanger: true,
            // showQuickJumper: true,
            // total: pagination.totalData, // 数据总数
            total: 666, // 数据总数
            // pageSize: parseInt(this.state.pageSize), // 每页条数
            // current: parseInt(this.state.pageNum), // 当前页码
            pageSize:10,
            // showTotal: ((total) => {
            // return `共 ${total} 条`;
            // })
        };
        return(
            <div className= "Information">
              
                {/* <button onClick= {()=>{}}>测试测试测试</button> */}
                {this.state.add? <Editor value = {this.state} add={this.add.bind(this)} />:<div>
                  <div className= "Information_option">
                    <button onClick= {()=>this.add(true)}>公告发布</button>
                    <button>删除</button>
                  </div>
                  <div className = "right_title">当前位置: 资讯管理</div>                
                  <div className= "Information_table">
                      <Table bordered rowSelection={rowSelection}  columns={columns} dataSource={data} pagination={paginationProps}  />
                  </div>
                  <div className= "Information_tabledata">
                      当前第1/66页  共666条记录   每页10条
                  </div>
                </div>}
            </div>
        )
    }
}
export default Information 