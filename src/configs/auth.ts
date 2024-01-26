class Auth {
  setToken = (token: string) => {
    return window.localStorage.setItem('token', token);
  };

  setUsername = (username: string) => {
    return window.localStorage.setItem('username', username);
  };

  getToken = () => {
    return window.localStorage.getItem('token');
  };

  getUsername = () => {
    return window.localStorage.getItem('username');
  };

  removeToken = () => {
    return window.localStorage.removeItem('token');
  };

  removeUsername = () => {
    return window.localStorage.removeItem('username');
  };
}

export default new Auth();
