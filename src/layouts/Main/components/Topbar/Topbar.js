import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

const Topbar = ({ colorInvert = false }) => {
  const theme = useTheme();
  const { mode } = theme.palette;

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
    >
      <Box
        display={'flex'}
        component="a"
        href="/"
        title="Nadav Schwartz"
        width={{ xs: 100, md: 120 }}
      >
        <Box
          component={'img'}
          src={
            mode === 'light' && !colorInvert
              ? 'https://assets.maccarianagency.com/the-front/logos/logo.svg'
              : 'https://assets.maccarianagency.com/the-front/logos/logo-negative.svg'
          }
          height={1}
          width={1}
        />
      </Box>
      <Box sx={{ display: { xs: 'flex' } }} alignItems={'center'}>
        <Box marginLeft={4} marginTop={1} marginBottom={1}>
          <Button
            variant="contained"
            color="primary"
            component="a"
            target="blank"
            href=" /"
            size="large"
          >
            Download CV
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

Topbar.propTypes = {
  colorInvert: PropTypes.bool,
};

export default Topbar;
