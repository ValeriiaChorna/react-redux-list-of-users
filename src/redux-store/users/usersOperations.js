import axios from 'axios';
import { usersActions } from './index';

axios.defaults.baseURL = 'https://api.github.com';

const fetchUsers = () => dispatch => {
  dispatch(usersActions.fetchUsersRequest());

  axios
    .get(`/users`)
    .then(response => {
      dispatch(usersActions.fetchUsersSuccess(response.data));
    })
    .catch(error => dispatch(usersActions.fetchUsersError(error)));
};

const fetchUser = username => dispatch => {
  dispatch(usersActions.fetchUserRequest());

  axios
    .get(`/users/${username}`)
    .then(response => {
      dispatch(usersActions.fetchUserSuccess(response.data));
    })
    .catch(error => dispatch(usersActions.fetchUserError(error)));
};

export default {
  fetchUsers,
  fetchUser,
};
