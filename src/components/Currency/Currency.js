import React from 'react';
import { Table, Input, Button, Icon,Select, Switch } from 'antd';
import './Currency.scss'
const { Option } = Select;

class Currency extends React.Component {
    state = {
        searchText: '',
        searchType:'',
        searchPlaceholder:'',
        tableData: [
          {
            key: '1',
            Cname: '比特币',
            Ename: 'BTC',
            Drate:"0.8",
            Mrate:"0.2",
            limit:"100",
            min: '0.5',
            send:0,
            status:1,
          },
          {
            key: '2',
            Cname: '比特币',
            Ename: 'BTC',
            Drate:"0.8",
            Mrate:"0.2",
            limit:"100",
            min: '0.5',
            send:0,
            status:1,
          },
          {
            key: '3',
            Cname: '比特币',
            Ename: 'BTC',
            Drate:"0.8",
            Mrate:"0.2",
            limit:"100",
            min: '0.5',
            send:0,
            status:0,
          },
          {
            key: '4',
            Cname: '比特币',
            Ename: 'BTC',
            Drate:"0.8",
            Mrate:"0.2",
            limit:"100",
            min: '0.5',
            send:0,
            status:1,
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
        let type = this.state.searchType || 'Cname'
        let text = this.state.searchText
        let data = []
        this.state.tableData.map((item)=>{
          if(item[type].indexOf(text) > -1){
            data.push(item)
          }
        })
        this.setState({searchData: data})
      }
    render(){
        const columns = [
            {
                title: '序号',
                dataIndex: 'key',
                key: 'key',
            },
            {
              title: '中文名称',
              dataIndex: 'Cname',
              key: 'Cname',
            },
            {
              title: '英文名称',
              dataIndex: 'Ename',
              key: 'Ename',
            },
            {
              title: '交易费率',
              dataIndex: 'Drate',
              key: 'Drate',
            },
            {
              title: '提笔费率',
              dataIndex: 'Mrate',
              key: 'Mrate',
            },
            {
              title: '单日提币限额',
              dataIndex: 'limit',
              key: 'limit',
            },
            {
              title: '最小提币额度',
              dataIndex: 'min',
              key: 'min',
            },
            {
              title: '注册送币量',
              dataIndex: 'send',
              key: 'send',
            },
            {
              title: '是否可提币',
              dataIndex: 'status',
              key: 'status',
              render: (d)=>{
                if(d){
                    return '是'
                }else {
                    return '否'
                }
              }
            },
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
            <div>
                <div className = "right_title">当前位置: 币种交易参数设置</div>
                <div className= "search_header">
                  <div className= "search_header_left">
                    <Select
                      style={{ width: 200 }}
                      labelInValue
                      placeholder="Select a person"
                      onChange={this.onChange}
                      defaultValue= {{ key: 'Cname' }}
                      >
                      {/* optionFilterProp="children"
                      onFocus={onFocus}
                      onBlur={onBlur}
                      onSearch={onSearch}
                      filterOption={(input, option) =>
                        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                      } */}
                      <Option value="Cname" >中文名称</Option>
                      <Option value="Ename" >英文名称</Option>
                      <Option value="Drate" >交易费率</Option>
                      <Option value="Mrate" >提笔费率</Option>
                    </Select>
                    <input ref= "search_input" type= "text" placeholder= {this.state.searchPlaceholder || '中文名称'} onChange= {this.ChangeSearchVal}/>
                    <button className= "search_button" onClick={this.search}><Icon type="search" /></button>
                  </div>
                </div>
                  <div className= "currency_table">
                    <Table rowSelection={this.rowSelection}  columns={columns} dataSource={this.state.searchData || this.state.tableData} pagination={paginationProps} />
                    {/* <div className= "userinfo_tabledata">
                        当前第1/66页  共666条记录   每页10条
                    </div> */}
                </div>
            </div>
        )
    }
}
export default Currency 