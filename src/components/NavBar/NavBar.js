import React from 'react'
import { Flex, Heading, Button, Box, Spacer,Img,Input,InputGroup,InputRightElement} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import tech from '../../assets/images/icons8-technology-64.png'
import {AiFillCaretDown, AiFillHeart} from 'react-icons/ai'
import SideMenu from './Drawer'
import search from '../../assets/images/icons8-search-64.png'
import cart from '../../assets/images/cart.png'


const NavBar = () => {

  const [shad,setShad] = React.useState(window.scrollY)

  const handleShad=()=>{
    let shadstyle={shadow:'none'}
    if(shad){
       shadstyle={
        shadow:'xl'
      }
    }
    return shadstyle
  }

  const handleSearch=()=>{
    //handle the search
  }



  React.useEffect(
      ()=>{
        const doShad=()=>{setTimeout(()=>setShad(window.scrollY),50)}
        window.addEventListener('scroll',()=>doShad())
        return ()=>{
            window.removeEventListener('scroll',()=>doShad())
        }
                // eslint-disable-next-line react-hooks/exhaustive-deps
      },[shad])


  const style = {color:'blackAlpha.700',  borderBottom: '4px solid black' }
  return (
  <Box width='100%' mb='100'>
   
   <Box bgGradient="linear(to-l,#8B9697,#e9ebf0 )" color='blackAlpha.900' pos='fixed' top={'0'} width='100%' zIndex='2'  transition='all ease-in-out 0.5s'>
      <Flex pos='relative' {...handleShad()} transition='all ease-in-out 0.5s' >
        <Box ml={['3px', '10px', '10px', '40px','140px']} display='flex' alignItems='center' >
        <NavLink to='/' style={{background:'transparent'}} >
          <Flex m='6' >
            <Box mr='1' fontSize={['1.7em','2em','2.8em']} display='flex' alignItems='center' >
            <Img  boxSize={['25px','35px','45px' ]} filter='invert(0.1)' src={tech} alt='tech' />

            </Box>
            <Heading 
              alignSelf='flex-start' fontSize={['1.5em','1.7em','2em']}>LabTech</Heading>

          </Flex>
        </NavLink>
      
        </Box>
        <Flex display={['none','none','none','flex']}
          width='400px' justifyContent='space-between'
          fontWeight='semibold' fontSize='larger' ml='25px' >
          <Box
            bgColor='transparent' rounded='none' display='flex'
            borderBottom='4px' borderColor='transparent' alignItems='center' _hover={style} >
            <NavLink to='/about' style={{background:'transparent'}} >Labtops <AiFillCaretDown style={{fontSize:'0.5em',display:'inline-block'}}/></NavLink>
          </Box>
          <Box
            bgColor='transparent' rounded='none' display='flex'
            borderBottom='4px' borderColor='transparent' alignItems='center' _hover={style}>
            <NavLink to='/about' style={{background:'transparent'}} >PC Components <AiFillCaretDown style={{fontSize:'0.5em',display:'inline-block'}}/></NavLink>

          </Box>
          <Box
            bgColor='transparent' rounded='none' display='flex'
            borderBottom='4px' borderColor='transparent'
            alignItems='center' _hover={style}>
            <NavLink to='/' style={{background:'transparent'}} >Accessories <AiFillCaretDown style={{fontSize:'0.5em',display:'inline-block'}}/></NavLink>

          </Box>

        </Flex>
        <Spacer />
        <Flex alignItems='center' fontWeight='550'  display={['none','none','none','flex']} >
          <Box m='3'
            fontSize='1.8em'color='red'
           _hover={{ color: '#ff69a8',cursor:'pointer' }}
           >  <AiFillHeart  /> 
          </Box>
          <Box cursor='pointer'
            bg="transparent" 
             m='3'> <Img src={cart} boxSize='35px'  filter='invert(0.1)' _hover={{filter:'invert(0)'}} />
          </Box>
          <Button
            color='#black' fontWeight='bold'
            _hover={{background:'gray.400'}}
            width={['100px','150px']}
            style={{ border: '3px solid black' }}
            variant='outline' size='lg' m='3' >Login</Button>
        </Flex>
        <Box display={['unset','unset','unset','none']}>
        <SideMenu/>
        </Box>


      </Flex>

   </Box>
     
      <InputGroup mt='97px' px='10px' pos='relative' zIndex='0'  >
      <Input  variant='outline' placeholder='search' bg='white'/>
      <InputRightElement  _hover={{cursor:'pointer'}} onClick={handleSearch} >
        <Img src={search} alt='search' mr='35px' dropShadow='base' />
      </InputRightElement>
      </InputGroup>
 

 
  </Box>
  )
}

export default NavBar
