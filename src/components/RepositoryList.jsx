import { RepositoryItem } from "./RepositoryItem";
import { useEffect, useState } from 'react';

const repository = {
  name: "unform",
  description: "Forms in React",
  link: 'https://github.com/unform/unform'
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/orgs/marcelovqvd/repos",)
      .then(response => response.json())
      .then(data => setRepositories(data));
  }, []);

  console.log(repositories)

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>        
      <RepositoryItem repository={repository}/>
      <RepositoryItem repository={repository}/>     
      <RepositoryItem repository={repository}/>
      <RepositoryItem repository={repository}/>
      </ul>
    </section>
  )
}