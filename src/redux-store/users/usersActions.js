import { createAction } from '@reduxjs/toolkit';

const fetchUsersRequest = createAction('contact/fetchUsersRequest');
const fetchUsersSuccess = createAction('contact/fetchUsersSuccess');
const fetchUsersError = createAction('contact/fetchUsersError');

const fetchUserRequest = createAction('contact/fetchUserRequest');
const fetchUserSuccess = createAction('contact/fetchUserSuccess');
const fetchUserError = createAction('contact/fetchUserError');

export default {
    fetchUsersRequest,
    fetchUsersSuccess,
    fetchUsersError,
    fetchUserRequest,
    fetchUserSuccess,
    fetchUserError
}