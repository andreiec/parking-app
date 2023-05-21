import { Box, Button, Flex, FormLabel, Image, Input, Spacer, Text, useToast, Center } from "@chakra-ui/react";
import { useFormik } from "formik";

function Rezerva() {

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
            toast(email_sent_toast)
            //alert(JSON.stringify(values, null, 2))
        }
    })



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
                    <Image src='undraw_Date_picker_re_r0p8.png' maxH='15rem'/>
                </Center>
            </Flex>
        </Box>
    )
}

export default Rezerva;