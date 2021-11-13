import React from 'react'
import { Box, ChakraProvider, Image } from "@chakra-ui/react"
import { Stack, HStack, VStack } from "@chakra-ui/react"
import { Checkbox, CheckboxGroup } from "@chakra-ui/react"
import { StarIcon } from '@chakra-ui/icons'

export default function sideBare() {

    const contannt = [
        {
            Brand: "Evo",
            name: " consectetur ",
            rating: 4,
        },
        {
            Brand: "Evo",
            name: " consectetur ",
            rating: 2,
        },
        {
            Brand: "Evo",
            name: " consectetur ",
            rating: 3,
        },
        {
            Brand: "Evo",
            name: " consectetur ",
            rating: 5,
        },





    ];

    const renderFun = (stat) => {
        return (
            <Checkbox color="#FBF3E4" mt="4" ml="4" w="100%"> <h1>{stat.name}</h1></Checkbox>
        )

    }

    const renderBrand = (stat) => {
        return (
            <Checkbox color="#FBF3E4" mt="4" ml="4" w="100%"> <h1>{stat.Brand}</h1></Checkbox>
        )

    }

    const renderRating = (stat, index) => {
        return (

            <Box display="flex" mt="2" alignItems="center" w="100%" mt="3" _hover={{ cursor: "pointer" }}>

                {Array(5).fill("").map((_, i) => (
                    <StarIcon
                        key={i}
                        color={i < stat.rating ? "#F0A500" : "gray.300"}
                    />

                ))
                }
                <Box ml="2" color="#FBF3E4" _hover={{ color: "#F0A500" }}>& Up</Box>

            </Box>
        )

    }

    return (
        <ChakraProvider>

            <div>
                <Box bg="#191A19" left="0">

                    <Box as="h1" color="#FBF3E4" ml="4" >Seller</Box>
                    {contannt.map(renderFun)}

                    <Box as="h1" color="#FBF3E4" ml="4" mt="5" >Brand</Box>
                    {contannt.map(renderBrand)}

                    <Box as="h1" color="#FBF3E4" ml="4" mt="5">Avg. Customer Review</Box>


                    <Box pb="5" color="#FBF3E4"> {contannt.map(renderRating)}   </Box>



                </Box>



            </div>
        </ChakraProvider>

    )
}
