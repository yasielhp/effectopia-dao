import sdk from './1-initialize-sdk.js';
import { ethers } from 'ethers';

const vote = sdk.getVote(
  '0x39AE9Ff63727189387BBB7D8CCEdd662682D2D10'
);
const token = sdk.getToken(
  '0x7324DC5B0a2B0C858b95dfD5c8A5996144535EaF'
);

(async () => {
  try {
    const amount = 420_000;
    const description =
      'Should the DAO mint an additional ' +
      amount +
      ' tokens into the treasury?';
    const executions = [
      {
        toAddress: token.getAddress(),
        nativeTokenValue: 0,
        transactionData: token.encoder.encode('mintTo', [
          vote.getAddress(),
          ethers.utils.parseUnits(amount.toString(), 18),
        ]),
      },
    ];

    await vote.propose(description, executions);

    console.log('✅ Successfully created proposal to mint tokens');
  } catch (error) {
    console.error('failed to create first proposal', error);
    process.exit(1);
  }
})();
