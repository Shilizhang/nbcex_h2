import React from 'react';
import { Table, Input, Button, Icon, Select, Modal } from 'antd';
import ExportJsonExcel from 'js-export-excel';
import './MentionMoney.scss'
const {Option} = Select
  
class MentionMoney extends React.Component {
  state = {
    modal2Visible:false,
    searchText: '',
    searchType:'',
    searchPlaceholder:'',
    tableData: [
      {
        key: '1',
        id: '123123123123132',
        name:"巴啦啦",
        email: '32323232@123.com',
        phone:"12345678901",
        currencyName: 'BTC',
        address:"BTC128658889857",
        time:"2019-1-1",
        num:"123456789",
        orderID:`123456789415`,
        status:"待审核提币"
      },
      {
        key: '2',
        id: '456456456456456',
        name:"小魔仙",
        email: '32323232@123.com',
        phone:"12345678902",
        currencyName: 'BTC',
        address:"BTC128658889857",
        time:"2019-1-1",
        num:"123456789",
        orderID:`123456789415`,
        status:"审核通过处理中"
      },
      {
        key: '3',
        id: '789789789789789',
        name:"巴啦啦",
        email: '32323232@123.com',
        phone:"12345678903",
        currencyName: 'BTC',
        address:"BTC128658889857",
        time:"2019-1-1",
        num:"123456789",
        orderID:`123456789415`,
        status:"已提币"
      },
      {
        key: '4',
        id: '156156156156156',
        name:"大魔仙",
        email: '32323232@123.com',
        phone:"12345678904",
        currencyName: 'BTC',
        address:"BTC128658889857",
        time:"2019-1-1",
        num:"123456789",
        orderID:`123456789415`,
        status:"已提币"
      },
    ],
    searchData: '',
    exportData:[]
  };
  setModal2Visible = (val) =>{
    this.setState({modal2Visible:val})
  }
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
              title: '姓名',
              dataIndex: 'name',
              key: 'name',
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
            title: '提币名称',
            dataIndex: 'currencyName',
            key: 'currencyName',
          },
          {
              title: '转入钱包地址',
              dataIndex: 'address',
              key: 'address',
            },
          {
            title: '提币时间',
            dataIndex: 'time',
            key: 'time',
          },
          {
            title: '提币个数',
            dataIndex: 'num',
            key: 'num',
          },
          {
              title: '交易订单号',
              dataIndex: 'orderID',
              key: 'orderID',
          },
          {
              title: '提币状态',
              dataIndex: 'status',
              key: 'status',
              render: text => {
                  if(text === "待审核提币"){
                      return <span className= "MentionMoney_pending" onClick={() => this.setModal2Visible(true)}>{text}</span>
                  }else {
                      return <span >{text}</span>

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
        <div className= "MentionMoney">
            <div className = "right_title">当前位置: 提取货币</div>

            <div className= "search_header">
              <div className= "search_header_left">
                <Select
                  style={{ width: 200 }}
                  labelInValue
                  onChange={this.onChange}
                  defaultValue= {{ key: 'name' }}
                  >
                  {/* optionFilterProp="children"
                  onFocus={onFocus}
                  onBlur={onBlur}
                  onSearch={onSearch}
                  filterOption={(input, option) =>
                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                  } */}
                  <Option value="email">邮箱</Option>
                  <Option value="name">姓名</Option>
                  <Option value="phone">手机号</Option>
                  <Option value="currencyName">币种名称</Option>
                  <Option value="num">提币个数</Option>
                  <Option value="status">提币状态</Option>
                  <Option value="orderID">订单号</Option>
                </Select>
                <input ref= "search_input" type= "text" placeholder= {this.state.searchPlaceholder || '邮箱'} onChange= {this.ChangeSearchVal}/>
                <button className= "search_button" onClick={this.search}><Icon type="search" /></button>
              </div>
              <div className= "search_header_right">
                <button onClick = {this.downloadExcel}>导出</button>
              </div>
            </div>


            <Modal
              title="待审核提币"
              centered
              visible={this.state.modal2Visible}
              onOk={() => this.setModal2Visible(false)}
              onCancel={() => this.setModal2Visible(false)}
            >
              <p>
                <span>本用户累计BTC提币数量XX个，本次BTC提币数量XX个，今日累计BTC总提币XX个，确认审核通过？</span>
              </p>
            </Modal>

            <div className= "MentionMoney_table">
                    <Table rowSelection={this.rowSelection}  columns={columns} dataSource={this.state.searchData || this.state.tableData} pagination={paginationProps} />
            </div>
            {/* <div className= "MentionMoney_tabledata">
                当前第1/66页  共666条记录   每页10条
            </div> */}
        </div>
    )
  }
}
export default MentionMoney