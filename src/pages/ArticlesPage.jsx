// Arquivo: src/pages/ArticlesPage.jsx

import React, { useState, useEffect } from 'react';
import NavigationButton from '../components/NavigationButton'; // 1. Importa o botão

// --- Definição dos Ícones ---
const AuthorIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>;
const BookIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>;
const BrazilIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>;
const CaseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>;
const LightbulbIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15.09 16.05A6.47 6.47 0 0 1 12 20a6.47 6.47 0 0 1-3.09-3.95"></path><path d="M12 2v8"></path><path d="M8.5 8.5 4.24 4.24"></path><path d="M15.5 8.5 19.76 4.24"></path><path d="M12 20a2.5 2.5 0 0 1 2.5-2.5V16a2.5 2.5 0 0 1-5 0v1.5A2.5 2.5 0 0 1 12 20z"></path></svg>;
const PolicyIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><line x1="10" y1="9" x2="8" y2="9"></line></svg>;
const ArticleIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4"></path><path d="M16 2v20"></path><path d="M11 7h-1"></path><path d="M11 12h-1"></path><path d="M11 17h-1"></path></svg>;

const getCategoryStyle = (category) => {
    switch(category) {
        case 'Gigantes do Pensamento': return { icon: <AuthorIcon />, color: 'bg-blue-100 text-blue-800' };
        case 'Análise de Obras': return { icon: <BookIcon />, color: 'bg-amber-100 text-amber-800' };
        case 'Conservadorismo no Brasil': return { icon: <BrazilIcon />, color: 'bg-green-100 text-green-800' };
        case 'Conceitos-Chave': return { icon: <LightbulbIcon />, color: 'bg-yellow-100 text-yellow-800' };
        case 'Estudos de Caso': return { icon: <CaseIcon />, color: 'bg-slate-200 text-slate-800' };
        case 'Política e Sociedade': return { icon: <PolicyIcon />, color: 'bg-indigo-100 text-indigo-800' };
        default: return { icon: <ArticleIcon />, color: 'bg-gray-100 text-gray-800' };
    }
};

// 2. RECEBE "setCurrentPage"
const ArticlesPage = ({ onArticleSelected, setCurrentPage }) => {
  const [articles, setArticles] = useState([]);
  const [filter, setFilter] = useState('Todos');

  useEffect(() => {
    fetch('/data/articles.json')
      .then(res => res.json())
      .then(data => setArticles(data));
  }, []);

  const categories = ['Todos', ...new Set(articles.map(a => a.category))];
  const filteredArticles = filter === 'Todos' 
    ? articles 
    : articles.filter(a => a.category === filter);

  if (articles.length === 0) {
    return <div>Carregando artigos...</div>;
  }

  return (
    <div className="py-20">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-4xl font-serif text-slate-900">Artigos e Análises</h2>
        <p className="text-lg text-slate-600 mt-2">Aprofunde o seu conhecimento.</p>
      </div>

      <div className="container mx-auto px-6 mb-12 flex justify-center gap-2 flex-wrap">
        {categories.map(category => (
          <button 
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${filter === category ? 'bg-slate-800 text-white' : 'bg-white text-slate-600 hover:bg-slate-200'}`}
          >
            {category}
          </button>
        ))}
      </div>
      
      <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredArticles.map(article => {
            const { icon, color } = getCategoryStyle(article.category);
            return (
              <div key={article.id} onClick={() => onArticleSelected(article)} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col cursor-pointer transform hover:-translate-y-2 transition-transform duration-300">
                <div className="p-6 flex-grow">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${color} flex-shrink-0`}>
                        <div className="h-6 w-6">{icon}</div>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-semibold text-red-800 uppercase">{article.category}</p>
                      <p className="text-xs text-slate-500">{article.readTime}</p>
                    </div>
                  </div>
                  <h3 className="text-xl font-serif text-slate-800 mt-2">{article.title}</h3>
                  <p className="text-slate-500 italic mt-3 text-sm flex-grow">"{article.quote}"</p>
                </div>
                <div className="p-6 border-t border-slate-100">
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map(tag => (
                      <span key={tag} className="bg-slate-100 text-slate-600 text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            );
        })}
      </div>
      
      {/* 3. ADICIONA O BOTÃO DE NAVEGAÇÃO */}
      <NavigationButton onClick={() => setCurrentPage('autores')} text="Conhecer os Autores" />
    </div>
  );
};

export default ArticlesPage;