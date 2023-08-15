import { Keypair } from "@solana/web3.js";
import base58 from "bs58";

const pvtKey =
  "5g8VMEUd8RpyEBUZHTyhpAZpFu9LUE7CC4VkNLpCgmSQsi6yfzWJ1aSDFtDLq6Bpgo7iu3ftsW33nHFJGUURTbJ9";
const keypair_secret = Keypair.fromSecretKey(base58.decode(pvtKey));

export default keypair_secret;
