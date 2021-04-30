import React from 'react'
import { SvgProps } from '../../../components/Svg/types'
import {Heading} from "../../../components/Heading";
import useI18n from "../../../../hooks/useI18n";

interface LogoProps extends SvgProps {
  isDark: boolean
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
const TranslateString = useI18n()
  return (
  <Heading as="h1" size="lg" color="text">
      {TranslateString(576, 'Game Finance')}
  </Heading>
  )
}

export default Logo
