import React from 'react'
import { Box, ChakraProvider, Image } from "@chakra-ui/react"
import { Grid, GridItem } from "@chakra-ui/react"
import SideBare from './ItemsSidebar';


export default function ComponentItem() {

    //  <div>       {property.map(renderCard)}           </div>

    const property = [{
        imageUrl: "https://i.postimg.cc/8CxhJnqJ/61-Wixzl-Vu-XL-UL1280.jpg",
        title: "Modern home in city center in the heart of historic Los Angeles",
        formattedPrice: "$1,900.00",

    },
    {
        imageUrl: "https://i.postimg.cc/8CxhJnqJ/61-Wixzl-Vu-XL-UL1280.jpg",
        title: "Modern home in city center in the heart of historic Los Angeles",
        formattedPrice: "$1,500,000",

    },
    {
        imageUrl: "https://i.postimg.cc/8CxhJnqJ/61-Wixzl-Vu-XL-UL1280.jpg",
        title: "Modern home in city center in the heart of historic Los Angeles",
        formattedPrice: "$1,900.00",

    },
    {
        imageUrl: "https://i.postimg.cc/8CxhJnqJ/61-Wixzl-Vu-XL-UL1280.jpg",
        title: "Modern home in city center in the heart of historic Los Angeles",
        formattedPrice: "$1,900.00",

    },
    {
        imageUrl: "https://i.postimg.cc/8CxhJnqJ/61-Wixzl-Vu-XL-UL1280.jpg",
        title: "Modern home in city center in the heart of historic Los Angeles",
        formattedPrice: "$1,900.00",

    },
    {
        imageUrl: "https://i.postimg.cc/8CxhJnqJ/61-Wixzl-Vu-XL-UL1280.jpg",
        title: "Modern home in city center in the heart of historic Los Angeles",
        formattedPrice: "$1,900.00",

    }

    ];

    const renderCard = (card, index) => {
        return (
            <ChakraProvider >


                <GridItem colSpan={1} >

                    <Box maxW="lg" borderWidth="1px" borderRadius="lg" overflow="hidden" bg="#FBF3E4" >
                        <Image src={card.imageUrl} w='100%' />

                        <Box p="6">

                            <Box color="#B91646" fontSize="lg" >
                                {card.formattedPrice}
                                <Box as="span" ml="2">
                                    EGP
                                </Box>

                            </Box>

                            <Box
                                mt="1"
                                fontWeight="semibold"
                                as="h4"
                                lineHeight="tight"

                            >
                                {card.title}
                            </Box>
                        </Box>
                    </Box>

                </GridItem>

            </ChakraProvider>

        )
    }


    return (
        <ChakraProvider >
            <Grid
                h="550px"
                templateRows="repeat(2, 1fr)"
                templateColumns="repeat(4, 1fr)"
                gap={2}
            >
                <GridItem rowSpan={2} colSpan={1} > <SideBare /> </GridItem>

                {property.map(renderCard)}
            </Grid>

        </ChakraProvider>
    )
}
