import { MystockPage } from './app.po';

describe('mystock App', () => {
  let page: MystockPage;

  beforeEach(() => {
    page = new MystockPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
