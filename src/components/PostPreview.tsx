import { Link } from 'react-router-dom'
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button, CardActionArea, CardActions, CardHeader } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { makePhotoURL } from '../utils/photos';
import { Author } from './Author';

interface IPostPreview {
    post: IPost
}

export default function PostPreview({ post }: IPostPreview) {
    const theme = useTheme();

    return (
        <Card sx={{ backgroundColor: theme.palette.background.paper, marginBottom: '50px', marginRight: '15px' }}>
            <Link to={`post/${post.id}`} >
                <CardMedia sx={{ height: '50vmin', backgroundPosition: 'top center', backgroundSize: 'cover' }}
                    height='100'
                    component="img"
                    image={makePhotoURL(post.attributes.image.data.attributes.url)}
                    alt={post.attributes.image.data.attributes.alternativeText}
                />
                <CardContent sx={{ display: 'flex', justifyContent: 'space-around', p: 4, flexWrap: 'wrap', gap: '10px' }}>
                    <Box sx={{ width: '350px', textAlign: 'center' }}>
                        <Typography variant="h5" sx={{ color: theme.palette.primary.main }}>
                            {post.attributes.title}
                        </Typography>
                        <Typography variant="subtitle1" sx={{ color: theme.palette.secondary.main }}>
                            {post.attributes.subtitle}
                        </Typography>
                    </Box>
                    <Author post={post} small={true} />
                </CardContent>
            </Link>
        </Card >
    );
}