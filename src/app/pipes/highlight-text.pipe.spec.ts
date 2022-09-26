import { HighlightTextPipe } from './highlight-text.pipe';

describe('HighlightTextPipe', () => {
  it('create an instance', () => {
    const pipe = new HighlightTextPipe();
    expect(pipe).toBeTruthy();
  });

  it('wrap a sample string in a <span>', () => {
    const pipe = new HighlightTextPipe();
    expect(pipe.transform('foobar', 'foo')).toBe('<span class="highlight-text">foo</span>bar')
  });

  it('wrap a uppercase string in a <span>', () => {
    const pipe = new HighlightTextPipe();
    expect(pipe.transform('FOOBAR', 'foo')).toBe('<span class="highlight-text">FOO</span>BAR')
  });

  it('wrap a string with spaces in a <span>', () => {
    const pipe = new HighlightTextPipe();
    expect(pipe.transform('FOO BAR', 'foo')).toBe('<span class="highlight-text">FOO</span> BAR')
  });

  it('wrap mutliple words in a <span>', () => {
    const pipe = new HighlightTextPipe();
    expect(pipe.transform('FOO BAR', 'foo')).toBe('<span class="highlight-text">FOO</span> BAR')
  });
});
