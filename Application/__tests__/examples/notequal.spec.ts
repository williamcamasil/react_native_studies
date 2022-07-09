describe('Not Method', () => {
  it('uso basico - not', () => {
    expect(1 + 2).not.toEqual(1);
  });
});

describe('Match - teste de expressoes regulares', () => {
  it('uso basico - toMatch', () => {
    expect('developer').toMatch(/\w+/);
    //erro teste esperando letras
    // expect(100).toMatch(/\w+/);
  });
});

export {};
