import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Hero = () => {
  return (
    <Box>
      <Box marginBottom={4} marginTop={12}>
        <Typography
          variant="h3"
          color="text.primary"
          align={'center'}
          sx={{
            fontWeight: 700,
          }}
        >
          Hey, I'm Nadav Schwartz
        </Typography>
        <Typography
          variant="h6"
          component="p"
          color="text.secondary"
          align={'center'}
          gutterBottom
          sx={{ fontWeight: 400 }}
        >
          A Full Stack Software Engineer
        </Typography>
      </Box>
    </Box>
  );
};

export default Hero;
