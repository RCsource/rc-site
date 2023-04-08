import Navbar from "./components/Navbar";

import { Routes, Route, Link } from "react-router-dom";
import MainScreen from "./screens/MainScreen";
import OurProjects from "./screens/OurProjects";
import Work from "./screens/Work";
import { useEffect } from "react";
import { Box, Button, Container } from "@chakra-ui/react";

const App = () => {
  useEffect(() => {
    document.title = "Главная" + " :: RubyCats";
  }, []);

  return (
    <>
      <Box
        backgroundColor="#111827"
        w="100vw"
        h="100vh"
        display="flex"
        justifyContent="center"
        fontFamily="Comfortaa"
        textColor="white"
      >
        <Box
          backgroundColor="#1f2937"
          px="4"
          maxW="container.xl"
          h="100vh"
          overflowY="auto"
          mx="auto"
        >
          <Navbar>
            <Link to="/">
              <Button
                w="100%"
                background="linear-gradient(90deg, rgba(255,0,170,1) 0%, rgba(255,0,0,1) 100%);"
                _hover={{
                  background:
                    "linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,0,170,1) 100%);",
                }}
              >
                Главная
              </Button>
            </Link>
            <Link to="/work">
              <Button
                w="100%"
                background="linear-gradient(90deg, rgba(255,0,170,1) 0%, rgba(255,0,0,1) 100%);"
                _hover={{
                  background:
                    "linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,0,170,1) 100%);",
                }}
              >
                Работа у нас
              </Button>
            </Link>
            <Link to="/projects">
              <Button
                w="100%"
                background="linear-gradient(90deg, rgba(255,0,170,1) 0%, rgba(255,0,0,1) 100%);"
                _hover={{
                  background:
                    "linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,0,170,1) 100%);",
                }}
              >
                Наши проекты
              </Button>
            </Link>
          </Navbar>
          <Routes>
            <Route index path="/" element={<MainScreen />} />
            <Route path="/projects" element={<OurProjects />} />
            <Route path="/work" element={<Work />} />
          </Routes>
        </Box>
      </Box>
    </>
  );
};

export default App;
