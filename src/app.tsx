import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { Button } from './components/Button'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Meu App</h1>
      <Button />
      <GlobalStyle />
    </ThemeProvider>
  )
}
