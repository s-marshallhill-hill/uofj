import { UOfJsonPage } from './app.po';

describe('u-of-json App', () => {
  let page: UOfJsonPage;

  beforeEach(() => {
    page = new UOfJsonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
