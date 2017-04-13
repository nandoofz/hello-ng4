import { Courseproject1Page } from './app.po';

describe('courseproject1 App', () => {
  let page: Courseproject1Page;

  beforeEach(() => {
    page = new Courseproject1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
