/**
 * Retrieves the sum of ids of a list of students.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} stds - The list of students.
 * @returns {Number}
 */
export default function getStudentIdsSum(stds) {
  if (stds instanceof Array) {
    return stds.reduce(
      (prevStd, curStd) => prevStd.id || prevStd + curStd.id,
      0,
    );
  }
  return 0;
}
