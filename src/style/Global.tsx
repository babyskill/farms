import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from 'uikit'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`

  * {
    font-family: 'Freckle Face', cursive;
    font-family: 'New Tegomin', serif;
    font-family: 'Press Start 2P', cursive; 
 }
  body {
    background-color: ${({ theme }) => theme.colors.background};

    img {
      height: auto;
      max-width: 100%;
    }
  }
  h1, h2, h3 {
    text-shadow: 3px 0px 1px #00beef, -3px 0px 1px #de00ad;
  }
  
  .wip {
    text-shadow: 0 0 6px #00ffff;
  }
`

export default GlobalStyle
