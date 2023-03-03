/* stats.js */

/**
 * @param {array} grades
 * @param {number} grade
 */
export function addGrade(grades, grade) {
    return grades, grade
}


/**
 * @param {array} grades
 */
export function getNumberOfGrades(grades) {
    return grades.length;
}


/**
 * @param {array} grades
 */
export function getFirstGrade(grades) {
    return grades[0];
}


/**
 * @param {array} grades
 */
export function getLastGrade(grades) {
	return grades[grades.length - 1];
}


/**
 * @param {array} grades
 */
export function getSumOfGrades(grades) {
	let result = grades.reduce(function(total, current) {
        return total + current
      })
   return result
}


/**
 * @param {array} grades
 */
export function getAverageGrade(grades) {
    let result = grades.reduce(function(total, current) {
        return total + current
      })
    return result / grades.length
}


/**
 * @param {array} grades
 */
export function getRaisedGrades(grades) {
	let csv = grades.join(", ")
    return csv
}