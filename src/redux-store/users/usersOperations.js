import axios from 'axios';
import { usersActions } from './index';

axios.defaults.baseURL = 'https://api.github.com';

const fetchUsers =
  (total = 1000, start = 0) =>
  dispatch => {
    dispatch(usersActions.fetchUsersRequest());

    axios
      .get(`/users?per_page=${total}&since=${start}`)
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
