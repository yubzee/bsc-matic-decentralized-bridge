pragma solidity ^0.8.0;

interface IToken {
  function mint(address to, uint256 tokenId) external;
  function burn(address owner,uint256 tokenId) external;
}
