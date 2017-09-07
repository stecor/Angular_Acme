import { AngularAcmePage } from './app.po';

describe('angular-acme App', () => {
  let page: AngularAcmePage;

  beforeEach(() => {
    page = new AngularAcmePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
