import React from 'react'
import {HiOutlineViewGridAdd} from 'react-icons/hi'
import {FcAddImage} from 'react-icons/fc'
import {Flex,Heading,Text,Spacer,Img,Box,useDisclosure,Textarea} from '@chakra-ui/react'
import apple from '../../assets/images/apple.png'
import asus from '../../assets/images/asus.png'
import google from '../../assets/images/google.png'
import {Modal,ModalContent,ModalHeader,ModalCloseButton,FormControl,FormLabel,
Input,ModalBody,ModalFooter,Button,ModalOverlay} from '@chakra-ui/react'

const data = [{ src: apple, title: 'Apple' }, { src: asus, title: 'Asus' }, { src: google, title: 'Google' }]

const openPop=()=>{

}

function AdminContent(prop) {

    const { isOpen, onOpen, onClose } = useDisclosure()


    return (
        <Flex  direction='column' align='center'  > 
            
        <Flex bgGradient={prop.color}  width='90%'  rounded='xl' direction='column' my='10px'  >
             <Heading fontSize='1.2em' p='3' color='whiteAlpha.900' > Categories </Heading>


             <Text color='whiteAlpha.800' mx='12px' >
                 See All
             </Text>

             <Flex direction='row'  >

                 {
                     data.map((d,i)=>{
                         return(
                            <Img pos='relative' border='solid #f7cc96' left={-i*40+'px'} src={d.src} alt={d.title} key={i+'C'} bg='white' boxSize='70px' rounded='full' m='10px' />
                           
                         )
                     })
                 }

                 <Spacer>
                 </Spacer>
                   <Box mx='10px' display='flex' >
                   <HiOutlineViewGridAdd style={{fontSize:'3em',alignSelf:'center'}}
                    onClick={onOpen}
                    cursor='pointer'
                   />
                   </Box>       
             </Flex>
              
             
        </Flex>
        <Modal
        size='6xl'
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent  >
          <ModalHeader>Add New Item</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}  >
           <FormControl>
               <Flex direction='row' >
                <Flex direction='column' mx='5'>
                  <FormLabel>Item image</FormLabel>
                <Box border='dashed' fontSize='5em'  >
                  <FcAddImage style={{margin:'auto'}} />
                </Box>
                <FormLabel> Item name </FormLabel>
                <Input placeholder='item name' />
                </Flex>
                <Flex direction='column' mx='5' >
                 <FormLabel> price </FormLabel>
                 <Input placeholder='item price' />
                 <FormLabel> Item stock </FormLabel>
                 <Input placeholder='item stock' />
                 <FormLabel> Item color</FormLabel>
                <Input placeholder='item color' />
                </Flex>
                <Box mx='10'>
                <FormLabel> Item details</FormLabel>
                    <Textarea>

                    </Textarea>
                </Box>
                
                
               </Flex>
           </FormControl>
     

          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

       </Flex>

    )
}

export default AdminContent
