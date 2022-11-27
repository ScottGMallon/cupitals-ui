import { useEffect, useState } from 'react'
import { getFeaturedPost } from '../api/strapi'
import { makePhotoURL } from '../utils/photos'
import { Button, Box, Grid, Paper, Typography } from '@mui/material'
import { Link } from 'react-router-dom'


export function FeaturedPost() {

  const [post, setPost] = useState<IPost | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getFeaturedPost()
        setPost(data)
      }
      catch (e) {
        alert(e)
        setError('Could not Load Featured Post')
        setPost(null)
      }
    }
    getData()
  }, [])


  return (
    <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top',
        backgroundImage: `url(${makePhotoURL(post?.attributes.image.data.attributes.url)})`,
      }}
    >
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src={post?.attributes.image.data.attributes.url} alt={post?.attributes.image.data.attributes.alternativeText} />}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.85)',
        }}
      />
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography component="h2" variant="h2" color="inherit" gutterBottom>
              Featured Post
            </Typography>
            <Typography color="inherit" paragraph>
              {post?.attributes.description}
            </Typography>
            <Link to={`post/${post?.id}`} style={{ textDecoration: 'none', color: 'white' }}>
              Read More
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  )
}