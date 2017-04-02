import { AngularAotContactManagerPage } from './app.po';

describe('angular-aot-contact-manager App', () => {
  let page: AngularAotContactManagerPage;

  beforeEach(() => {
    page = new AngularAotContactManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
