import React from 'react';
import { Table, Input, Button, Icon,Select, Switch } from 'antd';
import ExportJsonExcel from 'js-export-excel';
import './UserInfo.scss'

const { Option } = Select;
  
class UserInfo extends React.Component {
    state = {
        searchText: '',
        searchType:'',
        searchPlaceholder:'',
        tableData: [
          {
            key: '1',
            id: '123123123123132',
            email: '32323232@123.com',
            phone:"12345678901",
            time:"2019-1-1",
            certification:"是",
            name: '123',
            operation:1
          },
          {
            key: '2',
            id: '456456456456456',
            email: '32323232@123.com',
            phone:"12345678902",
            time:"2019-1-1",
            certification:"是",
            name: '456',
            operation:1
          },
          {
            key: '3',
            id: '789789789789789',
            email: '32323232@123.com',
            phone:"12345678903",
            time:"2019-1-1",
            certification:"是",
            name: '789',
            operation:0
          },
          {
            key: '4',
            id: '156156156156156',
            email: '32323232@123.com',
            phone:"12345678904",
            time:"2019-1-1",
            certification:"是",
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


      //修改搜索种类 和 显示的种类(中文)
      onChange = (value)=>{
        this.setState({
          searchType:`${value.key}`,
          searchPlaceholder: `${value.label}`,
        })
      }
      // 修改搜索值
      ChangeSearchVal = (e)=> {
        this.setState({
          searchText:e.target.value
        })
      }
      //搜索
      search = ()=>{
        let type = this.state.searchType || 'email'
        let text = this.state.searchText
        let data = []
        this.state.tableData.map((item)=>{
          if(item[type].indexOf(text) > -1){
            data.push(item)
          }
        })
        this.setState({searchData: data})
      }

      //导出功能
      downloadExcel = () => {
        const data = this.state.exportData ? this.state.exportData : '';//表格数据
          var option={};
          let dataTable = [];
          if (data) {
            for (let i in data) {
              if(data){
                let obj = {
                  '身份证号码': data[i].id,
                  '邮箱号': data[i].email,
                  '手机号码': data[i].phone,
                  '注册时间': data[i].time,
                  '实名认证': data[i].certification,
                  '真实姓名': data[i].name,
                }
                dataTable.push(obj);
              }
            }
          }
          option.fileName = '用户管理'
          option.datas=[
            {
              sheetData:dataTable,
              sheetName:'sheet',
              sheetFilter:['身份证号码','邮箱号','手机号码','注册时间','实名认证','真实姓名'],
              sheetHeader:['身份证号码','邮箱号','手机号码','注册时间','实名认证','真实姓名'],
            }
          ];
          var toExcel = new ExportJsonExcel(option); 
          toExcel.saveExcel(); 
        }

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
              title: '身份证号码',
              dataIndex: 'id',
              key: 'id',
            },
            {
              title: '邮箱号',
              dataIndex: 'email',
              key: 'email',
            },
            {
              title: '手机号码',
              dataIndex: 'phone',
              key: 'phone',
            },
            {
              title: '注册时间',
              dataIndex: 'time',
              key: 'time',
            },
            {
              title: '实名认证',
              dataIndex: 'certification',
              key: 'certification',
            },
            {
              title: '真实姓名',
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
                <div className = "right_title">当前位置: 用户管理</div>
                <div className= "search_header">
                  <div className= "search_header_left">
                    <Select
                      style={{ width: 200 }}
                      labelInValue
                      placeholder="Select a person"
                      onChange={this.onChange}
                      defaultValue= {{ key: 'email' }}
                      >
                      {/* optionFilterProp="children"
                      onFocus={onFocus}
                      onBlur={onBlur}
                      onSearch={onSearch}
                      filterOption={(input, option) =>
                        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                      } */}
                      <Option value="email" >邮箱</Option>
                      <Option value="phone" >手机号</Option>
                    </Select>
                    <input ref= "search_input" type= "text" placeholder= {this.state.searchPlaceholder || '邮箱'} onChange= {this.ChangeSearchVal}/>
                    <button className= "search_button" onClick={this.search}><Icon type="search" /></button>
                  </div>
                  <div className= "search_header_right">
                    <button onClick = {this.downloadExcel}>导出</button>
                    <button>删除</button>
                  </div>
                </div>
                <div className= "userinfo_table">
                    <Table bordered rowSelection={this.rowSelection}  columns={columns} dataSource={this.state.searchData || this.state.tableData} pagination={paginationProps} />
                </div>
                {/* <div className= "userinfo_tabledata">
                    当前第1/66页  共666条记录   每页10条
                </div> */}
            </div>
        )
    }
}
export default UserInfo 