import './App.css';
import Main from './components/Main'
import { lightPalette, darkPalette, darkComponents } from './theme'
import { ThemeProvider, createTheme } from '@mui/material'
import { useContext } from 'react'
import SettingsContext from './components/context/Settings';

function App() {

  const { darkTheme, sansSerif, largeText } = useContext(SettingsContext)
  const palette = darkTheme ? darkPalette : lightPalette
  const components = darkTheme ? darkComponents : {}
  const fontFamily = sansSerif ? ['Roboto', 'sans-serif'] : ['Roboto Serif', 'serif']

  const theme = createTheme({
    palette: {
      mode: darkTheme ? 'dark' : 'light',
      ...palette
    },
    ...components,
    typography: {
      fontSize: largeText ? 19 : 15,
      fontFamily: fontFamily.join(','),
      h4: {
        paddingTop: '70px',
        paddingBottom: '20px'
      },
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  );
}

export default App;
