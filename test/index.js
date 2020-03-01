require("../prototypes");
const validate = require("./validate");
const {
  generateRandomArray,
  findReplicatedMethods,
  methodArgs,
  terminalThemes
} = require("./helpers");

/**
 * Handler fn for testing replicated array methods
 */
const testReplicatedMethods = () => {
  const replicaMethods = findReplicatedMethods(); // [] of relicated methods from prototypes file

  const types = ["string", "number", "any", "object", "nested"]; // Types of arrays to test against

  const counts = {
    pass: 0,
    fail: 0,
    warn: 0
  };
  // TESTING RAN FOR EACH REPLICATED METHOD ---
  for (const method of replicaMethods) {
    console.log(`\n${terminalThemes.test}${method.toUpperCase()}\n`);

    // Find Arguments for testing each custom method.
    const argsSet = methodArgs[method] || [];

    // If no argument sets found, warn that method can not be tested
    if (argsSet.length === 0) {
      console.log(
        `${terminalThemes.warn}Method ${method} not included in method argument object.`
      );
      counts.warn++;
    }

    // TESTING AGAINST EACH SET OF ARGUEMENTS DEFINED FOR METHOD ---
    for (args of argsSet) {
      // TESTING AGAINST EACH ARRAY TYPE
      for (type of types) {
        validate(generateRandomArray(type), method, ...args)
          ? counts.pass++
          : counts.fail++;
      }
    }
  }

  const totalTests = counts.pass + counts.fail;

  console.log(
    `

  ${terminalThemes.results.tested}${replicaMethods.length} Methods (${totalTests} Tests)
  ${terminalThemes.results.passed}${counts.pass} Tests Passed
  ${terminalThemes.results.failed}${counts.fail} Tests Failed
  ${terminalThemes.results.warned}${counts.warn} Warnings
    
    `
  );
};

testReplicatedMethods();
