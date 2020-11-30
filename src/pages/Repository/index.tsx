import React from 'react';
import { useParams } from 'react-router-dom';

interface RepoParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { repository } = useParams<RepoParams>();

  return <h1>Hello GitHub:{repository}</h1>;
};

export default Repository;
