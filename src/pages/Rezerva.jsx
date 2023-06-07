import { Box, Button, Flex, FormLabel, Image, Input, Spacer, Text, useToast, Center, Grid } from "@chakra-ui/react";
import { useFormik } from "formik";
import { useEffect, useState } from "react";

function Rezerva() {

    const [state, setState] = useState(JSON.parse(localStorage.getItem("data")) ?? []);

    const email_sent_toast = {
        title: 'Rezervare efectuată cu succes.',
        status: 'success',
        position: 'top',
        duration: 5000,
        isClosable: true,
    }

    const toast = useToast()

    const formik = useFormik({
        initialValues: {
            'name': '',
            'mail': '',
            'phone': '',
            'type': '',
            'hours': ''
        },
        onSubmit: (values) => {
            toast(email_sent_toast);
            const newData = state.concat([{start: new Date(), end: new Date(new Date().getTime() + values.hours * 60 * 60 * 1000)}]);
            localStorage.setItem("data", JSON.stringify(newData));
            setState(newData);
        }
    })

    const count = 50 - state.filter(x => 
        new Date(new Date(new Date(x.start).getTime())) < new Date() 
        && new Date() < new Date(new Date(x.end).getTime())).length;

    return (
        <Box mt='2rem' mb='5rem'>
            <Flex flexWrap='wrap'>
                <Box>
                    <Text fontSize='2xl' fontWeight='bold'>Rezervă un loc</Text>

                    <form onSubmit={formik.handleSubmit}>
                        <FormLabel htmlFor='name' mt='1rem'>Nume</FormLabel>
                        <Input
                            id='name'
                            name='name'
                            type='text'
                            onChange={formik.handleChange}
                            value={formik.values.name}
                        />

                        <FormLabel htmlFor='email' mt='1rem'>Adresă de Mail</FormLabel>
                        <Input
                            id='mail'
                            name='mail'
                            type='text'
                            onChange={formik.handleChange}
                            value={formik.values.mail}
                        />

                        <FormLabel htmlFor='phone' mt='1rem'>Număr de Telefon</FormLabel>
                        <Input
                            id='phone'
                            name='phone'
                            type='text'
                            onChange={formik.handleChange}
                            value={formik.values.phone}
                        />

                        <FormLabel htmlFor='type' mt='1rem'>Tip autoturism</FormLabel>
                        <Input
                            id='type'
                            name='type'
                            type='text'
                            onChange={formik.handleChange}
                            value={formik.values.type}
                        />

                        <FormLabel htmlFor='type' mt='1rem'>Număr de ore</FormLabel>
                        <Input
                            id='hours'
                            name='hours'
                            type='text'
                            onChange={formik.handleChange}
                            value={formik.values.hours}
                        />

                        <Button type='submit' mt='1rem' colorScheme='blue'>Rezervă</Button>
                    </form>
                </Box>

                <Spacer w='10rem'/>

                <Center>
                    <Grid>
                        <Center>
                            <Text fontSize="2xl" color="green" as="b">{count}</Text> 
                            <Text style={{"margin-left": "10px"}}>locuri disponibile</Text>
                        </Center>
                        <Image src='undraw_Date_picker_re_r0p8.png' maxH='15rem'/>
                    </Grid>
                </Center>
            </Flex>
        </Box>
    )
}

export default Rezerva;