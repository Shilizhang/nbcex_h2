import React from 'react';
import { Table, Input, Button, Icon,Select } from 'antd';
import './UserInfo.scss'
const { Option } = Select;
const data = [
    {
      key: '1',
      id: '123123123123132',
      email: '32323232@123.com',
      phone:"12345678901",
      time:"2019-1-1",
      certification:"是",
      name: '123',
      operation:`switch`
    },
    {
      key: '2',
      id: '456456456456456',
      email: '32323232@123.com',
      phone:"12345678902",
      time:"2019-1-1",
      certification:"是",
      name: '456',
      operation:`switch`
    },
    {
      key: '3',
      id: '789789789789789',
      email: '32323232@123.com',
      phone:"12345678903",
      time:"2019-1-1",
      certification:"是",
      name: '789',
      operation:`switch`
    },
    {
      key: '4',
      id: '156156156156156',
      email: '32323232@123.com',
      phone:"12345678904",
      time:"2019-1-1",
      certification:"是",
      name: '101',
      operation:`switch`
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
class UserInfo extends React.Component {
    state = {
        searchText: '',
        searchValue:'邮箱',
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
        console.log(selectedKeys)
        console.log(confirm)
        // confirm();
        this.setState({ searchText: selectedKeys[0] });
      };
    
      handleReset = clearFilters => {
        clearFilters();
        this.setState({ searchText: '' });
      };
    
      onChange = (value)=>{
        this.setState({
          searchValue:`${value}`
        })
      }
      search = (id,val)=>{
        this.handleSearch(["123123"])
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
              ...this.getColumnSearchProps('email'),
            },
            {
              title: '手机号码',
              dataIndex: 'phone',
              key: 'phone',
              ...this.getColumnSearchProps('phone'),
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
                    </Select>
                    <input ref= "search_input" type= "text" placeholder= {this.state.searchValue}/>
                    <button className= "search_button" onClick={()=>{this.search("phone","123123")}}><Icon type="search" /></button>
                  </div>
                  <div className= "search_header_right">
                    <button>导出</button>
                    <button>删除</button>
                  </div>
                </div>
                <div className= "userinfo_table">
                    <Table rowSelection={rowSelection}  columns={columns} dataSource={data} pagination={paginationProps} />
                </div>
                {/* <div className= "userinfo_tabledata">
                    当前第1/66页  共666条记录   每页10条
                </div> */}
            </div>
        )
    }
}
export default UserInfo 