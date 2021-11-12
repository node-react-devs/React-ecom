import React from 'react'
import {Box} from '@chakra-ui/react'
import NavBar from '../NavBar/NavBar'
import VerseOne from './VerseOne'
import VerseTwo from './VerseTwo'

function Home() {
    return (
        <Box>
            <NavBar/>
            <VerseOne/>
            <VerseTwo/>
        </Box>
    )
}

export default Home
