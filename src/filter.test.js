const filterF = require('./filter.js');

describe('Filter function', () => {
  it('filters two input arrays into three', () => {
    const A = ['foo', 'bar', 'baz', 'bingo', 'bongo', 'bango'];
    const B = ['foo', 'bar', 'baz', 'ping', 'pong', 'foo_again'];

    const eNeo = ['ping', 'pong', 'foo_again'];
    const eGone = ['bingo', 'bongo', 'bango'];
    const eStay = ['foo', 'bar', 'baz'];

    const { neo, gone, stay } = filterF(A, B);

    expect(neo).toEqual(expect.arrayContaining(eNeo));
    expect(gone).toEqual(expect.arrayContaining(eGone));
    expect(stay).toEqual(expect.arrayContaining(eStay));
    expect(eNeo).toEqual(expect.arrayContaining(neo));
    expect(eGone).toEqual(expect.arrayContaining(gone));
    expect(eStay).toEqual(expect.arrayContaining(stay));
  });

  it('handles duplicate stay values in prior', () => {
    const A = ['foo', 'bar', 'baz', 'baz', 'baz', 'bingo', 'bongo', 'bango'];
    const B = ['foo', 'bar', 'baz', 'ping', 'pong', 'foo_again'];

    const eNeo = ['ping', 'pong', 'foo_again'];
    const eGone = ['bingo', 'bongo', 'bango'];
    const eStay = ['foo', 'bar', 'baz'];

    const { neo, gone, stay } = filterF(A, B);

    expect(neo).toEqual(expect.arrayContaining(eNeo));
    expect(gone).toEqual(expect.arrayContaining(eGone));
    expect(stay).toEqual(expect.arrayContaining(eStay));
    expect(eNeo).toEqual(expect.arrayContaining(neo));
    expect(eGone).toEqual(expect.arrayContaining(gone));
    expect(eStay).toEqual(expect.arrayContaining(stay));
  });

  it('handles duplicate stay values in after', () => {
    const A = ['foo', 'bar', 'baz', 'bingo', 'bongo', 'bango'];
    const B = ['foo', 'bar', 'baz', 'baz', 'baz', 'ping', 'pong', 'foo_again'];

    const eNeo = ['ping', 'pong', 'foo_again'];
    const eGone = ['bingo', 'bongo', 'bango'];
    const eStay = ['foo', 'bar', 'baz'];

    const { neo, gone, stay } = filterF(A, B);

    expect(neo).toEqual(expect.arrayContaining(eNeo));
    expect(gone).toEqual(expect.arrayContaining(eGone));
    expect(stay).toEqual(expect.arrayContaining(eStay));
    expect(eNeo).toEqual(expect.arrayContaining(neo));
    expect(eGone).toEqual(expect.arrayContaining(gone));
    expect(eStay).toEqual(expect.arrayContaining(stay));
  });

  it('handles duplicate gone values', () => {
    const A = ['foo', 'bar', 'baz', 'bingo', 'bingo', 'bongo', 'bango'];
    const B = ['foo', 'bar', 'baz', 'ping', 'pong', 'foo_again'];

    const eNeo = ['ping', 'pong', 'foo_again'];
    const eGone = ['bingo', 'bongo', 'bango'];
    const eStay = ['foo', 'bar', 'baz'];

    const { neo, gone, stay } = filterF(A, B);

    expect(neo).toEqual(expect.arrayContaining(eNeo));
    expect(gone).toEqual(expect.arrayContaining(eGone));
    expect(stay).toEqual(expect.arrayContaining(eStay));
    expect(eNeo).toEqual(expect.arrayContaining(neo));
    expect(eGone).toEqual(expect.arrayContaining(gone));
    expect(eStay).toEqual(expect.arrayContaining(stay));
  });

  it('handles duplicate neo values', () => {
    const A = ['foo', 'bar', 'baz', 'bingo', 'bongo', 'bango'];
    const B = ['foo', 'bar', 'baz', 'ping', 'pong', 'pong', 'foo_again'];

    const eNeo = ['ping', 'pong', 'foo_again'];
    const eGone = ['bingo', 'bongo', 'bango'];
    const eStay = ['foo', 'bar', 'baz'];

    const { neo, gone, stay } = filterF(A, B);

    expect(neo).toEqual(expect.arrayContaining(eNeo));
    expect(gone).toEqual(expect.arrayContaining(eGone));
    expect(stay).toEqual(expect.arrayContaining(eStay));
    expect(eNeo).toEqual(expect.arrayContaining(neo));
    expect(eGone).toEqual(expect.arrayContaining(gone));
    expect(eStay).toEqual(expect.arrayContaining(stay));
  });
});
