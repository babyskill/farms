import React, { useState } from 'react'
import { PromiEvent } from 'web3-core'
import { Contract } from 'web3-eth-contract'
import styled from 'styled-components'
import {
  Card,
  CardBody,
  Heading,
  Tag,
  Button,
  ChevronUpIcon,
  ChevronDownIcon,
  Text,
  CardFooter,
  useModal,
} from 'uikit'
import useI18n from 'hooks/useI18n'
import { Nft } from 'config/constants/types'
import InfoRow from '../InfoRow'
import TransferNftModal from '../TransferNftModal'
import ClaimNftModal from '../ClaimNftModal'
import Preview from './Preview'

export interface NftCardProps {
  nft: Nft
  canClaim?: boolean
  tokenIds?: number[]
  onClaim?: () => PromiEvent<Contract>
  refresh: () => void
}

const Header = styled(InfoRow)`
  min-height: 28px;
`

const DetailsButton = styled(Button).attrs({ variant: 'text' })`
  height: auto;
  padding: 16px 24px;

  &:hover:not(:disabled):not(:active) {
    background-color: transparent;
  }

  &:focus:not(:active) {
    box-shadow: none;
  }
`

const InfoBlock = styled.div`
  padding: 24px;
`

const NftCard: React.FC<NftCardProps> = ({ nft, canClaim = false, tokenIds = [], onClaim, refresh }) => {
  const [isOpen, setIsOpen] = useState(false)
  const TranslateString = useI18n()
  const { identifier, name, description } = nft
  const walletOwnsNft = tokenIds.length > 0
  const Icon = isOpen ? ChevronUpIcon : ChevronDownIcon

  const handleClick = async () => {
    setIsOpen(!isOpen)
  }

  const handleSuccess = () => {
    refresh()
  }

  const [onPresentTransferModal] = useModal(
    <TransferNftModal nft={nft} tokenIds={tokenIds} onSuccess={handleSuccess} />,
  )
  const [onPresentClaimModal] = useModal(<ClaimNftModal nft={nft} onSuccess={handleSuccess} onClaim={onClaim} />)

  return (
    <Card isActive={walletOwnsNft}>
      <Preview nft={nft} isOwned={walletOwnsNft} />
      <CardBody>
        <Header>
          <Heading>{name}</Heading>
          {walletOwnsNft && (
            <Tag outline variant="secondary">
              {TranslateString(999, 'In Wallet')}
            </Tag>
          )}
        </Header>
        {canClaim && (
          <Button fullWidth mt="24px" onClick={onPresentClaimModal}>
            {TranslateString(999, 'Claim this NFT')}
          </Button>
        )}
        {walletOwnsNft && (
          <Button fullWidth variant="secondary" mt="24px" onClick={onPresentTransferModal}>
            {TranslateString(999, 'Transfer')}
          </Button>
        )}
      </CardBody>
      <CardFooter p="0">
        <DetailsButton fullWidth endIcon={<Icon width="24px" color="primary" />} onClick={handleClick}>
          {TranslateString(999, 'Details')}
        </DetailsButton>
        {isOpen && (
          <InfoBlock>
            <Text as="p" color="textSubtle" style={{ textAlign: 'center' }}>
              {description}
            </Text>
          </InfoBlock>
        )}
      </CardFooter>
    </Card>
  )
}

export default NftCard
