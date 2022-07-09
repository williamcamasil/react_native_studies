describe('Igualdade', () => {
  it('uso basico - toEqual', () => {
    expect(1 + 2).toEqual(3);
    expect('developer').toEqual('developer');
    expect({name: 'developer'}).toEqual({name: 'developer'});
  });

  //toBe é mais utilizado para comparação de strings e numeros
  it('uso basico - toBe', () => {
    expect(1 + 2).toBe(3);
    expect('developer').toBe('developer');
    //erro de comparação por conta do objeto ter diferentes endereçamentos
    // expect({name: 'developer'}).toBe({name: 'developer'});
  });
});

export {};
