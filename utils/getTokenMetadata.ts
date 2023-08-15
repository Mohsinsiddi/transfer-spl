import { ParsedAccountData, PublicKey } from "@solana/web3.js";
import SOLANA_CONNECTION from "../config/connection/solanaConnection";

async function getTokenMetadata(mintAddress: string): Promise<number> {
  const info = await SOLANA_CONNECTION.getParsedAccountInfo(
    new PublicKey(mintAddress)
  );
  const result = (info.value?.data as ParsedAccountData).parsed.info;
  return result;
}

export default getTokenMetadata;
