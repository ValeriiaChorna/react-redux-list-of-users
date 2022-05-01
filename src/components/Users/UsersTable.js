import React from 'react';
import styled from 'styled-components';
import { Table } from 'antd';
import 'antd/dist/antd.css';

const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
    align: 'center',
  },
  {
    title: 'Login',
    dataIndex: 'login',
    key: 'login',
    align: 'center',
  },
  {
    title: 'Profile link',
    dataIndex: 'profileLink',
    key: 'profileLink',
    render: text => (
      <a href={text} target="_blank" rel="nofollow noreferrer">
        {text}
      </a>
    ),
  },
  {
    title: 'Avatar preview',
    dataIndex: 'avatarUrl',
    key: 'avatarUrl',
    render: text => (
      <img className="avatar-img" src={text} width={100} height={100} />
    ),
    align: 'center',
  },
];

function UsersTable({
  usersList = [],
  page = 1,
  pageSize = 10,
  total = 100,
  onRowClick = () => {},
  onShowSizeChange = () => {},
  onChangePage = () => {},
}) {
  return (
    <UsersTableStyledContainer>
      <Table
        rowKey="id"
        columns={columns}
        dataSource={usersList}
        onRow={(record, rowIndex) => {
          return {
            onClick: event => {
              onRowClick(event, record, rowIndex);
            },
          };
        }}
        pagination={{ position: ['bottomCenter'] }}
        size="small"
        pagination={{
          total,
          pageSize,
          current: page,
          disabled: !usersList.length,
          showSizeChanger: true,
          onShowSizeChange: onShowSizeChange,
          onChange: onChangePage,
        }}
      />
    </UsersTableStyledContainer>
  );
}

export default UsersTable;

const UsersTableStyledContainer = styled.div`
  width: 100%;

  .avatar-img {
    border-radius: 50%;
  }

  .ant-table-row {
    cursor: pointer;
  }
`;
