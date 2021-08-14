import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    boderRadius: string

    colors: {
      main: string
      secondary: string
    }
  }
}
