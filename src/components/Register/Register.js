import React from 'react'
import { Center,Box, Text } from '@chakra-ui/react'
import { Button} from "@chakra-ui/react"

import Inputs from './Inputs'
import {
        Link
        } from "react-router-dom"


function Register() {
    return (
    <div>
    <Center>
    <Box w="65%" m="50px">
            <Text pb="15px" fontSize="30px" fontFamily="'Montserrat', sans-serif" > Account</Text>
            <Text pb="10px" fontSize="13px" fontFamily="'Open Sans', sans-serif">
            If you already have an account with us, please login at the login page.</Text>
        <Link to="/signin"> <Button colorScheme="blackAlpha" size="sm" fontSize="15px">Sign in</Button> </Link>
    </Box> 
    </Center>
    <Center>
        <Box w="65%">
            <Inputs />
        </Box>
    </Center>
    </div>
    )
}

export default Register