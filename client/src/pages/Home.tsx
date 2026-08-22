
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [health, setHealth] = useState<string>('');
  const [error, setError] = useState<string>('');

  useEffect(() => {
    fetch('http://localhost:5000/api/health')
      .then((res) => res.json())
      .then((data) => setHealth(data.status))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div className="page home-page">
      <h1>Welcome to MessWise</h1>
      <p>Your student mess & kitchen management system.</p>
      <div className="actions">
        <Link to="/signup" className="btn primary">Sign Up</Link>
        <Link to="/signin" className="btn secondary">Sign In</Link>
      </div>
      <div className="health-status">
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}
        {health && <p>Backend health: {health}</p>}
      </div>
    </div>
  );
};

export default Home;
