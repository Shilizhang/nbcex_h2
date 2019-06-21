import React from 'react';
import './TopUp.scss'
import { Table, Input, Button, Icon, Select } from 'antd';
const { Option } = Select;

const data = [
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
class TopUp extends React.Component {
    state = {
        searchText: '',
        searchValue: '邮箱',
      };   

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
    onChange = (value) =>{
      this.setState({
        searchValue:`${value}`
      })
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
              ...this.getColumnSearchProps('email'),
            },
            {
              title: '手机号',
              dataIndex: 'phone',
              key: 'phone',
              ...this.getColumnSearchProps('phone'),
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
                      style={{ width: 200 }}
                      placeholder="Select a person"
                      onChange={this.onChange}
                      defaultValue="邮箱"
                      >
                      {/* optionFilterProp="children"
                      onFocus={onFocus}
                      onBlur={onBlur}
                      onSearch={onSearch}
                      filterOption={(input, option) =>
                        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                      } */}
                      <Option value="邮箱">邮箱</Option>
                      <Option value="手机号">手机号</Option>
                      <Option value="真实姓名">真实姓名</Option>
                      <Option value="充币名称">充币名称</Option>
                      <Option value="转入地址">转入地址</Option>
                      <Option value="充币时间">充币时间</Option>
                    </Select>
                    <input type= "text" placeholder= {this.state.searchValue}/>
                    <button className= "search_button"><Icon type="search" /></button>
                  </div>
                  <div className= "search_header_right">
                    <button>导出</button>
                  </div>
                </div>

                <div className= "topup_table">
                    <Table rowSelection={rowSelection}  columns={columns} dataSource={data} pagination={paginationProps} />
                </div>
                {/* <button onClick= {()=>{}}>测试测试测试</button> */}
            </div>
        )
    }
}
export default TopUp