import LogoFull from "../assets/logo_full.png";
import { Box, Text, Image } from "@chakra-ui/react";

const MainScreen = () => {
  return (
    <Box p={4}>
      <Box display="grid" justifyContent="center">
        <Image w={300} src={LogoFull} alt="RubyCats Logo" />
        <Text pb={5} fontSize="small" textAlign="center">
          Cтудия для разработки всего
        </Text>
      </Box>
      <Box>
        <Box display="grid" justifyContent="center">
          <Text textAlign="center" fontWeight="bold" fontSize="2xl">
            Что мы делаем?
          </Text>
          <Text textAlign="center" fontSize="md" maxW={800}>
            Мы делаем все! Начиная от утилит на Ruby и Python и заканчивая
            созданием собственного дистрибутива Linux!
          </Text>
        </Box>
        <Box display="grid" justifyContent="center">
          <Text textAlign="center" fontWeight="bold" fontSize="2xl">
            Наша цель?
          </Text>
          <Text textAlign="center" fontSize="md" maxW={800}>
            Наша цель - создавать крутые утилиты, программы и так далее с
            открытым исходным кодом. Надеемся, что кто-то вдохновится нашими
            проектами и создаст что-то лучшее!
          </Text>
        </Box>
        <Box>
          <Text textAlign="center" fontWeight="bold" fontSize="2xl">
            Соц. сети:
          </Text>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap={5}
          >
            <a href="https://t.me/rubycoding">
              <Image w={16} src="/Telegram_logo.svg" alt="Telegram" />
            </a>
            <a href="">
              <Image w={16} src="/discord-mark-blue.svg" alt="Discord" />
            </a>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MainScreen;
