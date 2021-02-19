pragma solidity ^0.6.2;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/SajCoin.sol";

contract TestSajCoin {

  function testInitialBalanceUsingDeployedContract() public {
    SajCoin meta = SajCoin(DeployedAddresses.SajCoin());

    uint expected = 10000;

    Assert.equal(meta.getBalance(tx.origin), expected, "Owner should have 10000 SagaxCoin initially");
  }

  function testInitialBalanceWithNewSagaxCoin() public {
    SajCoin meta = new SajCoin(1000);

    uint expected = 1000;

    Assert.equal(meta.getBalance(tx.origin), expected, "Owner should have 1000 SagaxCoin initially");
  }

}
