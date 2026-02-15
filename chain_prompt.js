/**
 * Converts a string to kebab-case format.
 * 
 * @param {string} input - The string to convert to kebab-case
 * @returns {string} The kebab-case formatted string, or empty string if input is not a string
 * 
 * @example
 * toKebabCase('userProfile') // returns 'user-profile'
 * toKebabCase('USER_PROFILE') // returns 'user-profile'
 * toKebabCase('user profile') // returns 'user-profile'
 * toKebabCase('user--profile') // returns 'user-profile'
 */
export function toKebabCase(input) {
    // GUARD CLAUSE: Check if input is a string
    if (typeof input !== 'string') {
        return '';
    }

    // CAMELCASE HANDLING: Insert hyphen before uppercase letters preceded by lowercase
    let result = input.replace(/([a-z])([A-Z])/g, '$1-$2');

    // SANITIZATION: Replace underscores, spaces, and non-alphanumeric characters with hyphens
    result = result.replace(/[_\s\W]/g, '-');

    // NORMALIZATION: Convert to lowercase
    result = result.toLowerCase();

    // Collapse consecutive hyphens into a single hyphen
    result = result.replace(/-+/g, '-');

    // Remove leading and trailing hyphens
    result = result.replace(/^-+|-+$/g, '');

    return result;
}