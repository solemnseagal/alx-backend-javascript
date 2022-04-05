export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (const [value, idx] of array) {
    newArray[idx] = appendString + value;
  }

  return newArray;
}
