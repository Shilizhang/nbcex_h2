import React from 'react';
import './TopUp.scss'
import { Table, Input, Button, Icon, Select } from 'antd';
import ExportJsonExcel from 'js-export-excel';
const { Option } = Select;
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
class TopUp extends React.Component {
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
          name: 'BTC',
          address:"BTC128658889857",
          time:"2019-1-1",
          num:"123456789",
          orderID:`123456789415`
        },
        {
          key: '2',
          id: '456456456456456',
          email: '32323232@123.com',
          phone:"12345678902",
          name: 'BTC',
          address:"BTC128658889857",
          time:"2019-1-1",
          num:"123456789",
          orderID:`123456789415`
        },
        {
          key: '3',
          id: '789789789789789',
          email: '32323232@123.com',
          phone:"12345678903",
          name: 'BTC',
          address:"BTC128658889857",
          time:"2019-1-1",
          num:"123456789",
          orderID:`123456789415`
        },
        {
          key: '4',
          id: '156156156156156',
          email: '32323232@123.com',
          phone:"12345678904",
          name: 'BTC',
          address:"BTC128658889857",
          time:"2019-1-1",
          num:"123456789",
          orderID:`123456789415`
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
                  '充币名称': data[i].name,
                  '转入钱包地址': data[i].address,
                  '充币时间': data[i].time,
                  '转入个数': data[i].num,
                  '交易订单号': data[i].orderID,
                }
                dataTable.push(obj);
              }
            }
          }
          option.fileName = '充值管理'
          option.datas=[
            {
              sheetData:dataTable,
              sheetName:'sheet',
              sheetFilter:['身份证号码','邮箱号','手机号码','充币名称','转入钱包地址','充币时间','转入个数','交易订单号'],
              sheetHeader:['身份证号码','邮箱号','手机号码','充币名称','转入钱包地址','充币时间','转入个数','交易订单号'],
            }
          ];
          var toExcel = new ExportJsonExcel(option); 
          toExcel.saveExcel(); 
        }
    render(){
        const columns = [
            {
                title: '序号',
                dataIndex: 'key',
                key: 'key',
            },
            {
              title: '身份证',
              dataIndex: 'id',
              key: 'id',
            },
            {
              title: '邮箱号',
              dataIndex: 'email',
              key: 'email',
            },
            {
              title: '手机号',
              dataIndex: 'phone',
              key: 'phone',
            },
            {
              title: '充币名称',
              dataIndex: 'name',
              key: 'name',
            },
            {
                title: '转入钱包地址',
                dataIndex: 'address',
                key: 'address',
              },
            {
              title: '充币时间',
              dataIndex: 'time',
              key: 'time',
            },
            {
              title: '转入个数',
              dataIndex: 'num',
              key: 'num',
            },
            {
                title: '交易订单号',
                dataIndex: 'orderID',
                key: 'orderID',
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
            <div className= "topup">
                <div className = "right_title">当前位置: 充值管理</div>
                <div className= "search_header">
                  <div className= "search_header_left">
                    <Select
                      labelInValue
                      style={{ width: 200 }}
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
                      <Option value="email">邮箱</Option>
                      <Option value="phone">手机号</Option>
                      {/* <Option value="真实姓名">真实姓名</Option> */}
                      <Option value="name">充币名称</Option>
                      <Option value="address">转入地址</Option>
                      <Option value="time">充币时间</Option>
                    </Select>
                    <input ref= "search_input" type= "text" placeholder= {this.state.searchPlaceholder || '邮箱'} onChange= {this.ChangeSearchVal}/>
                    <button className= "search_button" onClick={this.search}><Icon type="search" /></button>
                  </div>
                  <div className= "search_header_right">
                    <button onClick = {this.downloadExcel}>导出</button>
                  </div>
                </div>

                <div className= "topup_table">
                    <Table rowSelection={this.rowSelection}  columns={columns} dataSource={this.state.searchData || this.state.tableData} pagination={paginationProps} />
                </div>
                {/* <button onClick= {()=>{}}>测试测试测试</button> */}
            </div>
        )
    }
}
export default TopUp 