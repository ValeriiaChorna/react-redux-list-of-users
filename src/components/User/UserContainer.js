import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Button, Spin } from 'antd';
import { usersOperations, usersSelectors } from '../../redux-store/users';
import UserContent from './UserContent';
import { Center } from '../Wrappers/Center';
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
    <>
      {!!loading && (
        <Center>
          <Spin size="large" />
        </Center>
      )}
      {!loading && (
        <div>
          <BackButton href={routes.USERS}>Back to users</BackButton>
          <h1>User details</h1>
          <UserContent data={userData} />
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

export default UserContainer;

const BackButton = styled(Button)`
  margin-bottom: 40px;
`;
