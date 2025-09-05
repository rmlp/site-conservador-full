import React from 'react';

const Footer = ({ setCurrentPage }) => (
    <footer className="bg-white border-t border-stone-200">
        <div className="container mx-auto px-6 py-12">
            <div className="grid md:grid-cols-3 gap-8 text-slate-600">
                <div>
                    <h3 className="font-serif text-lg font-bold text-slate-800 mb-3">Pensamento Conservador</h3>
                    <p className="text-sm leading-relaxed">Explorando a tradição, ordem e liberdade através do pensamento que valoriza a sabedoria das gerações passadas.</p>
                </div>
                <div>
                    <h3 className="font-serif text-lg font-bold text-slate-800 mb-3">Explore</h3>
                    <ul className="space-y-2 text-sm">
                        <li><button onClick={() => setCurrentPage('conceito')} className="hover:text-slate-900 transition-colors">Conceito</button></li>
                        <li><button onClick={() => setCurrentPage('principios')} className="hover:text-slate-900 transition-colors">Princípios</button></li>
                        <li><button onClick={() => setCurrentPage('timeline')} className="hover:text-slate-900 transition-colors">Linha do Tempo</button></li>
                        <li><button onClick={() => setCurrentPage('quiz')} className="hover:text-slate-900 transition-colors">Quiz Interativo</button></li>
                        <li><button onClick={() => setCurrentPage('artigos')} className="hover:text-slate-900 transition-colors">Artigos</button></li>
                        <li><button onClick={() => setCurrentPage('autores')} className="hover:text-slate-900 transition-colors">Grandes Pensadores</button></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-serif text-lg font-bold text-slate-800 mb-3">Sobre o Projeto</h3>
                    <p className="text-sm leading-relaxed">Este site foi criado com o objetivo de apresentar o pensamento conservador de forma acessível e interativa, promovendo o entendimento de seus princípios e história.</p>
                </div>
            </div>
        </div>
        <div className="bg-stone-100 border-t border-stone-200">
            <div className="container mx-auto px-6 py-4 text-sm text-slate-500 text-center">
                <p>&copy; {new Date().getFullYear()} Pensamento Conservador. Todos os direitos reservados.</p>
            </div>
        </div>
    </footer>
);

export default Footer;