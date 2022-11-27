import { Box, Grid, Paper, Typography } from '@mui/material';
import { useTheme } from '@mui/material'
import SettingsContext from './context/Settings'
import { useContext, useEffect, useState } from 'react'
import { TwitterTimelineEmbed } from 'react-twitter-embed';

interface SidebarProps {
  description: string;
  title: string;
}

type TwitterThemes = 'light' | 'dark'

export function Sidebar(props: SidebarProps) {
  const { description, title } = props;
  const settings = useContext(SettingsContext)
  const { darkTheme } = settings
  const theme = useTheme()
  const [twitterTheme, setTwitterTheme] = useState<TwitterThemes>('light')

  useEffect(() => {
    setTwitterTheme(darkTheme ? 'dark' : 'light')
  }, [settings])

  return (
    <Grid item xs={12} md={4} sx={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
      <Paper elevation={0} sx={{ p: 2, backgroundColor: theme.palette.background.paper }}>
        <Typography sx={{ color: theme.palette.primary.main }} variant="h5" gutterBottom>
          {title}
        </Typography>
        <Typography sx={{ color: theme.palette.secondary.main }}>{description}</Typography>
      </Paper>
      <Box sx={{ flex: 1, overflowY: 'auto' }}>
        {/* <TwitterTimelineEmbed
          theme='light'
          autoHeight
          sourceType="profile"
          screenName="thecupitals"
        /> */}
      </Box>
    </Grid>
  );
}