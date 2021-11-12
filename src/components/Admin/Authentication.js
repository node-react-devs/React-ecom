import React from "react";
import {
    Flex,
    Text,
    IconButton,
    Divider,
    Avatar,
    Heading
} from '@chakra-ui/react'


import { Box} from "@chakra-ui/react"
import { Stack, HStack, VStack } from "@chakra-ui/react"
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from "@chakra-ui/react"
import { Button, ButtonGroup } from "@chakra-ui/react"
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import { ChakraProvider } from "@chakra-ui/react"
import { Container } from "@chakra-ui/react"


export default function Login() {

    // Show password
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    return (
        <div className="lol">
            <ChakraProvider >



                <Container >


                    <VStack mt="20%" bg="#6F69AC" borderRadius="10"  >
                        <Box fontFamily="Monospace">
                            <VStack mb="20%" >

                                <form>

                                    <FormControl mt="20%" >
                                        <HStack fontSize="25px" ml="10" >
                                            <Box color="#D5D5D5"> Adam</Box>
                                            <Box color="#A9E4D7" > e-commerce</Box>
                                        </HStack>
                                        <InputGroup size="md" mt="5" px="2">
                                            <Input
                                                type="email"
                                                placeholder="Enter your Email "
                                                variant="outline"
                                                color="#D5D5D5"
                                                size="lg">

                                            </Input>

                                        </InputGroup>

                                        <InputGroup size="md" mt="5" px="2" >
                                            <Input

                                                type={show ? "text" : "password"}
                                                placeholder="Enter password"
                                                variant="outline"
                                                color="#D5D5D5"
                                                size="lg" />

                                            <InputRightElement width="4.5rem">
                                                <Button size="sm" mr="4" mt='2' px="8" align="center" onClick={handleClick} >
                                                    {show ? "Hide" : "Show"}
                                                </Button>
                                            </InputRightElement>
                                            
                                        </InputGroup>



                                    </FormControl>

                                    <FormControl mt="10%" size="md" mt="5" px="2" >
                                        <Button
                                            isFitted
                                            color="#090910"
                                            type="submit"
                                            color="#9D84B7"
                                            size="md" fontSize="lg"
                                            w="100%"

                                        >
                                            Log In
                                        </Button>
                                    </FormControl>

                                </form>
                            </VStack>
                        </Box>



                    </VStack>
                </Container>
            </ChakraProvider>
        </div>

    )
}