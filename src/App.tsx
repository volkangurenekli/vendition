import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import store from './store/store';
import HomePage from './pages/home/home.page';
import ProductsPage from './pages/products/products.page';
import DetailPage from './pages/detail/detail.page';

const theme = createTheme({});

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/products',
      element: <ProductsPage />,
    },
    {
      path: '/detail',
      element: <DetailPage />,
    },
  ]);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <RouterProvider router={router} />
        <Footer />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
