import { Box, Image, Stack, Text, Flex, Spacer } from "@chakra-ui/react";
import Parteneri from "../components/Parteneri";

function Despre() {
    return (
        <Stack spacing='6rem' mt='2rem' mb='2rem'>
            <Box h='265px'>
                <Image src='despre-img.png' maxH='20rem' maxW='1066px'></Image>
                <Text transform='translate(25.5rem, -11.7rem)' w='fit-content' color='white' fontSize='5xl' fontWeight='bold'>Despre Noi</Text>
                <Text transform='translate(17.5rem, -11.7rem)' w='fit-content' color='white' fontSize='xl' fontWeight='light'>Avem un istoric de peste 5 ani în industria Parcărilor digitale</Text>
            </Box>

            <Flex maxW='100rem'>
                <Flex flexDir='column' maxW='30rem'>
                    <Text fontSize='md' fontWeight='bold'>PARCHEAZĂ</Text>
                    <Text fontSize='4xl' fontWeight='bold'>Noi te ajutăm să salvezi timp pentru momente speciale cu cei dragi</Text>
                    <Text mt='1rem' fontSize='lg' fontWeight='light' color='gray'>Descoperă serviciul nostru de administrare a parcarilor și beneficiază de expertiza noastră pentru a economisi timp prețios înainte de a te bucura de momente speciale alături de cei dragi. Simplu, eficient și memorabil!</Text>
                </Flex>

                <Spacer w='6rem'/>

                <Image src='undraw_order_a_car_3tww.png' maxH='20rem'/>
            </Flex>

            <Flex maxW='100rem'>
                <Image src='undraw_Online_payments_re_y8f2.png' maxH='20rem'/>

                <Spacer w='6rem'/>

                <Flex flexDir='column' maxW='30rem'>
                    <Text fontSize='md' fontWeight='bold'>PARCHEAZĂ</Text>
                    <Text fontSize='4xl' fontWeight='bold'>O facem din pasiunea pentru a ajuta oamenii să vadă Orașul mai prietenos</Text>
                    <Text mt='1rem' fontSize='lg' fontWeight='light' color='gray'>Cu pasiunea noastră, ne dedicăm să transformăm experiența ta din oraș într-una prietenoasă, oferind servicii de administrare a parcarilor care facilitează explorarea și bucuria de a descoperi locuri noi alături de oamenii dragi.</Text>
                </Flex>
            </Flex>

            <Parteneri />
        </Stack>
    )
}

export default Despre;