pragma solidity >=0.4.25 <0.7.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/SagaxCoin.sol";

contract TestSagaxCoin {

  function testInitialBalanceUsingDeployedContract() public {
    SagaxCoin meta = SagaxCoin(DeployedAddresses.SagaxCoin());

    uint expected = 10000;

    Assert.equal(meta.getBalance(tx.origin), expected, "Owner should have 10000 SagaxCoin initially");
  }

  function testInitialBalanceWithNewSagaxCoin() public {
    SagaxCoin meta = new SagaxCoin();

    uint expected = 10000;

    Assert.equal(meta.getBalance(tx.origin), expected, "Owner should have 10000 SagaxCoin initially");
  }

}
