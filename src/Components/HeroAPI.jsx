import React, { useState, useEffect } from 'react';

function HeroAPI() {
  const [heroData, setHeroData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const token = '10160141112887644';
        const characterId = Math.floor(Math.random() * 731) + 1;
        const response = await fetch(`/superheroapi/api/${token}/${characterId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setHeroData(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchHeroData();
  }, []);

  return (
    <div>
      <h1>Superhero Information</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {heroData && (
        <div>
          <p>Name: {heroData.name}</p>
          <p>Powerstats:</p>
          <ul>
            {Object.entries(heroData.powerstats).map(([stat, value]) => (
              <li key={stat}>{stat}: {value}</li>
            ))}
          </ul>
          <p>Image:</p>
          <img src={heroData.image.url} alt={heroData.name} style={{ maxWidth: '200px' }} />
        </div>
      )}
    </div>
  );
}

export default HeroAPI;
