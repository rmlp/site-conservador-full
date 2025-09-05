// Arquivo: src/pages/AuthorsPage.jsx

import React, { useState, useEffect } from 'react';
import NavigationButton from '../components/NavigationButton'; // Importa o novo botão

// Componente AuthorCard continua o mesmo...
const AuthorCard = ({ author }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg border border-slate-100 flex flex-col transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl overflow-hidden">
      <div className="p-6 bg-slate-800 text-white">
        <h3 className="text-2xl font-serif">{author.name}</h3>
        <p className="text-sm text-slate-300 font-medium">{author.lifespan}</p>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <blockquote className="border-l-4 border-slate-300 pl-4 italic text-slate-600 mb-6">
          "{author.quote}"
        </blockquote>
        <p className="text-slate-700 text-sm leading-relaxed flex-grow">{author.summary}</p>
        
        {author.works && author.works.length > 0 && (
          <div className="mt-6 pt-4 border-t border-slate-200">
            <h4 className="font-bold text-sm text-slate-800 mb-3">Principais Obras</h4>
            <ul className="space-y-2">
              {author.works.map(work => (
                <li key={work.title} className="text-xs text-slate-600">
                  <span className="font-semibold">{work.title}</span> ({work.year})
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

// Recebe a nova prop "onGoHome"
const AuthorsPage = ({ onGoHome }) => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    fetch('/data/authors.json')
      .then(res => res.json())
      .then(data => setAuthors(data));
  }, []);

  if (authors.length === 0) {
    return <div>Carregando autores...</div>;
  }

  return (
    <div className="py-20">
      <div className="container mx-auto text-center mb-16">
        <h2 className="text-4xl font-serif text-slate-900">Grandes Pensadores Conservadores</h2>
        <p className="text-lg text-slate-600 mt-2 max-w-3xl mx-auto">
          Explore as mentes que moldaram e definiram o pensamento conservador.
        </p>
      </div>
      <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {authors.map((author) => (
          <AuthorCard key={author.id} author={author} />
        ))}
      </div>

      {/* Botão para voltar ao início */}
      <NavigationButton onClick={onGoHome} text="Voltar ao Início" />
    </div>
  );
};

export default AuthorsPage;