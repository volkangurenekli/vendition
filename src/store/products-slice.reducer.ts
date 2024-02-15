import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { Product, ProductsState } from '../types/product.interface';
import { getProducts } from '../service';

const initialState: ProductsState = {
  products: [] as Product[],
  likedProducts: [] as Product[],
  selectedProduct: {} as Product,
  status: 'idle',
  error: null,
};

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (params: { limit: number; skip: number }, thunkAPI) => {
    try {
      const response = await getProducts(params.limit, params.skip);
      return response.data.products;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    updateProduct(state, action: PayloadAction<{ productId: number }>) {
      const { productId } = action.payload;
      const productToUpdate = state.products.find((product) => product.id === productId);
      if (productToUpdate) {
        productToUpdate.isLiked = !productToUpdate.isLiked;
      }
      state.likedProducts = state.products.filter((product) => product.isLiked);
    },

    setSelectedProduct(state, action: PayloadAction<{ product: Product }>) {
      const { product } = action.payload;
      state.selectedProduct = product;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.status = 'succeeded';
        state.products = [...state.products, ...action.payload];
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'An error occurred';
      });
  },
});

export const selectAllProducts = (state: RootState) => state.products.products;

export const selectLikedProducts = (state: RootState) => state.products.likedProducts;

export const selectedProduct = (state: RootState) => state.products.selectedProduct;

export const { updateProduct, setSelectedProduct } = productsSlice.actions;

export default productsSlice.reducer;
