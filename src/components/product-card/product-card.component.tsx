import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material';
import { blue } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Product } from '../../types/product.interface';

const ProductCard: React.FC<{
  product: Product;
  toggleFavoriteStatus: Function;
  handleDetail: Function;
}> = ({ product, toggleFavoriteStatus, handleDetail }) => {
  return (
    <Card sx={{ maxWidth: 300, minHeight: 400 }}>
      <CardHeader
        title={product?.title}
        subheader={product?.brand}
        avatar={<Avatar sx={{ bgcolor: blue[500] }}>{product?.id}</Avatar>}
      />
      <CardMedia component="img" height="194" image={product?.thumbnail} alt={product?.title} />
      <CardContent>
        <Typography
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: '2',
            WebkitBoxOrient: 'vertical',
          }}
          variant="body2"
          color="text.secondary"
        >
          {product?.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Box display="flex" justifyContent="space-between" width="100%">
          <IconButton>
            <FavoriteIcon
              onClick={() => toggleFavoriteStatus(product?.id)}
              color={product?.isLiked ? 'error' : 'disabled'}
            />
          </IconButton>
          <Button variant="outlined" onClick={() => handleDetail(product)}>
            Detail
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
