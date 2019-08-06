import React from 'react';
import { Table, Input, Button, Icon, Switch } from 'antd';
import './SuperUser.scss'

class SuperUser extends React.Component {
    state = {
        searchText: '',
        searchType:'',
        searchPlaceholder:'',
        tableData: [
          {
            key: '1',
            name: '123',
            operation:1
          },
          {
            key: '2',
            name: '456',
            operation:1
          },
          {
            key: '3',
            name: '789',
            operation:0
          },
          {
            key: '4',
            name: '101',
            operation:1
          },
        ],
        searchData: '',
        exportData:[]
    };
    //序号
    rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
          console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
          this.setState({exportData: selectedRows})
        },
        // getCheckboxProps: record => ({
        //   disabled: record.name === 'Disabled User', // Column configuration not to be checked
        //   name: record.name,
        // }),
    };
    freeze= (checked, event)=>{
        console.log(checked,event)
    }
    render(){
        const columns = [
            {
                title: '序号',
                dataIndex: 'key',
                key: 'key',
            },
            {
              title: '用户名',
              dataIndex: 'name',
              key: 'name',
            },
            {
                title: '操作',
                dataIndex: 'operation',
                key: 'operation',
                render: (v)=>{
                  if(v){
                    return <Switch checkedChildren="冻结" unCheckedChildren="解冻" defaultChecked onChange = {(checked,event)=>{this.freeze(checked, event)}} />
                  }else {
                    return <Switch checkedChildren="冻结" unCheckedChildren="解冻" />
                  }
                }
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
            <div className= "userinfo">
                <div className = "right_title">当前位置: 超级用户</div>
                <div className= "userinfo_header">
                    <button>添加</button>
                    <button>删除</button>
                </div>
                <div className= "userinfo_table">
                    <Table bordered rowSelection={this.rowSelection}  columns={columns} dataSource={this.state.searchData || this.state.tableData} pagination={paginationProps} />
                </div>
            </div>
        )
    }
}
export default SuperUser 