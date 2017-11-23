// e2e测试的父类,放在全局brower对象里
// base page object that all page objects will inherit
class BasePageObject {
  constructor(url) {
    Object.assign(this, { url });

    this.ele = this._getAllElements();
    this.mainTitle = 'Aio Angular App';
  }

  load() {
    browser._.gotoUrl(this.url);
  }

  static getHeader() {
    const $header = $('.header-view');
    return {
      view: $header,
      title: $header.$('.title'),
      logoutLink: {
        view: $header.$('.logout'),
        link: 'a',
        icon: 'a > i'
      }
    };
  }

  static getFooter() {
    const $footer = $('.footer-view');
    return {
      view: $footer,
      copyright: $footer.$('.copyright')
    };
  }

  static getMenuNav() {
    const $sidebar = $('.menuNav-view');
    // const menuItemClass = '.menu-item';
    return {
      view: $sidebar,
    };
  }
}

// 自定义的一些公共方法,放在全局brower对象里
class E2EHelper {
  static isMobile() {
    return browser.executeScript('return /Android|iPhone/.test(window.navigator.userAgent)');
  }

  static gotoUrl(url) {
    browser.get(`${browser.baseUrl}/${url}`);
  }

  waitForElementToShow(cssSelector) {
    const self = this;
    const ele = $(cssSelector);
    return browser.wait(() => ele.isPresent().then(isPresent => {
      if (!isPresent) {
        return false;
      }
      return ele.isDisplayed()
        .then(isDisplayed => isDisplayed, () =>
          // just retry
          self.waitForElementToShow(cssSelector)
        );
    }), browser.params.timeout);
  }

  static expectUrlToMatch(url) {
    expect(browser.getCurrentUrl()).toMatch(new RegExp(url));
  }
}

// add jasmine自定义Matchers（匹配器）
const customMatchers = {
  toHaveClass: () => ({
    compare: (actual, expected) => ({
      pass: actual.getAttribute('class').then(classes => classes.split(' ').indexOf(expected) !== -1),
      message: `Element does not contain class '${expected}'.`
    })
  })
};

export { BasePageObject, E2EHelper, customMatchers };
