import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'BNB-GAME LP',
    lpAddresses: {
      97: '',
      56: '0x4ead478d3b7cf35feaec4c7b6f57c8fd51ae69f6',
    },
    tokenSymbol: 'GAME',
    tokenAddresses: {
      97: '',
      56: '0xa26E3cF376c4E7872B169fFC96512DcaCe982A1b',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'BUSD-GAME LP',
    lpAddresses: {
      97: '',
      56: '0xde5947e8af1c8ce8fb8bc4878c4dbb0b429f493c',
    },
    tokenSymbol: 'GAME',
    tokenAddresses: {
      97: '',
      56: '0xa26E3cF376c4E7872B169fFC96512DcaCe982A1b',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
]

export default farms
