import { Box, Button, Flex, FormLabel, Image, Input, Spacer, Text, Textarea, VStack, useToast, Icon } from "@chakra-ui/react";
import { useFormik } from "formik";
import { MdEmail, MdPhone } from 'react-icons/md'

function Contact() {

    const email_sent_toast = {
        title: 'Mail trimis cu succes.',
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
            'message': '',
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
                    <Text fontSize='2xl' fontWeight='bold'>Lasă-ne un mesaj</Text>

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

                        <FormLabel htmlFor='message' mt='1rem'>Mesaj</FormLabel>
                        <Textarea
                            id='message'
                            name='message'
                            type='text'
                            onChange={formik.handleChange}
                            value={formik.values.message}
                        />

                        <Button type='submit' mt='1rem' colorScheme='blue'>Trimite</Button>
                    </form>
                </Box>

                <Spacer w='10rem'/>

                <VStack rowGap='2rem' alignItems='start'>
                    <Text fontSize='2xl' fontWeight='bold'>Contact</Text>
                    <Flex><Icon as={MdPhone} mt='4px' mr='5px'/><Text>+40737139333</Text></Flex>
                    <Flex><Icon as={MdEmail} mt='4px' mr='5px'/><Text>info@parcheaza.ro</Text></Flex>
                    <Image src='location.png' maxH='15rem'/>
                </VStack>
            </Flex>
        </Box>
    )
}

export default Contact;