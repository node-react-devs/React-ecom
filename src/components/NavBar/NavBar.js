import React from 'react'
import { Flex, Heading, Button, Box, Spacer,Img,Input} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import tech from '../../assets/images/icons8-technology-64.png'
import {AiFillCaretDown, AiFillHeart, AiOutlineShoppingCart} from 'react-icons/ai'
import SideMenu from './Drawer'
import search from '../../assets/images/icons8-search-64.png'
import cart from '../../assets/images/cart.png'


const NavBar = () => {

  const [shad,setShad] = React.useState(window.scrollY)
  const inputStyle={style:{width:'0px',opacity:0,right:'20px'},s:'false'}

  const handleShad=()=>{
    let shadstyle={shadow:'none'}
    if(shad){
       shadstyle={
        shadow:'xl'
      }
    }
    return shadstyle
  }
  const [input,setInput] = React.useState(inputStyle)

  const handleSearch=()=>{
   
       if(input.s==='false'){
         setInput({style:{ width:['65%','70%','80%','88%'] ,right:['28%','25%','18%','10%'],opacity:1},s:'true'})
       }else{
         if(!React.sInput.value){
           setInput(inputStyle)
         }else{
         //handle the search
         }
         
       }
  }
  const handleBlur=()=>{
    setInput(inputStyle)
  }



  React.useEffect(
      ()=>{
        window.addEventListener('scroll',()=>{setShad(window.scrollY)})
        return ()=>{
            window.removeEventListener('scroll',()=>{setShad(window.scrollY)})
        }
                // eslint-disable-next-line react-hooks/exhaustive-deps
      },[shad])


  window.addEventListener('scroll',()=>{setTimeout(()=>{setShad(window.scrollY)},100)})
  const style = { color: '#e5d9ff', borderBottom: '4px solid #e5d9ff' }
  return (
  <Box width='100%' mb='100'>
   
   <Box bgGradient="linear(to-l,#591DA9, #051960 )" color='white' pos='fixed' top={'0'} width='100%' zIndex='2'  transition='all ease-in-out 0.5s'>
      <Flex pos='relative' {...handleShad()} transition='all ease-in-out 0.5s' >
        <Box ml={['3px', '10px', '10px', '40px','140px']} display='flex' alignItems='center'>
        <NavLink to='/'>
          <Flex m='6' >
            <Box mr='1' fontSize={['1.7em','2em','2.8em']} display='flex' alignItems='center' >
            <Img  boxSize={['25px','35px','45px' ]} filter='invert(1)' src={tech} alt='tech' />

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
            <NavLink to='/about' >Labtops <AiFillCaretDown style={{fontSize:'0.5em',display:'inline-block'}}/></NavLink>
          </Box>
          <Box
            bgColor='transparent' rounded='none' display='flex'
            borderBottom='4px' borderColor='transparent' alignItems='center' _hover={style}>
            <NavLink to='/about' >PC Components <AiFillCaretDown style={{fontSize:'0.5em',display:'inline-block'}}/></NavLink>

          </Box>
          <Box
            bgColor='transparent' rounded='none' display='flex'
            borderBottom='4px' borderColor='transparent'
            alignItems='center' _hover={style}>
            <NavLink to='/' >Accessories <AiFillCaretDown style={{fontSize:'0.5em',display:'inline-block'}}/></NavLink>

          </Box>

        </Flex>
        <Spacer />
        <Flex alignItems='center' fontWeight='550'  display={['none','none','none','flex']} >
          <Box m='3'
            fontSize='1.8em'color='#ff69a8'
           _hover={{ color: 'red',cursor:'pointer' }}
           >  <AiFillHeart  /> 
          </Box>
          <Box 
            fontSize='1.8em'
            bg="transparent" _hover={{ color: '#e5d9ff',cursor:'pointer' }} 
             m='3'> <Img src={cart} boxSize='35px' />
          </Box>
          <Button
            color='#e5d9ff' fontWeight='bold'
            _hover={{color:'black',background:'#e5d9ff'}}
            width={['100px','150px']}
            style={{ border: '3px solid #e5d9ff' }}
            variant='outline' size='lg' m='3' >Login/regester</Button>
        </Flex>
        <Box display={['unset','unset','unset','none']}>
        <SideMenu/>
        </Box>


      </Flex>

   </Box>
     
       <Input {...input.style} pos='fixed' top='93px' zIndex='3'  variant='outline' placeholder='search' bg='white' m='10px' ref={sInput=>React.sInput=sInput}  onBlur={handleBlur} transition='all ease-in-out 0.5s' />
      <Box zIndex='3' mx={['10px','15px','30px']} roundedBottom='full' shadow='xl' p='10px' pos='fixed' top='93px' right={['1px','5px','10px','15px']} _hover={{cursor:'pointer'}} onClick={handleSearch} >
        <Img boxSize={['35px']} src={search} alt='search' filter='invert(1)' />
      </Box>
 

 
  </Box>
  )
}

export default NavBar
