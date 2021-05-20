import React, { useEffect } from 'react'
import { useMonsterMintingFarm } from 'hooks/useContract'
import confetti from 'canvas-confetti'
import { Modal, Text, Button, Flex, InjectedModalProps } from 'uikit'
import { delay } from 'lodash'
import useI18n from 'hooks/useI18n'
import { useWallet } from "@binance-chain/bsc-use-wallet";

const showConfetti = () => {
  confetti({
    resize: true,
    particleCount: 200,
    startVelocity: 30,
    gravity: 0.5,
    spread: 350,
    origin: {
      x: 0.5,
      y: 0.3,
    },
  })
}

const NftGiveawayModal: React.FC<InjectedModalProps> = ({ onDismiss }) => {
  const { account }: { account: string } = useWallet()
  const TranslateString = useI18n()
  const monsterMintingFarmContract = useMonsterMintingFarm()

  // This is required because the modal exists outside the Router
  const handleClick = async () => {
    await monsterMintingFarmContract.methods.mintNFT().send({ from: account })
    onDismiss()
  }

  useEffect(() => {
    delay(showConfetti, 100)
  }, [])

  return (
    <Modal title={TranslateString(999, 'Congratulations!')} onDismiss={onDismiss}>
      <Flex flexDirection="column" alignItems="center" justifyContent="center">
        <Text bold color="secondary" fontSize="24px" mb="24px">
          {TranslateString(999, 'You won a collectible!')}
        </Text>
        <Button onClick={handleClick}>{TranslateString(999, 'Claim now')}</Button>
      </Flex>
    </Modal>
  )
}

export default NftGiveawayModal
