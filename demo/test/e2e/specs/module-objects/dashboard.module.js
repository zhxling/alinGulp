// import LoginModule from './login.module';

// dashboard page object
class DashboardModule extends browser._BasePageObject {
  constructor() {
    super('dashboard');
  }

  static _getAllElements() {
    // const $page = $('.main-view');
    return {

    };
  }

  // overrite load function to support login
  load() {
    super.load();
    // const loginModule = new LoginModule();
    // browser._.expectUrlToMatch(loginModule.url);
    // loginModule.loginWithCredential('f@f', 'f');
    browser._.expectUrlToMatch(this.url);
  }
}

export default DashboardModule;
