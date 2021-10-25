import { Button,useMediaQuery,VStack,Text,Input } from '@chakra-ui/react'
import React from 'react'
import {Link} from "react-router-dom"

function Login() {

    const [isLargerThan400] =useMediaQuery("(min-width : 400px)")
    
    return (
        <div>
            <VStack mt="200px">
            <Text pb="5px" fontWeight="bold" fontSize="xl" fontFamily="montserrat,sans-serif">Sign In</Text>
            <label htmlFor="emailSignIn">Email:</label>
        <Input w={isLargerThan400 ? "350px" : "200px"} marginBottom="5px"  size="sm" type="email" id="emailSignIn" name="emailSignIn" 
            />
           
            <label htmlFor="passwordSignIn">Password:</label>
        <Input w={isLargerThan400 ? "350px" : "200px"} marginBottom="5px"  size="sm"  type="password" id="passwordSignIn" name="passwordSignIn"
            />
           <Button backgroundColor="#e5d9ff" marginTop="20px" size="sm" type="submit">Submit</Button>

         <Text marginTop="20px" >You have an account already</Text>
        <Link to="/signup">
        <Button fontSize="30px" colorScheme="blackAlpha" fontSize="15px">Sign up</Button> </Link>
        </VStack>
        </div>
    )
}

export default Login