describe('Comparar numeros', () => {
  it('uso basico', () => {
    expect(1 + 1).toBeGreaterThan(1);
    expect(1 + 1).toBeGreaterThanOrEqual(1);

    expect(1 + 1).toBeLessThan(3);
    expect(1 + 1).toBeLessThanOrEqual(2);
  });
});

describe('Mocks', () => {
  it('mock function implementation', () => {
    //simulando um uma função com o mock, usado quando se precisa testar funções externas, que não é possivel testar no jest
    const fakeAdd = jest.fn().mockImplementation((_a, _b) => 5);
    expect(fakeAdd(1, 1)).toBe(5);
  });
});

export {};
