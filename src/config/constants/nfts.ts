import { Nft, NftSource, NftType } from './types'

export const IPFS_GATEWAY = 'https://gateway.pinata.cloud'

export const nftSources: NftSource = {
  [NftType.GAME]: {
    address: {
      56: '0xBE62b6c4d3eD41Ee9602825d9aEc63D5906A49a1',
      97: '0x1bafDe63eB7ca9a367fe83a814179704158AD284',
    },
    identifierKey: 'image',
  },
}

const Nfts: Nft[] = [
  {
    name: 'Red wyvern',
    description: 'It is a subspecies of the dragon race.\nIn front of its fangs, claws, and flames, humans are nothing more than a piece of paper.',
    images: {
      lg: 'red-wyvern-lg.png',
      md: 'red-wyvern-lg.png',
      sm: 'red-wyvern-lg.png',
      ipfs: 'https://gateway.pinata.cloud/ipfs/Qmc8hLitC1DF6cJoctGcgASrHSDeGx99Sy1XzxQRuod18d/red-wyvern.png',
    },
    sortOrder: 999,
    identifier: 'red-wyvern',
    type: NftType.GAME,
    variationId: 1,
  },
  {
    name: 'Ruined golem',
    description: 'They are the guardians of the ruin.\nEven without their guardians, they continue to faithfully guard their lives today.\nIt is a remnant of a civilization that must have been very prosperous.',
    images: {
      lg: 'ruined-golem-lg.png',
      md: 'ruined-golem-lg.png',
      sm: 'ruined-golem-lg.png',
      ipfs: 'https://gateway.pinata.cloud/ipfs/Qmc8hLitC1DF6cJoctGcgASrHSDeGx99Sy1XzxQRuod18d/ruined-golem.png',
    },
    sortOrder: 999,
    identifier: 'ruined-golem',
    type: NftType.GAME,
    variationId: 2,
  },
  {
    name: 'The graveyard lich',
    description: 'They were the great mages of ancient times, who materialized their own lives to become immortal in order to reach the truth.',
    images: {
      lg: 'the-graveyard-lich-lg.png',
      md: 'the-graveyard-lich-lg.png',
      sm: 'the-graveyard-lich-lg.png',
      ipfs: 'https://gateway.pinata.cloud/ipfs/Qmc8hLitC1DF6cJoctGcgASrHSDeGx99Sy1XzxQRuod18d/the-graveyard-lich.png',
    },
    sortOrder: 999,
    identifier: 'the-graveyard-lich',
    type: NftType.GAME,
    variationId: 3,
  },
]

export default Nfts
