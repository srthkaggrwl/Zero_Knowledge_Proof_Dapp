let web3;
let contract;
let userAccount;

// Contract details - to be filled after deployment
const contractABI = [
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "success",
                "type": "bool"
            }
        ],
        "name": "ProofVerified",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bytes32",
                "name": "hashedSecret",
                "type": "bytes32"
            }
        ],
        "name": "SecretStored",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "_hashedSecret",
                "type": "bytes32"
            }
        ],
        "name": "storeSecret",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_secret",
                "type": "uint256"
            }
        ],
        "name": "verifySecret",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [],
        "name": "hasStoredSecret",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    }
]; // You'll add this after contract deployment
const contractAddress = '0x828757a9BfaD8C7BEA49d8459087EaB609F90A88'; // You'll add this after contract deployment

async function init() {
    if (typeof window.ethereum !== 'undefined') {
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            web3 = new Web3(window.ethereum);
            
            const accounts = await web3.eth.getAccounts();
            userAccount = accounts[0];
            document.getElementById('wallet-status').innerText = 
                `Connected: ${userAccount.substring(0,6)}...${userAccount.substring(38)}`;
            
            contract = new web3.eth.Contract(contractABI, contractAddress);
        } catch (error) {
            console.error("Error initializing:", error);
            showStatus("Error connecting to wallet", "error");
        }
    } else {
        showStatus("Please install MetaMask!", "error");
    }
}

async function storeSecret() {
    try {
        const secret = document.getElementById('secretInput').value;
        const hashedSecret = web3.utils.soliditySha3({ type: 'uint256', value: secret });
        
        await contract.methods.storeSecret(hashedSecret)
            .send({ from: userAccount });
        
        showStatus("Secret stored successfully!", "success");
    } catch (error) {
        console.error("Error storing secret:", error);
        showStatus("Error storing secret", "error");
    }
}

async function verifySecret() {
    try {
        const secret = document.getElementById('verifyInput').value;
        const isValid = await contract.methods.verifySecret(secret)
            .call({ from: userAccount });
        
        showStatus(
            isValid ? "Secret verified successfully!" : "Invalid secret",
            isValid ? "success" : "error"
        );
    } catch (error) {
        console.error("Error verifying secret:", error);
        showStatus("Error verifying secret", "error");
    }
}

function showStatus(message, type) {
    const status = document.getElementById('status');
    status.innerText = message;
    status.className = type;
}

// Initialize on load
window.addEventListener('load', init);
