import React from 'react';
import { Table, Input, Button, Icon, Select, Modal } from 'antd';
import './MentionMoney.scss'
const {Option} = Select
const data = [
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
  
class MentionMoney extends React.Component {
    state = {
        searchText: '',
        searchValue:'姓名',
        modal2Visible:false
      };   
      setModal2Visible(modal2Visible) {
        this.setState({ modal2Visible });
      }
        getColumnSearchProps = dataIndex => ({

            filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{padding:"8px"}}>
                    <Input
                    ref={node => {
                        this.searchInput = node;
                    }}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
                    style={{ width: 188, marginBottom: 8, display: 'block' }}
                    />
                    <Button
                    type="primary"
                    onClick={() => this.handleSearch(selectedKeys, confirm)}
                    icon="search"
                    size="small"
                    style={{ width: 90, marginRight: 8 }}
                    >
                        搜索
                    </Button>
                    <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                        重置
                    </Button>
            </div>
            ),
            filterIcon: filtered => (
                <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
            ),
            onFilter: (value, record) =>
            record[dataIndex]
                .toString()
                .toLowerCase()
                .includes(value.toLowerCase()),
            onFilterDropdownVisibleChange: visible => {
                if (visible) {
                    setTimeout(() => this.searchInput.select());
                }
            }
        });
        
        handleSearch = (selectedKeys, confirm) => {
            confirm();
            this.setState({ searchText: selectedKeys[0] });
        };
        
        handleReset = clearFilters => {
            clearFilters();
            this.setState({ searchText: '' });
        };
        
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
                  ...this.getColumnSearchProps('email'),
                },
                {
                  title: '手机号',
                  dataIndex: 'phone',
                  key: 'phone',
                  ...this.getColumnSearchProps('phone'),
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
                      placeholder="Select a person"
                      onChange={this.onChange}
                      defaultValue="姓名"
                      >
                      {/* optionFilterProp="children"
                      onFocus={onFocus}
                      onBlur={onBlur}
                      onSearch={onSearch}
                      filterOption={(input, option) =>
                        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                      } */}
                      <Option value="姓名">姓名</Option>
                      <Option value="手机号">手机号</Option>
                      <Option value="币种名称">币种名称</Option>
                      <Option value="提币个数">提币个数</Option>
                      <Option value="提币状态">提币状态</Option>
                      <Option value="订单号">订单号</Option>
                    </Select>
                    <input type= "text" placeholder= {this.state.searchValue}/>
                    <button className= "search_button"><Icon type="search" /></button>
                  </div>
                  <div className= "search_header_right">
                    <button>导出</button>
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
                    <Table rowSelection={rowSelection}  columns={columns} dataSource={data} pagination={paginationProps} />
                </div>
                <div className= "MentionMoney_tabledata">
                    当前第1/66页  共666条记录   每页10条
                </div>
            </div>
        )
    }
}
export default MentionMoney