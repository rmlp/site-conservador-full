import React, { useState, useEffect } from 'react';
import NavigationButton from '../components/NavigationButton';

const PodcastPage = ({ setCurrentPage }) => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    // Busca os dados do novo arquivo JSON
    fetch('/data/podcasts.json')
      .then(res => res.json())
      .then(data => setEpisodes(data));
  }, []);

  if (episodes.length === 0) {
    return <div>Carregando episódios...</div>;
  }

  return (
    <div className="py-20">
      <div className="container mx-auto text-center mb-16">
        <h2 className="text-4xl font-serif text-slate-900">Podcast</h2>
        <p className="text-lg text-slate-600 mt-2">Ouça as nossas análises e discussões sobre o pensamento conservador.</p>
      </div>
      
      {/* Grid com os episódios */}
      <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {episodes.map((episode) => (
          <div key={episode.id} className="bg-white rounded-lg shadow-lg overflow-hidden border border-slate-100 flex flex-col">
            <img src={episode.coverImage} alt={`Capa do ${episode.title}`} className="w-full h-48 object-cover" onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/E2E8F0/475569?text=Capa' }} />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-serif text-slate-800 mb-2">{episode.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed flex-grow mb-4">{episode.description}</p>
              <audio controls className="w-full mt-auto">
                <source src={episode.audioUrl} type="audio/mpeg" />
                O seu navegador não suporta o elemento de áudio.
              </audio>
            </div>
          </div>
        ))}
      </div>

      <NavigationButton 
        onClick={() => setCurrentPage('livros')} // Navega para a futura página de livros
        text="Ver Livros Infantis" 
      />
    </div>
  );
};

export default PodcastPage;