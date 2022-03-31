import React from 'react';
import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { Avatar, Stack } from '@mui/material';

const mockLeftGrid = [
  {
    image: '/shorts.svg',
    description:
      'Shorts is a modern URL shortener with a dedicated dashboard to manage your links and view the click rate statistics.',
    title: 'Shorts',
    github: 'https://github.com/NadavsSchwartz/shorts-client',
    url: 'https://shorten.domains',
  },
];
const mockMiddleGrid = [
  {
    image: '/hotelrevealer.svg',
    description:
      'Hotel Revealer is an app that helps you Find hidden Priceline Hotel deals with a click of a button',
    title: 'HotelRevealer',
    github: 'https://github.com/NadavsSchwartz/hotel-revealer',
    url: 'https://hotelrevealer.org/',
  },
];
const mockRightGrid = [
  {
    image: '/muscletov.png',
    description: 'Muscle Tov is a E-commerce platform for gym equipment',
    title: 'MuscleTov',
    github: 'https://github.com/NadavsSchwartz/muscletov',
    url: 'https://muscletov.herokuapp.com',
  },
];
const mockFourthGrid = [
  {
    image: '/cryptoapp.png',
    description: 'Crypto App is a One stop app for anything Cryptocurrency',
    title: 'CryptoApp',
    github: 'https://github.com/NadavsSchwartz/cryptoApp',
    url: 'https://cryptoapp.win',
  },
];

const Column = ({ data }) => {
  const theme = useTheme();
  return (
    <Box>
      {data.map((item, i) => (
        <Box
          key={i}
          sx={{
            marginBottom: { xs: 2, sm: 3 },
            '&:last-child': { marginBottom: 0 },
          }}
        >
          <Box
            boxShadow={1}
            sx={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: 2,
              '&:hover': {
                '& img': {
                  transform: 'scale(1.2)',
                },
                '& .portfolio-massonry__main-item': {
                  bottom: 0,
                },
              },
              '& .lazy-load-image-loaded': {
                display: 'flex !important',
              },
            }}
          >
            <Box
              component={LazyLoadImage}
              height={1}
              width={1}
              src={item.image}
              alt={item.title}
              effect="blur"
              maxHeight={{ xs: 460, md: 1 }}
              sx={{
                transition: 'transform .7s ease !important',
                transform: 'scale(0.8)',
                objectFit: 'cover',
                filter:
                  theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
              }}
            />
            <Box
              position={'absolute'}
              bottom={'-185%'}
              left={0}
              right={0}
              padding={4}
              bgcolor={'background.paper'}
              className={'portfolio-massonry__main-item'}
              sx={{ transition: 'bottom 0.3s ease 0s' }}
            >
              <Box
                component={'svg'}
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 1920 100.1"
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  transform: 'translateY(-90%)',
                  zIndex: 2,
                  width: 1,
                }}
              >
                <path
                  fill={theme.palette.background.paper}
                  d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
                ></path>
              </Box>
              <Typography variant={'h6'} fontWeight={700} gutterBottom>
                {item.title}
              </Typography>
              <Typography>{item.description}</Typography>
              <Box component={'div'} padding={1}>
                <Stack direction="row" spacing={1} sx={{ display: 'flex' }}>
                  <Box
                    component={'a'}
                    target="_blank"
                    href={item.github}
                    alt="github url"
                    sx={{ marginLeft: 'auto', marginRight: 0 }}
                  >
                    <Avatar
                      src="/GitHub.png"
                      sx={{ marginLeft: 'auto', marginRight: 0 }}
                    />
                  </Box>
                  <Box
                    target="_blank"
                    component={'a'}
                    href={item.url}
                    alt="website url"
                    sx={{ marginLeft: 'auto', marginRight: 0 }}
                  >
                    <Avatar
                      src="/www.svg"
                      sx={{ marginLeft: 'auto', marginRight: 0 }}
                    />
                  </Box>
                </Stack>
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

Column.propTypes = {
  data: PropTypes.array.isRequired,
};

const Main = () => {
  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Column data={mockRightGrid} />
        </Grid>
        <Grid item xs={12} md={3}>
          <Column data={mockMiddleGrid} />
        </Grid>
        <Grid item xs={12} md={3}>
          <Column data={mockLeftGrid} />
        </Grid>
        <Grid item xs={12} md={3}>
          <Column data={mockFourthGrid} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Main;
