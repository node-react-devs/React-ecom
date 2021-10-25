import { VStack, HStack,Image,Text,Input,Button,Textarea } from '@chakra-ui/react'
import React from 'react'
import { useFormik } from "formik"
import NavBar from '../NavBar/NavBar'


function NewProduct() {
    const formik = useFormik({
        initialValues:  {
         productName : "",
         categories : "",
         description : "",
         productPrice : "",
         productStock : "",
     },
     onSubmit : values => {
         console.log(values)
     },
     validate : values => {
        let errors = {}

        if (!values.productName) {
            errors.productName = "Required!"
        }
        if (!values.categories) {
            errors.categories = "Required!"
        }
        if (!values.description) {
            errors.description = "Required!"
        }
        if (!values.productPrice) {
            errors.productPrice = "Required!"
        }
        if (!values.productStock) {
            errors.productStock = "Required!"
        }
        
        return errors
     }
    })

    return (
        <div>
     <form onSubmit={formik.handleSubmit}>    
   <HStack spacing="100px" marginTop="100px" justifyContent="center">
       <VStack marginBottom="150px">
       <Image w="400px" src="https://user-images.githubusercontent.com/86873404/138574039-96181f2b-71f6-48aa-b605-27020429183f.png" />
       <Text fontSize="20px" fontFamily="'Open Sans', sans-serif">Make sure your image's format is Png, Jpg or Jpeg <br />
        and its minimum resolution is 300x300.
       </Text>
       </VStack>
       <VStack spacing="15px"  w="400px">
       <label htmlFor="productName">Product Name:</label>
        <Input marginBottom="5px"  size="sm" type="text" id="productName" name="productName" 
            value={formik.values.productName} onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            />
                   <Text color="red" fontFamily="revert" pb="5px">{formik.touched.productName &&
             formik.errors.productName ? formik.errors.productName : null}</Text>
        

            <label htmlFor="categories">Categories:</label>
        <Input marginBottom="5px"  size="sm" type="text" id="categories" name="categories" 
            value={formik.values.categories} onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            />
                <Text color="red" fontFamily="revert" pb="5px">{formik.touched.categories &&
             formik.errors.categories ? formik.errors.categories : null}</Text>
        
             
             <label htmlFor="productPrice">Product Price:</label>
        <Input marginBottom="5px"  size="sm" type="number" id="productPrice" name="productPrice" 
            value={formik.values.productPrice} onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            />
                <Text color="red" fontFamily="revert" pb="5px">{formik.touched.productPrice &&
             formik.errors.productPrice ? formik.errors.productPrice : null}</Text>
        

             <label htmlFor="productStock">Product Stock:</label>
        <Input marginBottom="5px"  size="sm" type="number" id="productStock" name="productStock" 
            value={formik.values.productStock} onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            />
                <Text color="red" fontFamily="revert" pb="5px">{formik.touched.productStock &&
             formik.errors.productStock ? formik.errors.productStock : null}</Text>
        

             <label htmlFor="description">Description:</label>
            <Textarea marginBottom="5px"  type="text" id="description" name="description" 
            value={formik.values.description} onChange={formik.handleChange}
            onBlur={formik.handleBlur}
           />
            <Text color="red" fontFamily="revert" pb="5px">{formik.touched.description &&
             formik.errors.description ? formik.errors.description : null}</Text>
                  
            <Button backgroundColor="#e5d9ff" w="40%" type="submit">Submit</Button>
       </VStack>
   </HStack>
   </form>
        </div>
   
    )
}

export default NewProduct