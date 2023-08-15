import { Connection } from "@solana/web3.js";

const QUICKNODE_RPC =
  "https://rpc-devnet.helius.xyz/?api-key=add5710a-df92-4cd9-8e8e-6f37c2e1a6f1";
const SOLANA_CONNECTION = new Connection(QUICKNODE_RPC);

export default SOLANA_CONNECTION;
