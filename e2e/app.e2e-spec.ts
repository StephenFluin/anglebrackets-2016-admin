import { AnglebracketsAdminPage } from './app.po';

describe('anglebrackets-admin App', function() {
  let page: AnglebracketsAdminPage;

  beforeEach(() => {
    page = new AnglebracketsAdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
