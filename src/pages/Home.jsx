import {
    Flex,
    Spacer,
    Text,
    Button,
    HStack,
    Image,
    Card,
    CardBody,
    Stack
} from "@chakra-ui/react";
import { FaPlayCircle } from 'react-icons/fa'

function Home() {
    return (
        <Stack spacing='7rem' mt='2rem'>
            <Flex maxW='100rem'>
                <Flex flexDir='column' maxW='30rem'>
                    <Text fontSize='md' fontWeight='bold'>REVOLUȚIA DIGITALĂ</Text>
                    <Text fontSize='4xl' fontWeight='bold'>Cea Mai De Încredere Soluție Pentru Parcarea Autoturismelor Personale</Text>
                    
                    <HStack mt='4rem' spacing='15px'>
                        <Button colorScheme="blue" minW='8rem'>Rezervă</Button>
                        <Button variant='outline' color='black' minW='8rem' leftIcon={<FaPlayCircle />}>Demo</Button>
                    </HStack>
                </Flex>

                <Spacer w='6rem'/>

                <Image src='undraw_electric_car_b7hl.png' maxH='20rem'/>
            </Flex>

            <HStack spacing='auto'>
                <Card>
                    <CardBody maxW='16rem' minH='18rem'>
                        <Stack spacing='1rem'>
                            <Text fontSize='4xl' fontWeight='bold'>01.</Text>
                            <Text fontSize='2xl' fontWeight='bold'>Sigur</Text>
                            <Text fontWeight='light'>Ne folosim de cele mai avansate tehnologii pentru securizarea datelor.</Text>
                        </Stack>
                    </CardBody>
                </Card>

                <Card>
                <CardBody maxW='16rem' minH='18rem'>
                        <Stack spacing='1rem'>
                            <Text fontSize='4xl' fontWeight='bold'>02.</Text>
                            <Text fontSize='2xl' fontWeight='bold'>Digital</Text>
                            <Text fontWeight='light'>Totul este digital, fără ghișee. Fara bătăi de cap.</Text>
                        </Stack>
                    </CardBody>
                </Card>

                <Card>
                <CardBody maxW='16rem' minH='18rem'>
                        <Stack spacing='1rem'>
                            <Text fontSize='4xl' fontWeight='bold'>03.</Text>
                            <Text fontSize='2xl' fontWeight='bold'>Rapid</Text>
                            <Text fontWeight='light'>Doar din câteva clickuri îți rezervi instant un loc de parcare.</Text>
                        </Stack>
                    </CardBody>
                </Card>
            </HStack>
        </Stack>
    )
}

export default Home;