import React, { useState } from 'react'
import styled from 'styled-components'
import Web3 from 'web3'
import { useWallet } from "@binance-chain/bsc-use-wallet";
import { Button, Input, Modal, Text } from 'uikit'
import { getAddressByType } from 'utils/collectibles'
import { Nft } from 'config/constants/types'
import useI18n from 'hooks/useI18n'
import useToast from 'hooks/useToast'
import { useERC721 } from 'hooks/useContract'
import InfoRow from './InfoRow'

interface TransferNftModalProps {
  nft: Nft
  tokenIds: number[]
  onSuccess: () => any
  onDismiss?: () => void
}

const Value = styled(Text)`
  font-weight: 600;
`

const ModalContent = styled.div`
  margin-bottom: 16px;
`

const Actions = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 8px;
`

const Label = styled.label`
  color: ${({ theme }) => theme.colors.text};
  display: block;
  margin-bottom: 8px;
  margin-top: 24px;
`

const TransferNftModal: React.FC<TransferNftModalProps> = ({ nft, tokenIds, onSuccess, onDismiss }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [value, setValue] = useState('')
  const [error, setError] = useState(null)
  const TranslateString = useI18n()
  const { account }: { account: string } = useWallet()
  const contract = useERC721(getAddressByType(nft.type))
  const { toastSuccess } = useToast()

  const handleConfirm = async () => {
    try {
      const isValidAddress = Web3.utils.isAddress(value)

      if (!isValidAddress) {
        setError(TranslateString(999, 'Please enter a valid wallet address'))
      } else {
        await contract.methods
          .transferFrom(account, value, tokenIds[0])
          .send({ from: account })
          .on('sending', () => {
            setIsLoading(true)
          })
          .on('receipt', () => {
            onDismiss()
            onSuccess()
            toastSuccess('NFT successfully transferred!')
          })
          .on('error', () => {
            console.error(error)
            setError('Unable to transfer NFT')
            setIsLoading(false)
          })
      }
    } catch (err) {
      console.error('Unable to transfer NFT:', err)
    }
  }

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { value: inputValue } = evt.target
    setValue(inputValue)
  }

  return (
    <Modal title={TranslateString(999, 'Transfer NFT')} onDismiss={onDismiss}>
      <ModalContent>
        {error && (
          <Text color="failure" mb="8px">
            {error}
          </Text>
        )}
        <InfoRow>
          <Text>{TranslateString(999, 'Transferring')}:</Text>
          <Value>{`1x "${nft.name}" NFT`}</Value>
        </InfoRow>
        <Label htmlFor="transferAddress">{TranslateString(999, 'Receiving address')}:</Label>
        <Input
          id="transferAddress"
          name="address"
          type="text"
          placeholder={TranslateString(999, 'Paste address')}
          value={value}
          onChange={handleChange}
          isWarning={error}
          disabled={isLoading}
        />
      </ModalContent>
      <Actions>
        <Button variant="secondary" onClick={onDismiss}>
          {TranslateString(999, 'Cancel')}
        </Button>
        <Button onClick={handleConfirm} disabled={!account || isLoading || !value}>
          {TranslateString(999, 'Confirm')}
        </Button>
      </Actions>
    </Modal>
  )
}

export default TransferNftModal
