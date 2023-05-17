import { VStack, Text, HStack, Image, Center } from "@chakra-ui/react";

function Parteneri() {
    return (
        <VStack>
            <Center flexDir='column'>
                <Text fontSize='4xl' fontWeight='bold'>Partenerii Noștri</Text>
                <Text color='gray' fontWeight='light'>Colaborăm direct cu instituțiile statului pentru un proces cât mai simplu</Text>
            </Center>

            <HStack spacing='auto' w='100%' py='3rem'>
                <Image src='logo-blue.png' maxW='16rem'/>
                <Image src='sigla-fmi-1.png' maxW='16rem'/>
                <Image src='logo_amparcat.png' maxW='16rem'/>
            </HStack>
        </VStack>
    )
}

export default Parteneri;