import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { usersOperations, usersSelectors } from '../../redux-store/users';
import PageContainer from '../Containers/PageContainer';
import UserContent from './UserContent';
import routes from '../../routes';

function UserContainer() {
  const dispatch = useDispatch();
  let { userName } = useParams();
  const navigate = useNavigate();

  const userData = useSelector(usersSelectors.getUser);
  const error = useSelector(usersSelectors.getError);
  const loading = useSelector(usersSelectors.getLoading);

  useEffect(() => {
    dispatch(usersOperations.fetchUser(userName));
  }, [dispatch]);

  const onBack = () => {
    navigate(routes.HOMEPAGE);
  };

  return (
    <PageContainer loading={loading} error={error}>
      <UserContent data={userData} onBack={onBack} />
    </PageContainer>
  );
}

export default UserContainer;
