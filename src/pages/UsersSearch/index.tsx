import './styles.css';

import ResultCard from 'components/ResultCard';
import { useState } from 'react';
import axios from 'axios';

type FormData = {
  users: string;
};

type Information = {
  avatar_url: string;
  url: string;
  followers: string;
  location: string;
  name: string;
};

const UsersSearch = () => {
  const [information, setInformation] = useState<Information>();

  const [formData, setFormData] = useState<FormData>({
    users: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    axios
      .get(`https://api.github.com/users/${formData.users}`)
      .then((response) => {
        setInformation(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        setInformation(undefined);
        console.log(error);
      });
  };

  return (
    <div className="users-search-container">
      <div className="container search-container">
        <h1 className="search-text">Encontre um perfil Github</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <input
              type="text"
              name="users"
              value={formData.users}
              className="search-input"
              placeholder="Usuário Github"
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-primary search-button">
              Encontrar
            </button>
          </div>
        </form>
      </div>
      <div className="row information-container">
        { information &&
          <>
            <div><ResultCard title="Informações" description={""} /> </div>
            <div>
              <ResultCard title="Perfil:" description={information.url} />
            </div>
            <div>
              {' '}
              <ResultCard
                title="Seguidores:"
                description={information.followers}
              />
            </div>
            <div>
              <ResultCard
                title="Localidade:"
                description={information.location}
              />
            </div>
            <div>
              <ResultCard title="Nome:" description={information?.name} />
            </div>
          </>
}
        
      </div>
    </div>
  );
};

export default UsersSearch;
