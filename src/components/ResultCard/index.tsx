import './styles.css';

type Props = {
  title?: string;
  description?: string;
  url?: string;
  html_url?: string;
  followers?: string;
  location?: string;
  name?: string;
};

const ResultCard = ({ 
  title, description, url, html_url, 
  followers,  
  location, 
  name, }: Props) => {
    

  return (

    <div className="result-container">
      <div className="img-container">
        <img src={url} alt={title} />
      </div>

      <div className="information-container">
        <div>
        <h2 className="information-title">Informações</h2>
        </div>
        <div>
        <h3 className="information-profile">
          Perfil: <a href={html_url}>{html_url}</a>
        </h3>
        </div>
        <div>
        <h3 className="information-followers">
          Seguidores: <span className="info-followers">{followers}</span>
        </h3>
        </div>
        <div>
        <h3 className="information-location">
          Localidade: <span className="info-location">{location}</span>{' '}
        </h3>
        </div>
        <div>
        <h3 className="information-name">
          Nome: <span className="info-name">{name}</span>{' '}
        </h3>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
