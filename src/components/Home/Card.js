import React from 'react'
import {WrapItem,Flex,Text,Img,Box} from '@chakra-ui/react'
import { AiFillHeart } from 'react-icons/ai'
import cart from '../../assets/images/cart.png'

function Card({data,i}) {
    return (
        <WrapItem bg='whiteAlpha.700' rounded='base'  style={{ margin: '10px' }} cursor='pointer' _hover={{ background:'whiteAlpha.900' }} display='flex' flexDirection='column' >
            <Flex direction='column' align='center' p='10px' pos='relative' width={['170px','200px']} >
                <Img src={data.src} boxSize={['120px', '150px']} alt={data.title} display='block' />
                <Text color='black' fontWeight='bold' fontSize='larger' >{data.title}</Text>
                <Text color='black'  fontSize='larger' py='5px' >this is the discription of the product</Text>

                <Text color='black' fontWeight='semibold' fontSize='larger' >200.00$</Text>
          
                    <Box cursor='pointer' pos='absolute' top='0' right='0' fontSize='1.5em' m='3px'  >
                      <AiFillHeart style={{color:'red'}} />
                    </Box>
                
               
            </Flex>
            <Box  color='whiteAlpha.800' cursor='pointer' bg='green.300' width='90%' rounded='base' align='center' alignSelf='center' my='3' p='3px'  _hover={{bg:'green.400' }} >
                      <Text fontWeight='semibold' > Add To Cart  <Img src={cart} boxSize='30px' display='inline-block'  /></Text>
                </Box>

        </WrapItem>
    )
}

export default Card
