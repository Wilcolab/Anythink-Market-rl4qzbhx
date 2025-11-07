const chainPrompt = `Chain Prompt for Copilot: Creating and Refining toKebabCase

The following three sequential prompts build upon each other to create a robust, well-documented JavaScript function.

Step 1: Initial Implementation

Write a standard JavaScript function named toKebabCase(inputString) that converts a string from camelCase or PascalCase into kebab-case. The core logic should involve finding capital letters and inserting a hyphen before them, then converting the entire string to lowercase.

Step 2: Edge Case Refinement

Modify the function from Step 1 to handle two critical edge cases:

Consecutive Uppercase Letters: Ensure it correctly handles sequences of multiple capital letters (often used for acronyms like URL or ID) by treating them as a single block that should be lowered and separated only if followed by a lowercase letter. For example, userID should become user-id, not user-i-d.

Whitespace Cleanup: Add a check to trim any leading or trailing whitespace from the input string before processing.

Step 3: Professional Documentation

Take the refined function from Step 2 and add complete JSDoc comments above it. The documentation should include:

A concise @description of the function's purpose.

The @param tag defining the inputString (type string).

The @returns tag defining the return type (type string).

A clear @example showing an input like toKebabCase('MyLongURLString') and its expected output ('my-long-url-string').`;
