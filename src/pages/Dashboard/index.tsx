import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoSVG from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => (
  <>
    <img src={logoSVG} alt="GitHub" />
    <Title>Explore repositórios no GitHub</Title>
    <Form>
      <input placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisar</button>
    </Form>
    <Repositories>
      <a href="teste">
        <img
          src="https://avatars1.githubusercontent.com/u/26505634?s=460&u=ae8857317b5c01c3e7cd0e995bb3c3cd9513abf0&v=4"
          alt="Alanderson Tomaiz"
        />
        <div>
          <strong>AlanTomaiz/gostack-listRepositories</strong>
          <p>Getting Started learning ReactJS with Typescript</p>
        </div>
        <FiChevronRight />
      </a>
      <a href="teste">
        <img
          src="https://avatars1.githubusercontent.com/u/26505634?s=460&u=ae8857317b5c01c3e7cd0e995bb3c3cd9513abf0&v=4"
          alt="Alanderson Tomaiz"
        />
        <div>
          <strong>AlanTomaiz/gostack-listRepositories</strong>
          <p>Getting Started learning ReactJS with Typescript</p>
        </div>
        <FiChevronRight />
      </a>
      <a href="teste">
        <img
          src="https://avatars1.githubusercontent.com/u/26505634?s=460&u=ae8857317b5c01c3e7cd0e995bb3c3cd9513abf0&v=4"
          alt="Alanderson Tomaiz"
        />
        <div>
          <strong>AlanTomaiz/gostack-listRepositories</strong>
          <p>Getting Started learning ReactJS with Typescript</p>
        </div>
        <FiChevronRight />
      </a>
      <a href="teste">
        <img
          src="https://avatars1.githubusercontent.com/u/26505634?s=460&u=ae8857317b5c01c3e7cd0e995bb3c3cd9513abf0&v=4"
          alt="Alanderson Tomaiz"
        />
        <div>
          <strong>AlanTomaiz/gostack-listRepositories</strong>
          <p>Getting Started learning ReactJS with Typescript</p>
        </div>
        <FiChevronRight />
      </a>
    </Repositories>
  </>
);

export default Dashboard;
