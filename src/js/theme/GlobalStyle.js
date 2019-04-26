import { createGlobalStyle } from 'styled-components'
import modernNormalize from 'styled-modern-normalize'
import { rgba } from 'polished'

export const GlobalStyle = createGlobalStyle`

/* ### Normalize ### */
${modernNormalize}


/* ### SelectionColors ### */
::selection{
  background: ${props => rgba(props.theme.colors.brand.base, 0.6)};
}
img::selection{
  background: transparent;
}

body{

}
`
