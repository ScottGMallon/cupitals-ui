import React from 'react'
import { Box, Paper, Typography, useTheme } from '@mui/material'
import Grid from '@mui/material/Grid'
import { FeaturedPost } from './FeaturedPost'
import { Link } from 'react-router-dom'
import { PostArea } from './PostArea'
import { Sidebar } from './Sidebar'

type Props = {}

export const Home = (props: Props) => {

    const theme = useTheme()

    const pages = [
        { title: 'Player Analytics', url: '#' },
        { title: 'About', url: '#' },
        { title: 'Contact', url: '#' },
        { title: 'Random Article', url: '#' },
    ]

    const sidebar = {
        title: 'About this Blog',
        description:
            `Hi. My name is Scott. For now, this is just me. I'm a Capitals superfan, an advanced analytics nerd, and a Software Engineer. I bought this domain name 5 minutes after The Capitals won the Stanley Cup in 2018. If you feel like saying hi, my Dad and I have season tickets in sec. 111. Enjoy the hot takes. Comments take place on Twitter!`,
    }

    return (
        <main>
            <Box alignContent='center' sx={{ display: 'flex', justifyContent: 'space-around', overflowX: 'auto', padding: 5 }}>
                {pages.map((section) => (
                    <Link
                        to='#'
                        className='header-links'
                        key={section.title}
                        style={{ flexShrink: 0, textDecoration: 'none', minWidth: '170px', color: theme.palette.primary.main }}
                    >
                        <Typography textAlign={'center'}>
                            {section.title}
                        </Typography>
                    </Link>
                ))}
            </ Box>
            <FeaturedPost />
            <Grid container spacing={5} sx={{ py: 3 }}>
                <PostArea />
                <Sidebar
                    title={sidebar.title}
                    description={sidebar.description}
                />
            </Grid>
        </main>
    )
}