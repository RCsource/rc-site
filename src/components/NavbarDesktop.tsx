import Logo from "../assets/logo.png";
import { Box, Image, Text } from "@chakra-ui/react";

const NavbarDesktop = ({ children }: { children: React.ReactNode }) => {
  
  return (
    <>
      <Box p={2}  display="flex" alignItems="center">
        <Box display="flex" alignItems="center"> 
          <Image src={Logo} w={16} h={16} alt="RubyCats Logo" />
          <Text whiteSpace="nowrap" fontWeight="semibold" alignSelf="center">
            RubyCats
          </Text>
        </Box>
        <Box mx="auto" />
        <Box display="flex" gap={5}>
          {children}
        </Box>
      </Box>
    </>
  );
};

export default NavbarDesktop;
