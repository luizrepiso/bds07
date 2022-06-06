import './styles.css';

import ResultCard from 'components/ResultCard';
import { useState } from 'react';
import axios from 'axios';

type FormData = {
  users: string;
};

type Information = {
   url: string;
  html_url: string;
  followers: string;
  location: string;
  name: string;
  login: string;
  avatar_url: string;
 
  
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
      <div className="search-container">
        <h1 className="text-light">Encontre um perfil Github</h1>
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
      {information && (
        <ResultCard
          title={information.name}
          description={information.login}
          url={information.avatar_url}
          html_url={information.html_url}
          followers={information.followers}
          location={information.location}
          name={information.name}
        />
      )}
    </div>
  );
};

export default UsersSearch;
