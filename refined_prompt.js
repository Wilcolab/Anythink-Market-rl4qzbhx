function toCamelCase(str) {
  if (typeof str !== 'string') {
    throw new TypeError('Input must be a string.');
  }
  if (str === '') {
    return '';
  }
  if (!/[-_\s]/.test(str)) {
    // No delimiters, check if already camelCase
    if (str.charAt(0) === str.charAt(0).toLowerCase()) {
      return str; // already camelCase
    } else {
      return str.charAt(0).toLowerCase() + str.slice(1);
    }
  }
  // Has delimiters, process
  const words = str.split(/[-_\s]+/);
  const filtered = words.filter(word => word.length > 0);
  if (filtered.length === 0) {
    return '';
  }
  return filtered[0].toLowerCase() + filtered.slice(1).map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('');
}

// Examples:
console.log(toCamelCase('first_name'));     // firstName
console.log(toCamelCase('SCREEN_NAME'));    // screenName
console.log(toCamelCase('first-name'));     // firstName
console.log(toCamelCase('first name'));     // firstName
console.log(toCamelCase('firstName'));      // firstName (unchanged)
console.log(toCamelCase('FirstName'));      // firstName
console.log(toCamelCase(''));               // ''
console.log(toCamelCase('--__--'));         // ''
// console.log(toCamelCase(false));         // throws TypeError
