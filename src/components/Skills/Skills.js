import React from 'react';
import Box from '@mui/material/Box';

const mock = [
  'https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg',
  'https://upload.wikimedia.org/wikipedia/commons/6/62/Ruby_On_Rails_Logo.svg',
  'https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg',
  'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  'https://cdn.worldvectorlogo.com/logos/redux.svg',
  'https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg',
  'https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg',
  'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg',
  'https://cdn.worldvectorlogo.com/logos/bootstrap-5-1.svg',
  'https://cdn.worldvectorlogo.com/logos/material-ui-1.svg',
  'https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg',
  'https://cdn.worldvectorlogo.com/logos/next-js.svg',
];

const Skills = () => {
  return (
    <Box display="flex" flexWrap="wrap" justifyContent={'center'}>
      {mock.map((item, i) => (
        <Box
          maxWidth={80}
          marginTop={{ xs: 1 }}
          marginRight={{ xs: 1, sm: 2, md: 3 }}
          key={i}
        >
          <Box component="img" height={1} width={1} src={item} alt="..." />
        </Box>
      ))}
    </Box>
  );
};

export default Skills;
