import React from 'react';
import styled from 'styled-components';
import { Table } from 'antd';
import 'antd/dist/antd.css';

const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Login',
    dataIndex: 'login',
    key: 'login',
  },
  {
    title: 'Profile link',
    dataIndex: 'profileLink',
    key: 'profileLink',
    render: text => (
      <a href={text} target={'_blank'} rel={'nofollow noreferrer'}>
        {text}
      </a>
    ),
  },
  {
    title: 'Avatar preview',
    dataIndex: 'avatarUrl',
    key: 'avatarUrl',
    render: text => <img src={text} width={100} height={100} />,
  },
];

function UsersTable({ data = [], onRowClick = () => {} }) {
  return (
    <UsersTableStyledContainer>
      <Table
        rowKey="id"
        columns={columns}
        dataSource={data}
        onRow={(record, rowIndex) => {
          return {
            onClick: event => {
              onRowClick(event, record, rowIndex);
            },
          };
        }}
      />
    </UsersTableStyledContainer>
  );
}

export default UsersTable;

const UsersTableStyledContainer = styled.div`
  padding: 40px;
`;
