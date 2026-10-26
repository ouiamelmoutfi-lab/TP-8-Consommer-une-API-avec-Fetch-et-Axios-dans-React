import { useState, useEffect } from 'react';

const titres = [
  'Introduction à l’intelligence artificielle',
  'Apprentissage automatique',
  'Réseaux de neurones',
  'IA avancée',
  'Applications de l’IA'
];

function FetchData() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erreur réseau');
        }
        return response.json();
      })
      .then((data) => setPosts(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Chargement en cours...</p>;
  if (error) return <p>Erreur : {error}</p>;

  return (
    <div>
      <h2>Articles chargés avec fetch()</h2>
      <ul>
        {posts.slice(0, 5).map((post, index) => (
          <li key={post.id}>{titres[index] || post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default FetchData;
