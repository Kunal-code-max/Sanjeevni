import React, { useState } from 'react';

const AiRecommendations = () => {
  const [disease, setDisease] = useState('');
  const [recommendations, setRecommendations] = useState<string[]>([]);

  const herbRecommendations: { [key: string]: string[] } = {
    'common cold': ['Echinacea', 'Elderberry', 'Thyme', 'Ginger'],
    'headache': ['Lavender', 'Peppermint', 'Feverfew', 'Rosemary'],
    'anxiety': ['Chamomile', 'Lavender', 'Lemon Balm', 'Passionflower'],
    'digestive issues': ['Peppermint', 'Ginger', 'Fennel', 'Chamomile'],
    'insomnia': ['Valerian Root', 'Chamomile', 'Lavender', 'Passionflower']
  };

  const handleSearch = () => {
    const searchTerm = disease.toLowerCase();
    const results = herbRecommendations[searchTerm] || [];
    setRecommendations(results);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">AI Herb Recommendations</h1>
      <div className="mb-6">
        <input
          type="text"
          value={disease}
          onChange={(e) => setDisease(e.target.value)}
          placeholder="Enter a health condition..."
          className="p-2 border rounded-lg mr-2"
        />
        <button
          onClick={handleSearch}
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
        >
          Get Recommendations
        </button>
      </div>
      
      {recommendations.length > 0 ? (
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl mb-4">Recommended Herbs:</h2>
          <ul className="list-disc pl-6">
            {recommendations.map((herb, index) => (
              <li key={index} className="mb-2">{herb}</li>
            ))}
          </ul>
        </div>
      ) : disease && (
        <p className="text-red-500">No recommendations found for this condition.</p>
      )}
    </div>
  );
};

export default AiRecommendations;