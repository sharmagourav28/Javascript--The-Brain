function getUniqueObjects(arr) {
  const seen = new Set();
  return arr.filter((obj) => {
    const objString = JSON.stringify(obj); // Convert the object to a string
    if (seen.has(objString)) {
      return false; // Skip if already seen
    }
    seen.add(objString); // Mark as seen
    return true; // Include in the result
  });
}

// Example usage:
const objectsArray = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 1, name: "Alice" },
  { id: 3, name: "Charlie" },
];

const uniqueObjects = getUniqueObjects(objectsArray);
console.log("Unique objects:", uniqueObjects);
