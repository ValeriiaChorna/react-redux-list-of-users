import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Button } from 'antd';
import { usersOperations, usersSelectors } from '../../redux-store/users';
import PageContainer from '../Wrappers/PageContainer';
import UserContent from './UserContent';
import routes from '../../routes';

function UserContainer() {
  const dispatch = useDispatch();
  let { userName } = useParams();

  const userData = useSelector(usersSelectors.getUser);
  const error = useSelector(usersSelectors.getError);
  const loading = useSelector(usersSelectors.getLoading);

  useEffect(() => {
    dispatch(usersOperations.fetchUser(userName));
  }, [dispatch]);

  return (
    <PageContainer loading={loading} error={error}>
      <BackButton href={routes.USERS}>Back to users</BackButton>
      <h1>User details: {userName}</h1>
      <UserContent data={userData} />
    </PageContainer>
  );
}

export default UserContainer;

const BackButton = styled(Button)`
  margin-bottom: 40px;
`;
