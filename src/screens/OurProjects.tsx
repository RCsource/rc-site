import { useEffect, useState } from 'react';
import { Box, SimpleGrid, Image, VStack, Text } from '@chakra-ui/react';

const OurProjects = () => {
  const [repos, setRepos] = useState([])

  useEffect(() => {
    document.title = "Работа у нас" + " :: RubyCats"
  }, [])


  useEffect(() => {
    fetch('https://api.github.com/users/RCsource/repos')
      .then(res => res.json())
      .then(res => setRepos(res))
  }, [])

  return (
    <Box p={4}>
      Наши проекты:
      <SimpleGrid mt={2} columns={3} gap={2}>
      {repos.map((repo: any) => (
        <a href={repo.html_url} key={repo.updated_at}>
          <VStack border="1px solid #4b5563" position="relative" borderRadius="5px" p={5} h={320}>
            <Image src={repo.owner.avatar_url}  alt={repo.owner.login} width={100} borderRadius={10} />
            <Text textAlign="center" className="text-lg">{repo.name}</Text>
            <Text textAlign="center">{repo.description}</Text>
            <Text position="absolute" textAlign="center" pb={2} bottom={0}>{new Date(repo.updated_at).toLocaleString()}</Text>
          </VStack>
        </a>
      ))}
      </SimpleGrid>
    </Box>
  )
}

export default OurProjects