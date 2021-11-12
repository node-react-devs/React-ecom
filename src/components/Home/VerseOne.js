import React from 'react'
import { Box, Flex, Heading, Text, Img, Spacer } from '@chakra-ui/react'
import { AiOutlineLeft, AiOutlineRight, AiOutlineFieldTime } from 'react-icons/ai'
import { FaShippingFast } from 'react-icons/fa'
import { BsFillPersonCheckFill, BsFillBagCheckFill } from 'react-icons/bs'
import g1 from '../../assets/images/G1.jpg'
import g2 from '../../assets/images/G2.jpg'
import g3 from '../../assets/images/G3.jpg'
import g4 from '../../assets/images/G4.jpg'
import g5 from '../../assets/images/G5.jpg'
import g6 from '../../assets/images/G6.jpeg'
import g7 from '../../assets/images/G7.jpg'


const data = [g1, g2, g3, g4, g5, g6, g7]
const data2 = [{ icon: FaShippingFast, title: 'AllOver The World Shipping', content: 'Premium Shipping Service' },
{ icon: BsFillPersonCheckFill, title: 'Valid and Legal Invoices', content: 'All Prices include 14% VAT' },
{ icon: BsFillBagCheckFill, title: 'Payment Option Variety', content: 'Credit Cards / Masari / Aman' },
{ icon: AiOutlineFieldTime, title: 'LTBuilds Warranty', content: '3 Years warranty' },]

function VerseOne() {
    const [tran, setTran] = React.useState(0)
    const [size, setSize] = React.useState(window.innerWidth)


    const nextSlide = () => {
        if (tran === 6) {
            setTran(0)

        } else {
            setTran(c => c + 1)
        }

    }
    const prevSlide = () => {
        if (tran === 0) {
            setTran(6)

        } else {
            setTran(c => c - 1)
        }

    }

    const slidNav = (i) => {
        let style = { bg: 'gray.700' }
        if (i === tran) {
            style = { bg: 'gray.400' }
        }
        return style
    }


    window.addEventListener('resize', () => setTimeout(setSize(window.innerWidth), 100))

    React.useEffect(() => {
        const interval = setInterval(() => { nextSlide() }, 10000);

        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tran])


    return (
        <Flex  direction={['column-reverse','column-reverse','column-reverse','row']} width='100%' color='blackAlpha.900'  overflowX='hidden' >
            <Flex direction='column'  my={['1px','1px','60px']} px={['10px','70px','70px','12px']} py= {['10px','20px','20px','12px']}
             height={['fit-content','fit-content',size*0.5,size * 0.33]} justify='space-between'  >
                {data2.map((D, i) => 
                    <Flex key={i + 'si'} border='3px solid black'  p={['10px','10px','10px','20px']} mb='5px'  width={['100*','100%','100%',size*0.35]}  >
                        <D.icon style={{fontSize:'3em', marginRight:'15px'}} />
                        <Box>
                            <Heading fontSize={['0.9em','1.1em','1.2em']} >{D.title}</Heading>
                            <Text fontSize={['0.7em','0.9em','1em']}>
                                {D.content}
                            </Text>
                        </Box>
                    </Flex>
                )}
            </Flex>
            <Spacer />
            <Box width={[size ,size,size,size * 0.6]} overflowX='hidden' pos='relative' >
                <Box onClick={() => prevSlide()}
                    pos='absolute' zIndex='1' boxSize={['40px','60px']} bg='gray.700' m={['10px', '70px']} cursor='pointer'
                    opacity='0.6' _hover={{ opacity: 0.8, background: 'gray.500' }} 
                    top={[size*0.25-10,size*0.25-30,size*0.25-30,size * 0.15 - 30]} >
                        <Text  fontSize={['2em','3em']} margin='6px'>
                        <AiOutlineLeft  />
                        </Text>
                     </Box>
                <Box onClick={() => nextSlide()}
                    pos='absolute' zIndex='1' boxSize={['40px','60px']} bg='gray.700' m={['10px', '70px']} cursor='pointer'
                    opacity='0.6' _hover={{ opacity: 0.8, background: 'gray.500' }}
                    top={[size*0.25-10,size*0.25-30,size*0.25-30,size * 0.15 - 30]} right='0' >
                        <Text  fontSize={['2em','3em']} margin='6px'>
                        <AiOutlineRight />
                        </Text>
                    
                     </Box>
                <Box width={[7*size,7*size,7*size,7 * size * 0.6]} pos='relative' display='flex'
                    transition='all ease-in-out 0.5s' 
                    transform={[`translate3d(${-size*tran + 'px'},0px,0px)`,`translate3d(${-size*tran + 'px'},0px,0px)`
                    ,`translate3d(${-size*tran + 'px'},0px,0px)`,`translate3d(${-size * 0.6 * tran + 'px'},0px,0px)`]} >
                    {data.map((d, i) => {
                        return (
                            <Box key={i + 'g'} display='inline-block'  p={['10px', '70px']} py='30px' >

                                <Img src={d} width={[size,size,size,size * 0.6]}
                                 height={[size*0.5,size*0.5,size*0.5,size * 0.3]} border='3px solid gray' />

                            </Box>
                        )
                    })}
                </Box>
                <Flex zIndex='1' pos='absolute' m={['10px', '70px']} width='150px' top={[size*0.5-5,size*0.5-15,size*0.5-15,size * 0.3 - 15]} justify='space-evenly' right='0'  >
                    {data.map((d, i) => {
                        return (
                            <Box {...slidNav(i)} cursor='pointer' _hover={{ background: 'gray.400' }} boxSize='13px' key={i + 'n'}
                                onClick={() => setTran(i)} ></Box>
                        )
                    })}

                </Flex>
            </Box>

        </Flex>
    )
}

export default VerseOne
