const path = require("path");
const fs = require("fs");
const solc = require("solc");

/**
 * @typedef {Object} CompiledContract
 * @property {string} bytecode - Compiled bytecode
 * @property {string} abi - Contract ABI(interface)
 */

/**
 * It's a simple nodejs module which is wrapper around [solc](https://www.npmjs.com/package/solc) that allows you to compile Solidity code and get the `abi` and `bytecode` as JSON.
 * @param {string} contractName Contract name
 * @param {string} fileLocation Contract absolute file location
 * @returns {CompiledContract}
 */
const compiler = (contractName, fileLocation) => {
  const location = path.resolve(fileLocation);
  const sourceCode = fs.readFileSync(location, "utf8");

  const input = {
    language: "Solidity",
    sources: {
      [fileLocation]: {
        content: sourceCode,
      },
    },
    settings: {
      outputSelection: {
        "*": {
          "*": ["*"],
        },
      },
    },
  };

  const compile = solc.compile(JSON.stringify(input));
  const output = JSON.parse(compile);

  const bytecode =
    output.contracts[fileLocation][contractName].evm.bytecode.object;
  // abi
  const abi = output.contracts[fileLocation][contractName].abi;
  return { bytecode, abi };
};

module.exports = compiler;
