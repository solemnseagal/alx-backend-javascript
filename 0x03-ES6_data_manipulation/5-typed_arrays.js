/**
 * Creates a buffer array with a given position set to a given value.
 * @param {Number} length - The length of the buffer.
 * @param {Number} position - The position to modify.
 * @param {Number} value - The value to be stored in the position.
 * @returns {buffer}
 */
export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const buffer = new DataView(new ArrayBuffer(length), 0, length);
  buffer.setInt8(position, value);
  return buffer;
}
