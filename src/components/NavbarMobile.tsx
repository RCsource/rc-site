import Logo from "../assets/logo.png";
import { Box, Button, Icon, Image, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { SiBurgerking } from "react-icons/si";

const NavbarMobile = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Box display="flex" alignItems="center">
        <Box display="flex" alignItems="center">
          <Image src={Logo} w={16} h={16} alt="RubyCats Logo" />
          <Text whiteSpace="nowrap" fontWeight="semibold" alignSelf="center">
            RubyCats
          </Text>
        </Box>
        <Box mx="auto" />
        <Icon as={SiBurgerking} w={10} h={10} onClick={() => setOpen(!open)} />
      </Box>
      {open && (
        <VStack border="1px solid #374151" p={2} borderRadius={5} align='stretch' spacing={2}>
          {children}
        </VStack>
      )}
    </>
  );
};

export default NavbarMobile;
