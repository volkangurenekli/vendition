import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { ArrowForward, FavoriteBorder } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { Product } from '../../types/product.interface';
import ProductCard from '../../components/product-card/product-card.component';
import Carousel from '../../components/carousel/carousel.component';
import {
  fetchProducts,
  selectAllProducts,
  selectLikedProducts,
  updateProduct,
  setSelectedProduct,
} from '../../store/products-slice.reducer';
import { AppDispatch } from '../../store/store';
import { CAROUSEL_IMAGES, DEFAULT_PRODUCTS_LIMIT, DEFAULT_PRODUCTS_SKIP } from '../../constants';

const ProductsPage: React.FC = () => {
  const limit = DEFAULT_PRODUCTS_LIMIT;
  const [skip, setSkip] = useState<number>(DEFAULT_PRODUCTS_SKIP);
  const [isFilteredByLike, setIsFilteredByLike] = useState<boolean>(false);

  const dispatch: AppDispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  const likedProducts = useSelector(selectLikedProducts);

  const navigate = useNavigate();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => showMore(), []);

  const showMore = () => {
    dispatch(fetchProducts({ limit, skip }));
    setSkip((prev) => prev + limit);
  };

  const toggleFavoriteStatus = (productId: number) => {
    dispatch(updateProduct({ productId }));
  };

  const handleDetail = (product: Product) => {
    dispatch(setSelectedProduct({ product }));
    navigate('/detail');
  };

  const filterProducts = isFilteredByLike ? likedProducts : products;

  return (
    <>
      <Carousel slides={CAROUSEL_IMAGES} />

      <Container maxWidth="xl">
        <Box
          display="flex"
          width="100%"
          justifyContent="space-between"
          alignItems="center"
          py="20px"
        >
          <Box>
            <Typography variant="h6" fontWeight="bold">
              Products
            </Typography>
          </Box>
          <Box display="flex">
            <Box display="flex" alignItems="center">
              <FavoriteBorder fontSize="medium" color="disabled" />
              <Typography mx="16px" variant="h6" fontWeight="bold">
                {likedProducts.length} Item
              </Typography>
            </Box>
            <Box mx="8px">
              <Button
                variant="contained"
                size="large"
                onClick={() => setIsFilteredByLike((prev) => !prev)}
              >
                Show {isFilteredByLike ? 'All' : 'Likes'}
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>

      <Grid container py={2} spacing={2}>
        {filterProducts.map((product: Product) => {
          return (
            <Grid key={product.id} item xs={12} md={6} lg={3} p={1}>
              <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <ProductCard
                  product={product}
                  toggleFavoriteStatus={toggleFavoriteStatus}
                  handleDetail={handleDetail}
                />
              </Box>
            </Grid>
          );
        })}
      </Grid>

      <Box textAlign="center" pb={8}>
        <Button variant="contained" onClick={showMore}>
          Show More
          <ArrowForward />
        </Button>
      </Box>
    </>
  );
};

export default ProductsPage;
