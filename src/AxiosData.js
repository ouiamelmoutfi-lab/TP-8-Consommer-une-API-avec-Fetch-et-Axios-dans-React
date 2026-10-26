import { useState, useEffect } from 'react';
import axios from 'axios';

const prenoms = ['Ali', 'Omar', 'Sara', 'Salma', 'Amine', 'Nour', 'Youssef', 'Hana', 'Adam', 'Imane'];

function AxiosData() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => setUsers(response.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Chargement en cours...</p>;
  if (error) return <p>Erreur : {error}</p>;

  return (
    <div>
      <h2>Utilisateurs chargés avec axios</h2>
      <ul>
        {users.map((user, index) => {
          const nom = prenoms[index] || user.name;
          const email = prenoms[index] ? `${nom.toLowerCase()}@example.com` : user.email;
          return <li key={user.id}>{nom} – {email}</li>;
        })}
      </ul>
    </div>
  );
}

export default AxiosData;
