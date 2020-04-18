import React, { useState, useEffect } from "react";
import api from './services/api';

import "./styles.css";

function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    api.get('repositories').then(response => {
      setRepositories(response.data);
    });
  }, []);

  async function handleAddRepository() {
    const response = await api.post('repositories', {
      "title": `Repositório ${Date.now()}`,
      "url": "https://github.com/kayzarosa/NodeJSDesafio01/blob/master/src/app.js",
      "techs": [
        "NodeJS",
        "ReactJS",
        "React Native"
      ]
    });

    const respository = response.data

    setRepositories([...repositories, respository]);
  }

  async function handleRemoveRepository(id) {
    const response = await api.delete(`repositories/${id}`);

    if (response.status === 204) {
      const repositoriesAux = repositories;

      const repositoryIndex = repositories.findIndex(repository => repository.id === id);

      repositoriesAux.splice(repositoryIndex, 1);

      setRepositories([...repositoriesAux]);
    }
  }

  return (
    <div>
      <ul data-testid="repository-list">
        {repositories.map(respository =>
          <li key={respository.id}>
            {respository.title}
            <button onClick={() => handleRemoveRepository(respository.id)}>
              Remover
          </button>
          </li>
        )}
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
