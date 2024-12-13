const { Client, PrivateKey, AccountCreateTransaction, AccountBalanceQuery, Hbar, TransferTransaction } = require("@hashgraph/sdk");
require('dotenv').config();

async function environementSetup() {
    // Grab your Hedera testnet account ID and private key form .env file 
    // you can create an account here  to get your keys "https://portal.hedera.com/dashboard"
    const myAccountId = process.env.MY_ACCOUNT_ID;
    const myprivateKey = process.env.MY_PRIVATE_KEY;
    // if there is an error we should throw this error 
    if (!myAccountId || !myprivateKey) {
        throw new Error("Enviroment Variables MY_ACCOUNT_ID and MY_PRIVATE_KEY must be present  ");
    }
    // Create Hedera Testnet clinet 
    const client = Client.forTestnet();
    // Set your Account As the client's Operator 
    client.setOperator(myAccountId, myprivateKey);

    
}
environementSetup();