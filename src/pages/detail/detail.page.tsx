import { Accordion, AccordionDetails, AccordionSummary, Box, Grid } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { selectedProduct } from '../../store/products-slice.reducer';
import { DetailProductImage } from './detail.page.style';

const DetailPage = () => {
  const product = useSelector(selectedProduct);

  return (
    <Grid container p={2}>
      <Grid item xs={false} sm={1} md={2} lg={3} />
      <Grid item xs={12} sm={10} md={8} lg={6}>
        <DetailProductImage src={product.thumbnail} alt={product.title} />
        <Box mt={2}>
          {Object.entries(product).map(([key, value]) => (
            <Accordion key={key}>
              <AccordionSummary
                style={{ background: '#f3f3f3' }}
                expandIcon={<ExpandMore />}
                aria-controls={`panel-${key}-content`}
                id={`panel-${key}-header`}
              >
                {key
                  .replace(/([A-Z])/g, ' $1')
                  .charAt(0)
                  .toUpperCase() + key.replace(/([A-Z])/g, ' $1').slice(1)}
              </AccordionSummary>
              <AccordionDetails>{value}</AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Grid>
      <Grid item xs={false} sm={1} md={2} lg={3} />
    </Grid>
  );
};

export default DetailPage;
