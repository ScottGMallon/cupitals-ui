import { useTheme } from '@mui/material/styles'
import Stack from '@mui/material/Stack'
import Link from '@mui/material/Link'
import GitHubIcon from '@mui/icons-material/GitHub'
import TwitterIcon from '@mui/icons-material/Twitter'
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

export const socials = [
    { name: 'Twitter', icon: TwitterIcon, url: 'https://twitter.com/TheCupitals' },
    { name: 'Donate', icon: VolunteerActivismIcon, url: '#' },
    { name: 'GitHub', icon: GitHubIcon, url: '#' },
]

export const SocialNetworks = () => {

    const theme = useTheme()
    return (
        <Stack direction="row" spacing={1} alignItems="center">
            {socials.map((network) => (
                <Link
                    href={network.url}
                    key={network.name}
                    sx={{
                        mb: 0.5,
                        '& .MuiSvgIcon-root': {
                            color: theme.palette.primary.main,
                        },
                    }}
                >
                    <network.icon fontSize='large' />
                </Link>
            ))}
        </Stack>
    )
}