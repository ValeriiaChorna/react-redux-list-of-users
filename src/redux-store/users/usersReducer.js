import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { usersActions } from './index';
import {
  getUserSelectedFields,
  getUsersSelectedFields,
} from '../../helpers/usersHelpers';

const users = createReducer([], {
  [usersActions.fetchUsersSuccess]: (state, action) =>
    getUsersSelectedFields(action.payload),
});

const user = createReducer(
  {},
  {
    [usersActions.fetchUserSuccess]: (state, action) =>
      getUserSelectedFields(action.payload),
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
