// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract ZKVerifier {
    // Events
    event SecretStored(address indexed user, bytes32 hashedSecret);
    event ProofVerified(address indexed user, bool success);
    
    // Storage
    mapping(address => bytes32) private hashedSecrets;
    
    // Store a secret hash
    function storeSecret(bytes32 _hashedSecret) public {
        hashedSecrets[msg.sender] = _hashedSecret;
        emit SecretStored(msg.sender, _hashedSecret);
    }
    
    // Verify a secret
    function verifySecret(uint256 _secret) public view returns (bool) {
        bytes32 hashedInput = keccak256(abi.encodePacked(_secret));
        return hashedSecrets[msg.sender] == hashedInput;
    }
    
    // Check if user has a stored secret
    function hasStoredSecret() public view returns (bool) {
        return hashedSecrets[msg.sender] != bytes32(0);
    }
}
