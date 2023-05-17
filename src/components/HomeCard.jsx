import {
    Card,
    CardBody,
    Stack,
    Text,
} from "@chakra-ui/react";


function HomeCard(props) {
    return (
        <Card>
            <CardBody maxW='16rem' minH='18rem'>
                <Stack spacing='1rem'>
                    <Text fontSize='4xl' fontWeight='bold'>{props.data.number}</Text>
                    <Text fontSize='2xl' fontWeight='bold'>{props.data.title}</Text>
                    <Text fontWeight='light'>{props.data.description}</Text>
                </Stack>
            </CardBody>
        </Card>
    )
}

export default HomeCard;