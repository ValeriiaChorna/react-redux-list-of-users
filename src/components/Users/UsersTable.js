import React from 'react';
import styled from 'styled-components';
import { Table } from 'antd';
import 'antd/dist/antd.css';
import ExternalLink from '../Elements/ExternalLink';

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
    render: text => <ExternalLink href={text} />,
  },
  {
    title: 'Avatar preview',
    dataIndex: 'avatarUrl',
    key: 'avatarUrl',
    render: text => <AvatarImg src={text} width={100} height={100} />,
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
  const paginationConfig = {
    position: ['bottomCenter'],
    total,
    pageSize,
    current: page,
    disabled: !usersList.length,
    showSizeChanger: true,
    onShowSizeChange: onShowSizeChange,
    onChange: onChangePage,
  };

  const onRow = (record, rowIndex) => {
    return {
      onClick: event => {
        onRowClick(event, record, rowIndex);
      },
    };
  };

  return (
    <UsersTableStyledContainer>
      <Table
        rowKey="id"
        columns={columns}
        dataSource={usersList}
        onRow={onRow}
        size="small"
        pagination={paginationConfig}
      />
    </UsersTableStyledContainer>
  );
}

export default UsersTable;

const UsersTableStyledContainer = styled.div`
  .ant-table-row {
    cursor: pointer;
  }
`;

const AvatarImg = styled.img`
  border-radius: 50%;
`;
