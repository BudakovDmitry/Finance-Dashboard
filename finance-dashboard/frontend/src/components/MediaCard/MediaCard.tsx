import { FC } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

interface MediaCardProps {
  title: string;
  description: string;
  image?: string;
  link: string;
}

const MediaCard: FC<MediaCardProps> = ({
  title = '',
  description = '',
  image = '',
  link = ''
}) => {
  return (
    <Card sx={{ maxWidth: 290, height: 250, position: 'relative' }}>
      <CardMedia component="img" height="110" image={image} alt="image" />
      <CardContent sx={{ pb: 0 }}>
        <Typography
          sx={{ fontSize: 14, fontWeight: 'semi-bold' }}
          gutterBottom
          variant="h5"
          component="div"
        >
          {title}
        </Typography>
        <Typography
          sx={{ fontSize: 12 }}
          variant="body2"
          color="text.secondary"
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button sx={{ fontSize: 12 }}>Share</Button> */}
        <Button
          sx={{ fontSize: 12, position: 'absolute', bottom: 10, left: 10 }}
          href={link}
          target="_blank"
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default MediaCard;
