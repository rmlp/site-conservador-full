import React, { useState, useEffect } from 'react';
import NavigationButton from '../components/NavigationButton';

// Ícones para os cards da linha do tempo
const UserIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 mr-2 text-blue-800"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>;
const BookIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 mr-2 text-amber-800"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>;
const LightbulbIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 mr-2 text-yellow-800"><path d="M15.09 16.05A6.47 6.47 0 0 1 12 20a6.47 6.47 0 0 1-3.09-3.95"></path><path d="M12 2v8"></path><path d="M8.5 8.5 4.24 4.24"></path><path d="M15.5 8.5 19.76 4.24"></path><path d="M12 20a2.5 2.5 0 0 1 2.5-2.5V16a2.5 2.5 0 0 1-5 0v1.5A2.5 2.5 0 0 1 12 20z"></path></svg>;
const DeceasedIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 ml-2 text-slate-400 inline-block"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>;

// Função para obter o ícone correto com base na categoria do arquivo JSON
const getIcon = (category) => {
    switch(category) {
        case 'Pensador': return <UserIcon />;
        case 'Obra': return <BookIcon />;
        case 'Conceito': return <LightbulbIcon />;
        default: return <UserIcon />;
    }
}

function TimelinePage({ setCurrentPage, onItemSelected }) {
  const [timelineData, setTimelineData] = useState([]);

  useEffect(() => {
    fetch('/data/timeline.json')
      .then(response => response.json())
      .then(data => setTimelineData(data));
  }, []);

  if (timelineData.length === 0) {
    return <div>A carregar a linha do tempo...</div>;
  }

  return (
    <div className="py-20">
      <div className="container mx-auto text-center mb-16">
        <h2 className="text-4xl font-serif text-slate-900">A Arquitetura das Ideias Duradouras</h2>
        <p className="text-lg text-slate-600 mt-2">Uma Linha do Tempo do Pensamento Conservador.</p>
      </div>

      <div className="relative container mx-auto px-6 flex flex-col space-y-8">
        <div className="absolute w-1 bg-slate-200 h-full shadow-md left-1/2 transform -translate-x-1/2"></div>
        {timelineData.map((item, index) => (
          <div key={item.id} className="relative z-10">
            <div className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
              <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}>
                <div className="bg-white p-6 rounded-lg shadow-lg border border-slate-100 transform transition-transform duration-500 hover:scale-105 hover:shadow-xl">
                  <div className="flex items-center mb-2">
                    {getIcon(item.category)}
                    <span className="text-sm font-semibold text-amber-700 uppercase">{item.category}</span>
                  </div>
                  <h3 className="text-2xl font-serif text-slate-800 flex items-center">
                    {item.title}
                    {item.lifespan && !item.lifespan.startsWith('n.') && <DeceasedIcon />}
                  </h3>
                  <p className="text-md font-semibold text-slate-500 mb-3">{item.subtitle}</p>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{item.description}</p>
                  <button onClick={() => onItemSelected(item)} className="font-bold text-sm text-red-800 hover:text-red-600 transition-colors duration-300">
                    Ler mais &rarr;
                  </button>
                </div>
              </div>
              <div className="w-1/2 flex justify-center">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-8 rounded-full bg-white border-4 border-amber-600 shadow-sm flex items-center justify-center font-bold text-slate-700 text-sm">
                  {item.year}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <NavigationButton 
        onClick={() => setCurrentPage('quiz')} 
        text="Testar Conhecimentos no Quiz" 
      />
    </div>
  );
}

export default TimelinePage;