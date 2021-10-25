import { Flex,Stack } from '@chakra-ui/layout'
import React from 'react'
import { useFormik } from "formik"
import { Button } from '@chakra-ui/button'
import { useMediaQuery } from "@chakra-ui/react"
import { Checkbox } from "@chakra-ui/react"
import { Input } from '@chakra-ui/input'
import { Text } from '@chakra-ui/layout'

function Inputs() {
    const formik = useFormik({
        initialValues:  {
         firstName : "",
         lastName : "",
         email : "",
         password : "",
         confirmPassword : "",
         telephone : "",
         fax : "",
         company : "",
         address1 : "",
         address2 : "",
         city : "",
         postCode : "",
         country : "",
         countryCity : "",
         emailSignIn : "",
         passwordSignIn : ""
     },
     onSubmit : values => {
         console.log(values)
     },
     validate : values => {
        let errors = {}

        if (!values.firstName) {
            errors.firstName = "First name needed!"
        } else if (values.firstName.length < 3) {
            errors.firstName = "First name has to be between 3~20 words!"
        }
        if (!values.lastName) {
            errors.lastName = "Last name needed!"
        } else if (values.firstName.length < 3) {
            errors.firstName = "Last name has to be between 3~20 words!"
        }
        if (!values.email) {
            errors.email = "You need to add your email!"
        } 
        if (!values.password) {
            errors.password = "You need to add password!"
        } else if (values.password.length <4) {
            errors.password = "Password must be between 4~20 numbers!"
        }
        if (!values.confirmPassword) {
            errors.confirmPassword = "You need to add password confirmation!"
        } else if (values.confirmPassword !== values.password) {
            errors.confirmPassword = "Password dosent match!"
        }
        if (!values.telephone) {
            errors.telephone = "You need to put your number!"
        } 
        if (!values.address1) {
            errors.address1 = "You need to add your address!"
        } else if (values.address1.length < 10) {
            errors.address1 = "Your address has to be at least 10 digits"
        }
        return errors
     }
    })
    

    const [isLargerThan1000] = useMediaQuery("(min-width: 1000px)")
    const [isLargerThan1450] = useMediaQuery("(min-width: 1450px)")
    const [isLargerThan788] =useMediaQuery("(min-width : 788px)")
    return (
    <form onSubmit={formik.handleSubmit}>    
        <Stack direction={ isLargerThan788 ? "row" : "column"} >
        <Flex direction="column" w={isLargerThan1450 ? "550px" : "350px"} mr="50px" >
        <div>
        <Text pb="5px" fontWeight="bold" fontSize="xl" fontFamily="montserrat,sans-serif">Your Personal Details</Text>
            <label htmlFor="firstName">First Name:</label> <span style={{color:"red"}}>*</span>
        <Input marginBottom="5px"  size="sm" type="text" id="firstName" name="firstName" 
            value={formik.values.firstName} onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            />
             <Text color="red" fontFamily="revert" pb="5px">{formik.touched.firstName &&
             formik.errors.firstName ? formik.errors.firstName : null}</Text>

            <label htmlFor="lastName">Last Name:</label> <span style={{color:"red"}}>*</span>
        <Input marginBottom="5px"  size="sm"  type="text" id="lastName" name="lastName" 
            value={formik.values.lastName} onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            />
            <Text color="red" fontFamily="revert" pb="5px">{formik.touched.lastName && 
            formik.errors.lastName ? formik.errors.lastName : null }</Text>

            <label htmlFor="email">Email:</label> <span style={{color:"red"}}>*</span>
        <Input marginBottom="5px"  size="sm" type="email" id="email" name="email" 
            value={formik.values.email} onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            />
            <Text color="red" fontFamily="revert" pb="5px">{formik.errors.email 
            && formik.touched.email ? formik.errors.email : null}</Text>

            <label htmlFor="password">Password:</label> <span style={{color:"red"}}>*</span>
        <Input marginBottom="5px"  size="sm" type="password" id="password" name="password" 
            values={formik.values.password} onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            />
            <Text color="red" fontFamily="revert" pb="5px">{formik.errors.password
            && formik.touched.password ? formik.errors.password : null}</Text>

            <label htmlFor="confirmPassword">Password Confirm:</label> <span style={{color:"red"}}>*</span>
        <Input marginBottom="5px"  size="sm" type="password" id="confirmPassword" name="confirmPassword" 
            values={formik.values.confirmPassword} onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            />
            <Text color="red" fontFamily="revert" pb="5px">{formik.errors.confirmPassword 
            && formik.touched.confirmPassword ? formik.errors.confirmPassword : null}</Text>

            <label htmlFor="telephone">Telephone:</label> <span style={{color:"red"}}>*</span>
        <Input marginBottom="5px"  size="sm" type="number" id="telephone" name="telephone" 
            values={formik.values.telephone} onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            />
            <Text color="red" fontFamily="revert" pb="5px">{formik.errors.telephone
            && formik.touched.telephone ? formik.errors.telephone : null}</Text>
        
        </div>
        </Flex>
        <Flex direction="column" w={isLargerThan1450 ? "550px" : "350px"} mr="50px" >
        <div>
         <Text pb="5px" fontWeight="bold" fontSize="xl" fontFamily="montserrat,sans-serif">Your Address</Text>
            <label htmlFor="address1">Addres 1:</label> <span style={{color:"red"}}>*</span>
        <Input marginBottom="5px"  size="sm"  type="text" id="address1" name="address1" 
            value={formik.values.address1} onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            />
         <Text color="red" fontFamily="revert" pb="5px">{formik.errors.address1
            && formik.touched.address1 ? formik.errors.address1 : null}</Text>
          </div>
        </Flex>
        </Stack>
        <Button justifyContent="center" backgroundColor="#e5d9ff" type="submit">Submit</Button>
        <br />
        <Checkbox pt="5px">I have read and agree to the Privacy Policy</Checkbox>
    </form>
    )
}

export default Inputs