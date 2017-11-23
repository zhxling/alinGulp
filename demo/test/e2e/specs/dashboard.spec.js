import DashboardModule from './module-objects/dashboard.module';

describe('Dashboard Page:', () => {
  let page;
  beforeEach(() => {
    page = new DashboardModule();
    page.load();
  });

  describe('Banner section:', () => {
    it('should have correct banner text', () => {

      expect(element(by.css('[class="text"]')).getText()).toEqual('text')
    });
  });
});
