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

  setRole = (role: string) => {
    return window.localStorage.setItem('role', role);
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

  getRole = () => {
    return window.localStorage.getItem('role');
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

  removeRole = () => {
    return window.localStorage.removeItem('role');
  };
}

export default new Auth();
