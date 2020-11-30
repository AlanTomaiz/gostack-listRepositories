import React, { useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import logoSVG from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

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
  const [repositories, setRepositories] = useState<Repository[]>([]);

  async function handleGetRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    const { data: dataRepository } = await api.get<Repository>(
      `/repos/${repository}`,
    );

    setRepositories([...repositories, dataRepository]);
    setRepository('');
  }

  return (
    <>
      <img src={logoSVG} alt="GitHub" />
      <Title>Explore repositórios no GitHub</Title>
      <Form onSubmit={handleGetRepository}>
        <input
          value={repository}
          onChange={(e) => setRepository(e.target.value)}
          placeholder="Digite o nome do repositório"
        />
        <button type="submit">Pesquisar</button>
      </Form>
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
