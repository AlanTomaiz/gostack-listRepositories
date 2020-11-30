import React, { useState, useEffect, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import logoSVG from '../../assets/logo.svg';
import { Title, Form, Error, Repositories } from './styles';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [repository, setRepository] = useState('');
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const localData = localStorage.getItem('@GitHubExplorer:respositories');

    if (localData) {
      return JSON.parse(localData);
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      '@GitHubExplorer:respositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  async function handleGetRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!repository) {
      setInputError('Digite o autor/nome do repositório');
      return;
    }

    try {
      const { data: dataRepository } = await api.get<Repository>(
        `/repos/${repository}`,
      );

      setRepositories([...repositories, dataRepository]);
      setRepository('');
      setInputError('');
    } catch {
      setInputError('Erro na busca pelo repositório');
    }
  }

  return (
    <>
      <img src={logoSVG} alt="GitHub" />
      <Title>Explore repositórios no GitHub</Title>

      <Form hasError={!!inputError} onSubmit={handleGetRepository}>
        <input
          value={repository}
          onChange={(e) => setRepository(e.target.value)}
          placeholder="Digite o nome do repositório"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        {repositories.map((repo) => (
          <a key={repo.full_name} href="teste">
            <img src={repo.owner.avatar_url} alt={repo.owner.login} />
            <div>
              <strong>{repo.full_name}</strong>
              <p>{repo.description}</p>
            </div>
            <FiChevronRight />
          </a>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
