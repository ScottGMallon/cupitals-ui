import { Box, Avatar, Typography } from '@mui/material'
import { makePhotoURL } from '../utils/photos'
import { useTheme } from '@mui/material'

interface IAuthorProps {
    post: IPost
    small: boolean
}

export function Author({ post, small }: IAuthorProps) {

    const theme = useTheme()
    const height = small ? '45px' : '65px'
    const width = small ? '45px' : '65px'
    const alt = post?.attributes?.author ? post.attributes.author : 'Whoops'
    const src = post?.attributes?.authorImage?.data?.attributes?.url ? makePhotoURL(post.attributes.authorImage.data.attributes.url) : '#'

    return (
        <Box sx={{ width: '300px', display: 'flex', alignItems: 'center', gap: '15px', justifyContent: 'center', color: theme.palette.primary.main }}>
            <Avatar sx={{ minWidth: width, minHeight: height }} alt={alt} src={src} />
            <Box sx={{ display: 'flex', flexDirection: 'column', p: '5px', gap: '5px' }}>
                <Typography>Author: {post.attributes.author}</Typography>
                <Typography >Date: 01/01/2022</Typography>
            </Box>
        </Box>
    )
}