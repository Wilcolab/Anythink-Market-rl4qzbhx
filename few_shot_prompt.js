function toCamelCase(str) {
  return str
    .replace(/[-_\s]+(.)?/g, (_, c) => c ? c.toUpperCase() : '')
    .replace(/^./, c => c.toLowerCase());
}

// Examples:
console.log(toCamelCase('first name'));     // firstName
console.log(toCamelCase('user_id'));        // userId
console.log(toCamelCase('SCREEN_NAME'));    // screenName
console.log(toCamelCase('mobile-number'));  // mobileNumber
