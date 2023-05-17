import { Flex, Text, Stack, Button, Input } from '@chakra-ui/react';
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <Flex w='100%' bg='blue.500' py='2.5rem' justifyContent='center' color='white'>
            <Flex w='70%' flexDir='column'>
                <Text fontSize='2xl' fontWeight='bold' mb='10px'>Despre</Text>
                <Text fontWeight='light' mb='20px'>Compania noastră este liderul în domeniul gestionării parcărilor de mașini în Municipiul București, oferind soluții eficiente pentru necesitățile de parcare ale locuitorilor și vizitatorilor orașului. Cu o vastă experiență și un sistem avansat de tehnologie, ne-am dedicat să facilităm accesul la parcări sigure și bine organizate în întregul municipiu. Echipa noastră de profesioniști în domeniu este implicată activ în planificarea și implementarea unor strategii inovatoare pentru a satisface cerințele complexe ale parcajelor urbane. Folosim soluții inteligente de monitorizare și gestionare a spațiilor de parcare, precum și sisteme de plată moderne, pentru a asigura o experiență fluidă și convenabilă pentru toți utilizatorii.</Text>

                <Flex mt='3rem' flexDir='row' justifyContent='space-between'>
                    <Stack flexDir='column' spacing='0.5rem'>
                        <Text fontSize='xl'>Ai nevoie de ajutor?</Text>
                        <Link to='/'><Text>Acasă</Text></Link>
                        <Link to='/despre'><Text>Despre</Text></Link>
                        <Link to='/rezerva'><Text>Rezervă</Text></Link>
                        <Link to='/contact'><Text>Contact</Text></Link>
                    </Stack>

                    <Stack flexDir='column' spacing='0.7rem'>
                        <Text fontSize='xl'>Contact</Text>
                        <Text>info@parcheaza.ro</Text>
                        <Text fontSize='sm'>0737149223</Text>
                    </Stack>

                    <Stack flexDir='column' spacing='1rem'>
                        <Text fontSize='xl'>Newsletter</Text>
                        <Input bg='white' color='black' placeholder='Adresa de mail' />
                        <Button colorScheme="facebook" fontWeight='normal'>Abonează-te</Button>
                    </Stack>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Footer;