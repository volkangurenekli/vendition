export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
  isLiked?: boolean;
}

export interface ProductsState {
  products: Product[];
  likedProducts: Product[];
  selectedProduct: Product;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}
