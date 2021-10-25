import React from 'react'
import Card from './Card'
import apple from '../../assets/images/apple.png'
import asus from '../../assets/images/asus.png'
import google from '../../assets/images/google.png'
import hp from '../../assets/images/hp.png'
import dell from '../../assets/images/dell.png'
import intel from '../../assets/images/intel.png'
import ryzen from '../../assets/images/ryzen.png'

import { Flex, Box, Heading, Spacer, Wrap, WrapItem,Img,Text } from '@chakra-ui/react'

const data = [{src:apple,title:'Apple'},{src:asus,title:'Asus'},{src:google,title:'Google'},
{src:hp,title:'HP'},{src:dell,title:'Dell'},{src:intel,title:'Intel'},{src:ryzen,title:'Ryzen'}]

function VerseTwo() {

    return (
        <Flex color='blackAlpha.900' p='10px' width='100%' pr={['10px', '10px', '70px']} direction='column' >
            <Flex width='100%'>
                <Heading p='15px' fontSize={['1.3em', '1.4em', '1.5em', '1.6em']} >Brands</Heading>
                <Spacer />
                <Box fontSize={['1em', '1.1em', '1.2em']}  py='15px' _hover={{ color: 'gray', cursor: 'pointer' }} > See More</Box>
            </Flex>
            <Flex width='100%' justify='center'>
                <Wrap width={['90%','85%']} m='50px' justify='center' >
                 {data.map((d,i)=>{
                     return(
                         <WrapItem  key={i+'w'} rounded='base' style={{margin:'10px'}} cursor='pointer' _hover={{background:'whiteAlpha.700'}} >
                             <Flex direction='column' align='center' p='10px' >
                             <Img src={d.src} boxSize={['50px','80px']} alt={d.title} display='block'  />
                          <Text color='black' fontWeight='bold' fontSize='larger' >{d.title}</Text>
                             </Flex>
                          
                         </WrapItem>
                     )
                 })}
                </Wrap>
            </Flex>
            <Flex direction='column' align='center'>
            <Flex width='100%' justify='space-around' my='20px' borderBottom='1px solid white' color='blackAlpha.900' >
                <Heading p='5px' fontSize={['1em', '1.2em', '1.3em', '1.4em']} cursor='pointer' _hover={{color:'blackAlpha.700'}}>New</Heading>
                <Heading p='5px' fontSize={['1em', '1.2em', '1.3em', '1.4em']} cursor='pointer' _hover={{color:'blackAlpha.700'}}>Best Seller</Heading>
                <Heading p='5px' fontSize={['1em', '1.2em', '1.3em', '1.4em']} cursor='pointer' _hover={{color:'blackAlpha.700'}}>Hot Deals</Heading>
              
            </Flex>
            <Wrap width={['80%']} justify='center' >
                    {data.map((d, i) => <Card data={d} i={i} key={i+'la'} ></Card> )}
                </Wrap>
            </Flex>

        </Flex>
    )
}

export default VerseTwo
