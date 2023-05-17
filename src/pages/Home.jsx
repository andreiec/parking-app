import {
    Flex,
    Spacer,
    Text,
    Button,
    HStack,
    Image,
    Stack
} from "@chakra-ui/react";
import { FaPlayCircle } from 'react-icons/fa'
import HomeCard from "../components/HomeCard";
import Parteneri from "../components/Parteneri";
import { Link } from 'react-router-dom'

function Home() {
    return (
        <Stack spacing='6rem' mt='2rem' mb='2rem'>
            <Flex maxW='100rem'>
                <Flex flexDir='column' maxW='30rem'>
                    <Text fontSize='md' fontWeight='bold'>REVOLUȚIA DIGITALĂ</Text>
                    <Text fontSize='4xl' fontWeight='bold'>Cea Mai De Încredere Soluție Pentru Parcarea Autoturismelor Personale</Text>
                    
                    <HStack mt='4rem' spacing='15px'>
                        <Link to='rezerva'><Button colorScheme="blue" minW='8rem'>Rezervă</Button></Link>
                        <a href='https://www.youtube.com/watch?v=8ya9AaCqm0I'><Button variant='outline' color='black' minW='8rem' leftIcon={<FaPlayCircle />}>Demo</Button></a>
                    </HStack>
                </Flex>

                <Spacer w='6rem'/>

                <Image src='undraw_electric_car_b7hl.png' maxH='20rem'/>
            </Flex>

            <HStack spacing='auto'>
                <HomeCard data={{number: '01.', title: 'Sigur', description: 'Ne folosim de cele mai avansate tehnologii pentru securizarea datelor.'}} />
                <HomeCard data={{number: '02.', title: 'Digital', description: 'Totul este digital, fără ghișee. Fara bătăi de cap.'}} />
                <HomeCard data={{number: '03.', title: 'Rapid', description: 'Doar din câteva clickuri îți rezervi instant un loc de parcare.'}} />
            </HStack>

            <Parteneri />
        </Stack>
    )
}

export default Home;