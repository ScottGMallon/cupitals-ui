import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPostByID } from '../api/strapi'
import ReactMarkdown from 'markdown-to-jsx'
import { Avatar, Card, CardContent, CardMedia, Container, Divider, useTheme } from '@mui/material'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import { makePhotoURL } from '../utils/photos'
import { Author } from './Author'

function MarkdownListItem(props: any) {
  return <Box component="li" sx={{ mt: 1, typography: 'body1' }} {...props} />;
}

const options = {
  overrides: {
    h1: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: 'h3',
        component: 'h1',
      },
    },
    h2: {
      component: Typography,
      props: { gutterBottom: true, variant: 'h4', component: 'h4' },
    },
    h3: {
      component: Typography,
      props: { gutterBottom: true, variant: 'subtitle1' },
    },
    h4: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: 'caption',
        paragraph: true,
      },
    },
    p: {
      component: Typography,
      props: { paragraph: true },
    },
    a: { component: Link },
    li: {
      component: MarkdownListItem,
    },
  },
};

export function Post() {

  const params = useParams()
  const [post, setPost] = useState<IPost | undefined>(undefined)
  const [error, setError] = useState<string | undefined>(undefined)
  const theme = useTheme()

  useEffect(() => {
    const getData = async () => {
      try {
        if (params.postId) {
          const data = await getPostByID(params.postId)
          setError(undefined)
          setPost(data)
        }
      } catch (e: any) {
        setError(e.toString())
        setPost(undefined)
      }
    }
    getData()
  }, [setPost, setError, useParams, params, getPostByID])

  return (
    <Container maxWidth="md" style={{ paddingBottom: '50px', marginTop: '50px' }}>
      <Box>
        {post &&
          <Card>
            <CardMedia sx={{
              height: '50vmin',
              backgroundPosition: 'top center',
              backgroundSize: 'cover'
            }}
              height='100'
              component="img"
              image={makePhotoURL(post.attributes.image.data.attributes.url)}
              alt={post.attributes.image.data.attributes.alternativeText}
            />
            <CardContent sx={{ display: 'flex', flexDirection: 'column', p: 3, gap: '20px', backgroundColor: theme.palette.background.paper }}>
              <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography align='center' variant='h3' sx={{ mt: 5, pb: 5 }}>{post.attributes.title}</Typography>
                <Typography align='center' variant='subtitle1' sx={{ pb: 5 }}>{post.attributes.description}</Typography>
                <Author post={post} small={false} />
              </Box>
              <Divider variant='inset' sx={{ width: '75%', margin: '0 auto', mt: 5 }} />
              <ReactMarkdown options={options} >{post.attributes.content}</ReactMarkdown>
            </CardContent>
          </Card>
        }
        {error && error}
      </Box>
    </Container>

  )
}