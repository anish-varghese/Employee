import { EmployeePortalPage } from './app.po';

describe('employee-portal App', function() {
  let page: EmployeePortalPage;

  beforeEach(() => {
    page = new EmployeePortalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ep works!');
  });
});
