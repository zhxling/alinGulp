// login module object
class LoginModule extends browser._BasePageObject {
  constructor() {
    super('login');
    this.urlAfterLogin = 'dashboard';
  }

  static _getAllElements() {
    const $page = $('.loginForm');
    return {
      namelInput: $page.element(by.model('loginCtrl.username')),
      passwordInput: $page.element(by.model('loginCtrl.password')),
      loginBtn: $page.element(by.css('[ng-click="loginCtrl.logIn()"]'))
    };
  }

  loginWithCredential(email, password) {
    // this.load();
    this.ele.namelInput.sendKeys(email);
    this.ele.passwordInput.sendKeys(password);
    expect(this.ele.loginBtn.isEnabled()).toBe(true);
    this.ele.loginBtn.click();
  }
}

export default LoginModule;
