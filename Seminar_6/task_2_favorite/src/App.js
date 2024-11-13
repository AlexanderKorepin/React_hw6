import React from 'react';
import { Grid, Container, Typography } from '@mui/material';
import ProductList from './components/ProductsList';
import FavoritesList from './components/FavoritesList';


const products = [
  { id: 1, name: 'Product 1', description: 'Description of Product 1', price: 10 },
  { id: 2, name: 'Product 2', description: 'Description of Product 2', price: 15 },
  { id: 3, name: 'Product 3', description: 'Description of Product 3', price: 20 }
];

function App() {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Product List
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Typography variant="h5" gutterBottom>
            All Products
          </Typography>
          <ProductList products={products} />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h5" gutterBottom>
            Favorites
          </Typography>
          <FavoritesList />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;