export const initUserDataState = {
  id: null,
  login: '',
  avatarUrl: '',
  profileLink: '',
  name: '',
  followers: null,
  following: null,
  company: '',
  email: '',
  location: null,
  blog: '',
  bio: '',
  createdAt: '',
};

export function getUsersSelectedFields(usersArr = []) {
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
}

export function getUserSelectedFields(userObj = {}) {
  if (!Object.keys(userObj).length) {
    return initUserDataState;
  }
  return {
    id: userObj.id || null,
    login: userObj.login || '',
    avatarUrl: userObj.avatar_url || '',
    profileLink: userObj.html_url || '',
    name: userObj.name || '',
    followers: userObj.followers || null,
    following: userObj.following || null,
    company: userObj.company || '',
    email: userObj.email || '',
    location: userObj.location || null,
    blog: userObj.blog || '',
    bio: userObj.blog || '',
    createdAt: userObj.created_at || '',
  };
}

export function getDateFromString(dateStr = '') {
  let result = new Date(dateStr);
  result = result.toLocaleDateString();
  return result;
}
