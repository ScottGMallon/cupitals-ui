import { useEffect, useState } from 'react'
import { getPosts } from '../api/strapi'
import { Box, Grid } from '@mui/material'
import PostPreview from './PostPreview'

export function PostArea() {

    const [posts, setPosts] = useState<IPost[] | null>(null)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await getPosts()
                setPosts(data)
            }
            catch (e) {
                alert(e)
                setError('Could not Load Posts')
                setPosts(null)
            }
        }
        getData()
    }, [])

    return (
        <Grid
            item
            xs={12}
            md={8}
            sx={{
                '& .markdown': {
                    py: 3,
                },
            }}
        >
            {error && error}
            {!error && posts &&
                <Box sx={{ maxHeight: '1000px', flexDirection: 'column', gap: '50px', overflowY: 'auto', paddingBottom: '50px' }}>
                    {posts?.map((post) => (
                        <PostPreview post={post} />
                    ))}
                </Box>}
        </Grid>
    );
}