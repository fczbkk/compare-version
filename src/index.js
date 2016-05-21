// any character except digit or dot
// two dots
// dot at the beginning
// dot at the end
const invalid_re = /[^\d\.]|\.\.|^\.|\.$/;


/**
 * Checks whether input is in correct format
 * @param [input]
 * @returns {boolean}
 * @ignore
 */
function isValid (input) {
  return !invalid_re.test(input);
}


/**
 * Converts version input into an array containing parsed numbers.
 * @param {string} input
 * @returns {Array}
 * @ignore
 */
function sanitize (input) {
  return input.split('.').map(n => parseInt(n, 10));
}


/**
 * Compares two version strings. Throws type error on invalid input.
 * @param left
 * @param right
 * @returns {number} 0: both are same, -1: left is higher, 1: right is higher
 */
export default function compareVersion (left, right) {
  if (isValid(left) && isValid(right)) {
    const l = sanitize(left);
    const r = sanitize(right);

    for (let i = 0; i < Math.max(l.length, r.length); i++) {
      if (l[i] > r[i]) {return -1;}
      if (l[i] < r[i]) {return 1;}
    }

    return 0;

  } else {
    throw new TypeError(
      'Compare Version: some of the parameters is missing or invalid'
    );
  }
}
