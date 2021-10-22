import React from 'react'
import { GrMenu } from 'react-icons/gr'
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    Flex,
    Box,
    Spacer,
} from "@chakra-ui/react"
import { NavLink } from 'react-router-dom'
import { AiFillCaretDown } from 'react-icons/ai'


export default function SideMenu() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const handleOpen = () => {
        onOpen();
        setTimeout(() => onClose(), 10000)
    }
    return (
        <>
            <Box ref={btnRef}  onClick={()=>handleOpen()} _hover={{cursor:'pointer', color: '#7166C1' }} variant='unstyled' mx={5} height='100%' fontSize='1.5em' display='flex' alignItems='center' >
                <GrMenu filter='invert(1)' />
            </Box>
            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent bg='purple.100' >
                    <DrawerCloseButton />
                    <DrawerHeader>LabTeck</DrawerHeader>

                    <DrawerBody>


                        <Flex direction='column'>
                            <Box py='20px' _hover={{ color: '#7166C1' }}
                            >
                                <NavLink to='/' >Labtop </NavLink>

                            </Box>
                            <Box py='20px' _hover={{ color: '#7166C1' }}
                            >
                                <NavLink to='/' > PC Components <AiFillCaretDown style={{ fontSize: '0.5em', display: 'inline-block' }} /></NavLink>

                            </Box>
                            <Box py='20px' _hover={{ color: '#7166C1' }}
                            >
                                <NavLink to='/' >Accessories <AiFillCaretDown style={{ fontSize: '0.5em', display: 'inline-block' }} /></NavLink>

                            </Box>
                        </Flex>
                        <Spacer />
                        <Flex direction='column' fontSize='larger' >
                            <Box m='3' _hover={{ color: '#7166C1', cursor: 'pointer' }}>Wish List</Box>
                            <Box
                                bg="transparent" _hover={{ color: '#7166C1', cursor: 'pointer' }}
                                m='3'>Cart</Box>
                            <Button
                                color='#7166C1' fontWeight='bold'
                                style={{ border: '3px solid #7166C1' }}
                                variant='outline' size='lg' m='3' >Register</Button>
                        </Flex>


                    </DrawerBody>

                </DrawerContent>
            </Drawer>
        </>
    )
}