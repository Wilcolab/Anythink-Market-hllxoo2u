/**
 * Converts a string to camelCase format.
 * 
 * Takes a string with words separated by spaces, hyphens, or underscores
 * and converts it to camelCase where the first word is lowercase and
 * each subsequent word is capitalized with no separators.
 * 
 * @param {string} str - The string to convert
 * @returns {string} The camelCase version of the string
 * 
 * @example
 * toCamelCase("hello world") // returns "helloWorld"
 * toCamelCase("convert-this-string") // returns "convertThisString"
 * toCamelCase("convert_this_string") // returns "convertThisString"
 */
function toCamelCase(str) {
    return str
        .split(/[\s\-_]+/)
        .map((word, index) => 
            index === 0 
                ? word.toLowerCase() 
                : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join("");
}