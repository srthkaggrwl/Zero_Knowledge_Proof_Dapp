Here’s an updated version of the README file, including the instructions to use **Ganache** for testing the Zero Knowledge Proof DApp locally:

---

# Zero Knowledge Proof DApp

This project demonstrates a **Zero Knowledge Proof (ZKP)** decentralized application (DApp) built on the Ethereum blockchain. The application allows users to securely store and verify secrets without revealing them, ensuring privacy and security. Using cryptographic hashing and ZKP principles, users can prove their knowledge of a secret without disclosing the actual secret. This project integrates **MetaMask** for authentication and uses **web3.js** to interact with the Ethereum blockchain from the browser.

## Features
- **Store Secret**: Users can store a hashed version of their secret on the Ethereum blockchain.
- **Verify Secret**: Users can verify their knowledge of the secret without revealing the secret itself.
- **Privacy**: The actual secret is never revealed, maintaining privacy using Zero Knowledge Proofs.
- **Blockchain Integration**: Interacts with the Ethereum blockchain using **web3.js**.
- **MetaMask Authentication**: Users authenticate and interact with the DApp through MetaMask for secure access to the Ethereum network.

## Technologies Used
- **Ethereum**: Blockchain platform for decentralized applications.
- **Zero Knowledge Proof**: Cryptographic method for verifying knowledge without revealing the secret.
- **MetaMask**: A browser extension for interacting with Ethereum.
- **web3.js**: JavaScript library to interact with the Ethereum blockchain.
- **Solidity**: Programming language for writing smart contracts on the Ethereum blockchain.

## How It Works

1. **Storing a Secret**: The user enters a secret number, which is hashed using Ethereum's `keccak256` hashing function. The hashed secret is then stored on the Ethereum blockchain using a smart contract.
2. **Verifying a Secret**: The user provides the secret for verification. The secret is hashed and compared with the stored hash on the blockchain. If they match, the verification is successful without revealing the original secret.
3. **Zero Knowledge Proof**: The key feature of this DApp is that users prove they know the secret without actually disclosing it, ensuring privacy and security.

## Getting Started

### Prerequisites

- **MetaMask**: Install the MetaMask extension in your browser. You can get it from [here](https://metamask.io/).
- **Node.js**: Ensure you have Node.js installed. You can download it from [here](https://nodejs.org/).
- **Truffle**: Install Truffle framework for Ethereum development. Install it globally using the following command:
  ```
  npm install -g truffle
  ```
- **Ganache**: Install Ganache for local Ethereum blockchain testing. You can download it from [here](https://www.trufflesuite.com/ganache).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/srthkaggrwl/Zero_Knowledge_Proof_Dapp.git
   cd Zero_Knowledge_Proof_Dapp
   ```

2. Install the required dependencies:
   ```bash
   npm install
   ```

3. **Set up MetaMask** and connect it to **Ganache** for local testing:
   - Open Ganache and create a new workspace (or use the default).
   - Ensure Ganache is running on your local machine.
   - In MetaMask, configure the network by adding a custom RPC for Ganache using the following details:
     - **Network Name**: Ganache
     - **New RPC URL**: http://127.0.0.1:7545 (or the RPC URL provided by Ganache)
     - **Chain ID**: 1337
     - **Currency Symbol**: ETH

4. **Deploy the Smart Contract**:
   - Compile the smart contract:
     ```bash
     truffle compile
     ```
   - Migrate the contract to the Ganache local blockchain:
     ```bash
     truffle migrate
     ```

5. Start the DApp:
   ```bash
   npm start
   ```

6. Open the app in your browser. The MetaMask wallet will prompt for authorization to connect to the Ganache network.

### Usage

1. **Store a Secret**: Enter a secret number and click the "Store Secret" button. This will hash the secret and store it on the blockchain.
2. **Verify a Secret**: Enter the secret number to verify, and click the "Verify" button. If the secret matches the stored hash, verification will be successful.

## Smart Contract

The smart contract, `ZKVerifier.sol`, is written in Solidity and handles the storage and verification of secrets on the Ethereum blockchain.

### Contract Functions

- **storeSecret(bytes32 _hashedSecret)**: Stores the hashed secret of the user.
- **verifySecret(uint256 _secret)**: Verifies whether the provided secret matches the stored hashed secret.
- **hasStoredSecret()**: Checks whether the user has stored a secret.

## Contributing

If you'd like to contribute to this project, feel free to fork the repository, make changes, and submit a pull request. Please ensure that your code follows the project's coding standards and includes appropriate tests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- The concept of Zero Knowledge Proofs (ZKPs) is a key element in cryptography and blockchain technology.
- **MetaMask** for secure Ethereum interactions in the browser.
- **web3.js** for providing the JavaScript interface to interact with the Ethereum blockchain.
- **Ganache** for providing a local Ethereum blockchain for testing purposes.

## Contact

If you have any questions or issues, feel free to open an issue on the GitHub repository or reach out via email.

---

This updated README now includes instructions for using **Ganache** for local testing. Let me know if you'd like further adjustments!
