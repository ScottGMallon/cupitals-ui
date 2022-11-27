import { useTheme } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import { Header } from './Header'
import { Home } from './Home'
import { Footer } from './Footer'
import { Post } from './Post'
import { Box, Paper, Typography } from '@mui/material'

export default function Blog() {

  const theme = useTheme()

  const sections = [
    { title: 'Player Profile', url: '#' },
    { title: 'Trades', url: '#' },
    { title: 'The League', url: '#' },
    { title: 'Cup Check', url: '#' },
    { title: 'Prospects', url: '#' },
  ]

  const sidebar = {
    title: 'About this Blog',
    description:
      `Hi. My name is Scott. For now, this is just me. I'm a Capitals superfan, an advanced analytics nerd, and a Software Engineer. I bought this domain name 5 minutes after The Capitals won the Stanley Cup in 2018. If you feel like saying hi, my Dad and I have season tickets in sec. 111. Enjoy the hot takes. Comments take place on Twitter!`,
  }

  return (
    <CssBaseline>
      <BrowserRouter>
        <Paper sx={{ backgroundColor: theme.palette.background.default, display: 'flex', flexDirection: 'column' }}>
          <Header title="The Cupitals" sections={sections} />
          <Container maxWidth="lg">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='post/:postId' element={<Post />} />
            </Routes>
          </Container>
          <Footer
            title="Follow on Social!"
            description="Never Forget 2018!"
          />
        </Paper>
      </BrowserRouter>
    </CssBaseline>
  )
}