import React from 'react'
import Card from './Card'
import apple from '../../assets/images/apple.png'
import asus from '../../assets/images/asus.png'
import google from '../../assets/images/google.png'
import hp from '../../assets/images/hp.png'
import dell from '../../assets/images/dell.png'
import intel from '../../assets/images/intel.png'
import ryzen from '../../assets/images/ryzen.png'

import { Flex, Box, Heading, Spacer, Wrap, WrapItem, Img, Text } from '@chakra-ui/react'
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai'

const data = [{ src: apple, title: 'Apple' }, { src: asus, title: 'Asus' }, { src: google, title: 'Google' },
{ src: hp, title: 'HP' }, { src: dell, title: 'Dell' }, { src: intel, title: 'Intel' }, { src: ryzen, title: 'Ryzen' }]

const cardN = data.length



function VerseTwo() {


    const [shownC, setShownC] = React.useState(0)
    const [right, setRight] = React.useState(true)
    const [left, setLeft] = React.useState(false)
    const handleNext = () => {
        let adj = Math.floor(window.innerWidth/200) 
        if (shownC + adj -1 >= cardN) {
            setRight(false)
        } else {
            setLeft(true);
            setShownC(c=>c + 1)
        }
    }

    const handleBack = () => {
        if (shownC <= 0) {
            setLeft(false)
        } else {
            setRight(true);
            setShownC(c => c - 1 )
        }
    }



    return (
        <Flex color='blackAlpha.900' p='10px' width='100%' pr={['10px', '10px', '70px']} direction='column' >
            <Flex width='100%'>
                <Heading p='15px' fontSize={['1.3em', '1.4em', '1.5em', '1.6em']} >Brands</Heading>
                <Spacer />
                <Box fontSize={['1em', '1.1em', '1.2em']} py='15px' _hover={{ color: 'gray', cursor: 'pointer' }} > See More</Box>
            </Flex>
            <Flex width='100%' justify='center'>
                <Wrap width={['90%', '85%']} m='50px' justify='center' >
                    {data.map((d, i) => {
                        return (
                            <WrapItem key={i + 'w'} rounded='base' style={{ margin: '10px' }} cursor='pointer' _hover={{ background: 'whiteAlpha.700' }} >
                                <Flex direction='column' align='center' p='10px' >
                                    <Img src={d.src} boxSize={['50px', '80px', '100px']} alt={d.title} display='block' />
                                    <Text color='black' fontWeight='bold' fontSize='larger' >{d.title}</Text>
                                </Flex>

                            </WrapItem>
                        )
                    })}
                </Wrap>
            </Flex>
            <Flex direction='column' align='center'>
                <Flex width='100%' justify='space-around' my='20px' borderBottom='1px solid white' color='blackAlpha.900' >
                    <Heading p='5px' fontSize={['1em', '1.2em', '1.3em', '1.4em']} cursor='pointer' _hover={{ color: 'blackAlpha.700' }}>New</Heading>
                    <Heading p='5px' fontSize={['1em', '1.2em', '1.3em', '1.4em']} cursor='pointer' _hover={{ color: 'blackAlpha.700' }}>Best Seller</Heading>
                    <Heading p='5px' fontSize={['1em', '1.2em', '1.3em', '1.4em']} cursor='pointer' _hover={{ color: 'blackAlpha.700' }}>Hot Deals</Heading>

                </Flex>
                <Box pos='relative' width='100%' h='400px' >
                    <Flex width={['90%']} overflowY='hidden' overflowX={['scroll','scroll','hidden']}  pos='relative' h='400px' margin='auto'>
                        <Flex pos='absolute' transition='all ease-in-out 0.5s'
                         width={[cardN * 190 + 'px', cardN * 220 + 'px']}  left={[-shownC*190 + 'px',-shownC*220 + 'px']} >
                            {data.map((d, i) => <Card data={d} i={i} key={i + 'la'} ></Card>)}


                        </Flex>

                    </Flex>

                    {left && <Box onClick={handleBack}
                        pos='absolute' zIndex='1' boxSize={['40px', '60px']} bg='gray.200' m={['10px']} cursor='pointer'
                        opacity='0.6' _hover={{ opacity: 0.8, background: 'gray.500' }}
                        top={['180px', '170px']}>
                        <Text fontSize={['2em', '3em']} margin='6px'>
                            <AiOutlineLeft />
                        </Text>
                    </Box>}
                    {right && <Box onClick={handleNext}
                        pos='absolute' zIndex='1' boxSize={['40px', '60px']} bg='gray.200' m={['10px']} cursor='pointer'
                        opacity='0.6' _hover={{ opacity: 0.8, background: 'gray.500' }}
                        top={['180px', '170px']} right='0' >
                        <Text fontSize={['2em', '3em']} margin='6px'>
                            <AiOutlineRight />
                        </Text>

                    </Box>}
                </Box>

            </Flex>

        </Flex>
    )
}

export default VerseTwo
