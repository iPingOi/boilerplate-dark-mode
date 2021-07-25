import { ThemeProvider, DefaultTheme } from 'styled-components'
import usePersistedState from '@/utils/usePersistedState'

import dark from '@/styles/themes/dark'
import light from '@/styles/themes/light'

import GlobalStyles from '@/styles/global'

import { Content } from '@/components/Content'
import { Header } from '@/components/Header'

export default function Home() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header toggleTheme={toggleTheme} />
      <Content />
    </ThemeProvider>
  )
}
