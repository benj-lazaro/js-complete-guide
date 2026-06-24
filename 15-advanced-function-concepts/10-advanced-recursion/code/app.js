// Object w/ nested objects
const myself = {
  name: "Max",
  friends: [
    {
      name: "Manuel",
      friends: [
        {
          name: "Chris",
          friends: [
            {
              name: "Harry",
            },
            {
              name: "Amelia",
            },
          ],
        },
      ],
    },
    {
      name: "Julia",
    },
  ],
};

console.log(myself.friends);

function getFriendNames(person) {
  const collectedNames = [];

  if (!person.friends) {
    return [];
  }

  for (const friend of person.friends) {
    collectedNames.push(friend.name);

    // Collected nested property "friends"
    collectedNames.push(...getFriendNames(friend));
  }

  return collectedNames;
}

console.log(getFriendNames(myself));
