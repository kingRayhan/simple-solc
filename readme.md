# Simple Solidity Compiler

It's a simple nodejs module which is wrapper around [solc](https://www.npmjs.com/package/solc) that allows you to compile Solidity code and get the `abi` and `bytecode` as JSON.

### Installation

```bash
npm install simple-solc

// or
yarn add simple-solc
```

### Usage

```js
const compiler = require("simple-solc");
const { bytecode, abi } = compiler("Inbox", __dirname + "/Inbox.sol");

console.log(bytecode);
console.log(abi);
```

**Note:** The `__dirname` is the current directory where the script is running.

### Function Parameters

- **contractName** - Contract name
- **fileLocation** - Contract absolute file location

### Returned Values

- **bytecode** - Bytecode of the compiled contract
- **abi** - ABI of the compiled contract

<br />  
<br />

## Development

```bash
npm install
npm run install-peers
```

**Test**

```bash
npm run test
```


### Buy me a cup of coffie
If this helpful to you then please do care to buy a cup of coffie
<a href="https://www.buymeacoffee.com/kingrayhan">
  <img width="545" alt="yellow-button" src="https://user-images.githubusercontent.com/7611746/152309224-34d351dd-9495-4fea-b275-0dad76ca8055.png">
</a>
