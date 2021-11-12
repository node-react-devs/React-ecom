import { Button } from '@chakra-ui/button';
import { HStack, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Carousel } from 'react-carousel-minimal';
import { useCounter } from "@chakra-ui/react"
import { AddIcon, MinusIcon } from '@chakra-ui/react'
import NavBar from '../NavBar/NavBar';
import { Input } from "@chakra-ui/input"
import { Image } from "@chakra-ui/image"
import StarRatingComponent from 'react-star-rating-component';
import { useState } from 'react';
import { createBreakpoints } from "@chakra-ui/theme-tools"


import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem
  } from "@chakra-ui/react"

const  ProductDetails=()=> {
    const data = [
        {
        image : "https://m.media-amazon.com/images/I/71s8NfCDBbL._AC_SL1500_.jpg",
        caption : "Product overview"
        }
        ,
        {
            image : "https://m.media-amazon.com/images/I/61bti-FQk6L._AC_SL1200_.jpg",
            caption : "Product back"
        }
    ]

    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
      }
      
      const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
      }

      const productDetails = {
          title : "Dell Inspiron 3567 Notebook, Intel Core i3-7020U, 15.6 Inch, 8GB RAM, 1TB, VGA INTEL, DOS, Black",
          stock : "5",
          peopleRated : "551"
      }
         
     const [rating, setRating] = useState(0)

     const breakpoints = createBreakpoints({
        sm: "499px",
        md: "48em",
        lg: "62em",
        xl: "80em",
        "2xl": "96em",
      })
      
    return (
        <div >
            <NavBar/>
            
    <Stack spacing="35px" direction={["column", "column", "row", "row"]} marginLeft={[50, 100, 100, 200 ]} justifyContent="space-between" w="1200px">
        <VStack alignItems="flex-start" w="1200px" position="relative" top={[100,100,0,0]}>
            <Carousel
            data={data}
            time={2000}
            width="auto"
            heigh="400px"
            captionStyle={captionStyle}
            radius="10px"
            automatic={false}
            dots={true}
            slideBackgroundColor="#e5d9ff"
            slideImageFit="contain"
            thumbnails={true}
            thumbnailWidth="100px"
            />
       </VStack>
            <VStack    alignItems="flex-start">
                <Text w={[500,700,"auto","auto"]} bottom={[400,550,0,0]} position="relative" fontSize="25px" fontWeight="bold" fontFamily="montserrat,sans-serif" >
                    {productDetails.title}
                </Text>
                <Text position="relative" top="20px" fontWeight="medium"  fontSize="22px" fontFamily="Open Sans', sans-serif">
                   Brand : Dell </Text>
                <Text position="relative" top="20px" fontWeight="thin"  fontSize="20px" fontFamily="Open Sans', sans-serif">
                   Rate : 
                  </Text>
                  <StarRatingComponent
                   name= "rate"
                   editing="false"
                   renderStarIcon={() => <Text fontSize="25px">★</Text>}
                   starColor={5}
                   value={4}
                   starColor="#ffb400"
                   emptyStarColor="#333"
                   /> 
                  <Text position="relative" top="20px" fontWeight="thin"  fontSize="20px" fontFamily="Open Sans', sans-serif">
                   Number of people rated this product : <Text fontWeight="semi-bold"
                    fontFamily="montserrat,sans-serif"> {productDetails.peopleRated} </Text>
                  </Text>
        </VStack>
            <VStack w="auto" alignItems="flex-start" >
            <Text  fontSize="20px" fontFamily="Open Sans', sans-serif" 
                style={{color:"red"}}>Product Price : 99$</Text>
                <Text pt="25px" fontSize="22px" mt="25px" fontFamily="Open Sans', sans-serif">Stock : {productDetails.stock}</Text>
                
                <Menu>
                <MenuButton
                px={3}
                py={2}
                transition="all 0.2s"
                borderRadius="md"
                _hover={{bg : "gray.400"}}
                _expanded={{bg : "blue.400"}}
                _focus={{boxShadow : "outline"}}
                >
                Qty ▼ 
                </MenuButton>
                <MenuList>
                {Array(+productDetails.stock)
                .fill("")
                .map((n, i) => {
                    return <MenuItem key={i}>{i + 1}</MenuItem>
                }
                )}
                </MenuList>
                </Menu>
                
                <Button  backgroundColor="#e5d9ff" size="md">Add to Cart</Button>
                <Button  backgroundColor="#ea8dff" size="md">Add to Wishlist</Button>
                
                <Text position="relative" top="20px" fontWeight="thin"  fontSize="20px" 
                fontFamily="Open Sans', sans-serif"> Rate this product  
                  </Text>
                  <Text top="10px" position="relative" fontSize="25px">
                <StarRatingComponent 
                name="rating"
                valeu={rating}
                />
                 </Text>
               
            </VStack>
        </Stack>
        <VStack w={[400,600,600,900]}  >
            <Text alignSelf="center" fontSize="20px" fontFamily="montserrat,sans-serif" position="relative" top="30px" >Add Comment</Text>
            <HStack padding="10px"  position="relative" w="450px" alignItems="center">
            <Input top="20px" position="relative" />
            </HStack>
            </VStack>

        </div>
       
    )
}

export default ProductDetails