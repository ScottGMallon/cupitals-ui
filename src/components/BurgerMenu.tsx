import { Typography, useTheme } from '@mui/material'
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Settings from './Settings'
import { socials } from './SocialNetworks'
import Link from '@mui/material/Link'

type Props = {}

export const BurgerMenu = (props: Props) => {

    const theme = useTheme()

    return (
        <Box sx={{ px: 2, width: '100%', maxWidth: 360, bgcolor: 'background.paper', color: theme.palette.primary.main }}>
            <nav aria-label="socials" >
                <Box sx={{ pl: 1.5, display: 'flex', flexDirection: 'column' }}>
                    {socials.map((social) => (
                        <Box key={social.name} sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <Link
                                href={social.url}
                                key={social.name}
                                sx={{
                                    mb: 0.5,
                                    '& .MuiSvgIcon-root': {
                                        color: theme.palette.primary.main,
                                    },
                                }}
                            >
                                <social.icon fontSize='large' />
                            </Link>
                            <Typography>{social.name}</Typography>
                        </Box>
                    ))}
                </Box>
            </nav>
            <Divider />
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', py: 2 }}>
                <Settings />
                <Typography>Settings</Typography>
            </Box>
            <Divider />
        </Box >
    )
}