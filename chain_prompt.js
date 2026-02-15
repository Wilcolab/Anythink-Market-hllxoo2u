/**
 * Converts various string formats (PascalCase, camelCase, snake_case, space-separated)
 * into kebab-case with comprehensive edge case handling.
 * 
 * @param {string} str - The input string to convert
 * @returns {string} - The kebab-case formatted string, or empty string if invalid
 */
const toKebabCase = (str) => {
    // Step 1: Input Validation
    if (typeof str !== 'string') {
        return '';
    }

    // Step 2: Sanitization - trim and remove leading/trailing delimiters
    let result = str.trim().replace(/^[-_\s]+|[-_\s]+$/g, '');

    if (!result) {
        return '';
    }

    // Step 3: Regex Transformations
    // Insert hyphen before uppercase letters (camelCase detection)
    result = result.replace(/([a-z])([A-Z])/g, '$1-$2');

    // Insert hyphen before uppercase followed by lowercase (Acronym handling: XMLParser → XML-Parser)
    result = result.replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2');

    // Insert hyphen before numbers (version2Update → version-2-update)
    result = result.replace(/([a-zA-Z])(\d)/g, '$1-$2');
    result = result.replace(/(\d)([a-zA-Z])/g, '$1-$2');

    // Replace underscores and spaces with hyphens
    result = result.replace(/[_\s]+/g, '-');

    // Collapse multiple consecutive hyphens into a single hyphen
    result = result.replace(/-+/g, '-');

    // Strip out any non-alphanumeric characters except hyphens
    result = result.replace(/[^a-z0-9-]/gi, '');

    // Convert to lowercase
    result = result.toLowerCase();

    return result;
};

// Step 3: Test Suite
const testSuite = {
    'UserActivityLog': {
        input: 'UserActivityLog',
        expected: 'user-activity-log',
        description: 'PascalCase conversion'
    },
    'parseXMLResponse': {
        input: 'parseXMLResponse',
        expected: 'parse-xml-response',
        description: 'camelCase with acronym'
    },
    'double_underscore': {
        input: 'double_underscore',
        expected: 'double-underscore',
        description: 'snake_case with multiple underscores'
    },
    'already-kebab': {
        input: 'already-kebab',
        expected: 'already-kebab',
        description: 'Already in kebab-case'
    },
    'invalidInput': {
        input: 12345,
        expected: '',
        description: 'Non-string input (number)'
    },
    'version2Update': {
        input: 'version2Update',
        expected: 'version-2-update',
        description: 'Mixed letters and numbers'
    },
    'spaceSeparated': {
        input: 'space separated string',
        expected: 'space-separated-string',
        description: 'Space-separated words'
    }
};

// Run tests
console.log('=== toKebabCase Test Suite ===\n');
Object.entries(testSuite).forEach(([key, test]) => {
    const result = toKebabCase(test.input);
    const passed = result === test.expected;
    console.log(`${passed ? '✓' : '✗'} ${test.description}`);
    console.log(`  Input: ${JSON.stringify(test.input)}`);
    console.log(`  Expected: "${test.expected}"`);
    console.log(`  Got: "${result}"\n`);
});