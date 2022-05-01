import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { usersOperations, usersSelectors } from '../../redux-store/users';
import UsersTable from './UsersTable';

function UsersContainer() {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const usersList = useSelector(usersSelectors.getUsers);
  const error = useSelector(usersSelectors.getError);
  const loading = useSelector(usersSelectors.getLoading);

  useEffect(() => {
    dispatch(usersOperations.fetchUsers());
  }, [dispatch]);

  const onClickTableRow = (event, record, rowIndex) => {
    event.preventDefault();
    navigate(`../users/${record.login}`, { replace: true });
  };

  return (
    <div>
      {!!loading && <div>Loading...</div>}
      {!loading && <UsersTable data={usersList} onRowClick={onClickTableRow} />}
      {!!error && <div>Error: {error.message}</div>}
    </div>
  );
}

export default UsersContainer;
