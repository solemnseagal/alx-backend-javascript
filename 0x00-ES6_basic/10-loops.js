export default function appendToEachArrayValue(array, appendString) {
    const array = [];
  for (const [value, idx] of array) {
    array[idx] = appendString + value;
  }

  return array;
}
