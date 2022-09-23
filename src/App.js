import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Navbar from './component/navbar';
import Footer from './component/footer';

function App () {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Navbar />
        <Grid minH="100vh" p={3}>


        </Grid>
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
