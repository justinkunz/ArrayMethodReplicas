// This file is for writing styled writing to terminal during tests

const Reset = "\x1b[0m";
const Blink = "\x1b[5m";

const FgRed = "\x1b[31m";
const FgGreen = "\x1b[32m";
const FgYellow = "\x1b[33m";
const FgCyan = "\x1b[36m";

const BgBlack = "\x1b[40m";
const BgRed = "\x1b[41m";
const BgGreen = "\x1b[42m";
const BgYellow = "\x1b[43m";
const BgCyan = "\x1b[46m";

const pass = `  ${BgGreen} PASS ${Reset}   `;
const fail = `  ${BgRed}${Blink} FAIL ${Reset}   `;
const test = `  ${BgCyan} TEST ${Reset} `;
const warn = `  ${BgYellow} WARN ${Reset}   `;

const results = {
  tested: `  ${BgBlack}${FgCyan} TESTED ${Reset}   `,
  passed: `  ${BgBlack}${FgGreen} PASSED ${Reset}   `,
  failed: `  ${BgBlack}${FgRed} FAILED ${Reset}   `,
  warned: `  ${BgBlack}${FgYellow} WARNED ${Reset}   `
};

module.exports = { pass, fail, test, warn, results };
