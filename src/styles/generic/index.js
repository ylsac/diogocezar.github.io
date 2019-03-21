import { createGlobalStyle } from 'styled-components'

const Generic = createGlobalStyle`
	* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
	}
	html{

  }
	body {
    font-family: 'AGaramondPro'!important;
    font-size: 14px!important;
    text-rendering: optimizeLegibility!important;
    -webkit-font-smoothing: antialiased!important;
    background-color: var(--color-purple-dark)!important;
    height: 100%!important;
	}
`

export default Generic
