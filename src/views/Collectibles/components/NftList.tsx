import React from 'react'
import orderBy from 'lodash/orderBy'
import { useWallet } from "@binance-chain/bsc-use-wallet";
import nfts from 'config/constants/nfts'
import { useAppDispatch } from 'state'
import { fetchWalletNfts } from 'state/collectibles'
import { useGetCollectibles } from 'state/hooks'
import NftCard from './NftCard'
import NftGrid from './NftGrid'

const NftList = () => {
  const { tokenIds } = useGetCollectibles()
  const dispatch = useAppDispatch()
  const { account }: { account: string } = useWallet()

  const handleRefresh = () => {
    dispatch(fetchWalletNfts(account))
  }

  return (
    <NftGrid>
      {orderBy(nfts, 'sortOrder').map((nft) => {
        const Card = NftCard

        return (
          <div key={nft.name}>
            <Card nft={nft} tokenIds={tokenIds[nft.identifier]} refresh={handleRefresh} />
          </div>
        )
      })}
    </NftGrid>
  )
}

export default NftList
