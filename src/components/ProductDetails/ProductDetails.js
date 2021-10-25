import { Button } from '@chakra-ui/button';
import { HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Carousel } from 'react-carousel-minimal';
import { useCounter } from "@chakra-ui/react"
import { AddIcon, MinusIcon } from '@chakra-ui/react'
import NavBar from '../NavBar/NavBar';

const  ProductDetails=()=> {
    const data = [
        {
        image : "https://ae01.alicdn.com/kf/H6ac905debecc4b20a7318c814594afaf9/24-23-8-LED-LCD.jpg_.webp",
        caption : "Product overview"
        }
        ,
        {
        image : "https://ae01.alicdn.com/kf/H04ccac88195d4b5f9eb81b4cbec70d0af/24-23-8-LED-LCD.jpg_.webp",
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
      
      const counter = useCounter({
          max : 10,
          min : 1,
          step : 1
      })
    
    return (
        <div>
            <NavBar/>

<HStack marginLeft="200px" justifyContent="space-between" w="800px">
            <Carousel
            data={data}
            time={2000}
            width="500px"
            heigh="400px"
            captionStyle={captionStyle}
            radius="10px"
            automatic={false}
            dots={true}
            slideBackgroundColor="#e5d9ff"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            />
            
            <VStack alignItems="flex-start" pb="100px">
                <Text fontSize="30px" fontFamily="montserrat,sans-serif" >Product Title</Text>
                <Text  fontSize="20px" fontFamily="Open Sans', sans-serif" 
                style={{color:"red"}}>Product Price : 99$</Text>
                <HStack>
                <Button backgroundColor="#e5d9ff" size="md">Add to Cart</Button>

                <HStack spacing="0.5px" >
                    <Button backgroundColor="#e5d9ff" onClick={() => counter.increment()}>+</Button>
                    <Button backgroundColor="#e5d9ff" onClick={() => counter.decrement()}>-</Button>
                    <Text position="relative" left="10px" fontSize="20px" fontWeight="bold"
                     fontFamily="Open Sans', sans-serif" style={{color:"red"}}>{counter.value}</Text>
                </HStack>  
                


                </HStack>
                <Text pt="25px" fontSize="22px" mt="25px" fontFamily="Open Sans', sans-serif">Stock : 5</Text>
                <div >
                <Text pt="25px" fontSize="22px" mt="25px" fontWeight="bold" 
                fontFamily="montserrat,sans-serif">Product description :</Text>
                    <Text fontSize="15px" mt="25px" position="fixed" fontFamily="Open Sans', sans-serif">
                        It is a long established fact that a reader will be distracted by the 
                    readable content of a page when looking at its layout. The point of using Lorem
                    Ipsum is that it has a more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like readable English. Many desktop 
                    publishing packages and web page editors now use Lorem Ipsum as their default model text, 
                    and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various 
                    versions have evolved over the years, sometimes by accident, sometimes on purpose (injected 
                    humour and the like).

            </Text>
                </div>
            </VStack>
        </HStack>

        </div>
       
    )
}

export default ProductDetails