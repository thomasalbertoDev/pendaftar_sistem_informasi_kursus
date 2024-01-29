class Auth {
  setToken = (token: string) => {
    return window.localStorage.setItem('token', token);
  };

  setUsername = (username: string) => {
    return window.localStorage.setItem('username', username);
  };

  setNama = (nama: string) => {
    return window.localStorage.setItem('nama', nama);
  };

  getToken = () => {
    return window.localStorage.getItem('token');
  };

  getUsername = () => {
    return window.localStorage.getItem('username');
  };

  getNama = () => {
    return window.localStorage.getItem('nama');
  };

  removeToken = () => {
    return window.localStorage.removeItem('token');
  };

  removeUsername = () => {
    return window.localStorage.removeItem('username');
  };

  removeNama = () => {
    return window.localStorage.removeItem('nama');
  };
}

export default new Auth();
