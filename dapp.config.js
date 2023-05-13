const RPC_URL = process.env.NEXT_PUBLIC_ALCHEMY_RPC_URL

const config = {
  title: 'Dapp',
  description: 'test minting Dapp',
  contractAddress: '0x045934960d73ecA0E790B165f9266177D58E0736',
  maxMintAmount: 10,
  publicSalePrice: 0.06969
}

const onboardOptions = {
  dappId: process.env.NEXT_PUBLIC_DAPP_ID,
  networkId: 5, // Goerli
  darkMode: true,
  walletSelect: {
    description:'Plaese select a wallet',
    wallets: [
      { walletName: 'metamask', preferred: true },
      { walletName: 'coinbase', preferred: true },
      {
        walletName: 'walletLink',
        preferred: true,
        rpcUrl: RPC_URL,
        appName: 'Dapp'
      }
    ]
  },
  walletCheck: [
    { checkName: 'derivationPath' },
    { checkName: 'accounts' },
    { checkName: 'connect' },
    { checkName: 'network' }
  ]
}

export { config, onboardOptions }