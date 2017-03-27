import { DDCharacterBuilderPage } from './app.po';

describe('dd-character-builder App', () => {
  let page: DDCharacterBuilderPage;

  beforeEach(() => {
    page = new DDCharacterBuilderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
