function breakMe() {
  // Todo: Throw your own error here
  throw { message: "this is an error message" };
}

function main() {
  // Todo: Handle breakMe()'s error with grace
  try {
    breakMe();
  } catch (error) {
    return error;
  }
}
