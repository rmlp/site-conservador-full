// Arquivo: src/components/Header.jsx

import React, { useState } from 'react';

// Ícones do menu principal
const ConceptIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-2"><path d="M12 2.5a5.5 5.5 0 0 0-5.5 5.5c0 2.23 1.25 4.16 3 5.08V15.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-2.42c1.75-.92 3-2.85 3-5.08A5.5 5.5 0 0 0 12 2.5z"></path><path d="M12 15.5V18.5"></path><path d="M8.5 18.5h7"></path></svg>;
const PrinciplesIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-2"><path d="m12 3-1.41 1.41L16.17 10H4v4h12.17l-5.58 5.59L12 21l8-8-8-8z"></path></svg>;
const TimelineIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>;
const QuizIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-2"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path><path d="M13.4 10.6 12 12l-1.4-1.4"></path><path d="M10.6 13.4 12 12l1.4 1.4"></path><circle cx="12" cy="12" r="10"></circle><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="m2 12h2"></path><path d="m20 12h2"></path><path d="m4.93 19.07 1.41-1.41"></path><path d="m17.66 6.34 1.41-1.41"></path></svg>;
const ArticleIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-2"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4"></path><path d="M16 2v20"></path><path d="M11 7h-1"></path><path d="M11 12h-1"></path><path d="M11 17h-1"></path></svg>;
const AuthorIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>;
const PodcastIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>;
const BookIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>;

// --- Ícones para o menu mobile ---
const MenuIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>;
const XIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>;


const Header = ({ currentPage, setCurrentPage, onGoHome }) => {
    // 1. Novo estado para controlar se o menu mobile está aberto ou fechado
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [ 
        { id: 'conceito', label: 'Conceito', icon: <ConceptIcon /> }, 
        { id: 'principios', label: 'Princípios', icon: <PrinciplesIcon /> }, 
        { id: 'timeline', label: 'Linha do Tempo', icon: <TimelineIcon /> }, 
        { id: 'quiz', label: 'Quiz', icon: <QuizIcon /> }, 
        { id: 'artigos', label: 'Artigos', icon: <ArticleIcon /> }, 
        { id: 'autores', label: 'Autores', icon: <AuthorIcon /> }, 
        { id: 'podcast', label: 'Podcast', icon: <PodcastIcon /> },
        { id: 'livros', label: 'Livros Infantis', icon: <BookIcon /> }
    ];

    // 2. Nova função para fechar o menu mobile sempre que um link é clicado
    const handleMenuClick = (page) => {
        setCurrentPage(page);
        setIsMenuOpen(false);
    };

    return (
        <header className="bg-stone-50/95 backdrop-blur-md shadow-sm sticky top-0 z-40 border-b border-stone-200">
            {/* Navegação Principal */}
            <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
                <button 
                  onClick={onGoHome} 
                  className="text-xl font-serif font-bold text-slate-800 text-left hover:text-slate-600 transition-colors cursor-pointer"
                >
                    Pensamento Conservador
                </button>

                {/* --- MENU DESKTOP (Ecrãs médios e maiores) --- */}
                <ul className="hidden md:flex items-center space-x-1 text-sm font-semibold">
                    {navItems.map(item => {
                        const isActive = currentPage === item.id;
                        return (
                            <li key={item.id}>
                                <button onClick={() => setCurrentPage(item.id)} className={`px-3 py-2 rounded-md flex items-center transition-colors duration-200 ${isActive ? 'bg-slate-800 text-white' : 'text-slate-600 hover:bg-slate-200'}`}>
                                    {item.icon} {item.label}
                                </button>
                            </li>
                        );
                    })}
                </ul>

                {/* --- BOTÃO HAMBÚRGUER (Apenas em ecrãs pequenos) --- */}
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-800">
                        {isMenuOpen ? <XIcon /> : <MenuIcon />}
                    </button>
                </div>
            </nav>

            {/* --- MENU MOBILE (Dropdown que aparece e desaparece) --- */}
            <div className={`transition-all duration-300 ease-in-out md:hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                <ul className="flex flex-col items-start space-y-1 px-6 pb-4">
                    {navItems.map(item => {
                        const isActive = currentPage === item.id;
                        return (
                            <li key={item.id} className="w-full">
                                <button onClick={() => handleMenuClick(item.id)} className={`w-full px-3 py-3 rounded-md flex items-center transition-colors duration-200 text-base ${isActive ? 'bg-slate-800 text-white' : 'text-slate-600 hover:bg-slate-200'}`}>
                                    {item.icon} {item.label}
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </header>
    );
};

export default Header;