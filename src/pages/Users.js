import React from 'react';
import styled from 'styled-components';
import UsersContainer from '../components/Users/UsersContainer';

function Users() {
  return (
    <PageLayout>
      <UsersContainer />
    </PageLayout>
  );
}

export default Users;

const PageLayout = styled.div`
  padding: 10px;
`;
