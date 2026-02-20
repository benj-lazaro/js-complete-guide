function transformToObjects(numberArray) {
  return numberArray.map((number, index, numbers) => {
    const numberObj = { val: number };
    return numberObj;
  });
}

const numbers = [1, 2, 3];
console.log(transformToObjects(numbers));
