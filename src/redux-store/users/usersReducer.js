import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { usersActions } from './index';

const getSelectedFields = usersArr => {
  if (!usersArr.length) {
    return [];
  }
  return usersArr.map(
    ({ id, login, avatar_url: avatarUrl, html_url: profileLink }) => ({
      id,
      login,
      profileLink,
      avatarUrl,
    }),
  );
};

const users = createReducer([], {
  [usersActions.fetchUsersSuccess]: (state, action) =>
    getSelectedFields(action.payload),
});

const user = createReducer(
  {},
  {
    [usersActions.fetchUserSuccess]: (state, action) => action.payload,
  },
);

const loading = createReducer(false, {
  [usersActions.fetchUsersRequest]: () => true,
  [usersActions.fetchUsersSuccess]: () => false,
  [usersActions.fetchUsersError]: () => false,
  [usersActions.fetchUserRequest]: () => true,
  [usersActions.fetchUserSuccess]: () => false,
  [usersActions.fetchUserError]: () => false,
});

const error = createReducer(null, {
  [usersActions.fetchUsersError]: error => error,
  [usersActions.fetchUserError]: error => error,
});

export default combineReducers({
  users,
  user,
  loading,
  error,
});
