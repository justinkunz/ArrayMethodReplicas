/**
 * Identified Replicated Methods in prototypes
 */
const findRepliactedMethods = () => {
  // Find all [] prototype methods
  const methods = Object.getOwnPropertyNames(Array.prototype);

  return methods
    .filter(m => m.startsWith("_")) // Replicated methods start with underscores
    .map(m => m.substring(1, m.length)); // Remove underscore for testing
};

module.exports = findRepliactedMethods;
