const SajCoin = artifacts.require("SajCoin");

contract('SajCoin', (accounts) => {
  it('should have accounts', async () => {
    assert.equal(Array.isArray(accounts), true, "accounts should be an array");
    assert.equal(!!accounts[0].length, true, "first account is not empty");
  });

  it('should have 1000 SajCoin in the deployer account', async () => {
    const instance = await SajCoin.deployed();
    const balance = await instance.balanceOf(accounts[0]);

    assert.equal(balance.toString(), '1000000000000000000000', "1000000000000000000000 wasn't in the first account");
  });
  it('decimals is 18', async () => {
    const instance = await SajCoin.deployed();
    const res = await instance.decimals();
    assert.equal(res.toString(), '18', "decimals is not 18");
  });
  it('name is SajCoin', async () => {
    const instance = await SajCoin.deployed();
    const res = await instance.name();
    assert.equal(res.toString(), 'SajCoin', "name is wrong");
  });

  it('should have SJC symbol', async () => {
    const instance = await SajCoin.deployed();
    const name = await instance.symbol();
    assert.equal(name, 'SJC', "symbol is not SJC");
  });

  it('should send coin correctly', async () => {
    const instance = await SajCoin.deployed();

    // Setup 2 accounts.
    const accountOne = accounts[0];
    const accountTwo = accounts[1];

    // Get initial balances of first and second account.
    const accountOneStartingBalance = (await instance.balanceOf(accountOne));
    const accountTwoStartingBalance = (await instance.balanceOf(accountTwo));

    // Make transaction from first account to second.
    const amount = web3.utils.toBN(10);
    await instance.transfer(accountTwo, amount);

    // Get balances of first and second account after the transactions.
    const accountOneEndingBalance = (await instance.balanceOf(accountOne));
    const accountTwoEndingBalance = (await instance.balanceOf(accountTwo));

    assert.equal(accountOneEndingBalance.toString(), accountOneStartingBalance.sub(amount).toString() , "Amount wasn't correctly taken from the sender");
    assert.equal(accountTwoEndingBalance.toString(), accountTwoStartingBalance.add(amount).toString(), "Amount wasn't correctly sent to the receiver");
  });
});
