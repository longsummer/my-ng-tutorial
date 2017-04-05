import { TESTPROJECTPage } from './app.po';

describe('test-project App', () => {
  let page: TESTPROJECTPage;

  beforeEach(() => {
    page = new TESTPROJECTPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
