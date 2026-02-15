/**
 * Case conversion utility functions for converting between various string formats.
 * 
 * This module provides functions to convert strings from multiple formats including:
 * - PascalCase (HelloWorld)
 * - camelCase (helloWorld)
 * - snake_case (hello_world)
 * - kebab-case (hello-world)
 * - dot.case (hello.world)
 * - space-separated strings (hello world)
 * 
 * @module stringCaseConversion
 * @author {string} Author name
 * @version 1.0.0
 */

/**
 * Converts strings from various formats into camelCase.
 * 
 * Handles conversion from PascalCase, snake_case, kebab-case, and space-separated formats.
 * The first word remains lowercase, and subsequent words are capitalized.
 * Multiple consecutive delimiters are treated as a single delimiter.
 * 
 * @function toCamelCase
 * @param {string} str - The input string to convert to camelCase
 * @returns {string} The converted camelCase string. Returns empty string if input is empty or contains only delimiters
 * @throws {TypeError} If the input parameter is not a string
 * 
 * @example
 * toCamelCase('hello_world')           // Returns: 'helloWorld'
 * @example
 * toCamelCase('hello-world')           // Returns: 'helloWorld'
 * @example
 * toCamelCase('HelloWorld')            // Returns: 'helloWorld'
 * @example
 * toCamelCase('hello world')           // Returns: 'helloWorld'
 * @example
 * toCamelCase('version_2_update')      // Returns: 'version2Update'
 * @example
 * toCamelCase('hello---world___example') // Returns: 'helloWorldExample'
 * @example
 * toCamelCase('  hello_world  ')       // Returns: 'helloWorld'
 * @example
 * toCamelCase('')                      // Returns: ''
 * @example
 * toCamelCase('helloWorld')            // Returns: 'helloWorld'
 * 
 * @see toDotCase
 */

/**
 * Converts strings from various formats into dot.case (dot-notation).
 * 
 * Handles conversion from camelCase, PascalCase, snake_case, kebab-case, and space-separated formats.
 * All words are joined with dots and converted to lowercase.
 * Multiple consecutive delimiters are treated as a single delimiter.
 * 
 * @function toDotCase
 * @param {string} str - The input string to convert to dot.case format
 * @returns {string} The converted dot.case string (all lowercase with dots as separators). Returns empty string if input is empty or contains only delimiters
 * @throws {TypeError} If the input parameter is not a string
 * 
 * @example
 * toDotCase('hello_world')             // Returns: 'hello.world'
 * @example
 * toDotCase('helloWorld')              // Returns: 'hello.world'
 * @example
 * toDotCase('HelloWorld')              // Returns: 'hello.world'
 * @example
 * toDotCase('hello-world')             // Returns: 'hello.world'
 * @example
 * toDotCase('hello world')             // Returns: 'hello.world'
 * @example
 * toDotCase('version2Update')          // Returns: 'version2.update'
 * @example
 * toDotCase('hello---world___example') // Returns: 'hello.world.example'
 * @example
 * toDotCase('  hello_world  ')         // Returns: 'hello.world'
 * @example
 * toDotCase('hello.world')             // Returns: 'hello.world'
 * 
 * @see toCamelCase
 */
