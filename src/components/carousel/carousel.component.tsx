import React, { useCallback, useEffect, useState } from 'react';
import { RadioButtonChecked, RadioButtonUnchecked } from '@mui/icons-material';
import { Box } from '@mui/material';
import { CarouselContent, CarouselImage } from './carousel.component.style';

const Carousel: React.FC<{ slides: string[] }> = ({ slides }) => {
  const [currentItem, setCurrentItem] = useState<number>(0);
  const slidesLength = slides.length;

  const rightHandle = useCallback(() => {
    setCurrentItem(currentItem + 1 > slidesLength - 1 ? 0 : currentItem + 1);
  }, [currentItem, slidesLength]);

  useEffect(() => {
    const interval = setTimeout(() => rightHandle(), 10000);
    return () => clearTimeout(interval);
  }, [rightHandle]);

  return (
    <Box position="relative" width="100%">
      {slides.map(
        (slide: string, index: number) =>
          currentItem === index && (
            <CarouselImage key={index} src={slide} alt="slide" className="item" />
          ),
      )}

      <CarouselContent>
        <Box
          display="flex"
          justifyContent="flex-end"
          color="white"
          style={{
            background: 'linear-gradient(180deg,rgba(68,68,68,0.5) 0%, rgba(0,0,0,1) 100%)',
          }}
        >
          {slides.map((_slide: string, index: number) => {
            return (
              <Box key={index}>
                {index === currentItem ? (
                  <RadioButtonChecked fontSize="small" />
                ) : (
                  <RadioButtonUnchecked fontSize="small" onClick={() => setCurrentItem(index)} />
                )}
              </Box>
            );
          })}
        </Box>
      </CarouselContent>
    </Box>
  );
};

export default Carousel;
