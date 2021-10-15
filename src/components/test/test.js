import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { testRequest } from "../../redux/test/test.actions";
import { ChakraProvider, Heading, Button } from "@chakra-ui/react";

const Test = () => {
  const dispatch = useDispatch();
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    dispatch(testRequest());
  }, []);
  return (
    <ChakraProvider>
      <div className="test">
        <Heading as="h1" size="4xl">
          This is Test Page
        </Heading>
        <Button
          onClick={() => setClicked(true)}
          colorScheme="facebook"
          variant="solid"
        >
          {clicked ? "Clicked" : "Click me"}
        </Button>
      </div>
    </ChakraProvider>
  );
};

export default Test;
