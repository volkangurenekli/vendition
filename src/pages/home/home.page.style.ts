import { styled } from '@mui/system';

export const HomePageImage = styled('img')({
  width: '100%',
  height: 'auto',
  display: 'block',
  opacity: 0.2,
  maxWidth: '100%',
  padding: 0,
  margin: 0,
});

export const HomePageContent = styled('div')({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  textAlign: 'center',
});
