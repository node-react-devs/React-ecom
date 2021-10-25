import Main from "./routes/Main";
import "./assets/styles/main.scss";
import { Box } from "@chakra-ui/layout";
import { BrowserRouter as Router} from "react-router-dom";


function App() {
  return (
    <Box>
      <Box pos='fixed' bgGradient="linear(to-l, #8B9697,#e9ebf0 )" zIndex='-1' height='100vh' width='100%' top='0' left='0'/>
      <Router>
      <Main />
      </Router>

     
    </Box>
  );
}

export default App;
