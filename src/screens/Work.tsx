import { Box, Text } from "@chakra-ui/react"
import { useEffect } from "react"

const Work = () => {
  useEffect(() => {
    document.title = "Работа у нас" + " :: RubyCats"
  }, [])

  return (
    <Box p={4}>
      <Box>
        <h3>Критерии на вступления в команду - программист:</h3>
        <ul>
          <li>1. Вы знаете Ruby? Если нет то какие языки?</li>
          <li>2. С какой целью хотите попасть в команду RubyCats?</li>
          <li>3. Был ли опыт работы в команде?</li>
          <li>4. Как с вами контактировать? Какие месенджеры испольуете? Желательно Telegram или Discord</li>
          <li>5. Сколько вам лет?</li>
          <li>6. Какой ваш псевдоним или же имя?</li>
        </ul>
        <Text color="#16a34a">Набор открыт</Text>
      </Box>
      <Box>
        <h3>Критерии на вступления в команду - художник:</h3>
        <ul>
          <li>1. Ваше имя?</li>
          <li>2. Ваш возраст?</li>
          <li>3. В каких программах работаете?</li>
          <li>4. Готовы ли вы вы идти послом в другую студию в случае заказа? За это платат :3</li>
        </ul>
        <Text color="#16a34a">Набор открыт</Text>
      </Box>
    </Box>
  )
}

export default Work