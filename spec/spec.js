const { TextDecoder } = require('util');

describe('text decoding =>', () => {
  it('fails', () => {
    const decoder = new TextDecoder('utf8');
    const buffer = Buffer.from('houplà', 'latin1');
    expect(decoder.decode(buffer)).not.toEqual('houplà');
  });

  it('works with utf8', () => {
    const decoder = new TextDecoder('utf8');
    const buffer = Buffer.from('houplà', 'utf8');
    expect(decoder.decode(buffer)).toEqual('houplà');
  });

  it('works with latin1', () => {
    const decoder = new TextDecoder('latin-1');
    const buffer = Buffer.from('houplà', 'latin-1');
    expect(decoder.decode(buffer)).toEqual('houplà');
  });
});
