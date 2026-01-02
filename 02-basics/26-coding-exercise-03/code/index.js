// Todo: Your solution code goes here
function double(number) {
  return number * 2;
}

function transform(number, func) {
  return func(number);
}

let result = transform(10, double);
alert(result);
