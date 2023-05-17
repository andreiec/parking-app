import {
    Box,
    Flex,
  } from '@chakra-ui/react';


function Navbar() {
    return (
        <Flex
        bg='blue.500'
        color='white'
        minH='2.5rem'
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        align={'center'}>
        </Flex>
    );
}

export default Navbar;