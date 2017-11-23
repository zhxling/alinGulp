import LoginModule from './module-objects/login.module';

describe('Login Page:', () => {
  let page;
  beforeEach(() => {
    page = new LoginModule();
    page.load();
  });

  describe('Login form section:', () => {
    it('should login successfully with correct credential', () => {
      // expect(page.ele.loginBtn.isEnabled()).toBe(false);
      page.loginWithCredential('f@f', 'f');
      browser._.expectUrlToMatch(page.urlAfterLogin);
    });

    // it('should display error message with incorrect credential', () => {
    //     expect(page.ele.loginMessage.isPresent()).toBe(false);
    //     page.loginWithCredential('error@error.com', 'f');
    //     expect(page.ele.loginMessage.isDisplayed()).toBe(true);
    //     expect(page.ele.loginMessage.getText())
    //         .toEqual('Incorrect email or password, please try again!');
    // });

    // it('should display error message with locked account', () => {
    //     expect(page.ele.loginMessage.isPresent()).toBe(false);
    //     page.loginWithCredential('lock@lock.com', 'f');
    //     expect(page.ele.loginMessage.isDisplayed()).toBe(true);
    //     expect(page.ele.loginMessage.getText())
    //         .toEqual('Your account is locked!');
    // });

    // it('should automatically log user to dashboard if user has already logged in', () => {
    //     page.loginWithCredential('f@f', 'f');
    //     browser._.expectUrlToMatch(page.urlAfterLogin);
    //     // go back to home page
    //     page.getHeader().title.click();
    //     page.homePage.ele.getStartedBtn.click();
    //     // go to login page will redirect user to dashboard
    //     browser._.expectUrlToMatch(page.urlAfterLogin);
    // });
  });
});
