// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract LW3Token is ERC20 {
    uint256 constant _initial_supply = 100 * (10**18);

    constructor() ERC20("ZOZM Coin", "ZOZM") {
        _mint(msg.sender, _initial_supply);
    }
}
