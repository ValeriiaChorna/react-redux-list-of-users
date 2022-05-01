import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Spin } from 'antd';
import { usersOperations, usersSelectors } from '../../redux-store/users';
import UsersTable from './UsersTable';
import { Center } from '../Wrappers/Center';

function UsersContainer() {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const usersList = useSelector(usersSelectors.getUsers);
  const error = useSelector(usersSelectors.getError);
  const loading = useSelector(usersSelectors.getLoading);

  useEffect(() => {
    dispatch(usersOperations.fetchUsers());
  }, [dispatch]);

  const onClickTableRow = (event, record) => {
    event.preventDefault();
    navigate(`../users/${record.login}`, { replace: true });
  };

  return (
    <>
      {!!loading && (
        <Center>
          <Spin size="large" />
        </Center>
      )}
      {!loading && (
        <div>
          <h1>Github users</h1>
          <UsersTable data={usersList} onRowClick={onClickTableRow} />
        </div>
      )}
      {!!error && (
        <Center>
          <div>Error: {error.message}</div>
        </Center>
      )}
    </>
  );
}

export default UsersContainer;
