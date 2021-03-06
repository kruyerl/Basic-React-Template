import { createGlobalStyle } from 'styled-components'
import modernNormalize from 'styled-modern-normalize'
import { rgba } from 'polished'

import FontNeutonTTF from '../../assets/fonts/neuton-regular-webfont.ttf'
import FontNeutonWOFF from '../../assets/fonts/neuton-regular-webfont.woff'
import FontNeutonWOFF2 from '../../assets/fonts/neuton-regular-webfont.woff2'
import FontWorkSansRegularTTF from '../../assets/fonts/worksans-regular-webfont.ttf'
import FontWorkSansRegularWOFF from '../../assets/fonts/worksans-regular-webfont.woff'
import FontWorkSansRegularWOFF2 from '../../assets/fonts/worksans-regular-webfont.woff2'
import FontWorkSansBoldTTF from '../../assets/fonts/worksans-bold-webfont.ttf'
import FontWorkSansBoldWOFF from '../../assets/fonts/worksans-bold-webfont.woff'
import FontWorkSansBoldWOFF2 from '../../assets/fonts/worksans-bold-webfont.woff2'

export const GlobalStyle = createGlobalStyle`


/* ### Normalize ### */

${modernNormalize}

/* ### Fonts ### */

@font-face {
    font-family: 'neuton-regular';
    src: url({ FontNeutonWOFF2}) format('woff2'),
        url({ FontNeutonWOFF }) format('woff'),
        url({ FontNeutonTTF}) format('truetype');
    font-weight: 300;
    font-style: normal;
}
@font-face {
    font-family: 'worksans-bold';
    src: url({ FontWorkSansBoldWOFF2}) format('woff2'),
        url({ FontWorkSansBoldWOFF }) format('woff'),
        url({ FontWorkSansBoldTTF}) format('truetype');
    font-weight: 600;
    font-style: normal;
}
@font-face {
    font-family: 'worksans-regular';
    src: url({ FontWorkSansRegularWOFF2}) format('woff2'),
        url({ FontWorkSansRegularWOFF }) format('woff'),
        url({ FontWorkSansRegularTTF}) format('truetype');
    font-weight: 300;
    font-style: normal;
}

/* ### SelectionColors ### */
::selection{
  background: ${props => rgba(props.theme.colors.brand.light, 0.6)};
}
img::selection{
  background: transparent;
}

body{
 background-color: ${props => props.theme.colors.layout.white};
 font-size: 16px;
}
* {
    box-sizing: border-box;
}

`
