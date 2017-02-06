import { browser, element, by } from 'protractor';

export class EmployeePortalPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ep-root h1')).getText();
  }
}
