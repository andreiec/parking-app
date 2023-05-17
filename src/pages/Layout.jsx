import { Box, Flex, Center } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Navbar from '../components/Navbar'
import Footer from "../components/Footer";

function Layout() {
    return (
        <Box minH="100vh" minW='100%'>
            <Flex flexDir="column" minH="100vh">
                <Navbar />
                <Center>
                    <Outlet />
                </Center>
                <Footer />
            </Flex>
        </Box>
    );
}

export default Layout;