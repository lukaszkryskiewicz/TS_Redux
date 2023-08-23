import { useState } from 'react';
import { useActions } from '../hooks/useActions';

const RepositoriesList: React.FC = () => {
  const [search, setSearch] = useState('');
  const { searchRepositories } = useActions();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchRepositories(search);
    setSearch('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={search} onChange={(e) => setSearch(e.target.value)} />
        <button>Search</button>
      </form>
    </div>
  );
};

export default RepositoriesList;
