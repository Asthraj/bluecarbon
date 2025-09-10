import { ethers } from 'ethers';

export async function connectWallet() {
  return null;
}

export async function mintCredits(contractAddress: string, to: string, amount: number) {
  console.log('Mint credits', { contractAddress, to, amount });
  return { tx: '0xdeadbeef' };
}
