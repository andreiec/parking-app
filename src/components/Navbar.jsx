import {
    Box,
    Flex,
    Spacer,
  } from '@chakra-ui/react';


function Navbar() {
    return (
        <Flex bg='blue.500' w='100%' h='3rem'>
            <Box p='1' bg='red'>
                Box1
            </Box>

            <Spacer />

            <Box p='1' bg='red'>
                Box2
            </Box>
        </Flex>
    );
}

export default Navbar;