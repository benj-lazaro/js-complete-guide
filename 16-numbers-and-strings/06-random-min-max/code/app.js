function randomInBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(randomInBetween(1, 10));
