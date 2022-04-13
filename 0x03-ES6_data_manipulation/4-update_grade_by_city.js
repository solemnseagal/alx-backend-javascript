/**
 * Updates the grades of a list of students in a given city.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} students - The list of students.
 * @param {*} city - The city of students.
 * @param {{
 *   studentId: Number,
 *   grade: Number,
 * }[]} nGrades - The new grades to be given to a student.
 * @returns {{id: Number, firstName: String, location: String}[]}
 */
export default function updateStudentGradeByCity(students, city, nGrades) {
  const defaultGrade = { grade: 'N/A' };

  if (students instanceof Array) {
    return students
      .filter((student) => student.location === city)
      .map((student) => ({
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        grade: (nGrades
          .filter((grade) => grade.studentId === student.id)
          .pop() || defaultGrade).grade,
      }));
  }
  return [];
}
