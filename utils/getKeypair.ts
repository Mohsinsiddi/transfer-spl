import { Keypair } from "@solana/web3.js";
import base58 from "bs58";

const pvtKey = "";
const keypair_secret = Keypair.fromSecretKey(base58.decode(pvtKey));

export default keypair_secret;
