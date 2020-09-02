class Auth {
  constructor() {
    this.authenticated = false;
    this.user = "David";
  }

  login(cb) {
    this.authenticated = true;
    cb()
  }
  logout(cb) {
    this.authenticated = false;
    cb()
  }

  isAuthenticated() {
    return this.authenticated;
  }
}
export default new Auth();
