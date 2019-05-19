pragma solidity 0.5.8;

contract MyContract {
  bytes32 aHash;
  bytes32 bHash;
  bytes32 cHash;

  function setHashes(bytes32 _aHash, bytes32 _bHash, bytes32 _cHash) public {
      aHash = _aHash;
      bHash = _bHash;
      cHash = _cHash;
  }

  function getAHash() public view returns (bytes32) {
      return aHash;
  }

  function getBHash() public view returns (bytes32) {
      return bHash;
  }

  function getCHash() public view returns (bytes32) {
      return cHash;
  }

}