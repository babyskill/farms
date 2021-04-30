import styled from 'styled-components'
import Text from '../Text/Text'
import { tags, sizes, HeadingProps } from './types'

const style = {
  [sizes.MD]: {
    fontSize: '12px',
  },
  [sizes.LG]: {
    fontSize: '18px',
  },
  [sizes.XL]: {
    fontSize: '26px',
  },
  [sizes.XXL]: {
    fontSize: '38px',
  },
}

const Heading = styled(Text).attrs({ bold: true })<HeadingProps>`
  ${({ size }) => style[size || sizes.MD]}
  font-weight:600;
  line-height: 1.1;
`

Heading.defaultProps = {
  as: tags.H2,
}

export default Heading
