import React from 'react';
import UsersContainer from '../components/Users/UsersContainer';
import PageLayout from '../components/Layouts/PageLayout';

function Users() {
  return (
    <PageLayout>
      <h1>Github users</h1>
      <UsersContainer />
    </PageLayout>
  );
}

export default Users;
