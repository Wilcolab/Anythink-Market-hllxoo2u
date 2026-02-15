/**
 * Converts a string to dot.case format
 * Handles snake_case, kebab-case, camelCase, and space-separated strings
 * @param {*} input - The string to convert
 * @returns {string} The dot.case version of the input
 * @throws {TypeError} If input is not a string or is fundamentally invalid
 */
export function toDotCase(input) {
    // Handle null, undefined, or non-string inputs
    if (input === null || input === undefined) {
        return '';
    }

    if (typeof input !== 'string') {
        throw new TypeError(
            `Expected a string, but received ${typeof input}. Input must be a valid string.`
        );
    }

    // Handle empty strings
    if (input.length === 0) {
        return '';
    }

    // Insert spaces before uppercase letters (for camelCase conversion)
    // Then replace delimiters with spaces, and trim
    const normalized = input
        .replace(/([a-z])([A-Z])/g, '$1 $2')
        .replace(/[-_\s]+/g, ' ')
        .trim();

    // Split by spaces and join with dots in lowercase
    return normalized
        .split(/\s+/)
        .filter(word => word.length > 0)
        .join('.')
        .toLowerCase();
}

