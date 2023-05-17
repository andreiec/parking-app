import {
    Flex,
    Spacer,
    Center,
    Text,
    Image,
    HStack
  } from '@chakra-ui/react';

function Navbar() {
    return (
        <Flex bg='white' w='100%' h='7rem' px='5rem' color='black'>
            <Center>
                <Image src='logo_uiux.jpg' alt='logo uiux' maxW='5rem'/>
                <Text ml='15px' mb='1px' fontWeight='bold' fontSize='3xl'>Parchează</Text>
            </Center>

            <Spacer />

            <HStack spacing='3rem'>
                <Text>Acasă</Text>
                <Text>Despre</Text>
                <Text>Rezervă</Text>
                <Text>Contact</Text>
            </HStack>
        </Flex>
    );
}

export default Navbar;