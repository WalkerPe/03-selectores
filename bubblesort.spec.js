describe("Bubble Sort", function () {
  it("handles an empty array", function () {
    expect(bubbleSort([])).toEqual([]);
  });
  it(`bubble sort puede ordenar el arreglo`, function () {
    expect(bubbleSort([5, 7, 4, 3, 0])).toEqual([0, 3, 4, 5, 7]);
  });
  it(`bubble sort puede ordenar el arreglo con numeros negativos`, function () {
    expect(bubbleSort([5, 7, 4, 3, 0, -5, -1, -8])).toEqual([
      -8,
      -5,
      -1,
      0,
      3,
      4,
      5,
      7,
    ]);
  });
});
