/**
 * Retrieves ids from a list of students.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} stds - The list of students.
 * @returns
 */
export default function getListStudentIds(stds) {
  if (stds instanceof Array) {
    return stds.map((std) => std.id);
  }
  return [];
}
