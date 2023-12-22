// import { useMemo } from 'react';

// import { Card, Grid } from '@mui/material';
// import { Button, Container, TextField, Typography } from '@mui/material';
// import Navbar from '../../components/Navbar.jsx';

// import bgImage from '../../assets/main/bgImage.png'

// import BoxContainer from '@astarx-studio/mui/components/BoxContainer';
// import { useTheme } from '@astarx-studio/react-core/theme';

import Hero from '../../components/Hero.jsx';
// import Navbar from '../../components/Navbar.jsx'

// const GridCard = ({ darkMode, children }) => {
//   return (
//     <Grid item xs>
//       <Card
//         sx={{
//           background: darkMode ? 'linear-gradient(97.51deg, #4345AA 0%, #10126A 100%)' : 'linear-gradient(97.51deg, #ECEDF5 0%, #B8BEF0 100%)',
//           p: 3,
//         }}
//       >
//         {children}
//       </Card>
//     </Grid>
//   );
// };

const Customer = () => {
  // const { meta } = useTheme();

  // const darkMode = useMemo(() => meta.type === 'DARK', [meta]);

  return (
    <>
      <Hero />
    </>
  );
};

export default Customer;
