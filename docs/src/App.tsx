import * as React from "react";
import { useState } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import {
  color,
  ColorProps
} from 'styled-system';
import { cssReset, Box, Rule } from "@tlon/indigo-react";
import { light, dark, inverted, paperDark, paperLight } from "@tlon/indigo-tokens";

import Home from "./pages/Home";
import Catalog from "./pages/Catalog"
import CatalogPage from "./pages/CatalogPage"
import Header from './components/Header'
import FooterHeading from './components/FooterHeading'
import FooterNav from './components/FooterNav'
import Copyright from './components/Copyright'

import { sequence, randomInt } from './utils'
import { useLockBodyScroll, usePrefersDarkMode } from './hooks'

// import Sandbox from './pages/Sandbox'
const Style = createGlobalStyle`
  ${cssReset}
  html {
    background-color: ${p => p.theme.colors.white};
  }

  strong {
    font-weight: 600;
  }
`

// const Style = createGlobalStyle`
//     ${p => p.theme.reset}
//     html {
//       background-color: ${p => p.theme.colors.white};
//       max-height: 100vh;
//       min-height: 100vh;
//       overflow: hidden;
//       position: fixed;
//     }
//
//     body {
//       max-height: 100vh;
//       min-height: 100vh;
//       overflow: hidden;
//       position: fixed;
//     }
// `

type RootProps = ColorProps & {}

const Root = styled.div<RootProps>`
  font-family: ${p => p.theme.fonts.sans};
  line-height: ${p => p.theme.lineHeights.regular};
  ${color};
`;

const generate2dMatrix = (rows:number, cols:number, f:Function) => {
  return sequence(rows).map(_ => sequence(cols).map(_ => f()))
}

const Visibility = styled.div`
  visibility: ${p => p.hidden ? 'hidden' : 'visible'};
  pointer-events: ${p => p.hidden ? 'none' : 'auto'};
  opacity: ${p => p.hidden ? '0' : '1'};
  z-index: ${p => p.hidden ? '-99' : '10'};
`

const MenuOverlay = ({data, actions}) => {
  useLockBodyScroll();
  return (
    <Visibility hidden={false}>
      <Box
        backgroundColor='gray0'
        width='100vw' 
        height='calc(100vh - 64px)' 
        position='relative' 
        top='0px' 
        left='0'>
        
        <Rule />
        <FooterNav />
    
      </Box>
    </Visibility>

  ) 
}

const MenuOverlayController = ({data, actions}) => {
  if (!data.menuOpen) {
    return null
  } else {
    return <MenuOverlay data={data} actions={actions}/>
  }
}

const matrix = generate2dMatrix(64, 64, () => randomInt(0, 19));

const themeOptions = {
  indigo: {
    key: 'indigo',
    title: 'Indigo',
    theme: [light, dark]
  },
  paper: {
    key: 'paper',
    title: 'Paper',
    theme: [paperLight, paperDark]
  }
}

const App = () => {

    const prefersDarkMode = usePrefersDarkMode()
    const [menuOpen, setMenu] = useState(false);
    const [themeKey, setTheme] = useState(themeOptions.indigo.key);
    const [themeTitle, setThemeTitle] = useState(themeOptions.indigo.title);
    const [isDark, setDarkMode] = useState(prefersDarkMode)

    const actions = {
      setTheme:  (themeKey) => {
        setTheme(themeKey)
        setThemeTitle(themeOptions[themeKey].title)
      },
      toggleDarkMode: () => setDarkMode(!isDark),
      darkModeOn: () => setDarkMode(true),
      darkModeOff: () => setDarkMode(false),
      toggleMenu: () => setMenu(!menuOpen),
      closeMenu: () => setMenu(false),
      openMenu: () => setMenu(true),
    }

    const data = {
      themeKey,
      themeOptions,
      themeTitle,
      menuOpen
    }

    return (
      <ThemeProvider
        theme={themeOptions[themeKey].theme[isDark ? 1 : 0] }>
        <Style/>
        <Root>
          <Router>
            <Header actions={actions} data={data} />
            <MenuOverlayController actions={actions} data={data} />
            <div>
              <Route exact path="/" render={() => <Home matrix={matrix}/>} />
              <Route exact path="/catalog" component={Catalog} />
              <Route path={`/catalog/:componentId`} component={CatalogPage}/>
              {
                // <Route exact path="/sandbox" component={Sandbox} />
                // <Route exact path="/buttons" component={Buttons} />
                // <Route exact path='/viewtest' component={ViewTest} />
                // <Route exact path='/editor' component={Editor} />
              }
            </div>
          </Router>
          <Rule />
          <FooterHeading />
          <FooterNav />
          <Copyright />
        </Root>
      </ThemeProvider>
    );
  }

export default App