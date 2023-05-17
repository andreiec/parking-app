import { Flex, Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Navbar from '../components/Navbar'

function Layout() {
    return (
        <Box minH="100vh" minW='100vw'>
            <Flex flexDir="column" minH="100vh">
                <Navbar />
                <Outlet />
                {/*<Footer />*/}
            </Flex>
        </Box>
    );
}

export default Layout;