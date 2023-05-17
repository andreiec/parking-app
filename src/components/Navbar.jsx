import {
    Flex,
    Spacer,
    Center,
    Text,
    Image,
    HStack,
  } from '@chakra-ui/react';

import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <Flex bg='white' w='100%' h='7rem' color='black' justifyContent='center'>
            <Flex w='70%'>
                <Center w='fit-content'>
                    <Image src='logo_uiux.jpg' alt='logo uiux' maxW='3rem'/>
                    <Text ml='15px' mb='1px' fontWeight='bold' fontSize='2xl'>Parchează</Text>
                </Center>

                <Spacer />

                <HStack spacing='3rem' w='fit-content'>
                    <Link to='/'><Text>Acasă</Text></Link>
                    <Link to='/despre'><Text>Despre</Text></Link>
                    <Link to='/rezerva'><Text>Rezervă</Text></Link>
                    <Link to='/contact'><Text>Contact</Text></Link>
                </HStack>
            </Flex>
        </Flex>
    );
}

export default Navbar;