import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { usersOperations, usersSelectors } from '../../redux-store/users';
import UsersTable from '../Users/UsersTable';
import PageContainer from './PageContainer';

function UsersContainer() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const usersList = useSelector(usersSelectors.getUsers);
  const error = useSelector(usersSelectors.getError);
  const loading = useSelector(usersSelectors.getLoading);

  const [pageSize, setPageSize] = useState(10);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const total = pageSize;
    const startFrom = pageSize * (page - 1);
    dispatch(usersOperations.fetchUsers(total, startFrom));
  }, [dispatch, pageSize, page]);

  const onClickTableRow = (event, record) => {
    event.preventDefault();
    navigate(`../users/${record.login}`);
  };

  const onShowSizeChange = (currentPage, currentPageSize) => {
    if (pageSize !== currentPageSize) {
      setPageSize(currentPageSize);
    }
  };

  const onChangePage = currentPage => {
    if (page !== currentPage) {
      setPage(currentPage);
    }
  };

  return (
    <PageContainer loading={loading} error={error}>
      <UsersTable
        usersList={usersList}
        page={page}
        pageSize={pageSize}
        onRowClick={onClickTableRow}
        onShowSizeChange={onShowSizeChange}
        onChangePage={onChangePage}
      />
    </PageContainer>
  );
}

export default UsersContainer;
