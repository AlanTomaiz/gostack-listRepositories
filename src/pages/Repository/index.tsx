import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logoSVG from '../../assets/logo.svg';
import { Header, RepositoryInfo, Issues } from './styles';

interface RepoParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { repository } = useParams<RepoParams>();

  return (
    <>
      <Header>
        <img src={logoSVG} alt="GitHub Explorer" />
        <Link to="/">
          <FiChevronLeft />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars0.githubusercontent.com/u/26505634?v=4"
            alt="AlanTomaiz"
          />
          <div>
            <strong>AlanTomaiz/gostack-listrepositories</strong>
            <p>Uma descrição qualquer</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1008</strong>
            <span>uma msg</span>
          </li>
          <li>
            <strong>1008</strong>
            <span>uma msg</span>
          </li>
          <li>
            <strong>1008</strong>
            <span>uma msg</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="adededa">
          <div>
            <strong>repo.full_name</strong>
            <p>repo.description</p>
          </div>
          <FiChevronRight />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
