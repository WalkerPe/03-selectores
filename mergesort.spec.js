describe(`Split array function`, function () {
  it(`es capaz de dividir el arreglo en dos partes`, function () {
    expect(split([1, 6, 4, 23, 46, 7, 32, 31])).toEqual([
      [1, 6, 4, 23],
      [46, 7, 32, 31],
    ]);
  });
});

describe("Merge", function () {
  //beforeEach(function () {
  //var primeraMitad = [35, 100];
  //var segundaMitad = [40];
});
it(`es capaz de mergear dos arreglos de uno y dos elementos en un solo arreglo ordenado`, function () {
  expect(merge([35, 100], [40])).toEqual([35, 40, 100]);
});
it("es capaz de mergear dos arreglos ordenados a un solo arreglo ordenado", function () {
  expect(merge([35, 45, 47, 55], [13, 23, 34])).toEqual([
    13,
    23,
    34,
    35,
    45,
    47,
    55,
  ]);
});
