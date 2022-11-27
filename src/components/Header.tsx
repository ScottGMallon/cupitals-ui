import * as React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import { BurgerMenu } from './BurgerMenu'
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography'
import { AppBar, Box, Drawer, IconButton } from '@mui/material'
import { Link } from 'react-router-dom'
import { SocialNetworks } from './SocialNetworks'
import Settings from './Settings'

interface HeaderProps {
  sections: ReadonlyArray<{
    title: string
    url: string
  }>
  title: string
  window?: () => Window
}

export function Header({ sections, window }: HeaderProps) {

  const theme = useTheme()
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const drawerWidth = 240;
  const navItems = ['About', 'Contact'];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <React.Fragment>
      <Box>
        <AppBar component="nav" position='sticky'>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: 1, borderColor: 'divider', padding: 2, backgroundColor: theme.palette.background.paper, height: '90px' }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' }, color: theme.palette.primary.main }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <SocialNetworks />
            </Box>
            <Link to='/'>
              <Typography sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' }, textAlign: 'center', color: theme.palette.primary.main }}>
                CUPITALS
              </Typography>
            </Link>
            <Settings />
          </Toolbar>
        </AppBar >
        <Box component="nav" position='sticky'>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              bgcolor: 'background.paper',
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            <Box sx={{ textAlign: 'center' }}>
              <BurgerMenu />
            </Box>
          </Drawer>
        </Box>
      </Box>
    </React.Fragment>
  )
}