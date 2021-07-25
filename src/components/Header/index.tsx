import Head from 'next/head'

import { useContext } from 'react'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'
import { darken } from 'polished'

import * as I from 'react-icons/ri'
import * as S from './styles'

interface Props {
  toggleTheme(): void
}

export const Header = ({ toggleTheme }: Props) => {
  const { title, colors } = useContext(ThemeContext)

  return (
    <S.Container>
      <Head>
        <title>Bloggio - Home</title>
      </Head>
      Boilerplate
      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={<I.RiMoonFill size={18} className="moonIcon" />}
        uncheckedIcon={<I.RiSunFill size={18} className="sunIcon" />}
        offColor={darken(0.2, colors.primary)}
        onColor={darken(0.1, colors.primary)}
        onHandleColor={colors.background}
        offHandleColor={colors.background}
        width={60}
        height={25}
        handleDiameter={27}
        className="switch"
      />
    </S.Container>
  )
}
