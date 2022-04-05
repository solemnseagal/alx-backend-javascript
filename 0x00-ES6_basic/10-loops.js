export default function appendToEachArrayValue(array, appendString) {
  for (const [value, idx] of array) {
    array[idx] = appendString + value;
  }

  return array;
}
