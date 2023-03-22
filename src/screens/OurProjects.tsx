import { useEffect, useState } from 'react';

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
    <div>
      Наши проекты:
      <div className="flex gap-2">
      {repos.map((repo: any) => (
        <a href={repo.html_url} key={repo.id}>
          <div className="p-2 border grid grid-cols-1 place-items-center border-gray-500 rounded-lg">
            <img src={repo.owner.avatar_url} alt={repo.owner.login} className="w-32 h-32 rounded-lg mr-2" />
            <h3 className="text-lg">{repo.name}</h3>
            <p>{repo.description}</p>
            <p>Последнее обновление: {new Date(repo.updated_at).toLocaleString()}</p>
          </div>
        </a>
      ))}
      </div>
    </div>
  )
}

export default OurProjects