pragma solidity ^0.6.2;

import "@openzeppelin/contracts/presets/ERC20PresetFixedSupply.sol";

contract SajCoin is ERC20PresetFixedSupply {
    constructor(uint256 initialSupply) public ERC20PresetFixedSupply("SajCoin", "SJC", initialSupply, msg.sender) {
    }

}