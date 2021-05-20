import React, { useEffect, useRef, useState } from 'react'
import { useWallet } from "@binance-chain/bsc-use-wallet";
import { useModal } from 'uikit'
import { useMonsterMintingFarm } from 'hooks/useContract'
import NftGiveawayModal from './NftGiveawayModal'

/**
 * This is represented as a component rather than a hook because we need to keep it
 * inside the Router.
 *
 */
const MonsterMintingClaim: React.FC = () => {
  const hasDisplayedModal = useRef(false)
  const [isClaimable, setIsClaimable] = useState(false)
  const [onPresentGiftModal] = useModal(<NftGiveawayModal />)
  const monsterMintingFarmContract = useMonsterMintingFarm()
  const { account }: { account: string } = useWallet()

  // Check claim status
  useEffect(() => {
    const fetchClaimStatus = async () => {
      const canClaim = await monsterMintingFarmContract.methods.canClaim(account).call()
      const hasClaimed = await monsterMintingFarmContract.methods.hasClaimed(account).call()
      setIsClaimable(canClaim && !hasClaimed)
    }

    // Wait until we have a profile
    if (account) {
      fetchClaimStatus()
    }
  }, [monsterMintingFarmContract, account, setIsClaimable])

  // Check if we need to display the modal
  useEffect(() => {
    if (isClaimable && !hasDisplayedModal.current) {
      onPresentGiftModal()
      hasDisplayedModal.current = true
    }
  }, [isClaimable, hasDisplayedModal, onPresentGiftModal])

  // Reset the check flag when account changes
  useEffect(() => {
    hasDisplayedModal.current = false
  }, [account, hasDisplayedModal])

  return null
}

export default MonsterMintingClaim
