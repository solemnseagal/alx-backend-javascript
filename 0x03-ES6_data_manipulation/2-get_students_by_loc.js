/**
 * Retrieves students in a given location.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} stds - The list of students.
 * @param {String} city - The location.
 * @returns
 */
export default function getStudentsByLocation(stds, city) {
  if (stds instanceof Array) {
    return stds.filter((std) => std.location === city);
  }
  return [];
}
