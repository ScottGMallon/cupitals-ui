import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { SocialNetworks } from './SocialNetworks';
import { useTheme } from '@mui/material'
import SettingsContext from './context/Settings';
import { useContext } from 'react'

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://TheCupitals.com/">
        The Cupitals
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

interface FooterProps {
  description: string;
  title: string;
}

export function Footer(props: FooterProps) {
  const { description, title } = props;

  const { darkTheme } = useContext(SettingsContext)
  const theme = useTheme()
  const bgColor = theme.palette.background.paper

  return (
    <Box component="footer" sx={{ bgcolor: bgColor, py: 6 }}>
      <Container maxWidth="lg" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '40px' }}>
        <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        <SocialNetworks />
        <Copyright />
      </Container>
    </Box>
  )
}