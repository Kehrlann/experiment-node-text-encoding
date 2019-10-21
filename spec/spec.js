const { TextDecoder } = require('util');
const iconv = require('iconv-lite');

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
    const decoder = new TextDecoder('latin1');
    const buffer = Buffer.from('houplà', 'latin1');
    expect(decoder.decode(buffer)).toEqual('houplà');
  });
});

describe('iconv-lite =>', () => {
  it('fails', () => {
    const buffer = iconv.encode('houplà', 'latin1');
    expect(iconv.decode(buffer, 'utf8')).not.toEqual('houplà');
  });

  it('works with utf8', () => {
    const buffer = iconv.encode('houplà', 'utf8');
    expect(iconv.decode(buffer, 'utf8')).toEqual('houplà');
  });

  it('works with latin1', () => {
    const buffer = iconv.encode('houplà', 'latin1');
    expect(iconv.decode(buffer, 'latin1')).toEqual('houplà');
  });
});
